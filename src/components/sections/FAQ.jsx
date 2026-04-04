import SectionHeading from '../ui/SectionHeading'
import AccordionItem from '../ui/AccordionItem'
import { faqItems } from '../../constants/faq'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-surface-1">
      <div className="max-w-2xl mx-auto">
        <SectionHeading title="ხშირად დასმული კითხვები" />

        <div className="bg-surface-2 rounded-lg border border-vsc-border/40 px-6">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
