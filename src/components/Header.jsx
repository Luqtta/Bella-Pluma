import { useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Contato', href: '#contato' },
]

const headerMessage = 'Ola! Quero falar com a BELLA PLUMA pelo WhatsApp.'

function Logo() {
  return (
    <a href="#inicio" className="inline-flex items-center gap-1 font-extrabold tracking-[0.18em] text-bella-ink">
      <span className="rounded-sm bg-bella-yellow px-2 py-1 text-xs text-bella-ink sm:text-sm">BELLA</span>
      <span className="rounded-sm bg-bella-purple px-2 py-1 text-xs text-white sm:text-sm">PLUMA</span>
    </a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-bella-mist bg-white/95 backdrop-blur">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-bella-steel transition-colors duration-200 hover:text-bella-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message={headerMessage}>Falar no WhatsApp</WhatsAppButton>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-bella-mist bg-white text-bella-ink md:hidden"
          onClick={() => setMenuOpen((state) => !state)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
            {menuOpen ? <path d="M6 6L18 18M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-bella-mist bg-white md:hidden">
          <div className="section-shell flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-bella-ink"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <WhatsAppButton message={headerMessage} className="justify-center">
              Falar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
