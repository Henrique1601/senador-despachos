import {
  ArrowRight,
  ArrowUpRight,
  FileCheck2,
  Repeat2,
  CarFront,
  IdCard,
  Check,
  ShieldCheck,
  MessageCircle,
  MapPin,
  Star,
  Navigation,
  ChevronDown,
} from 'lucide-react'
import { Header } from './components/Header'
import { Brand } from './components/Brand'
import { ContactLink } from './components/ContactLink'
import { ServiceFinder } from './components/ServiceFinder'
import { Location } from './components/Location'
import { BUSINESS, SERVICES } from './lib/contact'

const icons = { transfer: Repeat2, document: FileCheck2, car: CarFront, license: IdCard }
const questions = [
  {
    question: 'Como faço para pedir um orçamento?',
    answer:
      'Escolha um serviço aqui no site e continue no WhatsApp. Conte o que precisa resolver para receber orientação e um orçamento conforme o seu caso. O contato pelo site não confirma uma contratação.',
  },
  {
    question: 'Preciso ir pessoalmente ao escritório?',
    answer:
      'Você pode começar a conversa pelo WhatsApp. O atendimento informa quais etapas podem ser feitas à distância e se será necessário comparecer ou apresentar documentos.',
  },
  {
    question: 'Quais documentos preciso separar?',
    answer:
      'A lista depende do serviço e da situação do veículo ou da habilitação. Peça a relação completa no atendimento antes de separar ou enviar documentos. Este site não recebe arquivos nem documentos pessoais.',
  },
  {
    question: 'Qual é o prazo para concluir o serviço?',
    answer:
      'O prazo depende da documentação, de eventuais pendências e do processamento pelos órgãos responsáveis. A equipe confirma uma estimativa depois de entender a sua situação.',
  },
]

