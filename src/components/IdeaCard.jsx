import { motion } from 'framer-motion'
import { ThumbsUp, User, Clock } from 'lucide-react'
import useWorkshopStore from '../store/useWorkshopStore'

export default function IdeaCard({ idea, domainColor = '#00e5ff', index = 0, showVote = false }) {
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
      <p className="text-white/90 text-sm leading-relaxed mb-3">{idea.text}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-white/30 text-xs">
          <span className="flex items-center gap-1">
            <User size={12} />
            {idea.author}
          </span>
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
