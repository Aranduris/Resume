# Ritwik Katiyar — Portfolio

Personal portfolio for my work in clinical AI, healthcare data science, and
applied research.

The site is designed for two audiences at once:

- recruiters who need a clear overview quickly; and
- technical or clinical reviewers who want to inspect the evidence behind the
  summary.

The page is intentionally static. It loads quickly, works without an API key,
and can be deployed directly with GitHub Pages.

## What is included

- selected clinical AI and data-science projects;
- public GitHub projects across bioinformatics, environmental analytics,
  esports, databases, and network analysis;
- an authorship-accurate research ledger;
- conference presentations, work experience, and education;
- technical skills linked to papers, presentations, manuscripts, and projects;
  and
- accessible desktop and mobile layouts.

## Local setup

Requirements:

- Node.js 22 or newer
- npm

```bash
npm ci
npm run dev
```

The development server prints the local URL after it starts.

To verify the GitHub Pages output:

```bash
npm run build:static
```

The exported site is written to `out/`.

## GitHub Pages deployment

The deployment workflow lives in
`.github/workflows/deploy-pages.yml`.

1. Create a public GitHub repository.
2. Push this project to the repository's `main` branch.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Run the workflow, or push a new commit to `main`.

The workflow installs the locked dependencies, creates a static Next.js export,
and publishes the `out/` directory. GitHub's Pages setup step handles the
repository sub-path automatically.

## Project structure

```text
app/
├── components/
│   └── Icons.tsx
├── data/
│   └── portfolio.ts
├── globals.css
├── layout.tsx
└── page.tsx
public/
├── images/
│   ├── portrait.png
│   └── studies/
│       └── README.md
├── favicon.svg
└── og.png
.github/workflows/
└── deploy-pages.yml
```

The content is kept separate from the page layout so updates do not require
digging through the React markup:

- edit project, publication, presentation, and skills data in
  `app/data/portfolio.ts`;
- edit the page narrative and section order in `app/page.tsx`;
- edit layout, color, typography, and responsive rules in `app/globals.css`.

## Adding images

The portrait is connected at `public/images/portrait.png`.

The three selected healthcare projects contain labeled image placeholders. To
replace them:

1. Add the image to `public/images/studies/` using the filename shown in the
   placeholder, replacing the existing placeholder PNG.
2. Commit the replacement image and push the update.

No React or CSS changes are required. The included
`public/images/studies/README.md` repeats the exact filenames. Landscape images
close to a 16:10 ratio work best.

Keep screenshots de-identified and remove patient, institution-restricted, or
unpublished information before adding them to a public repository.

## Code style

The code favors descriptive names, small helper components, visible section
dividers, and short comments for intent or edge cases. Comments are deliberately
limited where the code already explains itself.

## Content note

Research status, authorship, acknowledgments, dates, and links were transcribed
from the current résumé. Update `app/data/portfolio.ts` whenever that record
changes.

Personal text, research descriptions, and future imagery remain the property of
Ritwik Katiyar. A reuse license for the source code has not yet been selected.
