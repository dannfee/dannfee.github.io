# Daniel F. — Personal Portfolio

A single-page developer portfolio built with Tailwind CSS, HTML5, and vanilla
JavaScript. No framework and no runtime dependencies.

**Live site:** https://dfelka.github.io/

## Tech stack

| Layer | Choice |
|-------|--------|
| Styling | Tailwind CSS v3.4 (CLI build) + a small `@layer components` layer |
| Markup | HTML5 |
| Behavior | Vanilla ES6 JavaScript |
| Hosting/CI | GitHub Pages via GitHub Actions |

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

Run `npm run build` after changing anything under `src/` or adding new utility
classes, so `assets/css/style.css` stays in sync.

## Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds Tailwind and publishes to GitHub Pages. One-time setup:
**Settings → Pages → Build and deployment → Source → "GitHub Actions."**

## License

[MIT](LICENSE)