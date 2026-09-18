# Publicar no GitHub e no Vercel

O projeto está pronto localmente. A publicação foi adiada a pedido do Henrique. O login do GitHub CLI disponível na sessão estava expirado; será necessário autenticar quando decidir publicar. Não coloque tokens em arquivos ou no chat.

## Executar e verificar

Requer Node.js 22.12 ou superior. A versão utilizada no desenvolvimento foi 24.18.0.

```powershell
npm ci
npm test
npm run build
npm run preview -- --port 4173
```

Abra `http://localhost:4173`. Para desenvolver com atualização automática, use `npm run dev`.

## Criar repositório

Nome sugerido: `senador-despachos`. Os comandos abaixo são instruções para executar quando for publicar; não foram executados automaticamente.

```powershell
gh auth login
git init -b main
git add .
git commit -m "Cria site institucional da Senador Despachos"
gh repo create Henrique1601/senador-despachos --private --source=. --remote=origin --push
```

Se já houver um repositório Git local, pule o `git init`. Se decidir tornar o código público, escolha a visibilidade conscientemente. O `.gitignore` exclui dependências, build, arquivos de ambiente, artefatos locais e vínculo local do Vercel.

## Conectar ao Vercel

1. Entre no [painel do Vercel](https://vercel.com/new).
2. Importe `Henrique1601/senador-despachos` da sua conta GitHub.
3. Selecione o preset **Vite** e diretório raiz `./`.
4. Build: `npm run build`. Saída: `dist`. Instalação: `npm ci`.
5. Selecione Node.js 24.x, se disponível, ou uma versão compatível com `engines` em `package.json`.
6. Publique. Não são necessárias variáveis de ambiente, banco de dados ou serviços pagos adicionais para esta página.

O arquivo `vercel.json` já define preset, build, diretório e cabeçalhos. Depois da importação, o Vercel cria novos deployments automaticamente a partir dos commits do GitHub. Confira o estado **Ready** e teste o endereço atribuído pelo Vercel.

Alternativa pela CLI oficial, após a criação do repositório:

```powershell
npx vercel login
npx vercel link
npx vercel git connect https://github.com/Henrique1601/senador-despachos
npx vercel deploy
```

O primeiro deploy pode continuar como demonstração. Para publicar oficialmente, use o painel ou `npx vercel --prod` após revisar o conteúdo.

## Passar de proposta para site oficial

- Substitua a assinatura reinterpretada pelo logo oficial, se fornecido.
- Confirme com a empresa os dados e os textos de atendimento. Inclua horário, razão social, CNPJ ou condições comerciais somente se recebidos e conferidos.
- Revise a avaliação datada do Google; remova se não quiser mantê-la atualizada.
- Em `index.html`, remova `noindex, nofollow` e ajuste a descrição de demonstração.
- Em `vercel.json`, remova o cabeçalho `X-Robots-Tag` com `noindex`.
- Em `public/robots.txt`, troque `Disallow: /` por `Allow: /`.
- Atualize a identificação de proposta no rodapé e a nota de privacidade conforme a operação real.
- Configure domínio, URL canônica, sitemap e imagem Open Graph com o endereço final. Eles não foram inventados para esta versão local.
- Faça novo build e confira o conteúdo, navegação e links no endereço publicado.

## Pontos de manutenção

| Alteração                                | Arquivo                       |
| ---------------------------------------- | ----------------------------- |
| Telefone, endereço, Maps e Instagram     | `src/lib/contact.ts`          |
| Serviços e mensagem inicial              | `src/lib/contact.ts`          |
| Textos da página, FAQ e rodapé           | `src/App.tsx`                 |
| Cores, fontes, tamanhos e responsividade | `src/styles.css`              |
| Foto principal                           | `public/images/hero-car.webp` |
| Logo demonstrativo                       | `src/components/Brand.tsx`    |
| Título, descrição e metadados            | `index.html`                  |

Referências oficiais: [Vite no Vercel](https://vercel.com/docs/frameworks/frontend/vite), [Vercel CLI](https://vercel.com/docs/cli).
