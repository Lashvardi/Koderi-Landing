import { motion } from 'framer-motion'
import { UserPlus, Compass, Rocket, ArrowRight } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'დარეგისტრირდი',
    description: 'შექმენი ანგარიში 10 წამში — მხოლოდ სახელი და პაროლი',
    icon: UserPlus,
    color: '#007ACC',
    terminal: {
      title: 'register.sh',
      lines: [
        { prompt: true, text: 'koderi init' },
        { prompt: false, text: '  სახელი: ლუკა', color: '#4ec9b0' },
        { prompt: false, text: '  პაროლი: ••••••', color: '#858585' },
        { prompt: false, text: '✓ ანგარიში შეიქმნა!', color: '#4ec9b0' },
      ],
    },
  },
  {
    number: '02',
    title: 'აირჩიე მიმართულება',
    description: 'Front-End თუ Python? შენ ირჩევ!',
    icon: Compass,
    color: '#4ec9b0',
    terminal: {
      title: 'select.sh',
      lines: [
        { prompt: true, text: 'koderi choose' },
        { prompt: false, text: '  [1] Front-End  ← HTML, CSS, JS', color: '#569cd6' },
        { prompt: false, text: '  [2] Python     ← ისწავლე პითონი', color: '#dcdcaa' },
        { prompt: false, text: '> 1', color: '#4ec9b0' },
      ],
    },
  },
  {
    number: '03',
    title: 'დაიწყე კოდირება',
    description: 'წერე კოდი, გაუშვი ერთი ღილაკით, ისწავლე ნაბიჯ-ნაბიჯ',
    icon: Rocket,
    color: '#dcdcaa',
    terminal: {
      title: 'code.sh',
      lines: [
        { prompt: true, text: 'koderi run index.html' },
        { prompt: false, text: '  ⚡ სერვერი გაშვებულია...', color: '#dcdcaa' },
        { prompt: false, text: '  → localhost:3000', color: '#569cd6' },
        { prompt: false, text: '✓ მზადაა! კოდირება დაიწყო 🚀', color: '#4ec9b0' },
      ],
    },
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-surface-0 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,122,204,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading
          title="როგორ მუშაობს?"
          subtitle="სამი მარტივი ნაბიჯი — და შენ უკვე კოდერი ხარ"
        />

        {/* Desktop layout */}
        <div className="hidden lg:flex items-start gap-3 relative">
          {steps.map((step, i) => (
            <div key={step.number} className="contents">
              {/* Step card */}
              <motion.div
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                className="flex-1"
              >
                {/* Step number badge — static, no animation */}
                <div className="flex justify-center mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-extrabold text-base border-2"
                    style={{
                      color: step.color,
                      borderColor: `${step.color}30`,
                      backgroundColor: `${step.color}08`,
                      boxShadow: `0 0 20px ${step.color}10`,
                    }}
                  >
                    {step.number}
                  </div>
                </div>

                {/* Terminal card */}
                <div
                  className="rounded-lg overflow-hidden border transition-all duration-300"
                  style={{
                    borderColor: `${step.color}20`,
                    backgroundColor: '#1e1e1e',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 24px ${step.color}10, 0 0 48px ${step.color}06`
                    e.currentTarget.style.borderColor = `${step.color}40`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = `${step.color}20`
                  }}
                >
                  {/* Terminal title bar */}
                  <div
                    className="flex items-center gap-2 px-3 py-2 border-b border-vsc-border/30"
                    style={{ backgroundColor: '#252526' }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/70" />
                    </div>
                    <span className="text-[10px] font-mono text-vsc-text-muted ml-1">
                      {step.terminal.title}
                    </span>
                  </div>
                  {/* Terminal content */}
                  <div className="p-4 font-mono text-xs leading-6 min-h-[120px]">
                    {step.terminal.lines.map((line, li) => (
                      <div key={li} className="flex items-center">
                        {line.prompt && (
                          <span className="text-vsc-green mr-2 select-none">$</span>
                        )}
                        <span style={{ color: line.color || '#cccccc' }}>
                          {line.text}
                        </span>
                      </div>
                    ))}
                    {/* Blinking cursor */}
                    <div className="flex items-center mt-0.5">
                      <span className="text-vsc-green mr-2 select-none">$</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'steps(2)' }}
                        className="w-[7px] h-[14px] bg-vsc-text inline-block"
                      />
                    </div>
                  </div>
                </div>

                {/* Text below */}
                <div className="mt-5 text-center px-2">
                  <h3 className="text-vsc-text-bright font-bold text-base mb-2 flex items-center justify-center gap-2">
                    <step.icon size={16} style={{ color: step.color }} />
                    {step.title}
                  </h3>
                  <p className="text-vsc-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Arrow between cards (not after last) */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.2 }}
                  className="flex items-center self-center mt-6 flex-shrink-0"
                >
                  <ArrowRight size={20} className="text-vsc-border" />
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile layout — vertical */}
        <div className="lg:hidden space-y-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Number + title row */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center font-mono font-extrabold text-sm border-2 flex-shrink-0"
                  style={{
                    color: step.color,
                    borderColor: `${step.color}30`,
                    backgroundColor: `${step.color}08`,
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="text-vsc-text-bright font-bold text-base flex items-center gap-2">
                    <step.icon size={15} style={{ color: step.color }} />
                    {step.title}
                  </h3>
                  <p className="text-vsc-text-muted text-xs">{step.description}</p>
                </div>
              </div>

              {/* Terminal card */}
              <div
                className="rounded-lg overflow-hidden border"
                style={{
                  borderColor: `${step.color}20`,
                  backgroundColor: '#1e1e1e',
                }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-1.5 border-b border-vsc-border/30"
                  style={{ backgroundColor: '#252526' }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f57]/70" />
                    <div className="w-2 h-2 rounded-full bg-[#febc2e]/70" />
                    <div className="w-2 h-2 rounded-full bg-[#28c840]/70" />
                  </div>
                  <span className="text-[9px] font-mono text-vsc-text-muted">
                    {step.terminal.title}
                  </span>
                </div>
                <div className="p-3 font-mono text-[11px] leading-5">
                  {step.terminal.lines.map((line, li) => (
                    <div key={li} className="flex items-center">
                      {line.prompt && (
                        <span className="text-vsc-green mr-2 select-none">$</span>
                      )}
                      <span style={{ color: line.color || '#cccccc' }}>
                        {line.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow separator (not after last) */}
              {i < steps.length - 1 && (
                <div className="flex justify-center mt-6">
                  <ArrowRight size={16} className="text-vsc-border rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
