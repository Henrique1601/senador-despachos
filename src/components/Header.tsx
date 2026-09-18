import { useState } from 'react'
import { MapPin, Menu, X } from 'lucide-react'
import { InstagramIcon as Instagram } from './InstagramIcon'
import { Brand } from './Brand'
import { ContactLink } from './ContactLink'
import { BUSINESS } from '../lib/contact'

const links = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'A Senador' },
  { href: '#contato', label: 'Onde estamos' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <span>
            <MapPin size={13} aria-hidden="true" /> Vila Mathias, Santos – SP
          </span>
          <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">
            <Instagram size={14} aria-hidden="true" /> @senadordespachos{' '}
            <span className="topbar-divider">|</span> Seu automóvel em dia.
          </a>
        </div>
      </div>
      <header
        className="header"
        onKeyDown={(event) => {
          if (event.key === 'Escape') setOpen(false)
        }}
      >
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Navegação principal">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <ContactLink className="button button-blue header-cta">Vamos conversar</ContactLink>
          <button
            className="menu-button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegação no celular"
          hidden={!open}
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <ContactLink />
        </nav>
      </header>
    </>
  )
}
