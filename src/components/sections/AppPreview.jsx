import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Monitor, Code2, BookOpen } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { previewTabs } from '../../constants/features'

const tabIcons = { home: Monitor, editor: Code2, materials: BookOpen }

const placeholders = {
  home: {
    caption: 'მთავარი გვერდი — აირჩიე მიმართულება და დაიწყე კოდირება',
    label: 'მთავარი',
    accent: '#007ACC',
  },
  editor: {
    caption: 'კოდის რედაქტორი — Monaco Editor ქართული ინტერფეისით',
    label: 'რედაქტორი',
    accent: '#4ec9b0',
  },
  materials: {
    caption: 'მასალები — ჩაშენებული გაკვეთილები ქართულ ენაზე',
    label: 'მასალები',
    accent: '#dcdcaa',
  },
}

export default function AppPreview() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <section className="py-24 px-4 sm:px-6 bg-surface-1">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="შეხედე კოდერის" />

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-8 bg-surface-2 rounded-lg p-1 max-w-fit mx-auto border border-vsc-border/30">
          {previewTabs.map((tab) => {
            const Icon = tabIcons[tab.id]
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border-none cursor-pointer transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-vsc-blue text-white'
                    : 'bg-transparent text-vsc-text-muted hover:text-vsc-text hover:bg-surface-3'
                }`}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Preview window */}
        <div className="rounded-lg overflow-hidden border border-vsc-border/50 ">
          {/* Title bar */}
          <div className="flex items-center px-4 py-2 bg-surface-4 border-b border-vsc-border/40">
            <div className="flex gap-2 w-14">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[11px] text-vsc-text-muted font-mono">
                {placeholders[activeTab].label} — კოდერი
              </span>
            </div>
            <div className="w-14" />
          </div>
          <div className="relative aspect-[16/10] bg-surface-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center dot-grid"
              >
                {/* PLACEHOLDER: Replace with actual screenshots */}
                <div className="text-center p-8">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4 border"
                    style={{
                      borderColor: `${placeholders[activeTab].accent}30`,
                      backgroundColor: `${placeholders[activeTab].accent}08`,
                    }}
                  >
                    {(() => {
                      const Icon = tabIcons[activeTab]
                      return <Icon size={24} style={{ color: placeholders[activeTab].accent }} />
                    })()}
                  </div>
                  <p className="text-vsc-text-muted text-sm font-medium">
                    აპლიკაციის სქრინშოთი
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Status bar */}
          <div className="flex items-center justify-between px-3 py-1 bg-vsc-blue text-white text-[10px] font-mono">
            <span>კოდერი</span>
            <span>{placeholders[activeTab].label}</span>
          </div>
        </div>

        {/* Caption */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="text-center text-vsc-text-muted text-sm mt-5"
          >
            {placeholders[activeTab].caption}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
