import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

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

// In-memory store for workshop data
const workshopData = {
  ideas: { 1: [], 2: [], 3: [], 4: [] },
  votes: {},
}

// Serve static files in production
app.use(express.static(join(__dirname, '..', 'dist')))

// API Routes
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

  // Broadcast to all connected clients
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
  workshopData.votes = {}
  io.emit('workshopReset')
  res.json({ message: 'Workshop data reset' })
})

// Catch-all for SPA routing in production
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'dist', 'index.html'))
})

// Socket.IO connection handling
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
})
