# Neeraj Gupta

Personal portfolio: enterprise engineering, independent projects, and career experience.

**Live site:** https://neeraj15022001.github.io/neeraj-gupta/

## Pages

- `index.html` — animated landing page
- `corporate/index.html` — corporate work, experience, case studies, and résumé
- `github.html` — public project showcase
- `youtube.html` — latest videos from OS Tips n Tricks
- `blog.html` — latest posts from Neeraj’s Dev.to profile
- `connect.html` — WhatsApp/email message composers with prefilled app handoff and LinkedIn profile link
- `connect-links.mjs` — validated, tested WhatsApp and `mailto:` URL builders
- `brand.css` — shared monogram, page entrance animation, and 1240px content shell
- `assets/` — themed vector logos and favicons

Plain HTML, CSS, and JavaScript. No build or dependency installation required.

## Local preview

```sh
python3 -m http.server 4173
```

Open http://localhost:4173/. Links are relative so the site also works under GitHub Pages' repository path. Run `node --test tests/connect-links.test.mjs` to verify contact URL construction.

## Publish to GitHub Pages

`main` holds the complete site at repository root. GitHub Pages publishes from `main:/`.

```sh
git push github main
```

The existing private Sites deployment is managed separately through `.openai/hosting.json`. Its access policy is unchanged by GitHub publication.

## Showcase refresh rule

Whenever a coding agent changes this project or reads its memory bank, refresh `github.html`, `youtube.html`, and `blog.html` before finishing. YouTube: inspect `https://www.youtube.com/@ostipsntricks3547`, fetch newest 3–6 channel videos, and list them with exact titles, upload dates, thumbnail URLs, and watch links. GitHub: fetch the account’s public repositories, sort standalone projects by latest push, exclude forks and profile/portfolio repositories, then show the newest 3–6 projects with verified repo names, languages, push dates, and accurate descriptions. Dev.to: inspect `https://dev.to/neeraj15022001`, fetch up to the six newest authored articles from `https://dev.to/api/articles?username=neeraj15022001&per_page=6`, and list exact titles, publish dates, cover images when available, canonical article URLs, and verified tags. Show fewer only when fewer exist. Never invent metadata; record source and refresh date in memory bank.

## Content

Resume-based facts belong to Neeraj Gupta. Project visuals are illustrative concepts, not employer screenshots. Content uses the September 2026 resume and work notes; the resume's headline metrics take precedence. Contact drafts are not stored; the page hands messages to WhatsApp or the visitor’s email app. No analytics, contact-form backend, or visitor storage. Manrope loads from Google Fonts with a system fallback. Motion respects reduced-motion preferences.
