import { motion } from 'framer-motion'
import { ThumbsUp, Calendar, Tag, Clock } from 'lucide-react'
import useWorkshopStore from '../store/useWorkshopStore'

const CATEGORY_LABELS = {
  people: 'People & Culture',
  process: 'Process & Operations',
  product: 'Product & Innovation',
  technology: 'Technology & Data',
  distribution: 'Distribution & Partnerships',
  customer: 'Customer Experience',
}

const HORIZON_LABELS = {
  'near-term': '2026–2028',
  'long-term': '2028–2030',
}

export default function IdeaCard({
  idea,
  domainColor = '#00e5ff',
  index = 0,
  showVote = false,
}) {
  const votes = useWorkshopStore((state) => state.votes)
  const toggleVote = useWorkshopStore((state) => state.toggleVote)
  const isVoted = votes[idea.id]

  const timeAgo = (timestamp) => {
    const diff = Date.now() - new Date(timestamp).getTime()
    const minutes = Math.floor(diff / 60000)
    if (minutes < 1) return 'just now'
    if (minutes < 60) return `${minutes}m ago`
    return `${Math.floor(minutes / 60)}h ago`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="glass-card glass-card-hover p-4 group"
    >
      {/* Category and time horizon badges */}
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {idea.category && (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
            style={{
              background: `${domainColor}15`,
              color: domainColor,
            }}
          >
            <Tag size={9} />
            {CATEGORY_LABELS[idea.category] || idea.category}
          </span>
        )}
        {idea.timeHorizon && (
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-medium"
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            <Calendar size={9} />
            {HORIZON_LABELS[idea.timeHorizon] || idea.timeHorizon}
          </span>
        )}
      </div>

      <p className="text-white/90 text-sm leading-relaxed mb-3">{idea.text}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-white/30 text-xs">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {timeAgo(idea.timestamp)}
          </span>
        </div>

        {showVote && (
          <button
            onClick={() => toggleVote(idea.id)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs transition-all"
            style={{
              background: isVoted ? `${domainColor}20` : 'transparent',
              color: isVoted ? domainColor : 'rgba(255,255,255,0.3)',
              border: `1px solid ${isVoted ? `${domainColor}40` : 'rgba(255,255,255,0.1)'}`,
            }}
          >
            <ThumbsUp size={12} />
            {isVoted ? 'Voted' : 'Vote'}
          </button>
        )}
      </div>
    </motion.div>
  )
}
