import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, Calendar, Tag } from 'lucide-react'
import useWorkshopStore from '../store/useWorkshopStore'

const TIME_HORIZONS = [
  { value: 'near-term', label: '2026 – 2028', description: 'Near-term' },
  { value: 'long-term', label: '2028 – 2030', description: 'Long-term' },
]

const CATEGORIES = [
  { value: 'people', label: 'People & Culture' },
  { value: 'process', label: 'Process & Operations' },
  { value: 'product', label: 'Product & Innovation' },
  { value: 'technology', label: 'Technology & Data' },
  { value: 'distribution', label: 'Distribution & Partnerships' },
  { value: 'customer', label: 'Customer Experience' },
]

export default function IdeaForm({ domainId, domainColor = '#00B0B9' }) {
  const [text, setText] = useState('')
  const [timeHorizon, setTimeHorizon] = useState('')
  const [category, setCategory] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const addIdea = useWorkshopStore((state) => state.addIdea)
  const ideas = useWorkshopStore((state) => state.ideas[domainId] || [])

  const canSubmit = text.trim() && timeHorizon && category

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return

    addIdea(domainId, {
      text: text.trim(),
      timeHorizon,
      category,
    })

    setText('')
    setTimeHorizon('')
    setCategory('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Time horizon selector */}
        <div>
          <label className="flex items-center gap-1.5 text-white/40 text-xs font-medium mb-2">
            <Calendar size={12} />
            Time Horizon
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TIME_HORIZONS.map((h) => (
              <button
                key={h.value}
                type="button"
                onClick={() => setTimeHorizon(h.value)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left"
                style={{
                  background:
                    timeHorizon === h.value
                      ? `${domainColor}20`
                      : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${timeHorizon === h.value ? `${domainColor}60` : 'rgba(255,255,255,0.08)'}`,
                  color:
                    timeHorizon === h.value ? domainColor : 'rgba(255,255,255,0.5)',
                }}
              >
                <span className="block text-xs opacity-60">{h.description}</span>
                <span className="block">{h.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Category selector */}
        <div>
          <label className="flex items-center gap-1.5 text-white/40 text-xs font-medium mb-2">
            <Tag size={12} />
            Business Category
          </label>
          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setCategory(c.value)}
                className="px-3 py-2 rounded-xl text-xs font-medium transition-all"
                style={{
                  background:
                    category === c.value
                      ? `${domainColor}20`
                      : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${category === c.value ? `${domainColor}60` : 'rgba(255,255,255,0.08)'}`,
                  color:
                    category === c.value ? domainColor : 'rgba(255,255,255,0.5)',
                }}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Idea input */}
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your idea for Brighthouse Financial..."
            rows={3}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Submit button */}
        <motion.button
          type="submit"
          disabled={!canSubmit}
          whileHover={canSubmit ? { scale: 1.02 } : {}}
          whileTap={canSubmit ? { scale: 0.98 } : {}}
          className="w-full py-3 rounded-xl font-heading font-semibold text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          style={{
            background: `linear-gradient(135deg, ${domainColor}, ${domainColor}80)`,
            boxShadow: canSubmit ? `0 0 30px ${domainColor}30` : 'none',
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
          {ideas.length} idea{ideas.length !== 1 ? 's' : ''} submitted for this
          domain
        </div>
      )}
    </div>
  )
}
