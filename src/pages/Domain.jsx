import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  ExternalLink,
  Lightbulb,
  BarChart3,
  Newspaper,
  Building2,
  MessageSquarePlus,
} from 'lucide-react'
import { domains } from '../data/domains'
import SlideContainer from '../components/SlideContainer'
import GlassCard from '../components/GlassCard'
import IdeaForm from '../components/IdeaForm'
import IdeaCard from '../components/IdeaCard'
import useWorkshopStore from '../store/useWorkshopStore'

const iconMap = { Users, Cpu, Shield, TrendingUp }

function OverviewSlide({ domain }) {
  const Icon = iconMap[domain.icon] || Users

  return (
    <div className="h-full flex items-center justify-center px-8 py-24 dot-pattern">
      <div className="max-w-5xl w-full">
        {/* Domain header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: `${domain.color}15` }}
          >
            <Icon size={28} style={{ color: domain.color }} />
          </div>
          <div>
            <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
              Domain {domain.id} of 4
            </p>
            <h1
              className="font-heading text-4xl md:text-5xl font-bold"
              style={{ color: domain.color }}
            >
              {domain.title}
            </h1>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Overview text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="font-heading text-2xl font-semibold text-white/90 mb-4">
              {domain.overview.headline}
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              {domain.overview.description}
            </p>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            {domain.overview.keyPoints.map((point, i) => (
              <GlassCard
                key={i}
                delay={0.6 + i * 0.1}
                className="p-4 flex items-start gap-3"
                accentColor={domain.color}
              >
                <Lightbulb
                  size={16}
                  className="shrink-0 mt-0.5"
                  style={{ color: domain.color }}
                />
                <p className="text-white/80 text-sm">{point}</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function FactorsSlide({ domain }) {
  return (
    <div className="h-full flex items-center justify-center px-8 py-24">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
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
          className="font-heading text-3xl font-bold text-white mb-10"
        >
          Factors Shaping{' '}
          <span style={{ color: domain.color }}>{domain.title}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domain.factors.map((factor, i) => (
            <GlassCard
              key={i}
              hover
              delay={0.2 + i * 0.1}
              className="p-6"
              accentColor={domain.color}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-heading font-semibold text-white/90">
                  {factor.name}
                </h3>
              </div>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                {factor.description}
              </p>
              <div
                className="border-t pt-4"
                style={{ borderColor: `${domain.color}15` }}
              >
                <span
                  className="font-heading text-3xl font-bold"
                  style={{ color: domain.color }}
                >
                  {factor.stat}
                </span>
                <p className="text-white/40 text-xs mt-1">
                  {factor.statLabel}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArticlesSlide({ domain }) {
  return (
    <div className="h-full flex items-center justify-center px-8 py-24">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-3"
        >
          <Newspaper size={20} style={{ color: domain.color }} />
          <p className="text-white/40 text-xs font-heading font-medium uppercase tracking-wider">
            In the News
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl font-bold text-white mb-10"
        >
          Headlines &amp; Evidence
        </motion.h2>

        <div className="space-y-5">
          {domain.articles.map((article, i) => (
            <GlassCard
              key={i}
              hover
              delay={0.2 + i * 0.1}
              className="p-6 flex items-start gap-5 group cursor-pointer"
              accentColor={domain.color}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `${domain.color}15` }}
              >
                <ExternalLink size={16} style={{ color: domain.color }} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-medium"
                    style={{ color: domain.color }}
                  >
                    {article.source}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-white/90 mb-2 group-hover:text-white transition-colors">
                  {article.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </GlassCard>
          ))}
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
