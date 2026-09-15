# CV Application

A React app for building a CV/resume — fill out your details across three sections, edit or delete individual entries, and see a live, styled preview of the finished document.

Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application)'s React curriculum.

**[Live demo](#https://create-your-cv-inky.vercel.app/)**

## Features

- **General Info** — name, email, and contact number
- **Education** — add, edit, and delete multiple entries (university, title of study, date graduated)
- **Experience** — add, edit, and delete multiple entries (company, position, responsibilities, date range)
- **Live preview** — a formatted CV document that updates as you fill in and submit each section
- Each section supports independent edit/submit, with previously entered values pre-filled when editing

## Tech stack

- React (function components + hooks)
- Vite
- Plain CSS (no framework)

## Project structure

```
src/
├── components/
│   ├── GeneralInfo.jsx
│   ├── EducationSection.jsx
│   ├── EducationEntry.jsx
│   ├── ExperienceSection.jsx
│   ├── ExperienceEntry.jsx
│   └── PreviewCV.jsx
├── styles/
│   ├── App.css
│   └── Preview.css
└── App.jsx
```

- `App.jsx` holds all form data in state (`info`, `education`, `experience`) as the single source of truth, and passes it down along with updater functions.
- `EducationSection` / `ExperienceSection` map over their respective arrays and render one entry component per item, plus an "Add" button.
- Each `*Entry` component manages its own edit/display toggle locally, and reports changes back up via props.
- `PreviewCV` reads the same state from `App` and renders it as a formatted, read-only CV.

## What I practiced

- Lifting state up so multiple components (editors + preview) share one source of truth
- Updating one item in an array of objects immutably, matched by a unique `id`
- Passing setter/updater functions down as props
- Conditional rendering to toggle between edit and display views
- Controlled vs. uncontrolled inputs (`FormData` + `defaultValue`)

## Credits

Built as part of The Odin Project's [CV Application](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) Project.
