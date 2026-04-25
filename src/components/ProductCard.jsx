import WhatsAppButton from './WhatsAppButton'

export default function ProductCard({ product }) {
  return (
    <article className="group surface-card flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-lg md:h-[760px]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-bella-ink shadow-soft">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="flex h-full flex-col justify-between p-6">
        <div>
          <h3 className="text-2xl font-bold leading-tight text-bella-ink">{product.name}</h3>

          <p className="mt-2 inline-flex w-fit rounded-full border border-black/10 bg-bella-cloud px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-bella-steel">
            {product.variation}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-bella-steel sm:text-base">{product.description}</p>

          <ul className="mt-5 grid gap-2.5">
            {product.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-bella-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-bella-wa-soft text-bella-wa">
                  <svg viewBox="0 0 20 20" className="h-3 w-3 fill-current" aria-hidden="true">
                    <path d="m16.72 5.22-8.35 8.35-4.1-4.1 1.06-1.06 3.04 3.04 7.29-7.29 1.06 1.06Z" />
                  </svg>
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-6">
          <WhatsAppButton message={product.whatsappMessage} className="w-full">
            Comprar
          </WhatsAppButton>
        </div>
      </div>
    </article>
  )
}
