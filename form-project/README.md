# Form Project

A responsive sign-up form built as part of [The Odin Project](https://www.theodinproject.com/) curriculum, focused on practicing semantic HTML forms, native HTML5 validation, and CSS layout with Flexbox.

## Preview

A two-column layout: a hero section with a background image and logo on the left, and a "Create Account" sign-up form on the right.

## Features

- Semantic form markup using `<fieldset>` and `<legend>`
- Grouped form rows (First/Last Name, Email/Phone, Password/Confirm Password) using Flexbox
- Native HTML5 form validation via input `type` (`email`, `tel`, `password`) and the `required` attribute
- Custom `:focus` and `:invalid` input states for visual feedback
- Custom `@font-face` branding (Norse font) for the logo
- Fully responsive hero image background with photo attribution

## Tech Stack

- HTML5
- CSS3 (Flexbox)

## Project Structure

```
form-project/
├── index.html
├── style/
│   └── style.css
└── assets/
    ├── fonts/
    │   └── Norse.otf
    └── images/
        ├── odin-lined.png
        ├── background.jpg
        └── template/
            └── sign-up-form.png

```

## Getting Started

1. Clone this repo.
2. Move to form-project directory.
3. Open live server in Visual Studio Code.

## Known Issues / To-Do

- [ ] Add JavaScript to validate that "Password" and "Confirm Password" match before submission
- [ ] Add a real `action`/`method` (or JS handler) since the form currently has no submission logic
- [ ] Improve responsiveness for smaller screen widths (currently optimized for desktop)

## Credits

- Background photo by [Vitalii Kyktov](https://unsplash.com/@i_am_vitality) on [Unsplash](https://unsplash.com/)
- Logo/theme inspired by The Odin Project branding
