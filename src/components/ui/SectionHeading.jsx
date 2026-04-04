import { motion } from 'framer-motion'

export default function SectionHeading({
  title,
  subtitle,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`text-center mb-14 ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold text-vsc-text-bright mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg max-w-[540px] mx-auto text-vsc-text-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
