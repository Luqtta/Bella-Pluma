import SectionHeading from './SectionHeading'
import WhatsAppButton from './WhatsAppButton'

const aboutMessage = 'Ola! Quero tirar duvidas sobre os produtos da BELLA PLUMA.'

const trustPoints = [
  'Produtos pensados para conforto e protecao',
  'Materiais de qualidade para uso diario',
  'Atendimento rapido e humano pelo WhatsApp',
]

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div className="space-y-7">
          <SectionHeading
            eyebrow="Sobre a BELLA PLUMA"
            title="Conforto e bem-estar com foco no que importa"
            description="A BELLA PLUMA oferece produtos para cama com visual limpo, qualidade real e praticidade para sua rotina."
          />

          <p className="max-w-2xl text-base leading-relaxed text-bella-steel sm:text-lg">
            Nossa linha foi criada para proteger o colchao, melhorar o descanso e manter sua cama sempre agradavel. Cada
            detalhe busca unir toque macio, funcionalidade e confianca.
          </p>

          <ul className="grid gap-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm font-medium text-bella-ink sm:text-base">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-bella-wa-soft text-bella-wa">
                  <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current" aria-hidden="true">
                    <path d="m16.72 5.22-8.35 8.35-4.1-4.1 1.06-1.06 3.04 3.04 7.29-7.29 1.06 1.06Z" />
                  </svg>
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="surface-card p-7 sm:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-bella-steel">Atendimento direto</p>
              <h3 className="mt-2 text-3xl font-extrabold leading-tight text-bella-ink">
                Fale com a equipe e compre em poucos cliques
              </h3>
            </div>

            <div className="rounded-2xl border border-bella-mist bg-bella-cloud p-5">
              <p className="text-sm leading-relaxed text-bella-steel">
                Receba orientacao para escolher o produto ideal e finalize seu pedido diretamente no WhatsApp.
              </p>
            </div>

            <WhatsAppButton message={aboutMessage} className="w-full justify-center">
              Falar com especialista
            </WhatsAppButton>
          </div>
        </aside>
      </div>
    </section>
  )
}