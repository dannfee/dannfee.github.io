# Daniel F. — Personal Portfolio

A single-page developer portfolio built with Tailwind CSS, HTML5, and vanilla
JavaScript. No framework and no runtime dependencies.

**Live site:** https://dfelka.github.io/personal-page/

## Features

- Light/dark theme that follows the OS preference and remembers the user's choice
- Floating sidebar navigation that collapses to a drawer on tablet/mobile
- Animated "typing code" background rendered from the site's own source files
- Data-driven projects grid with category filters, edited in one file
- Contact section with links; an optional form composes a message via the mail app
- Keyboard-accessible, targeting WCAG 2.2 AA (skip link, focus states, ARIA states)

## Tech stack

| Layer | Choice |
|-------|--------|
| Styling | Tailwind CSS v3.4 (CLI build) + a small `@layer components` layer |
| Markup | HTML5 |
| Behavior | Vanilla ES6 JavaScript |
| Hosting/CI | GitHub Pages via GitHub Actions |

## Project structure

```
personal-page/
├─ index.html                 # the single page
├─ tailwind.config.js         # design tokens (theme.extend)
├─ package.json               # Tailwind build scripts
├─ src/
│  └─ input.css               # Tailwind entry: directives + @layer base/components
├─ assets/
│  ├─ css/style.css           # compiled output (linked by index.html)
│  ├─ js/
│  │  ├─ main.js              # behavior
│  │  └─ projects.js          # project data
│  ├─ fonts/                  # self-hosted Inter (woff2)
│  └─ img/projects/
└─ .github/workflows/deploy.yml
```

## Getting started

Requires [Node.js](https://nodejs.org/) 18+ for the Tailwind build.

```bash
npm install          # install Tailwind
npm run dev          # watch src/input.css → assets/css/style.css
```

Then serve the folder, e.g. `npx serve`, and open `index.html`.

### Build

```bash
npm run build        # one-off compile
npm run build:min    # minified output
```

## Customization

- **Projects** — edit [`assets/js/projects.js`](assets/js/projects.js) (data, no rebuild needed).
- **Theme colors** — CSS variables in [`src/input.css`](src/input.css) (`--c-accent`, `--c-page`, …),
  mapped to Tailwind in [`tailwind.config.js`](tailwind.config.js). Change a value, then `npm run build`.
- **Favicon** — an inline SVG "D" in the `<head>` of [`index.html`](index.html).
- **Content** — text, links, and the contact email live in `index.html`.

Run `npm run build` after changing anything under `src/` or adding new utility
classes, so `assets/css/style.css` stays in sync.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds Tailwind and publishes to GitHub Pages. One-time setup:
**Settings → Pages → Build and deployment → Source → "GitHub Actions."**

## License

[MIT](LICENSE).