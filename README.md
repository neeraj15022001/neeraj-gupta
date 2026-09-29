# Neeraj Gupta

Personal portfolio: enterprise engineering, independent projects, and career experience.

**Live site:** https://neeraj15022001.github.io/neeraj-gupta/

## Pages

- `index.html` — animated landing page
- `corporate/index.html` — corporate work, experience, case studies, and résumé
- `github.html` — public project showcase
- `youtube.html` — latest videos from OS Tips n Tricks
- `brand.css` — shared monogram sizing and page entrance animation
- `assets/` — themed vector logos and favicons

Plain HTML, CSS, and JavaScript. No build or dependency installation required.

## Local preview

```sh
python3 -m http.server 4173 --directory dist
```

Open http://localhost:4173/. Links are relative so the site also works under GitHub Pages' repository path.

## Publish to GitHub Pages

`main` holds the complete site at repository root. GitHub Pages publishes from `main:/`.

```sh
git push github main
```

The existing private Sites deployment is managed separately through `.openai/hosting.json`. Its access policy is unchanged by GitHub publication.

## Showcase refresh rule

Whenever a coding agent changes this project or reads its memory bank, refresh both `github.html` and `youtube.html` before finishing. YouTube: inspect `https://www.youtube.com/@ostipsntricks3547`, fetch newest 3–6 channel videos, and list them with exact titles, upload dates, thumbnail URLs, and watch links. GitHub: fetch the account’s public repositories, sort standalone projects by latest push, exclude forks and profile/portfolio repositories, then show the newest 3–6 projects with verified repo names, languages, push dates, and accurate descriptions. Update landing-page links only when destinations change. Never invent metadata; record source and refresh date in memory bank.

## Content

Resume-based facts belong to Neeraj Gupta. Project visuals are illustrative concepts, not employer screenshots. Content uses the September 2026 resume and work notes; the resume's headline metrics take precedence. No analytics, contact-form backend, or visitor storage. Manrope loads from Google Fonts with a system fallback. Motion respects reduced-motion preferences.
