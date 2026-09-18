import { useState } from 'react'
import { MapPin, ArrowUpRight, Phone, Map } from 'lucide-react'
import { InstagramIcon as Instagram } from './InstagramIcon'
import { BUSINESS } from '../lib/contact'

export function Location() {
  const [showMap, setShowMap] = useState(false)
  return (
    <section className="section location-section" id="contato">
      <div className="container location-grid">
        <div>
          <span className="eyebrow">PERTINHO DE VOCÊ</span>
          <h2>
            Seu despachante.
            <br />
            Aqui em Santos.
          </h2>
          <p className="section-copy">
            Na Vila Mathias, com um endereço para você chegar e uma conversa para resolver.
          </p>
          <address className="contact-details">
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <strong>{BUSINESS.address}</strong>
                <br />
                {BUSINESS.district}
                <br />
                CEP {BUSINESS.postalCode}
              </span>
            </div>
            <div>
              <Phone aria-hidden="true" />
              <a href={`tel:+${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
            </div>
            <div>
              <Instagram aria-hidden="true" />
              <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer">
                @senadordespachos <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </address>
          <a className="text-link" href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">
            Traçar rota no Google Maps <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="location-hours">Consulte o horário de atendimento antes da visita.</p>
        </div>
        <div className="map-panel">
          {showMap ? (
            <iframe
              title="Localização da Senador Despachos em Santos"
              src="https://www.google.com/maps?q=Av.%20Senador%20Feij%C3%B3%2C%20500%2C%20Santos%20SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <>
              <div className="map-grid" aria-hidden="true">
                <span className="map-street street-one">AV. SENADOR FEIJÓ</span>
                <span className="map-street street-two">VILA MATHIAS</span>
                <span className="map-pin">
                  <MapPin size={36} />
                </span>
              </div>
              <div className="map-caption">
                <span>
                  <strong>Senador Despachos</strong>
                  <small>Av. Senador Feijó, 500 · Santos</small>
                </span>
                <button className="map-load" onClick={() => setShowMap(true)}>
                  <Map size={18} aria-hidden="true" /> Carregar mapa
                </button>
              </div>
              <span className="map-disclaimer">
                Representação ilustrativa. Carregue o mapa para explorar.
              </span>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
