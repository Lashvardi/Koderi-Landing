import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { navLinks } from '../../constants/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          backgroundColor: scrolled ? 'rgba(30,30,30,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(60,60,60,0.5)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 no-underline group">
              <Terminal size={20} className="text-vsc-blue" />
              <span className="text-base font-black text-vsc-text-bright tracking-tight">
                კოდერი
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-1.5 text-sm text-vsc-text-muted hover:text-vsc-text-bright bg-transparent border-none cursor-pointer rounded transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('final-cta')}
                className="ml-3 px-5 py-2 text-sm font-bold text-white bg-vsc-blue hover:bg-vsc-blue-light border-none cursor-pointer rounded transition-all duration-200"
              >
                ჩამოტვირთე
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-vsc-text-muted hover:text-vsc-text-bright cursor-pointer bg-transparent border-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="მენიუ"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="fixed inset-y-0 right-0 w-72 bg-surface-2 border-l border-vsc-border z-50 p-6 pt-20 md:hidden"
            >
              <button
                className="absolute top-5 right-5 p-2 text-vsc-text-muted cursor-pointer bg-transparent border-none"
                onClick={() => setMobileOpen(false)}
                aria-label="დახურვა"
              >
                <X size={20} />
              </button>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="text-left text-sm text-vsc-text hover:text-vsc-text-bright hover:bg-surface-3 py-2.5 px-3 cursor-pointer bg-transparent border-none rounded transition-colors duration-150"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollTo('final-cta')}
                  className="mt-4 px-5 py-2.5 text-sm font-bold text-white bg-vsc-blue border-none cursor-pointer rounded"
                >
                  ჩამოტვირთე
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
