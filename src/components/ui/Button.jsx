import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const base = `inline-flex items-center justify-center gap-2.5 font-bold cursor-pointer border-none ${sizes[size]}`

  const styles = {
    primary: `${base} bg-vsc-blue text-white hover:bg-vsc-blue-light`,
    secondary: `${base} bg-surface-3 text-vsc-text border border-vsc-border hover:bg-surface-4 hover:text-vsc-text-bright`,
    ghost: `${base} bg-transparent text-vsc-text-muted hover:text-vsc-text-bright hover:bg-surface-3`,
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${styles[variant] || styles.primary} ${className}`}
      style={{ transition: 'all 0.2s ease' }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
