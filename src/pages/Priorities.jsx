import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Sparkles,
  Clock,
  ThumbsUp,
  RotateCcw,
  Filter,
} from 'lucide-react'
import { domains } from '../data/domains'
import GlassCard from '../components/GlassCard'
import IdeaCard from '../components/IdeaCard'
import useWorkshopStore from '../store/useWorkshopStore'

export default function Priorities() {
  const ideas = useWorkshopStore((state) => state.ideas)
  const votes = useWorkshopStore((state) => state.votes)
  const cleanedIdeas = useWorkshopStore((state) => state.cleanedIdeas)
  const setCleanedIdeas = useWorkshopStore((state) => state.setCleanedIdeas)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isProcessing, setIsProcessing] = useState(false)
  const [timeHorizon, setTimeHorizon] = useState('all')

  // Get all ideas across domains
  const allIdeas = Object.entries(ideas).flatMap(([domainId, domainIdeas]) =>
    domainIdeas.map((idea) => ({
      ...idea,
      domainId: Number(domainId),
      domain: domains.find((d) => d.id === Number(domainId)),
    }))
  )

  const totalIdeas = allIdeas.length
  const totalVotes = Object.values(votes).filter(Boolean).length

  // Filter ideas
  const filteredIdeas =
    activeFilter === 'all'
      ? allIdeas
      : allIdeas.filter((idea) => idea.domainId === Number(activeFilter))

  // Sort by votes (voted first)
  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    const aVoted = votes[a.id] ? 1 : 0
    const bVoted = votes[b.id] ? 1 : 0
    return bVoted - aVoted
  })

  // AI cleanup simulation
  const handleAICleanup = async (domainId) => {
    setIsProcessing(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const domainIdeas = ideas[domainId] || []
    const cleaned = domainIdeas.map((idea) => ({
      ...idea,
      text: idea.text.trim(),
      cleaned: true,
    }))

    setCleanedIdeas(domainId, cleaned)
    setIsProcessing(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen pt-24 px-6 pb-12"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <Target size={20} className="text-electric-cyan" />
            <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
              Strategic Output
            </p>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Workshop Priorities</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-sm leading-relaxed">
            All ideas contributed across the four domains, organized and ready
            for prioritization. Vote on the ideas you think are most impactful
            for Brighthouse Financial.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          {domains.map((domain) => {
            const count = (ideas[domain.id] || []).length
            return (
              <GlassCard key={domain.id} className="p-4 text-center">
                <p
                  className="font-heading text-2xl font-bold"
                  style={{ color: domain.color }}
                >
                  {count}
                </p>
                <p className="text-white/40 text-xs mt-1">{domain.title}</p>
              </GlassCard>
            )
          })}
        </motion.div>

        {/* Time horizon toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-4 mb-6"
        >
          <Clock size={16} className="text-white/40" />
          <span className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
            Time Horizon
          </span>
          <div className="flex items-center gap-2">
            {['all', '2026-28', '2028-30'].map((horizon) => (
              <button
                key={horizon}
                onClick={() => setTimeHorizon(horizon)}
                className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  background:
                    timeHorizon === horizon
                      ? 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.1))'
                      : 'transparent',
                  color:
                    timeHorizon === horizon
                      ? '#00e5ff'
                      : 'rgba(255,255,255,0.3)',
                  border: `1px solid ${
                    timeHorizon === horizon
                      ? 'rgba(0,229,255,0.3)'
                      : 'rgba(255,255,255,0.1)'
                  }`,
                }}
              >
                {horizon === 'all' ? 'All' : horizon}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Filter bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-8 flex-wrap"
        >
          <Filter size={16} className="text-white/40" />
          <button
            onClick={() => setActiveFilter('all')}
            className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background:
                activeFilter === 'all'
                  ? 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.1))'
                  : 'transparent',
              color:
                activeFilter === 'all'
                  ? '#00e5ff'
                  : 'rgba(255,255,255,0.3)',
              border: `1px solid ${
                activeFilter === 'all'
                  ? 'rgba(0,229,255,0.3)'
                  : 'rgba(255,255,255,0.1)'
              }`,
            }}
          >
            All Domains ({totalIdeas})
          </button>

          {domains.map((domain) => {
            const count = (ideas[domain.id] || []).length
            return (
              <button
                key={domain.id}
                onClick={() => setActiveFilter(String(domain.id))}
                className="px-4 py-1.5 rounded-lg text-xs font-medium transition-all"
                style={{
                  background:
                    activeFilter === String(domain.id)
                      ? `${domain.color}15`
                      : 'transparent',
                  color:
                    activeFilter === String(domain.id)
                      ? domain.color
                      : 'rgba(255,255,255,0.3)',
                  border: `1px solid ${
                    activeFilter === String(domain.id)
                      ? `${domain.color}40`
                      : 'rgba(255,255,255,0.1)'
                  }`,
                }}
              >
                {domain.title} ({count})
              </button>
            )
          })}
        </motion.div>

        {/* AI Cleanup button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8"
        >
          <button
            onClick={() => {
              const domainId =
                activeFilter === 'all' ? null : Number(activeFilter)
              if (domainId) handleAICleanup(domainId)
            }}
            disabled={activeFilter === 'all' || isProcessing}
            className="px-6 py-2.5 rounded-xl text-sm font-heading font-semibold flex items-center gap-2 transition-all disabled:opacity-30"
            style={{
              background:
                'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2))',
              border: '1px solid rgba(139,92,246,0.3)',
              color: '#8b5cf6',
            }}
          >
            {isProcessing ? (
              <>
                <RotateCcw size={14} className="animate-spin" />
                Processing with AI...
              </>
            ) : (
              <>
                <Sparkles size={14} />
                AI Cleanup &amp; Organize
              </>
            )}
          </button>
          {activeFilter === 'all' && (
            <p className="text-white/30 text-xs mt-2">
              Select a specific domain to run AI cleanup
            </p>
          )}
        </motion.div>

        {/* Ideas grid */}
        {sortedIdeas.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <Sparkles size={32} className="text-white/20 mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-white/50 mb-2">
              No ideas yet
            </h3>
            <p className="text-white/30 text-sm">
              Visit each domain page to contribute ideas during the workshop
              exercises.
            </p>
          </GlassCard>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedIdeas.map((idea, i) => (
              <div key={idea.id} className="relative">
                {/* Domain badge */}
                {activeFilter === 'all' && idea.domain && (
                  <div
                    className="absolute -top-2 left-4 px-2 py-0.5 rounded-full text-[10px] font-medium z-10"
                    style={{
                      background: `${idea.domain.color}20`,
                      color: idea.domain.color,
                      border: `1px solid ${idea.domain.color}30`,
                    }}
                  >
                    {idea.domain.title}
                  </div>
                )}
                <IdeaCard
                  idea={idea}
                  domainColor={idea.domain?.color || '#00e5ff'}
                  index={i}
                  showVote
                />
              </div>
            ))}
          </div>
        )}

        {/* Summary section */}
        {totalIdeas > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <GlassCard className="p-8 inline-block">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold gradient-text">
                    {totalIdeas}
                  </p>
                  <p className="text-white/40 text-xs mt-1">Total Ideas</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-vivid-purple">
                    {totalVotes}
                  </p>
                  <p className="text-white/40 text-xs mt-1">Votes Cast</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-hot-pink">
                    {domains.filter((d) => (ideas[d.id] || []).length > 0).length}
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    Domains Covered
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
