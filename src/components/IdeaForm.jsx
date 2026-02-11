import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, User } from 'lucide-react'
import useWorkshopStore from '../store/useWorkshopStore'

export default function IdeaForm({ domainId, domainColor = '#00e5ff' }) {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const addIdea = useWorkshopStore((state) => state.addIdea)
  const ideas = useWorkshopStore((state) => state.ideas[domainId] || [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return

    addIdea(domainId, {
      text: text.trim(),
      author: author.trim() || 'Anonymous',
    })

    setText('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Author field */}
        <div className="relative">
          <User
            size={16}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-opacity-50 transition-all"
            style={{ focusBorderColor: domainColor }}
          />
        </div>

        {/* Idea input */}
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your idea for Brighthouse Financial..."
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none transition-all resize-none"
            style={{ focusBorderColor: domainColor }}
          />
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={!text.trim()}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(135deg, ${domainColor}, ${domainColor}80)`,
            boxShadow: text.trim() ? `0 0 30px ${domainColor}30` : 'none',
          }}
        >
          <Send size={16} />
          Submit Idea
        </motion.button>
      </form>

      {/* Success feedback */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-center text-sm flex items-center justify-center gap-2"
            style={{ color: domainColor }}
          >
            <Sparkles size={14} />
            Idea submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live idea count */}
      {ideas.length > 0 && (
        <div className="mt-4 text-center text-white/30 text-xs">
          {ideas.length} idea{ideas.length !== 1 ? 's' : ''} submitted for this domain
        </div>
      )}
    </div>
  )
}
