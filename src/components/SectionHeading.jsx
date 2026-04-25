export default function SectionHeading({ eyebrow, title, description, centered = false }) {
  const alignment = centered ? 'mx-auto items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-bella-wa-soft px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-bella-ink">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-bella-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-bella-steel sm:text-lg">{description}</p>
      ) : null}
    </div>
  )
}
