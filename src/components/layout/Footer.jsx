import { Globe, MessageCircle, Play, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-surface-0 border-t border-vsc-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 no-underline">
              <Terminal size={18} className="text-vsc-blue" />
              <span className="text-sm font-black text-vsc-text-bright tracking-tight">კოდერი</span>
            </a>
            <p className="text-vsc-text-muted text-xs mt-1.5">&copy; {new Date().getFullYear()} </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 text-xs">

          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-2">
            {[Globe, MessageCircle, Play].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded flex items-center justify-center text-vsc-text-muted hover:text-vsc-text-bright hover:bg-surface-3 no-underline transition-all duration-200"
                aria-label="social"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-vsc-border/30 mt-6 pt-5 text-center text-xs text-vsc-text-muted">
          შექმნილია საქართველოში
        </div>
      </div>
    </footer>
  )
}
