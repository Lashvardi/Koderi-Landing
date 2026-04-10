import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MessageSquare, Star } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

 const testimonials = [
  {
    quote: 'კოდერი საუკეთესო პლატფორმაა დამწყებებისთვის. სწავლების პროცესი იმდენად მარტივი და ინტუიციურია, რომ სტუდენტები პირველივე დღიდან ერთვებიან კოდირებაში.',
    name: 'ლიზა ხულელიძე',
    role: 'ლექტორი',
    initials: 'ლხ',
    accent: '#4ec9b0',
    stars: 5,
  },
  {
    quote: 'როგორც ლექტორმა, ბევრი ინსტრუმენტი ვცადე, მაგრამ კოდერის ქართული ინტერფეისი და ოფლაინ რეჟიმი მას შეუცვლელს ხდის სასწავლო აუდიტორიაში.',
    name: 'ლუკა გუნცაძე',
    role: 'ლექტორი',
    initials: 'ლგ',
    accent: '#007ACC',
    stars: 5,
  },
  {
    quote: 'გაოცებული დავრჩი ამ IDE-ს სიმსუბუქითა და სისწრაფით. როგორც დეველოპერმა, შემიძლია ვთქვა, რომ ბავშვებისთვის კოდირების დასაწყებად იდეალური გარემოა.',
    name: 'ნიკა ხინჩაგაშვილი',
    role: 'დეველოპერი',
    initials: 'ნხ',
    accent: '#ce9178',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-surface-1">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="რას ამბობენ კოდერიზე?" />

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

        {/* Mobile: swiper */}
        <div className="md:hidden">
          <Swiper spaceBetween={14} slidesPerView={1.12}>
            {testimonials.map((t, i) => (
              <SwiperSlide key={t.name} style={{ height: 'auto' }}>
                <TestimonialCard t={t} i={i} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ t, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
      className="rounded-lg overflow-hidden border border-vsc-border/30 h-full flex flex-col transition-all duration-300"
      style={{ backgroundColor: '#1e1e1e' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${t.accent}35`
        e.currentTarget.style.boxShadow = `0 4px 20px ${t.accent}08`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(60,60,60,0.3)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-vsc-border/20" style={{ backgroundColor: '#252526' }}>
        <div className="flex items-center gap-2">
          <MessageSquare size={13} style={{ color: t.accent }} />
          {/* შეცვლილია font-mono -> font-sans უკეთესი ქართული ვიზუალისთვის */}
          <span className="text-[10px] font-sans font-medium text-vsc-text-muted">{t.role}</span>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.stars }).map((_, si) => (
            <Star key={si} size={11} fill="#dcdcaa" color="#dcdcaa" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-vsc-text leading-relaxed text-sm flex-1 mb-5">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-vsc-border/15">
          <div
            /* font-mono ამოღებულია ინიციალებიდან */
            className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold"
            style={{ 
              backgroundColor: `${t.accent}12`, 
              color: t.accent,
              fontFamily: '"Noto Sans Georgian", sans-serif' // გარანტირებული ქართული ფონტი
            }}
          >
            {t.initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-vsc-text-bright leading-tight">{t.name}</p>
            <p className="text-vsc-text-muted text-[11px]">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}