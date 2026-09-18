import { useState } from 'react'
import { ArrowRight, CarFront, Check, Bike, MessageCircle } from 'lucide-react'
import { SERVICES } from '../lib/contact'
import { ContactLink } from './ContactLink'

export function ServiceFinder() {
  const [selected, setSelected] = useState<string>(SERVICES[0].id)
  const [vehicle, setVehicle] = useState('Carro')
  const service = SERVICES.find((item) => item.id === selected) ?? SERVICES[0]
  return (
    <section className="finder-section" id="atendimento" aria-labelledby="finder-title">
      <div className="container finder">
        <div className="finder-intro">
          <span className="eyebrow">VAMOS FACILITAR?</span>
          <h2 id="finder-title">
            O que você
            <br /> precisa resolver?
          </h2>
          <p>Escolha o serviço. A conversa já começa no caminho certo.</p>
          <div className="finder-note">
            <MessageCircle size={18} aria-hidden="true" />
            <span>Contato direto, sem cadastro.</span>
          </div>
        </div>
        <div className="finder-form">
          <label htmlFor="service">Qual serviço você procura?</label>
          <select
            id="service"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            {SERVICES.map((item) => (
              <option value={item.id} key={item.id}>
                {item.title}
              </option>
            ))}
            <option value="outro">Tenho outra dúvida</option>
          </select>
          {selected !== 'cnh' && (
            <fieldset>
              <legend>Para qual veículo?</legend>
              <div className="vehicle-options">
                {[
                  { label: 'Carro', icon: CarFront },
                  { label: 'Moto', icon: Bike },
                  { label: 'Outro', icon: ArrowRight },
                ].map(({ label, icon: Icon }) => (
                  <label
                    className={vehicle === label ? 'vehicle-option is-selected' : 'vehicle-option'}
                    key={label}
                  >
                    <input
                      type="radio"
                      name="vehicle"
                      value={label}
                      checked={vehicle === label}
                      onChange={() => setVehicle(label)}
                    />
                    <Icon size={19} aria-hidden="true" />
                    {label}
                    {vehicle === label && <Check size={15} aria-hidden="true" />}
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          <div className="service-context" aria-live="polite">
            <h3>{selected === 'outro' ? 'Vamos entender o seu caso' : service.title}</h3>
            <p>
              {selected === 'outro'
                ? 'Explique o que você precisa resolver. O atendimento confirma se o serviço está disponível e como pode ajudar.'
                : service.detail}
            </p>
          </div>
          <ContactLink
            service={selected === 'outro' ? 'outro serviço' : service.title}
            vehicle={selected === 'cnh' ? undefined : vehicle}
            className="button button-yellow finder-submit"
          >
            Continuar no WhatsApp
          </ContactLink>
          <small>Você revisa a mensagem no WhatsApp antes de enviar.</small>
        </div>
      </div>
    </section>
  )
}
