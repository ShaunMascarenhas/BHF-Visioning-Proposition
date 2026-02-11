import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { domains } from '../data/domains'

const navItems = [
  { path: '/', label: 'Home' },
  ...domains.map((d) => ({
    path: `/domain/${d.id}`,
    label: d.title,
    color: d.color,
  })),
  { path: '/priorities', label: 'Priorities' },
]

export default function Navigation() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="glass-card mx-4 mt-4 px-6 py-3 flex items-center justify-between rounded-2xl"
        style={{ background: 'rgba(5, 10, 26, 0.85)', backdropFilter: 'blur(20px)' }}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-electric-cyan to-vivid-purple flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">BF</span>
          </div>
          <span className="font-heading text-sm font-medium text-white/70 hidden md:block">
            Visioning Workshop
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: item.color
                        ? `linear-gradient(135deg, ${item.color}20, ${item.color}10)`
                        : 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(139,92,246,0.1))',
                      border: `1px solid ${item.color || '#00e5ff'}30`,
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </NavLink>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
