import { motion } from 'framer-motion'

export default function GlassCard({
  children,
  className = '',
  hover = false,
  delay = 0,
  accentColor = null,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className={`glass-card ${hover ? 'glass-card-hover' : ''} ${className}`}
      style={
        accentColor
          ? { borderColor: `${accentColor}15` }
          : {}
      }
      {...props}
    >
      {children}
    </motion.div>
  )
}
