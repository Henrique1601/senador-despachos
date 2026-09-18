export const BUSINESS = {
  name: 'Senador Despachos',
  phone: '5513991185156',
  phoneDisplay: '(13) 99118-5156',
  instagram: 'https://www.instagram.com/senadordespachos/',
  maps: 'https://maps.app.goo.gl/3Vxq52NmHgn5rMVQA',
  address: 'Av. Senador Feijó, 500',
  district: 'Vila Mathias, Santos – SP',
  postalCode: '11015-504',
} as const

export const SERVICES = [
  {
    id: 'transferencia',
    title: 'Transferência de veículo',
    short: 'Transferência',
    description:
      'Comprou ou vendeu um veículo? Converse sobre a documentação para a mudança de proprietário.',
    detail:
      'Conte se você está comprando ou vendendo e em qual cidade o veículo está registrado. A equipe orienta os próximos passos do seu caso.',
    icon: 'transfer',
  },
  {
    id: 'licenciamento',
    title: 'Licenciamento anual',
    short: 'Licenciamento',
    description:
      'Orientação para manter a documentação do seu veículo em dia e seguir seu caminho.',
    detail:
      'Informe que deseja orientação sobre o licenciamento. Valores, exigências e eventuais pendências serão verificados no atendimento.',
    icon: 'document',
  },
  {
    id: 'emplacamento',
    title: 'Primeiro emplacamento',
    short: '1º emplacamento',
    description: 'O primeiro passo do seu veículo novo começa com a documentação organizada.',
    detail:
      'Diga se o veículo novo é um carro ou uma moto. A equipe confirma quais documentos serão necessários para iniciar o atendimento.',
    icon: 'car',
  },
  {
    id: 'cnh',
    title: 'Renovação de CNH',
    short: 'Renovação de CNH',
    description:
      'Saiba por onde começar a renovação da sua habilitação, com orientação individual.',
    detail:
      'Converse sobre a sua situação e receba orientação para a renovação. Exames e demais etapas dependem das exigências dos órgãos responsáveis.',
    icon: 'license',
  },
] as const

export function whatsappLink(service?: string, vehicle?: string) {
  const message = [
    'Olá, Senador Despachos! Vim pelo site.',
    service
      ? `Gostaria de orientação sobre ${service}.`
      : 'Gostaria de falar sobre a documentação do meu veículo.',
    vehicle ? `Meu veículo é: ${vehicle}.` : '',
  ]
    .filter(Boolean)
    .join(' ')
  return `https://wa.me/${BUSINESS.phone}?text=${encodeURIComponent(message)}`
}
