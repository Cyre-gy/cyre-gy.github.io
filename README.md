# Cherry Rose Gunay — Portfolio

Static portfolio built with Astro, TypeScript, Bootstrap 5, Bootstrap Icons and custom CSS. Fonts and icons are self-hosted (no external requests).

## Run locally
Requires Node.js 20+.
```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # production build into dist/
npm run check    # type check
```

## Edit content
Almost everything is in `src/data/portfolio.ts` (profile, skills, certifications, volunteer work, iSched case study). Colors and typography are in `src/styles/global.css`.
- iSched `technologies`, `contributionDetails`, `repoUrl`, `demoUrl` are empty on purpose and only appear once filled with verified information.
- Résumé download: put a PDF in `public/` and set `resumePdf` in `portfolio.ts`.
- iSched screenshots live in `public/images/` and are listed in the `screens` array in `portfolio.ts`. Replace the files (same names) with sharper screenshots any time.

## Deploy (GitHub Pages)
The config is set for a GitHub user site: create a repository named exactly `Cyre-gy.github.io`, push this folder to its `main` branch, then in the repo go to Settings > Pages > Source > **GitHub Actions**. The site appears at https://cyre-gy.github.io/. The workflow is `.github/workflows/deploy.yml` (see https://docs.astro.build/en/guides/deploy/github/).

## Troubleshooting
- Unstyled page or broken links: check `site` and `base` in `astro.config.mjs`.
- Workflow does not start: your branch is not `main`, or Pages source is not "GitHub Actions".
- Build fails: run `npm run build` locally and read the first error.
