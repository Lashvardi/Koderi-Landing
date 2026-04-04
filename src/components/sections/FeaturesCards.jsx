import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import { featureCards } from '../../constants/features'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function FeaturesCards() {
  return (
    <section id="features-cards" className="py-24 px-4 sm:px-6 bg-surface-1 dot-grid">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="რა არის კოდერი?"
          subtitle="ყველაფერი რაც შენს შვილს სჭირდება პროგრამირების დასაწყებად"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {featureCards.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="bg-surface-2 rounded-lg border border-vsc-border/40 p-6 flex items-start gap-4 hover:border-vsc-border transition-all duration-200 group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${feature.accent}15` }}
              >
                <feature.icon size={20} style={{ color: feature.accent }} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-vsc-text-bright mb-1.5 group-hover:text-vsc-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-vsc-text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
