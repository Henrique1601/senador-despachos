import type { ReactNode } from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { whatsappLink } from '../lib/contact'

export function ContactLink({
  children = 'Falar no WhatsApp',
  service,
  vehicle,
  className = 'button button-yellow',
}: {
  children?: ReactNode
  service?: string
  vehicle?: string
  className?: string
}) {
  return (
    <a
      className={className}
      href={whatsappLink(service, vehicle)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={19} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  )
}
