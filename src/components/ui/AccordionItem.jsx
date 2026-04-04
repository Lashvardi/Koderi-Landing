import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-vsc-border/40 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-3 py-5 text-left cursor-pointer group bg-transparent border-none transition-colors duration-200 ${
          isOpen ? 'text-vsc-text-bright' : 'text-vsc-text hover:text-vsc-text-bright'
        }`}
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 text-vsc-text-muted"
        >
          <ChevronRight size={16} />
        </motion.span>
        <span className="text-[0.95rem] font-semibold">
          {question}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pl-7 text-vsc-text-muted leading-relaxed text-[0.9rem]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
