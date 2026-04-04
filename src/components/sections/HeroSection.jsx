import { motion } from 'framer-motion'
import { Download, ArrowDown, Check } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import ParticlesBg from '../ui/ParticlesBg'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0, scale: 0.97 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] } },
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 bg-surface-0">
      {/* Particles background */}
      <ParticlesBg />

      {/* Subtle top-left glow */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(0,122,204,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold mt-6 mb-6 text-vsc-text-bright tracking-tight"
              style={{ lineHeight: 1.12 }}
            >
              კოდერი — პირველი ნაბიჯი{' '}
              <span className="text-vsc-blue">პროგრამირებაში</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base lg:text-lg text-vsc-text-muted mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              HTML, CSS, JavaScript და Python — ქართულ ენაზე, ბავშვებისთვის
              შექმნილ მარტივ გარემოში
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Button size="lg">
                <Download size={18} />
                ჩამოტვირთე უფასოდ
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() =>
                  document.getElementById('features-cards')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                გაიგე მეტი
                <ArrowDown size={15} />
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 mt-7 text-xs text-vsc-text-muted justify-center lg:justify-start"
            >
              {['უსაფრთხო', 'ოფლაინ', 'ქართულად'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check size={13} className="text-vsc-green" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Editor mockup with typing animation */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Glow */}
              <div
                className="absolute -inset-6 pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(0,122,204,0.08) 0%, transparent 70%)',
                }}
              />
              {/* Editor window */}
              <div className="relative rounded-lg overflow-hidden border border-vsc-border/60 glow-blue">
                {/* Title bar */}
                <div className="flex items-center px-4 py-2 bg-surface-4 border-b border-vsc-border/40">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-[11px] text-vsc-text-muted font-mono">index.html — კოდერი</span>
                  </div>
                </div>
                {/* Tab bar */}
                <div className="flex bg-surface-2 border-b border-vsc-border/30">
                  <div className="px-4 py-1.5 text-[11px] font-mono text-vsc-text bg-surface-1 border-r border-vsc-border/30 border-t-2 border-t-vsc-blue">
                    index.html
                  </div>
                  <div className="px-4 py-1.5 text-[11px] font-mono text-vsc-text-muted bg-surface-2 border-r border-vsc-border/30">
                    style.css
                  </div>
                </div>
                {/* Editor content */}
                <div className="bg-surface-1 p-4 min-h-[260px]">
                  <div className="font-mono text-[13px] leading-6">
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">1</span>
                      <span><span className="text-vsc-keyword">&lt;!</span><span className="text-vsc-red">DOCTYPE</span> <span className="text-vsc-green">html</span><span className="text-vsc-keyword">&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">2</span>
                      <span><span className="text-vsc-keyword">&lt;html</span> <span className="text-vsc-green">lang</span>=<span className="text-vsc-string">&quot;ka&quot;</span><span className="text-vsc-keyword">&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">3</span>
                      <span className="pl-4"><span className="text-vsc-keyword">&lt;head&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">4</span>
                      <span className="pl-8"><span className="text-vsc-keyword">&lt;title&gt;</span><span className="text-vsc-text">ჩემი გვერდი</span><span className="text-vsc-keyword">&lt;/title&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">5</span>
                      <span className="pl-4"><span className="text-vsc-keyword">&lt;/head&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">6</span>
                      <span className="pl-4"><span className="text-vsc-keyword">&lt;body&gt;</span></span>
                    </div>
                    <div className="flex items-start">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs mt-1">7</span>
                      <span className="pl-8">
                        <span className="text-vsc-keyword">&lt;h1&gt;</span>
                        <span className="text-vsc-text">
                          <TypeAnimation
                            sequence={[
                              'გამარჯობა სამყარო!',
                              2500,
                              'ვსწავლობ კოდერით!',
                              2500,
                              'HTML ძალიან მაგარია!',
                              2500,
                            ]}
                            wrapper="span"
                            speed={40}
                            repeat={Infinity}
                            cursor={true}
                          />
                        </span>
                        <span className="text-vsc-keyword">&lt;/h1&gt;</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">8</span>
                      <span className="pl-4"><span className="text-vsc-keyword">&lt;/body&gt;</span></span>
                    </div>
                    <div className="flex">
                      <span className="w-8 text-right text-vsc-text-muted/50 select-none mr-4 text-xs">9</span>
                      <span><span className="text-vsc-keyword">&lt;/html&gt;</span></span>
                    </div>
                  </div>
                </div>
                {/* Status bar */}
                <div className="flex items-center justify-between px-3 py-1 bg-vsc-blue text-white text-[10px] font-mono">
                  <div className="flex items-center gap-3">
                    <span>Ln 7, Col 24</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>HTML</span>
                    <span>Koderi</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
