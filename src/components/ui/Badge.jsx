import { motion } from 'framer-motion'

export default function Badge({ children, className = '' }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`
        inline-flex items-center gap-2
        px-3.5 py-1.5 rounded-md
        text-xs font-semibold font-mono tracking-wide uppercase
        bg-vsc-blue/10 text-vsc-blue-light
        border border-vsc-blue/20
        ${className}
      `}
    >
      {children}
    </motion.span>
  )
}
