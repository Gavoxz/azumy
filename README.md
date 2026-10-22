# Azumy Sushi Bar — landing page

Next.js (App Router) + React + TypeScript + Motion.

## Comandos
```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build && npm start
```
Deploy na Vercel: importe o repositório (framework detectado automaticamente). Defina `NEXT_PUBLIC_SITE_URL` (URL final) para metadados, sitemap e Open Graph corretos.

## Conteúdo
Tudo em `lib/restaurant.ts`. `phone` e `hours` estão `null` e não aparecem na interface; preencha só após confirmação com o restaurante.

## Estrutura
`app/` (layout, page, globals.css, robots, sitemap, icon, opengraph-image) · `components/` (Header, Hero, Presentation, Modes, Visit, Reveal, Footer) · `lib/` · `public/logo-azumy.webp`.
Substitua a logo por arquivo original (vetor/PNG alto) quando disponível.
