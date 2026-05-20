# Sunday Table

A clean, elegant restaurant website built with vanilla JavaScript and Webpack.
Live demo: [sunday-table.netlify.app](https://sunday-table.netlify.app)

---

## About

Sunday Table is a multi-page restaurant website built as a Single Page Application (SPA) using vanilla JavaScript — no frameworks, no libraries, just pure HTML, CSS, and JS. The project was built to practice frontend fundamentals including CSS architecture, client-side routing, and modern build tooling with Webpack.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 with custom properties (CSS variables)
- Vanilla JavaScript (ES Modules)
- Webpack 5
- Netlify (deployment)

---

## Project Structure

```
restaurant-page/
├── src/
│   ├── pages/
│   │   ├── home.js
│   │   ├── menu.js
│   │   └── about.js
│   ├── css/
│   │   ├── index.css
│   │   ├── home.css
│   │   ├── menu.css
│   │   └── about.css
│   ├── template.html
│   └── index.js
├── webpack.config.js
└── package.json
```

---

## 🚀 Getting Started

Clone the repository and navigate to the project folder.

```bash
git clone https://github.com/Feziek/odin-projects.git
cd restaurant-page
```

Install dependencies and start the development server.

```bash
npm install
npx webpack serve
```

Build for production.

```bash
npx webpack
```

---

## Color System

All colors are defined as CSS custom properties in `index.css`.

| Variable | Value | Usage |
|---|---|---|
| `--primary` | `#a8c8e8` | Dividers, blobs |
| `--primary-dark` | `#6a9ec5` | Labels, subtle text |
| `--primary-light` | `#d6eaf8` | Light backgrounds |
| `--accent` | `#5b8db8` | Prices, tags, active state |
| `--text-dark` | `#1b2f45` | Headings, featured cards |
| `--text-light` | `#f0f7ff` | Card backgrounds |
| `--hero-gradient` | `135deg #d6eaf8 → #6a9ec5` | Hero section |
| `--button-bg` | `#5b8db8` | CTA buttons |
| `--white` | `#ffffff` | Section backgrounds |