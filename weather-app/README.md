# webpack-template

My personal Webpack 5 starter template for vanilla JS projects. Uses ESM config files and a three-way config split.

## What's Included

- **Webpack 5** — split config via `webpack-merge` (`common`, `dev`, `prod`)
- **HtmlWebpackPlugin** — generates HTML from `src/template.html`
- **css-loader + style-loader** — import CSS directly in JS
- **Asset handling** — images (png, svg, jpg, jpeg, gif) and fonts (woff, woff2, eot, ttf, otf) handled as `asset/resource`
- **ESLint** (`@eslint/js` + `eslint-config-prettier`) — JS linting
- **Prettier** — code formatting
- **Husky + lint-staged** — pre-commit hook runs ESLint fix + Prettier on staged `.js` files

## Project Structure

```
template/
├── .husky/               # Pre-commit hooks
├── src/
│   ├── index.js          # Webpack entry point
│   └── template.html     # HtmlWebpackPlugin template
├── dist/                 # Build output (git-ignored)
├── .gitignore
├── .prettierignore
├── .prettierrc
├── eslint.config.js
├── package.json
├── webpack.common.js     # Entry, output, plugins, loaders
├── webpack.dev.js        # eval-source-map, dev server
└── webpack.prod.js       # Production mode (minification)
```

## Getting Started

### Use this template

Click **"Use this template"** on GitHub, then:

```bash
git clone <your-new-repo>
cd <your-new-repo>
npm install
```

### Dev server

```bash
npm run dev
```

Watches `src/template.html` and live-reloads on changes.

### Production build

```bash
npm run build
```

Output goes to `dist/bundle.js`. The `dist/` folder is cleaned before each build.

## Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Webpack dev server with source maps |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Run Prettier on everything |
| `npm run check` | Format check + lint |

## Notes

- Entry point is `src/index.js` — update `webpack.common.js` if renamed
- HTML template is `src/template.html` — dev server watches this file specifically
- Config files use ESM (`type: "module"` in `package.json`) — keep `import`/`export` syntax
- Husky runs lint-staged on commit; bypass with `--no-verify` if needed (sparingly)
- No Babel — add it to `webpack.common.js` if a project needs transpilation