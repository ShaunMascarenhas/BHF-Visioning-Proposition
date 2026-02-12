import Anthropic from '@anthropic-ai/sdk'

let anthropic = null
function getAnthropicClient() {
  if (!anthropic && process.env.ANTHROPIC_API_KEY) {
    anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return anthropic
}

const domainContext = {
  1: {
    name: 'The Human Side',
    description:
      'The financial lives people are planning for are longer, more complex, and more anxiety-inducing than ever before. Women are controlling more wealth, a massive generational transfer is underway, and cognitive overload is paralyzing consumers.',
  },
  2: {
    name: 'The Technological Side',
    description:
      'Technology is the primary interface through which consumers experience financial services. AI, real-time expectations, and digital distribution are reshaping how advice is delivered, while trust and data stewardship become competitive advantages.',
  },
  3: {
    name: 'The Market Side',
    description:
      'The economic environment has shifted from predictable to volatile. Interest rates, geopolitical tensions, and fiscal uncertainty are reshaping what insurers can offer and what consumers demand. Record annuity sales reflect demand for guarantees.',
  },
  4: {
    name: 'The Competitive Side',
    description:
      'Simplicity, trust, and product innovation have overtaken features as battlegrounds. Non-traditional players, aggressive M&A, and a structural advisor shortage are compressing competition while consumers discover products through new channels like TikTok.',
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { domainId } = req.query
  const domain = domainContext[domainId]

  if (!domain) {
    return res.status(404).json({ error: 'Domain not found' })
  }

  const ideas = req.body?.ideas || []

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
    const categoryLabels = {
      people: 'People & Culture',
      process: 'Process & Operations',
      product: 'Product & Innovation',
      technology: 'Technology & Data',
      distribution: 'Distribution & Partnerships',
      customer: 'Customer Experience',
    }

    const ideasText = ideas
      .map((idea, i) => {
        const cat = categoryLabels[idea.category] || idea.category || 'Unspecified'
        const horizon = idea.timeHorizon === 'long-term' ? '2028–2030' : '2026–2028'
        return `${i + 1}. "${idea.text}" [Category: ${cat}, Horizon: ${horizon}]`
      })
      .join('\n')

    const message = await client.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: `You are a senior strategic consultant advising Brighthouse Financial, a major life insurance and annuity company. You've been facilitating a workshop on "${domain.name}: ${domain.description}".

Workshop participants have submitted the following raw ideas. Each idea includes the participant's chosen business category and time horizon:

${ideasText}

Please process these ideas as follows:
1. Clean up the language — fix grammar, improve clarity, make each idea concise and actionable
2. Remove duplicates and merge similar ideas
3. Respect the participant's chosen category and time horizon. Only override if clearly mismatched.
4. Add a brief strategic rationale (1 sentence) for why each idea matters

Return your response as a JSON array with this structure:
[
  {
    "originalIndex": 1,
    "cleanedText": "The refined idea text",
    "category": "The business category (use participant's choice)",
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

    let cleanedIdeas
    try {
      const jsonStr = responseText.replace(/^```json?\n?/, '').replace(/\n?```$/, '')
      cleanedIdeas = JSON.parse(jsonStr)
    } catch {
      console.error('Failed to parse AI response:', responseText)
      return res.status(500).json({ error: 'Failed to parse AI response' })
    }

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

    res.json({ cleanedIdeas: processedIdeas })
  } catch (error) {
    console.error('Claude API error:', error.message)
    res.status(500).json({ error: 'AI processing failed: ' + error.message })
  }
}
