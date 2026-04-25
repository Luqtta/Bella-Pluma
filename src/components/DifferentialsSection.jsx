import { differentials } from '../data/differentials'
import SectionHeading from './SectionHeading'

function DifferentialIcon({ icon }) {
  const base = 'h-6 w-6 stroke-current'

  if (icon === 'comfort') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" strokeWidth="1.8">
        <path d="M12 20s-6-3.7-6-9a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 18 11c0 5.3-6 9-6 9Z" />
      </svg>
    )
  }

  if (icon === 'shield') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" strokeWidth="1.8">
        <path d="M12 3 5 6v6c0 4.8 3 8 7 9 4-1 7-4.2 7-9V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }

  if (icon === 'wash') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" strokeWidth="1.8">
        <path d="M4 8h16v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8Z" />
        <path d="M6 8V5h12v3M8 13h8M9 16h6" />
      </svg>
    )
  }

  if (icon === 'chat') {
    return (
      <svg viewBox="0 0 24 24" className={base} fill="none" strokeWidth="1.8">
        <path d="M7 17.2 3 21l1.1-4.5A8 8 0 1 1 20 12a7.9 7.9 0 0 1-.9 3.7" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={base} fill="none" strokeWidth="1.8">
      <path d="M5 12h14M7 8h10M7 16h10" />
      <path d="M4 5h16v14H4z" />
    </svg>
  )
}

export default function DifferentialsSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-shell space-y-10">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Mais seguranca e conforto para sua rotina"
          description="Uma selecao pensada para proteger, simplificar e valorizar o descanso da sua familia."
          centered
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {differentials.map((item) => (
            <article
              key={item.id}
              className="surface-card group p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bella-wa-soft text-bella-wa transition-colors duration-200 group-hover:bg-bella-wa group-hover:text-white">
                <DifferentialIcon icon={item.icon} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-bella-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bella-steel">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
