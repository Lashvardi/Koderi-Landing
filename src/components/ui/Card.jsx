import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  ...props
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : {}}
      className={`
        bg-surface-2 rounded-lg
        border border-vsc-border/50
        p-6
        transition-all duration-200 ease-out
        ${hover ? 'hover:border-vsc-blue/30 hover:bg-surface-3' : ''}
        ${glow ? 'glow-blue' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}
