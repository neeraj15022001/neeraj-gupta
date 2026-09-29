# Neeraj Gupta

Personal portfolio: enterprise engineering, independent projects, and career experience.

**Live site:** https://neeraj15022001.github.io/neeraj-gupta/

## Pages

- `dist/index.html` — animated landing page
- `dist/corporate/index.html` — corporate work, experience, case studies, and résumé
- `dist/github.html` — public project showcase
- `dist/brand.css` — shared monogram sizing and page entrance animation
- `dist/assets/` — themed vector logos and favicons

Plain HTML, CSS, and JavaScript. No build or dependency installation required.

## Local preview

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173/. Links are relative so the site also works under GitHub Pages' repository path.

## Publish to GitHub Pages

`main` holds source; `gh-pages` holds the contents of `dist/`. GitHub Pages publishes from `gh-pages` at `/`.

```sh
git push github main
git subtree push --prefix dist github gh-pages
```

The existing private Sites deployment is managed separately through `.openai/hosting.json`. Its access policy is unchanged by GitHub publication.

## Content

Resume-based facts belong to Neeraj Gupta. Project visuals are illustrative concepts, not employer screenshots. Content uses the September 2026 resume and work notes; the resume's headline metrics take precedence. No analytics, contact-form backend, or visitor storage. Manrope loads from Google Fonts with a system fallback. Motion respects reduced-motion preferences.
