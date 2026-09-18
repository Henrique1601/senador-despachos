# Validação da entrega

Verificação realizada em 18/09/2026, sobre o build de produção servido em `http://127.0.0.1:4173`.

## Build e código

- `npm run build`: TypeScript sem erros, bundle Vite e pré-renderização concluídos.
- `npm test`: 2 testes aprovados, verificando número brasileiro do destinatário, codificação da mensagem e links dos quatro serviços.
- HTML final: aproximadamente 39,6 KB, contendo o texto completo e um único `h1` antes de executar JavaScript.
- Dependências fixadas em versões exatas; `package.json` e `package-lock.json` consistentes.
- Bundle JavaScript: aproximadamente 77,9 KB gzip; CSS: aproximadamente 6,2 KB gzip. Estes são tamanhos de build, não uma medição de velocidade ou nota de Lighthouse.
- Imagem WebP e fontes carregadas localmente.

## Navegador

| Verificação                          | Resultado                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------- |
| Desktop, viewport de 1280 px         | Composição revisada visualmente; sem rolagem horizontal                               |
| Tablet, viewport de 768 px           | Sem rolagem horizontal; navegação e layout adaptados                                  |
| Celular, viewport de 390 px          | Hero e cabeçalho revisados visualmente; menu funcional                                |
| Celular estreito, viewport de 320 px | Overflow inicial dos serviços corrigido; largura total igual à largura útil da página |
| Menu mobile                          | Abre e fecha; seleção de Serviços fecha o menu                                        |
| Licenciamento + Moto                 | Link de WhatsApp contém serviço e veículo corretos                                    |
| Renovação de CNH                     | Campo de veículo oculto; mensagem sem veículo                                         |
| Outra dúvida                         | Mensagem específica para outro serviço                                                |
| FAQ                                  | Pergunta expande e exibe a resposta                                                   |
| Mapa                                 | Botão insere iframe com endereço da empresa                                           |
| Âncoras internas                     | Nenhum destino inexistente                                                            |
| Imagem principal                     | Carregada sem erro                                                                    |
| Console da página                    | Sem erros ou avisos na inspeção antes de carregar terceiros                           |

As inspeções de largura usam `documentElement.clientWidth` e `scrollWidth`; a largura útil é menor que o viewport quando o navegador reserva espaço para a barra de rolagem.

Nenhuma mensagem de WhatsApp foi enviada. Links de contato foram verificados pelo destino e texto preparados. O serviço externo do WhatsApp e o processamento de solicitações pela empresa não fazem parte desta validação.

## Acessibilidade e uso

Há link para pular ao conteúdo, landmarks semânticos, rótulos no seletor e grupo de veículos, indicação de estado do menu, foco visível e respeito à preferência de movimento reduzido. O FAQ usa `details`/`summary` nativos. Isso não substitui uma auditoria formal WCAG.

## Publicação

Nenhum deploy ou repositório remoto foi criado, conforme a preferência de publicar depois. `vercel.json` e o guia de publicação foram entregues. O ambiente publicado deverá passar por uma conferência própria após a conexão das contas.
