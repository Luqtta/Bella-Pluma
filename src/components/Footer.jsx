import { whatsappDisplayNumber } from '../utils/whatsapp'

export default function Footer() {
  return (
    <footer className="border-t border-bella-mist bg-white py-10 text-bella-ink">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-1 font-extrabold tracking-[0.18em]">
            <span className="rounded-sm bg-bella-yellow px-2 py-1 text-xs text-bella-ink">BELLA</span>
            <span className="rounded-sm bg-bella-purple px-2 py-1 text-xs text-white">PLUMA</span>
          </p>
          <p className="text-sm text-bella-steel">Conforto e bem-estar</p>
        </div>

        <div className="text-sm text-bella-steel">
          <p className="font-semibold text-bella-ink">WhatsApp: {whatsappDisplayNumber}</p>
        </div>
      </div>
    </footer>
  )
}