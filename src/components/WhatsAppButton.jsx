import { buildWhatsAppLink } from '../utils/whatsapp'
import { FaWhatsapp } from 'react-icons/fa'

const variantStyles = {
  primary:
    'bg-bella-wa text-white hover:bg-bella-wa-dark focus-visible:outline-bella-wa shadow-soft',
  secondary:
    'border border-bella-mist bg-white text-bella-ink hover:border-bella-ink/30 hover:bg-bella-cloud focus-visible:outline-bella-ink',
  outline:
    'border border-bella-ink/15 bg-white text-bella-ink hover:border-bella-ink/30 hover:bg-bella-cloud focus-visible:outline-bella-ink',
  floating:
    'bg-bella-wa text-white hover:bg-bella-wa-dark focus-visible:outline-bella-wa shadow-soft',
}

export default function WhatsAppButton({
  message,
  children,
  className = '',
  variant = 'primary',
  iconOnly = false,
  ariaLabel = 'Falar no WhatsApp',
}) {
  const href = buildWhatsAppLink(message)
  const style = variantStyles[variant] ?? variantStyles.primary

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={iconOnly ? ariaLabel : undefined}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base ${style} ${className}`}
    >
      <FaWhatsapp className={`${iconOnly ? 'h-7 w-7' : 'h-5 w-5'} shrink-0`} aria-hidden="true" />
      {iconOnly ? null : <span>{children}</span>}
    </a>
  )
}
