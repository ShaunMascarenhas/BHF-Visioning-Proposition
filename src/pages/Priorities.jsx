import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target,
  Sparkles,
  Clock,
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
  const [viewMode, setViewMode] = useState('raw')
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

  // Get all cleaned ideas
  const allCleanedIdeas = Object.entries(cleanedIdeas).flatMap(
    ([domainId, ideas]) =>
      ideas.map((idea) => ({
        ...idea,
        domainId: Number(domainId),
        domain: domains.find((d) => d.id === Number(domainId)),
      }))
  )

  // Sort cleaned ideas by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 }

  // Group cleaned ideas by category
  const getGroupedByCategory = (domainCleanedIdeas) => {
    const sorted = [...domainCleanedIdeas].sort(
      (a, b) =>
        (priorityOrder[a.priority] ?? 3) - (priorityOrder[b.priority] ?? 3)
    )
    return sorted.reduce((acc, idea) => {
      const cat = idea.category || 'Uncategorized'
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(idea)
      return acc
    }, {})
  }

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
    } catch {
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

  // Determine which domains to show
  const visibleDomains =
    activeFilter === 'all'
      ? domains
      : domains.filter((d) => d.id === Number(activeFilter))

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
            <Target size={20} className="text-bhf-teal" />
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

        {/* View mode toggle + AI Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
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
                    ? 'linear-gradient(135deg, rgba(0,176,185,0.15), rgba(0,70,90,0.1))'
                    : 'rgba(255,255,255,0.03)',
                color:
                  viewMode === 'raw' ? '#00B0B9' : 'rgba(255,255,255,0.4)',
                border: `1px solid ${viewMode === 'raw' ? 'rgba(0,176,185,0.3)' : 'rgba(255,255,255,0.08)'}`,
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
                    ? 'linear-gradient(135deg, rgba(0,70,90,0.2), rgba(0,176,185,0.15))'
                    : 'rgba(255,255,255,0.03)',
                color:
                  viewMode === 'cleaned'
                    ? '#00465A'
                    : 'rgba(255,255,255,0.4)',
                border: `1px solid ${viewMode === 'cleaned' ? 'rgba(0,70,90,0.3)' : 'rgba(255,255,255,0.08)'}`,
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
            <button
              onClick={handleCleanupAll}
              disabled={isAnyProcessing || totalIdeas === 0}
              className="px-4 py-2 rounded-xl text-xs font-heading font-semibold flex items-center gap-2 transition-all disabled:opacity-30"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,176,185,0.15), rgba(0,70,90,0.15))',
                border: '1px solid rgba(0,176,185,0.2)',
                color: '#00B0B9',
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

        {/* Filter bar (secondary — collapsible) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex items-center gap-3 mb-8 flex-wrap"
        >
          <Filter size={14} className="text-white/30" />
          <button
            onClick={() => setActiveFilter('all')}
            className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
            style={{
              background:
                activeFilter === 'all'
                  ? 'linear-gradient(135deg, rgba(0,176,185,0.15), rgba(0,70,90,0.1))'
                  : 'transparent',
              color:
                activeFilter === 'all'
                  ? '#00B0B9'
                  : 'rgba(255,255,255,0.3)',
              border: `1px solid ${activeFilter === 'all' ? 'rgba(0,176,185,0.3)' : 'rgba(255,255,255,0.08)'}`,
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
                  border: `1px solid ${activeFilter === String(domain.id) ? `${domain.color}40` : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                {domain.title} ({count})
              </button>
            )
          })}

          {/* Time horizon filter (cleaned view only) */}
          {viewMode === 'cleaned' && (
            <>
              <div className="w-px h-5 bg-white/10 mx-1" />
              <Clock size={14} className="text-white/30" />
              {['all', '2026-28', '2028-30'].map((horizon) => (
                <button
                  key={horizon}
                  onClick={() => setTimeHorizon(horizon)}
                  className="px-3 py-1 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background:
                      timeHorizon === horizon
                        ? 'linear-gradient(135deg, rgba(0,176,185,0.15), rgba(0,70,90,0.1))'
                        : 'transparent',
                    color:
                      timeHorizon === horizon
                        ? '#00B0B9'
                        : 'rgba(255,255,255,0.3)',
                    border: `1px solid ${timeHorizon === horizon ? 'rgba(0,176,185,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  {horizon === 'all' ? 'All Horizons' : horizon}
                </button>
              ))}
            </>
          )}
        </motion.div>

        {/* ─── Content: domain-grouped layout ─── */}
        {totalIdeas === 0 ? (
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
          <div className="space-y-12">
            {visibleDomains.map((domain, domainIdx) => {
              const domainIdeas = (ideas[domain.id] || []).map((idea) => ({
                ...idea,
                domainId: domain.id,
                domain,
              }))
              const domainCleaned = (cleanedIdeas[domain.id] || []).map(
                (idea) => ({
                  ...idea,
                  domainId: domain.id,
                  domain,
                })
              )

              // Apply time horizon filter to cleaned ideas
              const filteredCleaned =
                timeHorizon === 'all'
                  ? domainCleaned
                  : domainCleaned.filter((idea) => {
                      if (timeHorizon === '2026-28')
                        return idea.timeHorizon === 'near-term'
                      if (timeHorizon === '2028-30')
                        return idea.timeHorizon === 'long-term'
                      return true
                    })

              const grouped = getGroupedByCategory(filteredCleaned)
              const hasCleaned = domainCleaned.length > 0
              const ideaCount =
                viewMode === 'raw' ? domainIdeas.length : filteredCleaned.length

              // Sort raw ideas by votes
              const sortedRaw = [...domainIdeas].sort((a, b) => {
                const aVoted = votes[a.id] ? 1 : 0
                const bVoted = votes[b.id] ? 1 : 0
                return bVoted - aVoted
              })

              if (ideaCount === 0 && viewMode === 'cleaned') return null

              return (
                <motion.section
                  key={domain.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: domainIdx * 0.1 }}
                >
                  {/* Domain section header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${domain.color}15` }}
                    >
                      <span
                        className="font-heading text-lg font-bold"
                        style={{ color: domain.color }}
                      >
                        {domain.id}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h2
                        className="font-heading text-xl font-bold"
                        style={{ color: domain.color }}
                      >
                        {domain.title}
                      </h2>
                      <p className="text-white/40 text-xs">
                        {ideaCount} idea{ideaCount !== 1 ? 's' : ''}
                        {hasCleaned && viewMode === 'raw' && (
                          <span className="inline-flex items-center gap-1 ml-2 text-green-400">
                            <CheckCircle2 size={10} />
                            AI processed
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Per-domain AI cleanup button */}
                    {viewMode === 'raw' && domainIdeas.length > 0 && (
                      <button
                        onClick={() => handleAICleanup(domain.id)}
                        disabled={isAnyProcessing}
                        className="px-3 py-1.5 rounded-lg text-[11px] font-heading font-semibold flex items-center gap-1.5 transition-all disabled:opacity-30"
                        style={{
                          background: `${domain.color}10`,
                          border: `1px solid ${domain.color}30`,
                          color: domain.color,
                        }}
                      >
                        {isProcessing[domain.id] ? (
                          <>
                            <Loader2 size={11} className="animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Sparkles size={11} />
                            AI Cleanup
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Domain ideas */}
                  {viewMode === 'raw' ? (
                    domainIdeas.length === 0 ? (
                      <div className="glass-card p-6 text-center">
                        <p className="text-white/30 text-sm">
                          No ideas submitted for this domain yet.
                        </p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {sortedRaw.map((idea, i) => (
                          <IdeaCard
                            key={idea.id}
                            idea={idea}
                            domainColor={domain.color}
                            index={i}
                            showVote
                          />
                        ))}
                      </div>
                    )
                  ) : filteredCleaned.length === 0 ? (
                    <div className="glass-card p-6 text-center">
                      <p className="text-white/30 text-sm">
                        No AI-processed ideas for this domain yet. Click "AI
                        Cleanup" above.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {Object.entries(grouped).map(
                        ([category, categoryIdeas], catIdx) => (
                          <div key={category}>
                            <div className="flex items-center gap-2 mb-3">
                              <Tag
                                size={12}
                                style={{ color: domain.color }}
                              />
                              <h3 className="font-heading font-semibold text-white/70 text-sm">
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
                                  delay={catIdx * 0.05 + i * 0.03}
                                  className="p-5"
                                  accentColor={domain.color}
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
                                            ? 'rgba(0,176,185,0.1)'
                                            : 'rgba(0,70,90,0.1)',
                                        color:
                                          idea.timeHorizon === 'near-term'
                                            ? '#00B0B9'
                                            : '#00465A',
                                        border: `1px solid ${
                                          idea.timeHorizon === 'near-term'
                                            ? 'rgba(0,176,185,0.2)'
                                            : 'rgba(0,70,90,0.2)'
                                        }`,
                                      }}
                                    >
                                      {idea.timeHorizon === 'near-term'
                                        ? '2026–2028'
                                        : '2028–2030'}
                                    </span>
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
                                        className="shrink-0 mt-0.5"
                                        style={{ color: domain.color }}
                                      />
                                      <p className="text-white/40 text-xs leading-relaxed">
                                        {idea.rationale}
                                      </p>
                                    </div>
                                  )}
                                </GlassCard>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* Divider between domains */}
                  {domainIdx < visibleDomains.length - 1 && (
                    <div className="mt-12 border-t border-white/5" />
                  )}
                </motion.section>
              )
            })}
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
                  <p className="font-heading text-3xl font-bold text-bhf-dark-teal">
                    {totalVotes}
                  </p>
                  <p className="text-white/40 text-xs mt-1">Votes Cast</p>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                  <p className="font-heading text-3xl font-bold text-bhf-green">
                    {allCleanedIdeas.length}
                  </p>
                  <p className="text-white/40 text-xs mt-1">AI Processed</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
