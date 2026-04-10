import { motion } from 'framer-motion'
import { Users, GraduationCap, Shield, Save, Globe, BookOpen, FolderKanban, Clock, Check } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const audiences = [
  {
    icon: Users,
    title: 'მშობლებისთვის',
    tag: 'PARENTS',
    description:
      'შექმენით თქვენი შვილისთვის უსაფრთხო ციფრული სივრცე. ყოველგვარი ყურადღების გამფანტველი რეკლამებისა და ინტერნეტის გარეშე — ფოკუსირებული მხოლოდ განვითარებაზე.',
    points: [
      { icon: Shield, text: '100% ოფლაინ — არ მოითხოვს ინტერნეტთან კავშირს' },
      { icon: Save, text: 'ნამუშევრების ავტომატური დაცვა და შენახვა' },
      { icon: Globe, text: 'ინტერფეისი და გაკვეთილები მშობლიურ ენაზე' },
    ],
    accent: '#007ACC',
    terminal: {
      lines: [
        { text: '// 100% უსაფრთხო გარემო', color: '#6A9955' },
        { text: 'const safety = {', color: '#cccccc' },
        { text: '  internet: false,', kv: true, key: 'internet', val: 'false', valColor: '#569cd6' },
        { text: '  ads: false,', kv: true, key: 'ads', val: 'false', valColor: '#569cd6' },
        { text: '  distractions: false,', kv: true, key: 'distractions', val: 'false', valColor: '#569cd6' },
        { text: '  skillsGrowth: true ✓', kv: true, key: 'skillsGrowth', val: 'true', valColor: '#4ec9b0', check: true },
        { text: '}', color: '#cccccc' },
      ],
    },
  },
  {
    icon: GraduationCap,
    title: 'მასწავლებლებისთვის',
    tag: 'TEACHERS',
    description:
      'მართეთ საგაკვეთილო პროცესი მარტივად. ინტეგრირებული ქართული სილაბუსი და მოსწავლეთა მონიტორინგის სისტემა ერთ პროგრამაში.',
    points: [
      { icon: BookOpen, text: 'წინასწარ გამზადებული ინტერაქტიული გაკვეთილები' },
      { icon: FolderKanban, text: 'მოსწავლეთა პროგრესისა და კოდის მონიტორინგი' },
      { icon: Clock, text: 'სწრაფი ინსტალაცია სასკოლო კომპიუტერებზე' },
    ],
    accent: '#4ec9b0',
    terminal: {
      lines: [
        { text: '// კლასის მართვის პანელი', color: '#6A9955' },
        { text: 'const classroom = {', color: '#cccccc' },
        { text: '  students: 30,', kv: true, key: 'students', val: '30', valColor: '#b5cea8' },
        { text: '  curriculum: "ჩაშენებული",', kv: true, key: 'curriculum', val: '"ჩაშენებული"', valColor: '#ce9178' },
        { text: '  setupTime: "მყისიერი",', kv: true, key: 'setupTime', val: '"მყისიერი"', valColor: '#ce9178' },
        { text: '  systemReady: true ✓', kv: true, key: 'systemReady', val: 'true', valColor: '#4ec9b0', check: true },
        { text: '}', color: '#cccccc' },
      ],
    },
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function Audience() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-surface-0 relative overflow-hidden">
      {/* Subtle background glow */}

      <div className="max-w-5xl mx-auto relative">
        <SectionHeading title="ვისთვისაა კოდერი?" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {audiences.map((aud, i) => (
            <motion.div
              key={aud.title}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-lg overflow-hidden border transition-all duration-300"
              style={{ borderColor: `${aud.accent}20`, backgroundColor: '#1e1e1e' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${aud.accent}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${aud.accent}20`
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Title bar — like VS Code tab */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-vsc-border/30" style={{ backgroundColor: '#252526' }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${aud.accent}12` }}
                  >
                    <aud.icon size={16} style={{ color: aud.accent }} />
                  </div>
                  <h3 className="text-base font-bold text-vsc-text-bright">{aud.title}</h3>
                </div>
                <span
                  className="text-[10px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded"
                  style={{ backgroundColor: `${aud.accent}15`, color: aud.accent }}
                >
                  {aud.tag}
                </span>
              </div>

              {/* Content split: left text, right mini code */}
              <div className="flex flex-col lg:flex-row">
                {/* Left: description + bullet points */}
                <div className="flex-1 p-5 lg:pr-3">
                  <p className="text-vsc-text-muted mb-5 leading-relaxed text-sm">
                    {aud.description}
                  </p>

                  <div className="space-y-2.5">
                    {aud.points.map((point) => (
                      <div
                        key={point.text}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <div
                          className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${aud.accent}10` }}
                        >
                          <Check size={12} style={{ color: aud.accent }} />
                        </div>
                        <span className="text-vsc-text">{point.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: mini code block */}
                <div className="lg:w-[240px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-vsc-border/20 p-4 font-mono text-[11px] leading-5" style={{ backgroundColor: '#1a1a1a' }}>
                  {aud.terminal.lines.map((line, li) => (
                    <div key={li}>
                      {line.kv ? (
                        <span>
                          <span className="text-vsc-text-muted">{'  '}</span>
                          <span className="text-[#9cdcfe]">{line.key}</span>
                          <span className="text-vsc-text-muted">: </span>
                          <span style={{ color: line.valColor }}>{line.val}</span>
                          {line.check && <span className="text-vsc-green ml-1">✓</span>}
                          <span className="text-vsc-text-muted">,</span>
                        </span>
                      ) : (
                        <span style={{ color: line.color }}>{line.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
