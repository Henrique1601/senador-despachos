# Senador Despachos

Proposta de site institucional para a Senador Despachos, despachante veicular na Vila Mathias, em Santos. Criado para Henrique Bezerra com pesquisa em fontes públicas da empresa, referências locais e análise dos projetos `jm-motors`, `domportifolio.com.br` e `Barbearia`.

**Status:** projeto local, preparado para GitHub e Vercel. Publicação adiada a pedido do usuário. Esta versão identifica-se como demonstração e está configurada para não ser indexada.

## O que está pronto

- Identidade em azul e amarelo, fotografia ilustrativa e layout para desktop e celular.
- Quatro serviços confirmados no Instagram da empresa.
- Seletor de serviço e veículo com mensagem contextual no WhatsApp.
- Menu mobile, FAQ acessível, telefone e localização com mapa carregado sob demanda.
- Fontes e imagem locais; React, TypeScript e Vite.
- HTML pré-renderizado no build, links e FAQ disponíveis sem JavaScript.
- Testes da composição do contato; configuração de deploy no Vercel.

## Desenvolvimento

```powershell
npm ci
npm run dev
```

## Validação e prévia

```powershell
npm test
npm run build
npm run preview -- --port 4173
```

O servidor de prévia abre em `http://localhost:4173`. Requer Node.js >=22.12. As versões exatas estão fixadas em `package.json` e `package-lock.json`.

O build gera `dist/`, pronto para hospedagem estática. Não abra `dist/index.html` diretamente como `file://`; utilize o servidor de prévia.

## Documentação

- [Pesquisa, fontes, referências e decisões visuais](docs/pesquisa-e-direcao.md)
- [Publicação no GitHub e no Vercel](docs/publicacao.md)
- [Validação da entrega](docs/validacao.md)

## Escopo

O site inicia o atendimento; não consulta débitos, não realiza pagamentos, não recebe documentos e não se conecta ao Detran. Valores, prazos e detalhes são confirmados pelo profissional. A foto e a assinatura gráfica são ilustrativas para a proposta. Os contatos são reais e abrem os canais públicos da empresa; nenhuma mensagem foi enviada durante o desenvolvimento.
