# Landing Page Project

A single-page marketing landing page built as part of [The Odin Project](https://www.theodinproject.com/) curriculum, practicing semantic HTML structure and CSS Flexbox layout across multiple stacked sections.

## Preview

A dark-themed hero header with nav and CTA, an info section with four cards, a testimonial/quote section, a contact call-to-action banner, and a footer.

## Sections

1. **Header / Hero** — Logo, nav links (Home, Contact, About), headline, subtext, "Contact now" button, and an image placeholder
2. **Info Cards** — "Some random information" heading with four bordered card placeholders
3. **Quote / Testimonial** — Large italic quote with an attributed credit line
4. **Contact Banner** — Highlighted call-to-action strip with a second "Contact now" button
5. **Footer** — Copyright line

## Features

- Fully sectioned layout using Flexbox for both horizontal and vertical alignment
- Consistent color palette (dark navy `#1f2937`, blue accent `#3882f6`, light backgrounds `#e5e7eb` / `#f9faf8`)
- Reusable card component styling for the info section
- Responsive height sections using `dvh` units

## Tech Stack

- HTML5
- CSS3 (Flexbox)

## Project Structure

```
landing-page-project/
├── index.html
└── style.css
```

## Getting Started

1. Clone or download this repo.
2. Move to landing-page-project directory
3. Serve it locally with the VS Code Live Server extension.

No build tools or dependencies are required — it's plain HTML and CSS.

## Known Issues / To-Do

- [ ] Replace `<h1>Header logo</h1>` with a proper `<nav>` and semantic landmark elements (`<header>`, `<main>`, `<footer>`) instead of generic `<div>`s
- [ ] Convert nav `<li>` items into actual links (`<a>`)
- [ ] Fix typo: `font-size: 18x;` on `ul` should be `18px`
- [ ] Add real images to replace the "image placeholder" and empty `.cardbox` divs
- [ ] Improve responsiveness for smaller screen widths (currently optimized for desktop)

## Credits

Design based on the classic Odin Project "Landing Page" assignment layout.
