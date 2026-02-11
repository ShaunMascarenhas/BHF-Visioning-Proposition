import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import Landing from './pages/Landing'
import Domain from './pages/Domain'
import Priorities from './pages/Priorities'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-deep-space relative">
      <ParticleBackground />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/domain/:id" element={<Domain />} />
          <Route path="/priorities" element={<Priorities />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
