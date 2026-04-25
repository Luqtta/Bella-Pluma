import WhatsAppButton from './WhatsAppButton'

const ctaMessage = 'Ola! Quero proteger meu colchao com mais conforto.'

export default function FinalCtaSection() {
  return (
    <section id="contato" className="bg-white pb-24 pt-6 sm:pb-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-bella-mist bg-bella-wa-soft px-6 py-14 shadow-card sm:px-12 sm:py-16">
          <div className="absolute -left-12 -top-10 h-40 w-40 rounded-full bg-white/50" aria-hidden />
          <div className="absolute -bottom-14 right-0 h-56 w-56 rounded-full bg-bella-wa/20 blur-2xl" aria-hidden />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="rounded-full border border-bella-wa/30 bg-white px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-bella-ink">
              Atendimento rapido
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-bella-ink sm:text-5xl">
              Quer proteger seu colchao com mais conforto?
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-bella-steel sm:text-lg">
              Chame agora no WhatsApp e receba orientacao para escolher o produto ideal para sua cama.
            </p>
            <WhatsAppButton
              message={ctaMessage}
              className="w-full sm:w-auto"
            >
              Chamar no WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
