import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target,
  Sparkles,
  Clock,
  ThumbsUp,
  RotateCcw,
  Filter,
  Zap,
  ArrowUpRight,
  Tag,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'
import { domains } from '../data/domains'
import GlassCard from '../components/GlassCard'
import IdeaCard from '../components/IdeaCard'
import useWorkshopStore from '../store/useWorkshopStore'

export default function Priorities() {
  const ideas = useWorkshopStore((state) => state.ideas)
  const votes = useWorkshopStore((state) => state.votes)
  const [activeFilter, setActiveFilter] = useState('all')
  const [isProcessing, setIsProcessing] = useState({})
  const [timeHorizon, setTimeHorizon] = useState('all')
  const [cleanedIdeas, setCleanedIdeas] = useState({})
  const [viewMode, setViewMode] = useState('raw') // 'raw' or 'cleaned'
  const [aiMessage, setAiMessage] = useState('')

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

  // Filter raw ideas
  const filteredIdeas =
    activeFilter === 'all'
      ? allIdeas
      : allIdeas.filter((idea) => idea.domainId === Number(activeFilter))

  // Sort by votes
  const sortedIdeas = [...filteredIdeas].sort((a, b) => {
    const aVoted = votes[a.id] ? 1 : 0
    const bVoted = votes[b.id] ? 1 : 0
    return bVoted - aVoted
  })

  // Get cleaned ideas for display
  const allCleanedIdeas = Object.entries(cleanedIdeas).flatMap(
    ([domainId, ideas]) =>
      ideas.map((idea) => ({
        ...idea,
        domainId: Number(domainId),
        domain: domains.find((d) => d.id === Number(domainId)),
      }))
  )

  const filteredCleanedIdeas =
    activeFilter === 'all'
      ? allCleanedIdeas
      : allCleanedIdeas.filter(
          (idea) => idea.domainId === Number(activeFilter)
        )

  // Apply time horizon filter to cleaned ideas
  const timeFilteredCleanedIdeas =
    timeHorizon === 'all'
      ? filteredCleanedIdeas
      : filteredCleanedIdeas.filter((idea) => {
          if (timeHorizon === '2026-28') return idea.timeHorizon === 'near-term'
          if (timeHorizon === '2028-30') return idea.timeHorizon === 'long-term'
          return true
        })

  // Sort cleaned ideas by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 }
  const sortedCleanedIdeas = [...timeFilteredCleanedIdeas].sort(
    (a, b) =>
      (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3)
  )

  // Group cleaned ideas by category
  const groupedByCategory = sortedCleanedIdeas.reduce((acc, idea) => {
    const cat = idea.category || 'Uncategorized'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(idea)
    return acc
  }, {})

  // AI cleanup via server API
  const handleAICleanup = async (domainId) => {
    setIsProcessing((prev) => ({ ...prev, [domainId]: true }))
    setAiMessage('')

    try {
      const res = await fetch(`/api/ai/cleanup/${domainId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ideas: ideas[domainId] || [] }),
      })
      const data = await res.json()

      if (data.error) {
        setAiMessage(`Error: ${data.error}`)
      } else {
        setCleanedIdeas((prev) => ({
          ...prev,
          [domainId]: data.cleanedIdeas,
        }))
        if (data.message) setAiMessage(data.message)
        setViewMode('cleaned')
      }
    } catch (error) {
      setAiMessage('Failed to connect to AI service. Is the server running?')
    } finally {
      setIsProcessing((prev) => ({ ...prev, [domainId]: false }))
    }
  }

  const handleCleanupAll = async () => {
    for (const domain of domains) {
      if ((ideas[domain.id] || []).length > 0) {
        await handleAICleanup(domain.id)
      }
    }
  }

  const isAnyProcessing = Object.values(isProcessing).some(Boolean)

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
            All ideas contributed across the four domains. Use AI to organize,
            categorize, and prioritize ideas into actionable strategies for
            Brighthouse Financial.
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {domains.map((domain) => {
            const count = (ideas[domain.id] || []).length
            const hasCleaned = (cleanedIdeas[domain.id] || []).length > 0
            return (
              <GlassCard key={domain.id} className="p-4 text-center relative">
                {hasCleaned && (
                  <CheckCircle2
                    size={14}
                    className="absolute top-2 right-2 text-green-400"
                  />
                )}
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

        {/* View mode toggle + AI Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-between flex-wrap gap-4 mb-6"
        >
          {/* View toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('raw')}
              className="px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all"
              style={{
                background:
                  viewMode === 'raw'
                    ? 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.1))'
                    : 'rgba(255,255,255,0.03)',
                color: viewMode === 'raw' ? '#00e5ff' : 'rgba(255,255,255,0.4)',
                border: `1px solid ${
                  viewMode === 'raw'
                    ? 'rgba(0,229,255,0.3)'
                    : 'rgba(255,255,255,0.08)'
                }`,
              }}
            >
              Raw Ideas
            </button>
            <button
              onClick={() => setViewMode('cleaned')}
              disabled={allCleanedIdeas.length === 0}
              className="px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all disabled:opacity-30"
              style={{
                background:
                  viewMode === 'cleaned'
                    ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15))'
                    : 'rgba(255,255,255,0.03)',
                color:
                  viewMode === 'cleaned'
                    ? '#8b5cf6'
                    : 'rgba(255,255,255,0.4)',
                border: `1px solid ${
                  viewMode === 'cleaned'
                    ? 'rgba(139,92,246,0.3)'
                    : 'rgba(255,255,255,0.08)'
                }`,
              }}
            >
              <span className="flex items-center gap-1.5">
                <Sparkles size={12} />
                AI Processed
              </span>
            </button>
          </div>

          {/* AI cleanup buttons */}
          <div className="flex items-center gap-2">
            {activeFilter !== 'all' && (
              <button
                onClick={() => handleAICleanup(Number(activeFilter))}
                disabled={
                  isAnyProcessing ||
                  (ideas[Number(activeFilter)] || []).length === 0
                }
                className="px-4 py-2 rounded-xl text-xs font-heading font-semibold flex items-center gap-2 transition-all disabled:opacity-30"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.15))',
                  border: '1px solid rgba(139,92,246,0.3)',
                  color: '#8b5cf6',
                }}
              >
                {isProcessing[Number(activeFilter)] ? (
                  <>
                    <Loader2 size={12} className="animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Sparkles size={12} />
                    AI Cleanup This Domain
                  </>
                )}
              </button>
            )}
            <button
              onClick={handleCleanupAll}
              disabled={isAnyProcessing || totalIdeas === 0}
              className="px-4 py-2 rounded-xl text-xs font-heading font-semibold flex items-center gap-2 transition-all disabled:opacity-30"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.15))',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00e5ff',
              }}
            >
              {isAnyProcessing ? (
                <>
                  <Loader2 size={12} className="animate-spin" />
                  Processing All...
                </>
              ) : (
                <>
                  <Zap size={12} />
                  AI Cleanup All Domains
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* AI Message */}
        <AnimatePresence>
          {aiMessage && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <div className="glass-card p-3 flex items-center gap-2 text-xs">
                <AlertCircle size={14} className="text-amber-400 shrink-0" />
                <span className="text-white/60">{aiMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Time horizon + domain filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6 mb-6 flex-wrap"
        >
          {/* Time horizon (only for cleaned view) */}
          {viewMode === 'cleaned' && (
            <div className="flex items-center gap-3">
              <Clock size={14} className="text-white/30" />
              {['all', '2026-28', '2028-30'].map((horizon) => (
                <button
                  key={horizon}
                  onClick={() => setTimeHorizon(horizon)}
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
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
                        : 'rgba(255,255,255,0.08)'
                    }`,
                  }}
                >
                  {horizon === 'all' ? 'All' : horizon}
                </button>
              ))}
            </div>
          )}

          {/* Domain filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <Filter size={14} className="text-white/30" />
            <button
              onClick={() => setActiveFilter('all')}
              className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
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
                    : 'rgba(255,255,255,0.08)'
                }`,
              }}
            >
              All ({totalIdeas})
            </button>
            {domains.map((domain) => {
              const count = (ideas[domain.id] || []).length
              return (
                <button
                  key={domain.id}
                  onClick={() => setActiveFilter(String(domain.id))}
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
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
                        : 'rgba(255,255,255,0.08)'
                    }`,
                  }}
                >
                  {domain.title} ({count})
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Content */}
        {viewMode === 'raw' ? (
          /* Raw ideas view */
          sortedIdeas.length === 0 ? (
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
          )
        ) : /* Cleaned / AI-processed view */
        sortedCleanedIdeas.length === 0 ? (
          <GlassCard className="p-12 text-center">
            <Sparkles size={32} className="text-vivid-purple/40 mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-white/50 mb-2">
              No AI-processed ideas yet
            </h3>
            <p className="text-white/30 text-sm">
              Click "AI Cleanup All Domains" above to process workshop ideas
              with Claude.
            </p>
          </GlassCard>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedByCategory).map(
              ([category, categoryIdeas], catIdx) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: catIdx * 0.08 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Tag size={14} className="text-vivid-purple" />
                    <h3 className="font-heading font-semibold text-white/80 text-sm">
                      {category}
                    </h3>
                    <span className="text-white/30 text-xs">
                      ({categoryIdeas.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categoryIdeas.map((idea, i) => (
                      <GlassCard
                        key={idea.id || i}
                        hover
                        delay={i * 0.05}
                        className="p-5"
                        accentColor={idea.domain?.color}
                      >
                        {/* Priority + time horizon badges */}
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase"
                            style={{
                              background:
                                idea.priority === 'high'
                                  ? 'rgba(239,68,68,0.15)'
                                  : idea.priority === 'medium'
                                  ? 'rgba(245,158,11,0.15)'
                                  : 'rgba(107,114,128,0.15)',
                              color:
                                idea.priority === 'high'
                                  ? '#ef4444'
                                  : idea.priority === 'medium'
                                  ? '#f59e0b'
                                  : '#6b7280',
                              border: `1px solid ${
                                idea.priority === 'high'
                                  ? 'rgba(239,68,68,0.3)'
                                  : idea.priority === 'medium'
                                  ? 'rgba(245,158,11,0.3)'
                                  : 'rgba(107,114,128,0.3)'
                              }`,
                            }}
                          >
                            {idea.priority}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                            style={{
                              background:
                                idea.timeHorizon === 'near-term'
                                  ? 'rgba(0,229,255,0.1)'
                                  : 'rgba(139,92,246,0.1)',
                              color:
                                idea.timeHorizon === 'near-term'
                                  ? '#00e5ff'
                                  : '#8b5cf6',
                              border: `1px solid ${
                                idea.timeHorizon === 'near-term'
                                  ? 'rgba(0,229,255,0.2)'
                                  : 'rgba(139,92,246,0.2)'
                              }`,
                            }}
                          >
                            {idea.timeHorizon === 'near-term'
                              ? '2026-2028'
                              : '2028-2030'}
                          </span>
                          {idea.domain && (
                            <span
                              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                              style={{
                                background: `${idea.domain.color}10`,
                                color: idea.domain.color,
                              }}
                            >
                              {idea.domain.title}
                            </span>
                          )}
                        </div>

                        {/* Cleaned text */}
                        <p className="text-white/90 text-sm leading-relaxed mb-3">
                          {idea.cleanedText || idea.text}
                        </p>

                        {/* Rationale */}
                        {idea.rationale && (
                          <div className="flex items-start gap-2 pt-3 border-t border-white/5">
                            <ArrowUpRight
                              size={12}
                              className="text-vivid-purple shrink-0 mt-0.5"
                            />
                            <p className="text-white/40 text-xs leading-relaxed">
                              {idea.rationale}
                            </p>
                          </div>
                        )}
                      </GlassCard>
                    ))}
                  </div>
                </motion.div>
              )
            )}
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
                    {allCleanedIdeas.length}
                  </p>
                  <p className="text-white/40 text-xs mt-1">AI Processed</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-electric-cyan">
                    {Object.keys(groupedByCategory).length}
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    Strategic Themes
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
