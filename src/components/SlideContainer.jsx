import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
}

export default function SlideContainer({ slides, domainColor = '#00B0B9' }) {
  const [[currentSlide, direction], setSlide] = useState([0, 0])

  const paginate = useCallback(
    (newDirection) => {
      const nextSlide = currentSlide + newDirection
      if (nextSlide >= 0 && nextSlide < slides.length) {
        setSlide([nextSlide, newDirection])
      }
    },
    [currentSlide, slides.length]
  )

  const goToSlide = (index) => {
    setSlide([index, index > currentSlide ? 1 : -1])
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        paginate(1)
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        paginate(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [paginate])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0"
        >
          {slides[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={() => paginate(-1)}
          disabled={currentSlide === 0}
          className="p-2 rounded-full glass-card transition-all duration-300 disabled:opacity-20 hover:shadow-glow-sm"
          style={{ borderColor: currentSlide > 0 ? `${domainColor}40` : 'transparent' }}
        >
          <ChevronLeft size={20} style={{ color: domainColor }} />
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="slide-dot transition-all duration-300"
              style={
                index === currentSlide
                  ? { width: 24, borderRadius: 4, background: domainColor }
                  : {}
              }
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full glass-card transition-all duration-300 disabled:opacity-20 hover:shadow-glow-sm"
          style={{ borderColor: currentSlide < slides.length - 1 ? `${domainColor}40` : 'transparent' }}
        >
          <ChevronRight size={20} style={{ color: domainColor }} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-24 right-8 z-20 text-white/30 text-sm font-heading">
        {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}