function Privacy() {
  return (
    <details className="privacy-details">
      <summary>Privacidade</summary>
      <div>
        <p>
          Esta é uma proposta demonstrativa de site. Não há formulário de cadastro, upload de
          documentos, análise de tráfego ou cookies de marketing implementados.
        </p>
        <p>
          Ao continuar no WhatsApp, você abre um serviço externo e decide se deseja enviar a
          mensagem preparada. O mapa do Google só é carregado quando você solicita. Esses serviços
          possuem suas próprias políticas de privacidade. O provedor de hospedagem pode processar
          registros técnicos de acesso.
        </p>
      </div>
    </details>
  )
}

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-photo">
            <img
              src="/images/hero-car.webp"
              alt="Automóvel em movimento em uma via — imagem ilustrativa"
              width="1600"
              height="1067"
              fetchPriority="high"
            />
            <div className="photo-overlay" />
            <span className="photo-caption">SEU PRÓXIMO DESTINO NÃO PRECISA ESPERAR.</span>
          </div>
          <div className="hero-road" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="container hero-content">
            <span className="eyebrow hero-eyebrow">
              <span /> DESPACHANTE VEICULAR EM SANTOS
            </span>
            <h1 id="hero-title">
              MENOS
              <br />
              PAPELADA.
              <br />
              <span>MAIS CAMINHO.</span>
            </h1>
            <p>
              Seu automóvel em dia, rápido e seguro.
              <br />A Senador cuida da documentação para você
              <br className="desktop-break" /> seguir com o que importa.
            </p>
            <div className="hero-actions">
              <ContactLink />
              <a className="hero-secondary" href="#servicos">
                Conhecer os serviços <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-assurance">
              <ShieldCheck size={17} aria-hidden="true" /> Orientação de verdade. Atendimento de
              perto.
            </div>
          </div>
          <a
            className="hero-location"
            href={BUSINESS.maps}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="location-icon">
              <MapPin size={23} aria-hidden="true" />
            </span>
            <span>
              <small>PODE CHEGAR.</small>
              <strong>Vila Mathias, Santos</strong>
              <span>Av. Senador Feijó, 500</span>
            </span>
            <ArrowUpRight size={21} aria-hidden="true" />
          </a>
        </section>
        <div className="trust-strip">
          <div className="container trust-inner">
            <div>
              <MessageCircle size={22} aria-hidden="true" />
              <span>
                Conversa direta<strong>pelo WhatsApp</strong>
              </span>
            </div>
            <div>
              <FileCheck2 size={22} aria-hidden="true" />
              <span>
                Documentação veicular<strong>com orientação em cada etapa</strong>
              </span>
            </div>
            <a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">
              <span className="rating">
                5,0 <Star size={18} fill="currentColor" aria-hidden="true" />
              </span>
              <span>
                Avaliação no Google<strong>4 avaliações · consultado em set/2026</strong>
              </span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
        <section className="section services-section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">O QUE A GENTE RESOLVE</span>
                <h2>
                  Documentos em ordem.
                  <br />
                  Vida em movimento.
                </h2>
              </div>
              <p className="section-copy">
                Do primeiro emplacamento à renovação da CNH.
                <br />
                Escolha o que precisa e dê o próximo passo.
              </p>
            </div>
            <div className="service-grid">
              {SERVICES.map((service) => {
                const Icon = icons[service.icon]
                return (
                  <article className="service-card" key={service.id}>
                    <div className="service-icon">
                      <Icon size={29} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <ContactLink className="service-link" service={service.title}>
                      Falar sobre {service.short.toLowerCase()}
                    </ContactLink>
                  </article>
                )
              })}
            </div>
            <div className="other-service">
              <span>
                Não encontrou o que precisa? <strong>Vamos entender o seu caso.</strong>
              </span>
              <ContactLink className="text-link">Tirar uma dúvida</ContactLink>
            </div>
          </div>
        </section>
        <ServiceFinder />
        <section className="section process-section" id="como-funciona">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">SIMPLES DESDE O PRIMEIRO CONTATO</span>
                <h2>
                  Você conta. A gente orienta.
                  <br />E o caminho fica mais fácil.
                </h2>
              </div>
              <span className="process-tag">
                <Navigation size={17} aria-hidden="true" /> Um passo de cada vez.
              </span>
            </div>
            <ol className="steps">
              <li>
                <span className="step-number">01</span>
                <div>
                  <h3>Conte o que precisa</h3>
                  <p>
                    Chame no WhatsApp e explique a sua situação, sem preencher formulários longos.
                  </p>
                </div>
              </li>
              <li>
                <span className="step-number">02</span>
                <div>
                  <h3>Entenda os próximos passos</h3>
                  <p>Receba a orientação sobre documentos, valores e etapas para o seu caso.</p>
                </div>
              </li>
              <li>
                <span className="step-number">03</span>
                <div>
                  <h3>Siga com acompanhamento</h3>
                  <p>Combine o atendimento e tire suas dúvidas diretamente com o despachante.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>
        <section className="about-section" id="sobre">
          <div className="container about-grid">
            <div className="about-statement">
              <span className="eyebrow">SENADOR DESPACHOS</span>
              <h2>
                POR TRÁS DE
                <br />
                CADA DOCUMENTO,
                <br />
                <span>UMA PESSOA.</span>
              </h2>
              <div className="about-address">
                <MapPin size={19} aria-hidden="true" /> Santos, litoral de São Paulo.
              </div>
            </div>
            <div className="about-copy">
              <span className="eyebrow">ATENDIMENTO COM NOME E ENDEREÇO</span>
              <h3>Prazer, somos a Senador.</h3>
              <p>
                À frente da Senador Despachos está Luiz Gustavo, despachante veicular em Santos. Um
                contato direto para conversar sobre a documentação do seu veículo e da sua
                habilitação.
              </p>
              <p>
                Nosso endereço fica na Av. Senador Feijó, no bairro Vila Mathias. Você pode começar
                pelo WhatsApp e entender o que é necessário para o seu atendimento.
              </p>
              <ul className="check-list">
                <li>
                  <Check size={17} aria-hidden="true" /> Atendimento direto com o profissional
                </li>
                <li>
                  <Check size={17} aria-hidden="true" /> Orientação de acordo com a sua situação
                </li>
                <li>
                  <Check size={17} aria-hidden="true" /> Escritório em Santos para receber você
                </li>
              </ul>
              <a
                className="text-link"
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça nossa rotina no Instagram <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section className="section faq-section" id="duvidas">
          <div className="container faq-grid">
            <div>
              <span className="eyebrow">ANTES DE SEGUIR</span>
              <h2>
                Dúvidas no caminho?
                <br />
                Vamos por partes.
              </h2>
              <p className="section-copy">
                Cada situação tem seus detalhes.
                <br />A conversa é o melhor ponto de partida.
              </p>
              <ContactLink className="text-link">Quero tirar uma dúvida</ContactLink>
            </div>
            <div className="faq-list">
              {questions.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <ChevronDown size={20} aria-hidden="true" />
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <Location />
        <section className="closing">
          <div className="container closing-inner">
            <div>
              <span className="eyebrow">VAMOS DAR O PRÓXIMO PASSO?</span>
              <h2>DEIXE A PAPELADA COM A GENTE.</h2>
            </div>
            <ContactLink className="button button-blue">Conversar com a Senador</ContactLink>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div>
              <Brand light />
              <p>Seu automóvel em dia, rápido e seguro.</p>
            </div>
            <div className="footer-links">
              <a href="#servicos">Serviços</a>
              <a href="#duvidas">Dúvidas frequentes</a>
              <a href={BUSINESS.maps} target="_blank" rel="noopener noreferrer">
                Como chegar <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
            <div className="footer-contact">
              <a href={`tel:+${BUSINESS.phone}`}>{BUSINESS.phoneDisplay}</a>
              <span>
                {BUSINESS.address}
                <br />
                {BUSINESS.district}
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Senador Despachos · Proposta demonstrativa de site.</span>
            <Privacy />
            <a href="https://github.com/Henrique1601" target="_blank" rel="noopener noreferrer">
              Desenvolvido por Henrique <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
          <p className="business-note">
            Serviço privado de assessoria documental, sem vínculo com órgãos públicos. Serviços,
            prazos e valores são confirmados no atendimento. Identidade visual reinterpretada para
            esta proposta.
          </p>
        </div>
      </footer>
      <a
        className="floating-contact"
        href={`https://wa.me/${BUSINESS.phone}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar com a Senador Despachos no WhatsApp"
      >
        <MessageCircle size={27} aria-hidden="true" />
      </a>
    </>
  )
}
