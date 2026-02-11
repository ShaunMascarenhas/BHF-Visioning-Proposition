import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  Sparkles,
  Target,
  ArrowRight,
  ChevronRight,
} from 'lucide-react'
import { domains, workshopInfo } from '../data/domains'
import GlassCard from '../components/GlassCard'

const iconMap = {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  Sparkles,
  Target,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Landing() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 min-h-screen"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-glow-cyan opacity-30 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-purple opacity-20 pointer-events-none" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl relative"
        >
          {/* Logos */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-8 mb-12"
          >
            <div className="glass-card px-6 py-3 rounded-xl">
              <span className="font-heading font-bold text-lg gradient-text">
                Brighthouse Financial
              </span>
            </div>
            <div className="text-white/20 text-2xl font-light">&times;</div>
            <div className="glass-card px-6 py-3 rounded-xl">
              <span className="font-heading font-bold text-lg text-white/80">
                cg42
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">The Structural Forces</span>
            <br />
            <span className="gradient-text">Reshaping Money</span>
            <br />
            <span className="text-white/80">&amp; Human Behavior</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12"
          >
            A Strategic Visioning Workshop
          </motion.p>

          {/* CTA */}
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById('agenda')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-4 rounded-2xl font-heading font-semibold text-sm bg-gradient-to-r from-electric-cyan to-vivid-purple shadow-glow-md hover:shadow-glow-sm transition-all flex items-center gap-2 mx-auto"
          >
            Explore the Agenda
            <ArrowRight size={16} />
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-electric-cyan" />
          </motion.div>
        </motion.div>
      </section>

      {/* Presenters Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-heading text-2xl font-semibold text-white/80 mb-12">
            Your Presenters
          </h2>

          <div className="flex items-center justify-center gap-8 md:gap-16">
            {workshopInfo.presenters.map((presenter, i) => (
              <motion.div
                key={presenter.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-electric-cyan/20 to-vivid-purple/20 border border-white/10 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-heading text-2xl md:text-3xl font-bold text-white/60">
                    {presenter.name[0]}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-white/90">
                  {presenter.name}
                </h3>
                <p className="text-white/40 text-sm">{presenter.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-center mb-4"
          >
            <span className="gradient-text">Session Agenda</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-center mb-16 text-sm"
          >
            Where we will focus today
          </motion.p>

          <div className="space-y-4">
            {workshopInfo.agenda.map((item, i) => {
              const Icon = iconMap[item.icon] || Sparkles
              return (
                <GlassCard
                  key={i}
                  hover
                  delay={i * 0.08}
                  className="p-5 flex items-center gap-5 cursor-pointer group"
                  onClick={() => {
                    if (i >= 1 && i <= 4) navigate(`/domain/${i}`)
                    else if (i === 5) navigate('/priorities')
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        i >= 1 && i <= 4
                          ? `${domains[i - 1].color}15`
                          : 'rgba(0,229,255,0.1)',
                    }}
                  >
                    <Icon
                      size={18}
                      style={{
                        color:
                          i >= 1 && i <= 4
                            ? domains[i - 1].color
                            : '#00e5ff',
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-white/90 text-sm">
                      {item.label}
                    </h3>
                  </div>

                  {(i >= 1 && i <= 4) || i === 5 ? (
                    <ChevronRight
                      size={16}
                      className="text-white/20 group-hover:text-white/50 transition-colors"
                    />
                  ) : null}
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Domains Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold text-center mb-16"
          >
            <span className="gradient-text">Four Domains of Disruption</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {domains.map((domain, i) => {
              const Icon = iconMap[domain.icon] || Sparkles
              return (
                <GlassCard
                  key={domain.id}
                  hover
                  delay={i * 0.1}
                  className="p-8 cursor-pointer group"
                  onClick={() => navigate(`/domain/${domain.id}`)}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${domain.color}15` }}
                  >
                    <Icon size={22} style={{ color: domain.color }} />
                  </div>
                  <h3
                    className="font-heading text-xl font-bold mb-2"
                    style={{ color: domain.color }}
                  >
                    {domain.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {domain.subtitle}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white/30 group-hover:text-white/60 transition-colors text-xs font-medium">
                    <span>Explore domain</span>
                    <ArrowRight size={12} />
                  </div>
                </GlassCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer spacer */}
      <div className="h-24" />
    </motion.div>
  )
}
