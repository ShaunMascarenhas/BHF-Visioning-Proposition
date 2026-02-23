import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  Sparkles,
  Target,
  Heart,
  ChevronRight,
  Coffee,
} from 'lucide-react'
import { workshopInfo } from '../data/domains'
import GlassCard from '../components/GlassCard'

const iconMap = {
  Users,
  Cpu,
  Shield,
  TrendingUp,
  Sparkles,
  Target,
  Heart,
  Coffee,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Landing() {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative z-10 h-screen overflow-hidden"
    >
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-teal opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-green opacity-15 pointer-events-none" />

      {/* Two-column layout */}
      <div className="h-full flex flex-col lg:flex-row items-stretch px-6 lg:px-12 xl:px-20 pt-24 pb-8 gap-8 lg:gap-12">
        {/* Left Column — Logos, Title, Presenters */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-center"
        >
          {/* Logos */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mb-10"
          >
            <div className="w-48 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/brighthouse-logo.svg`}
                alt="Brighthouse Financial"
                className="h-12"
              />
            </div>
            <div className="text-white/20 text-xl font-light">&times;</div>
            <div className="w-48 flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}images/cg42-logo.svg`}
                alt="cg42"
                className="h-10"
              />
            </div>
          </motion.div>

          {/* Title — left aligned */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-10"
          >
            <span className="text-white">The Structural Forces</span>
            <br />
            <span className="gradient-text">Reshaping Money</span>
            <br />
            <span className="text-white/80">&amp; Human Behavior</span>
          </motion.h1>

          {/* Presenters */}
          <motion.div variants={itemVariants} className="mt-4">
            <h2 className="font-heading text-lg font-semibold text-white/60 mb-5">
              Presenters
            </h2>
            <div className="flex items-start gap-8 md:gap-10">
              {workshopInfo.presenters.map((presenter, i) => (
                <motion.div
                  key={presenter.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 mb-3 mx-auto relative group">
                    {presenter.image ? (
                      <img
                        src={presenter.image}
                        alt={presenter.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-bh-teal/20 to-bh-green/20 flex items-center justify-center">
                        <span className="font-heading text-xl md:text-2xl font-bold text-white/60">
                          {presenter.name[0]}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-heading font-semibold text-white/90 text-sm">
                    {presenter.name}
                  </h3>
                  <p className="text-white/40 text-xs">{presenter.role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Agenda */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex flex-col justify-center max-w-xl"
        >
          <h2 className="font-heading text-2xl font-bold mb-6">
            <span className="gradient-text">Session Agenda</span>
          </h2>

          <div className="space-y-2">
            {workshopInfo.agenda.map((item, i) => {
              const Icon = iconMap[item.icon] || Sparkles
              const isClickable = !!item.link
              return (
                <GlassCard
                  key={i}
                  hover={isClickable}
                  delay={0.5 + i * 0.05}
                  className={`p-3 flex items-center gap-3 ${isClickable ? 'cursor-pointer' : ''} group`}
                  onClick={() => isClickable && navigate(item.link)}
                >
                  <div className="w-14 shrink-0 text-right">
                    <span className="text-xs font-mono text-white/30">{item.time}</span>
                  </div>

                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,176,185,0.08)' }}
                  >
                    <Icon size={14} className="text-bh-teal/70" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-white/90 text-sm leading-tight">
                      {item.label}
                    </h3>
                    {item.description && (
                      <p className="text-white/30 text-xs mt-0.5 truncate">{item.description}</p>
                    )}
                  </div>

                  {isClickable && (
                    <ChevronRight
                      size={14}
                      className="text-white/20 group-hover:text-white/50 transition-colors shrink-0"
                    />
                  )}
                </GlassCard>
              )
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
