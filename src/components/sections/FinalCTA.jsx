import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import Button from '../ui/Button'
import ParticlesBg from '../ui/ParticlesBg'

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-28 px-4 sm:px-6 overflow-hidden bg-surface-0"
    >
      <ParticlesBg id="particles-cta" />

      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,122,204,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-vsc-text-bright mb-8 tracking-tight"
          style={{ lineHeight: 1.15 }}
        >
          მზადაა? დაიწყე კოდირება დღესვე!
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a href="/კოდერი Setup 1.0.0.exe" download>
            <Button size="lg" className="text-base px-10 py-4">
              <Download size={18} />
              ჩამოტვირთე კოდერი
            </Button>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-vsc-text-muted text-sm mt-6 font-mono"
        >
          Windows 10/11 — მალე macOS-ზეც
        </motion.p>
      </div>
    </section>
  )
}
