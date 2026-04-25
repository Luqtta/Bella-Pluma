const WHATSAPP_NUMBER = '556282029314'

export const whatsappDisplayNumber = '(62) 8202-9314'

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
