import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  Heart,
  Target,
  ExternalLink,
  BarChart3,
  Newspaper,
  Building2,
  MessageSquarePlus,
  RefreshCw,
  Loader2,
} from 'lucide-react'
import { domains } from '../data/domains'
import SlideContainer from '../components/SlideContainer'
import GlassCard from '../components/GlassCard'
import IdeaForm from '../components/IdeaForm'
import IdeaCard from '../components/IdeaCard'
import useWorkshopStore from '../store/useWorkshopStore'

const iconMap = { Users, Cpu, Shield, TrendingUp, Heart, Target }

function OverviewSlide({ domain }) {
  const Icon = iconMap[domain.icon] || Users

  return (
    <div className="h-full relative overflow-hidden">
      {/* Background image layer */}
      {domain.heroImage && (
        <div className="absolute inset-0">
          <img
            src={domain.heroImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: domain.heroImage
            ? `linear-gradient(to right, rgba(10,10,15,0.92) 0%, rgba(10,10,15,0.8) 50%, rgba(10,10,15,0.6) 100%)`
            : `linear-gradient(135deg, rgba(10,10,15,1) 0%, rgba(10,10,15,0.95) 50%, rgba(10,10,15,0.9) 100%)`,
        }}
      />

      {/* Subtle color wash from domain */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 70% 50%, ${domain.color}08, transparent 70%)`,
        }}
      />

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 py-24">
        <div className="max-w-5xl w-full mx-auto">
          {/* Domain badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm"
              style={{ background: `${domain.color}20` }}
            >
              <Icon size={20} style={{ color: domain.color }} />
            </div>
            <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
              Domain {domain.id} of 4
            </p>
          </motion.div>

          {/* Big title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            style={{ color: domain.color }}
          >
            {domain.title}
          </motion.h1>

          {/* Big headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-2xl md:text-3xl font-semibold text-white/90 mb-5 leading-snug max-w-4xl"
          >
            {domain.overview.headline}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-white/55 text-lg leading-relaxed max-w-3xl"
          >
            {domain.overview.description}
          </motion.p>
        </div>
      </div>
    </div>
  )
}

function FactorsSlide({ domain }) {
  return (
    <div className="h-full flex items-center justify-center px-8 py-12">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-2"
        >
          <BarChart3 size={20} style={{ color: domain.color }} />
          <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
            Driving Forces
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl font-bold text-white mb-6"
        >
          Factors Shaping{' '}
          <span style={{ color: domain.color }}>{domain.title}</span>
        </motion.h2>

        {/* Clean row layout */}
        <div className="space-y-0">
          {domain.factors.map((factor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group flex items-center border-t border-white/[0.06] last:border-b"
            >
              {/* Left: factor name & description */}
              <div className="flex-1 py-4 pr-8">
                <h3 className="font-heading font-semibold text-white/90 text-xl truncate mb-1">
                  {factor.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed line-clamp-2">
                  {factor.description}
                </p>
              </div>

              {/* Right: stat block */}
              <div
                className="w-48 md:w-64 flex-shrink-0 flex flex-col items-center justify-center py-4 pl-8 border-l border-white/[0.06]"
              >
                <span
                  className="font-heading text-3xl md:text-4xl font-bold leading-none"
                  style={{ color: domain.color }}
                >
                  {factor.stat}
                </span>
                <p className="text-white/35 text-xs mt-2 leading-snug text-center">
                  {factor.statLabel}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArticlesSlide({ domain }) {
  const [liveArticles, setLiveArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchNews = async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/news/${domain.id}`)
      const data = await res.json()
      if (data.articles && data.articles.length > 0) {
        setLiveArticles(data.articles.slice(0, 4))
      }
    } catch {
      // Fall back to static articles
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [domain.id])

  const articles = (liveArticles || domain.articles).slice(0, 4)

  return (
    <div className="h-full flex items-center justify-center px-8 py-24">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-3"
        >
          <div className="flex items-center gap-3">
            <Newspaper size={20} style={{ color: domain.color }} />
            <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
              {liveArticles ? 'Live News' : 'In the News'}
            </p>
          </div>
          <button
            onClick={fetchNews}
            disabled={loading}
            className="flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs transition-colors"
          >
            {loading ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              <RefreshCw size={12} />
            )}
            Refresh
          </button>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl font-bold text-white mb-8"
        >
          Headlines &amp; Evidence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {articles.map((article, i) => {
            const imgUrl = article.imageUrl || article.urlToImage || null
            return (
              <GlassCard
                key={i}
                hover
                delay={0.2 + i * 0.1}
                className="flex flex-col group cursor-pointer h-full overflow-hidden"
                accentColor={domain.color}
                onClick={() => {
                  if (article.url && article.url !== '#') {
                    window.open(article.url, '_blank', 'noopener')
                  }
                }}
              >
                {/* Article image or gradient fallback */}
                <div
                  className="w-full h-32 relative overflow-hidden shrink-0"
                  style={
                    imgUrl
                      ? {}
                      : {
                          background: `linear-gradient(135deg, ${domain.color}25, ${domain.color}08)`,
                        }
                  }
                >
                  {imgUrl ? (
                    <img
                      src={imgUrl}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = `linear-gradient(135deg, ${domain.color}25, ${domain.color}08)`
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper
                        size={32}
                        style={{ color: domain.color }}
                        className="opacity-20"
                      />
                    </div>
                  )}
                  {/* Source badge overlay */}
                  <div className="absolute bottom-2 left-2">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-medium backdrop-blur-md"
                      style={{
                        background: 'rgba(0,0,0,0.6)',
                        color: domain.color,
                      }}
                    >
                      {article.source}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-heading font-semibold text-white/90 text-sm mb-2 group-hover:text-white transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed flex-1">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-white/30 group-hover:text-white/50 transition-colors">
                    <ExternalLink size={10} />
                    <span className="text-[10px]">Read article</span>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function CompaniesSlide({ domain }) {
  return (
    <div className="h-full flex items-center justify-center px-8 py-24">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
        >
          <Building2 size={20} style={{ color: domain.color }} />
          <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
            Innovators
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl font-bold text-white mb-10"
        >
          Companies Building the Future
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domain.companies.map((company, i) => (
            <GlassCard
              key={i}
              hover
              delay={0.2 + i * 0.15}
              className="p-6"
              accentColor={domain.color}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  background: `${domain.color}15`,
                  color: domain.color,
                }}
              >
                {company.category}
              </span>
              <h3 className="font-heading text-lg font-bold text-white/90 mb-2">
                {company.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {company.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExerciseSlide({ domain }) {
  const ideas = useWorkshopStore((state) => state.ideas[domain.id] || [])

  return (
    <div className="h-full flex items-center justify-center px-8 py-24 overflow-y-auto">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
        >
          <MessageSquarePlus size={20} style={{ color: domain.color }} />
          <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
            Your Turn
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl font-bold text-white mb-4"
        >
          Share Your Ideas
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-sm mb-8 max-w-2xl leading-relaxed"
        >
          {domain.exercisePrompt}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submission form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <IdeaForm domainId={domain.id} domainColor={domain.color} />
          </motion.div>

          {/* Live ideas feed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-white/50 text-xs font-heading font-medium uppercase tracking-wider mb-4">
              Live Ideas ({ideas.length})
            </h3>
            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
              {ideas.length === 0 ? (
                <div className="glass-card p-8 text-center">
                  <p className="text-white/30 text-sm">
                    No ideas submitted yet. Be the first!
                  </p>
                </div>
              ) : (
                ideas
                  .slice()
                  .reverse()
                  .map((idea, i) => (
                    <IdeaCard
                      key={idea.id}
                      idea={idea}
                      domainColor={domain.color}
                      index={i}
                    />
                  ))
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Domain() {
  const { id } = useParams()
  const domain = domains.find((d) => d.id === Number(id))

  if (!domain) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/50">Domain not found</p>
      </div>
    )
  }

  const slides = [
    <OverviewSlide key="overview" domain={domain} />,
    <FactorsSlide key="factors" domain={domain} />,
    <ArticlesSlide key="articles" domain={domain} />,
    <CompaniesSlide key="companies" domain={domain} />,
    <ExerciseSlide key="exercise" domain={domain} />,
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10"
    >
      <SlideContainer slides={slides} domainColor={domain.color} />
    </motion.div>
  )
}
