import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { featuresGrid } from '../../constants/features'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}

export default function FeaturesGrid() {
  return (
    <section id="features-grid" className="py-24 px-4 sm:px-6 bg-surface-1">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="ფუნქციები" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {featuresGrid.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-surface-2 rounded-lg border border-vsc-border/30 p-6 group hover:border-vsc-border/60 transition-all duration-200"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.accent}12` }}
              >
                <feature.icon size={18} style={{ color: feature.accent }} />
              </div>
              <h3 className="font-bold text-sm text-vsc-text-bright mb-1.5 group-hover:text-vsc-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-vsc-text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
