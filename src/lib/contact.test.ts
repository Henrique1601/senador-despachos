import test from 'node:test'
import assert from 'node:assert/strict'
import { BUSINESS, SERVICES, whatsappLink } from './contact.ts'

test('WhatsApp uses the verified Brazilian business number and safely encodes the selected context', () => {
  const url = new URL(whatsappLink('Transferência de veículo', 'Carro'))
  assert.equal(url.hostname, 'wa.me')
  assert.equal(url.pathname, `/${BUSINESS.phone}`)
  assert.equal(
    url.searchParams.get('text'),
    'Olá, Senador Despachos! Vim pelo site. Gostaria de orientação sobre Transferência de veículo. Meu veículo é: Carro.',
  )
  assert.equal([...url.searchParams].length, 1)
})

test('each service has a unique identity and a valid contextual contact link', () => {
  assert.equal(new Set(SERVICES.map((service) => service.id)).size, SERVICES.length)
  for (const service of SERVICES)
    assert.ok(
      new URL(whatsappLink(service.title)).searchParams.get('text')?.includes(service.title),
    )
  assert.ok(!whatsappLink().includes('undefined'))
})
