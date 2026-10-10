# Daniel Balogun — Portfolio

React + TypeScript · Tailwind CSS v4 · Motion for React · Vercel

## Run
    npm install
    npm run dev

## Deploy
Push to GitHub → import the repo in Vercel (Vite preset). `vercel.json` handles SPA routing.

## Pages
/ (Home) · /work · /work/naija-foodie · /writing · /about · /video · /contact

## Add your assets
Drop exported images from Figma into `public/images/` using the filenames in `src/data/projects.ts`
(e.g. dan-hero.png, dan-about.png, naija-foodie.png). Gradients show until an image exists.

## Edit content
- `src/data/site.ts` — contact details (placeholders from the design: replace them)
- `src/data/projects.ts` — projects, case studies, articles, videos
  (Fintech App and YouFit case studies are placeholder copy)
- `src/index.css` — design tokens (#0B0B0B, #FBF7F3, #FF7A1A, #A0A0A0, #22C55E; Space Grotesk / Inter)
