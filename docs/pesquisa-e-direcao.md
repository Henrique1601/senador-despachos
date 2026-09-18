# Pesquisa e direção do projeto

Pesquisa realizada em 18 de setembro de 2026.

## Empresa e fatos confirmados

Fontes primárias consultadas no navegador:

- [Google Maps fornecido pelo usuário](https://maps.app.goo.gl/3Vxq52NmHgn5rMVQA): Senador Despachos – Despachante; Av. Senador Feijó, 500, Vila Mathias, Santos – SP, 11015-504; telefone (13) 99118-5156; 5,0 estrelas em **4 avaliações** na data da pesquisa.
- [Instagram da empresa](https://www.instagram.com/senadordespachos/): perfil de Luiz Gustavo; bio “Seu Automóvel Em Dia, Rápido e Seguro”; transferência, licenciamento, primeiro emplacamento e renovação de CNH; link de WhatsApp com o mesmo número. A imagem do perfil usa azul e amarelo.

O link de WhatsApp do Instagram não incluía o código internacional. O site utiliza o formato completo `5513991185156`, conferido com o telefone do Maps. Nenhuma mensagem foi enviada à empresa.

Horário semanal, CNPJ, tempo de atuação, condições de pagamento, preços, credenciamento e prazos de conclusão não foram confirmados. Por isso, não foram inventados nem publicados. A nota do Google está identificada com quantidade e data de consulta; deve ser revisada antes do lançamento. Não copiamos nomes, fotos ou depoimentos de avaliadores.

## Referências de mercado

- [John Despachante](https://despachantejohn.com.br/): referência para a ordem serviços → dúvidas → contato e presença local na Baixada Santista.
- [Orla Serviços](https://www.orlaservicos.com.br/): referência para apresentar serviços por necessidade do motorista e reduzir a dificuldade de iniciar uma conversa.
- [VB Despachante](https://vbdespachante.com.br/contato/): referência de contato por serviço. Aqui o fluxo foi simplificado: sem pedir placa, Renavam, CPF ou arquivos no site.

Os textos e o código foram criados para este projeto. Promessas de concorrentes, preços, prazos, parcelamentos e avaliações não foram transferidos para a Senador.

## Referências dos repositórios do Henrique

Consultados por MCP do GitHub:

- [jm-motors](https://github.com/Henrique1601/jm-motors), `src/routes/index.tsx` e `package.json`: React, serviços locais em Santos, mensagens contextualizadas no WhatsApp, localização, navegação por âncoras. É especialmente próximo do contexto: estabelecimento na mesma avenida.
- [domportifolio.com.br](https://github.com/Henrique1601/domportifolio.com.br), `src/App.tsx` e `package.json`: React + TypeScript + Vite, composição de página por componentes.
- [Barbearia](https://github.com/Henrique1601/Barbearia), `README.md` e `package.json`: princípio de reduzir cadastro e iniciar atendimento pelo WhatsApp. A necessidade de agenda e banco de dados daquele projeto não se aplica a esta página institucional.

## Direção visual

Público: proprietários de carros e motos em Santos e pessoas que precisam de orientação para renovar a CNH.

Objetivo principal: iniciar uma conversa no WhatsApp com contexto suficiente para o profissional orientar o visitante.

Tokens:

| Papel              | Cor       |
| ------------------ | --------- |
| Azul institucional | `#122956` |
| Azul de apoio      | `#234985` |
| Amarelo da marca   | `#FFCF36` |
| Fundo secundário   | `#F4F6FA` |
| Texto de apoio     | `#596779` |
| Branco             | `#FFFFFF` |

Tipografia: Barlow Condensed em títulos de impacto e assinatura, DM Sans em textos, formulários e navegação. Fontes servidas localmente.

Assinatura visual: contraste entre “Menos papelada. Mais caminho.” e um carro em movimento, usando as cores encontradas na marca. A foto é ilustrativa, não representa veículo, cliente, escritório nem local de Santos. O símbolo de chapéu é uma interpretação gráfica para a proposta, não um arquivo oficial da marca.

Composição escolhida:

```text
Contato local / Instagram
Marca | Navegação | WhatsApp
Título + CTA         Fotografia de movimento
Contato / Documentação / Avaliação real
Quatro serviços confirmados
Escolha do serviço → Mensagem no WhatsApp
Como funciona → Quem atende → Dúvidas
Endereço + mapa sob demanda
CTA final → Rodapé e identificação de proposta
```

Alternativa descartada: portal com consulta de débitos e formulário de documentos. Não existem integração autorizada, preços ou operação de atendimento definidos para esse fluxo. A solução implementada atende ao objetivo comercial com menos manutenção.

## Recursos e limitações conscientes

- Sem coleta de documentos, base de leads, pagamentos ou acesso a sistemas governamentais.
- Seletor prepara mensagem; o visitante decide se envia no WhatsApp.
- Mapa externo carregado apenas por ação explícita. Rotas também podem ser abertas diretamente no Maps.
- Conteúdo pré-renderizado no build; navegação, contatos e FAQ continuam disponíveis mesmo sem JavaScript. O seletor dinâmico depende de JavaScript.
- Demonstração identificada no rodapé, com `noindex` e `robots.txt` para evitar indexação da proposta. Isso não é controle de acesso.
- Publicação adiada por preferência expressa do usuário. Nenhum repositório remoto ou deploy foi criado.

## Assets

- Foto ilustrativa: [arquivo Unsplash utilizado](https://images.unsplash.com/photo-1503376780353-7e6692767b70), baixado em WebP, 1600 × 1067, aproximadamente 212 KB. [Licença Unsplash](https://unsplash.com/license). Pode ser substituída por foto licenciada do cliente no mesmo caminho `public/images/hero-car.webp`.
- Ícones: Lucide, licença ISC. Símbolo da marca, favicon e ícone de Instagram desenhados em SVG no projeto.
- Fontes: pacotes Fontsource, com licenças disponíveis nos respectivos pacotes instalados.

## Skills e integrações

- `frontend-design`: direção visual e composição responsiva.
- `vercel:react-best-practices`: componentes, estado mínimo e dependências enxutas.
- `webapp-testing`: inspeção e validação funcional no navegador.
- `vercel:vercel-cli`: preparação da configuração e instruções de deploy.
- MCP GitHub: consulta aos repositórios anteriores.
- Navegador: conferência Maps/Instagram e testes desktop/mobile.
- MCP Vercel: verificação inicial de disponibilidade; nenhuma publicação realizada.
