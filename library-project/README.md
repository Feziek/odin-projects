# odin-library 📚

A simple browser-based library app built as part of [The Odin Project](https://www.theodinproject.com/) full-stack curriculum.

## Features

- Add books to your library via a modal form
- Each book displays its title, author, pages, and a unique serial ID
- Form validates that all fields are filled before submitting
- Books render dynamically as cards
- Modal animates in from the top of the screen
- Background blurs when the modal is open

## Known Limitations

- **No persistent storage** — books are lost on page refresh since everything lives in memory
- **No delete/edit** — you can't remove or update a book once it's added
- **No duplicate check** — the same book can be added multiple times
- **Status is always "Available"** — there's no way to toggle a book as checked out