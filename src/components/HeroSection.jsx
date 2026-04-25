import WhatsAppButton from './WhatsAppButton'

const heroMessage = 'Ola! Tenho interesse no Protetor de Colchao Impermeavel Bella Pluma.'

const seals = ['Impermeavel', 'Lavavel em maquina', 'Toque macio', 'Atendimento pelo WhatsApp']

const metrics = [
  { value: 'Percal 200 fios', label: 'Toque premium' },
  { value: 'Impermeavel', label: 'Protecao real' },
]

export default function HeroSection() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-white bg-hero-radial pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="absolute -left-20 top-20 h-56 w-56 rounded-full bg-bella-wa/12 blur-3xl" aria-hidden />
      <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-bella-wa/15 blur-3xl" aria-hidden />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8">
          <span className="inline-flex rounded-full border border-bella-mist bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-bella-steel">
            Conforto, protecao e praticidade
          </span>

          <div className="space-y-5">
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-bella-ink sm:text-5xl lg:text-6xl">
              Protecao e conforto para noites mais tranquilas
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-bella-steel sm:text-lg">
              Produtos de cama pensados para proteger seu colchao, aumentar o conforto e deixar sua rotina mais
              pratica.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton message={heroMessage}>Comprar pelo WhatsApp</WhatsAppButton>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full border border-bella-mist bg-white px-6 py-3 text-sm font-semibold text-bella-ink transition-colors duration-200 hover:bg-bella-cloud sm:text-base"
            >
              Ver produtos
            </a>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {seals.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-bella-mist bg-white px-4 py-3 text-sm font-semibold text-bella-ink shadow-soft"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-bella-wa-soft text-bella-wa">
                  <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="m16.72 5.22-8.35 8.35-4.1-4.1 1.06-1.06 3.04 3.04 7.29-7.29 1.06 1.06Z" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="surface-card overflow-hidden p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80"
                alt="Cama limpa com enxoval branco e travesseiros"
                className="h-[390px] w-full object-cover sm:h-[450px]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/90">BELLA PLUMA</p>
                <p className="mt-1 text-2xl font-extrabold">Cuidado real para sua cama</p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-4 right-4 grid gap-3 rounded-2xl border border-bella-mist bg-white p-4 shadow-soft sm:grid-cols-2 sm:left-8 sm:right-8">
            {metrics.map((item) => (
              <div key={item.value}>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-bella-steel">{item.label}</p>
                <p className="text-sm font-bold text-bella-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
