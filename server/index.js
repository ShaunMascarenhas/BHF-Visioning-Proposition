import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import Anthropic from '@anthropic-ai/sdk'
import { config } from 'dotenv'

config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
  },
})

app.use(cors())
app.use(express.json())

// Anthropic client (lazy initialization)
let anthropic = null
function getAnthropicClient() {
  if (!anthropic && process.env.ANTHROPIC_API_KEY) {
    anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return anthropic
}

// In-memory store for workshop data
const workshopData = {
  ideas: { 1: [], 2: [], 3: [], 4: [] },
  cleanedIdeas: { 1: [], 2: [], 3: [], 4: [] },
  votes: {},
}

// Domain context for AI and news matching
const domainContext = {
  1: {
    name: 'The Human Side',
    keywords: 'wealth transfer generational inheritance women financial decision longevity retirement anxiety cognitive overload financial planning consumer behavior insurance annuity',
    description: 'The financial lives people are planning for are longer, more complex, and more anxiety-inducing than ever before. Women are controlling more wealth, a massive generational transfer is underway, and cognitive overload is paralyzing consumers.',
  },
  2: {
    name: 'The Technological Side',
    keywords: 'artificial intelligence AI financial advisor digital distribution personalization trust data privacy fintech insurance technology automation robo-advisor',
    description: 'Technology is the primary interface through which consumers experience financial services. AI, real-time expectations, and digital distribution are reshaping how advice is delivered, while trust and data stewardship become competitive advantages.',
  },
  3: {
    name: 'The Market Side',
    keywords: 'interest rates volatility annuity sales RILA indexed annuity geopolitical uncertainty insurance guarantees private credit alternative assets macro economy',
    description: 'The economic environment has shifted from predictable to volatile. Interest rates, geopolitical tensions, and fiscal uncertainty are reshaping what insurers can offer and what consumers demand. Record annuity sales reflect demand for guarantees.',
  },
  4: {
    name: 'The Competitive Side',
    keywords: 'financial advisor shortage insurtech consolidation M&A RILA product innovation distribution simplicity trust TikTok FinTok annuity competition insurance',
    description: 'Simplicity, trust, and product innovation have overtaken features as battlegrounds. Non-traditional players, aggressive M&A, and a structural advisor shortage are compressing competition while consumers discover products through new channels like TikTok.',
  },
}

// Serve static files in production
app.use(express.static(join(__dirname, '..', 'dist')))

// ─── API Routes ───────────────────────────────────────────────

app.get('/api/ideas', (req, res) => {
  res.json(workshopData.ideas)
})

app.get('/api/ideas/:domainId', (req, res) => {
  const { domainId } = req.params
  res.json(workshopData.ideas[domainId] || [])
})

app.post('/api/ideas/:domainId', (req, res) => {
  const { domainId } = req.params
  const { text, author } = req.body

  if (!text?.trim()) {
    return res.status(400).json({ error: 'Idea text is required' })
  }

  const idea = {
    id: Date.now() + Math.random(),
    text: text.trim(),
    author: author?.trim() || 'Anonymous',
    timestamp: new Date().toISOString(),
    domainId: Number(domainId),
  }

  if (!workshopData.ideas[domainId]) {
    workshopData.ideas[domainId] = []
  }
  workshopData.ideas[domainId].push(idea)

  io.emit('newIdea', { domainId: Number(domainId), idea })
  res.status(201).json(idea)
})

app.post('/api/votes/:ideaId', (req, res) => {
  const { ideaId } = req.params
  workshopData.votes[ideaId] = !workshopData.votes[ideaId]

  io.emit('voteUpdate', {
    ideaId,
    voted: workshopData.votes[ideaId],
  })

  res.json({ ideaId, voted: workshopData.votes[ideaId] })
})

app.post('/api/reset', (req, res) => {
  workshopData.ideas = { 1: [], 2: [], 3: [], 4: [] }
  workshopData.cleanedIdeas = { 1: [], 2: [], 3: [], 4: [] }
  workshopData.votes = {}
  io.emit('workshopReset')
  res.json({ message: 'Workshop data reset' })
})

// ─── News API ─────────────────────────────────────────────────

app.get('/api/news/:domainId', async (req, res) => {
  const { domainId } = req.params
  const domain = domainContext[domainId]

  if (!domain) {
    return res.status(404).json({ error: 'Domain not found' })
  }

  const apiKey = process.env.NEWS_API_KEY
  if (!apiKey) {
    return res.status(200).json({
      articles: [],
      message: 'NEWS_API_KEY not configured. Add it to .env to enable live news.',
    })
  }

  try {
    // Build a targeted search query for this domain intersecting with finance
    const searchQueries = {
      1: '("wealth transfer" OR "women investors" OR "financial anxiety" OR longevity) AND (insurance OR annuity OR "financial planning")',
      2: '("artificial intelligence" OR "AI advisor" OR "digital distribution") AND (insurance OR annuity OR "financial services")',
      3: '("annuity sales" OR "interest rates" OR "market volatility" OR RILA) AND (insurance OR "life insurance" OR annuity)',
      4: '("advisor shortage" OR insurtech OR "product innovation" OR FinTok) AND (insurance OR annuity OR "financial services")',
    }

    const query = searchQueries[domainId] || domain.keywords
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=relevancy&pageSize=5&language=en&apiKey=${apiKey}`

    const response = await fetch(url)
    const data = await response.json()

    if (data.status !== 'ok') {
      throw new Error(data.message || 'News API error')
    }

    const articles = (data.articles || []).map((article) => ({
      title: article.title,
      source: article.source?.name || 'Unknown',
      url: article.url,
      summary: article.description || '',
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
    }))

    res.json({ articles })
  } catch (error) {
    console.error('News API error:', error.message)
    res.status(200).json({
      articles: [],
      message: 'Unable to fetch news articles. Using fallback content.',
    })
  }
})

// ─── Claude AI Cleanup ───────────────────────────────────────

app.post('/api/ai/cleanup/:domainId', async (req, res) => {
  const { domainId } = req.params
  const domain = domainContext[domainId]
  // Use ideas from request body (client-side store) if server store is empty
  const ideas = (req.body?.ideas?.length > 0 ? req.body.ideas : workshopData.ideas[domainId]) || []

  if (ideas.length === 0) {
    return res.status(400).json({ error: 'No ideas to process for this domain' })
  }

  const client = getAnthropicClient()
  if (!client) {
    return res.status(200).json({
      cleanedIdeas: ideas.map((idea) => ({
        ...idea,
        cleaned: true,
        cleanedText: idea.text,
        category: 'Uncategorized',
        timeHorizon: 'near-term',
      })),
      message: 'ANTHROPIC_API_KEY not configured. Returning ideas without AI processing.',
    })
  }

  try {
    const ideasText = ideas
      .map((idea, i) => `${i + 1}. "${idea.text}" (by ${idea.author})`)
      .join('\n')

    const message = await client.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: `You are a senior strategic consultant advising Brighthouse Financial, a major life insurance and annuity company. You've been facilitating a workshop on "${domain.name}: ${domain.description}".

Workshop participants have submitted the following raw ideas for what Brighthouse Financial should do in response to this domain:

${ideasText}

Please process these ideas as follows:
1. Clean up the language — fix grammar, improve clarity, make each idea concise and actionable
2. Remove duplicates and merge similar ideas
3. Categorize each idea into a strategic theme (e.g., "Product Innovation", "Customer Experience", "Partnerships", "Digital Transformation", "Distribution", "Brand & Trust", etc.)
4. Assign a time horizon: "near-term" (2026-2028) for quick wins and immediate actions, or "long-term" (2028-2030) for bigger bets and strategic shifts
5. Add a brief strategic rationale (1 sentence) for why each idea matters

Return your response as a JSON array with this structure:
[
  {
    "originalIndex": 1,
    "cleanedText": "The refined idea text",
    "category": "Strategic Theme",
    "timeHorizon": "near-term" or "long-term",
    "rationale": "Why this matters for Brighthouse Financial",
    "priority": "high" or "medium" or "low"
  }
]

Return ONLY the JSON array, no other text.`,
        },
      ],
    })

    const responseText = message.content[0].text.trim()

    // Parse the JSON response
    let cleanedIdeas
    try {
      // Handle case where response might be wrapped in markdown code block
      const jsonStr = responseText.replace(/^```json?\n?/, '').replace(/\n?```$/, '')
      cleanedIdeas = JSON.parse(jsonStr)
    } catch {
      console.error('Failed to parse AI response:', responseText)
      return res.status(500).json({ error: 'Failed to parse AI response' })
    }

    // Merge AI output with original idea data
    const processedIdeas = cleanedIdeas.map((cleaned) => {
      const original = ideas[cleaned.originalIndex - 1] || ideas[0]
      return {
        ...original,
        cleaned: true,
        cleanedText: cleaned.cleanedText,
        category: cleaned.category,
        timeHorizon: cleaned.timeHorizon,
        rationale: cleaned.rationale,
        priority: cleaned.priority,
      }
    })

    workshopData.cleanedIdeas[domainId] = processedIdeas
    io.emit('ideasCleaned', { domainId: Number(domainId), ideas: processedIdeas })

    res.json({ cleanedIdeas: processedIdeas })
  } catch (error) {
    console.error('Claude API error:', error.message)
    res.status(500).json({ error: 'AI processing failed: ' + error.message })
  }
})

// Get cleaned ideas
app.get('/api/ai/cleaned/:domainId', (req, res) => {
  const { domainId } = req.params
  res.json(workshopData.cleanedIdeas[domainId] || [])
})

// Get all cleaned ideas
app.get('/api/ai/cleaned', (req, res) => {
  res.json(workshopData.cleanedIdeas)
})

// ─── Catch-all for SPA routing ────────────────────────────────

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'dist', 'index.html'))
})

// ─── Socket.IO ────────────────────────────────────────────────

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`)

  // Send current state to newly connected client
  socket.emit('syncState', workshopData)

  socket.on('submitIdea', ({ domainId, text, author }) => {
    const idea = {
      id: Date.now() + Math.random(),
      text: text.trim(),
      author: author?.trim() || 'Anonymous',
      timestamp: new Date().toISOString(),
      domainId: Number(domainId),
    }

    if (!workshopData.ideas[domainId]) {
      workshopData.ideas[domainId] = []
    }
    workshopData.ideas[domainId].push(idea)

    io.emit('newIdea', { domainId: Number(domainId), idea })
  })

  socket.on('toggleVote', ({ ideaId }) => {
    workshopData.votes[ideaId] = !workshopData.votes[ideaId]
    io.emit('voteUpdate', { ideaId, voted: workshopData.votes[ideaId] })
  })

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`)
  })
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Workshop server running on port ${PORT}`)
  console.log(`  News API: ${process.env.NEWS_API_KEY ? 'configured' : 'not configured (add NEWS_API_KEY to .env)'}`)
  console.log(`  Claude AI: ${process.env.ANTHROPIC_API_KEY ? 'configured' : 'not configured (add ANTHROPIC_API_KEY to .env)'}`)
})
