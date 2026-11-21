# Shopping Cart

A small e-commerce front end built for [The Odin Project](https://www.theodinproject.com/) React course. Browse products, add them to a cart, adjust quantities, and see your running total.

## Features

- Home, Shop, and Cart pages with client-side routing
- Products fetched from an API, with a loading state
- Product cards with a quantity input; a product already in the cart shows "Already in Cart"
- Cart page with +/- quantity controls (minimum 1), a remove button, per-item subtotals, and an order total
- Live item count badge in the navbar
- Empty-cart message with a link back to the shop
- Checkout button that shows a toast notification (there is no backend or payment flow)
- Responsive layout from phones to desktop

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/)
- [react-hot-toast](https://react-hot-toast.com/)
- CSS Modules

## Getting started

You need Node.js (a current LTS version is recommended) and npm.

```bash
# clone the monorepo and move into this project
git clone https://github.com/Feziek/odin-projects.git
cd odin-projects/shopping-cart-project

# install dependencies
npm install

# start the dev server
npm run dev
```

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite dev server            |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
| `npm test`        | Run the tests in watch mode          |

## Project structure

```text
shopping-cart-project/
├── routes.jsx               # Route config: App at "/" with Home, Shop, Cart as children
├── index.html
├── tests/                   # Vitest + React Testing Library
└── src/
    ├── main.jsx
    ├── App.jsx              # Owns cart state and handlers, renders Navbar + Outlet
    ├── index.css            # Global tokens (colors, radius) and base styles
    ├── styles/              # Holds CSS modules for pages
    ├── components/
    │   ├── Navbar/          # Links and cart count badge
    │   ├── ProductCard/     # Product display and quantity input
    │   └── CartItem/        # One row in the cart
    ├── hooks/
    │   └── useProducts.jsx  # Custom hook that fetches the product list
    └── pages/
        ├── Home.jsx
        ├── Shop.jsx
        └── Cart.jsx
```

Each component has its own `.module.css` file next to it.

## How it works

**State lives in one place.** `App.jsx` holds the cart as an array of items shaped like `{ id, title, image, price, quantity }`. Pages never receive the raw `setCart`. They get the cart and a few wrapper handlers through the router's `<Outlet context>` and read them with `useOutletContext`.

**Handlers use functional updates.** Each one calls the state setter with a function of the previous state, so quick repeated clicks always work against the latest cart:

- `addToCart` ignores the call if the product id is already in the cart, otherwise appends a new item
- `updateQuantity` maps over the cart and returns a new object for the matching item, never going below 1
- `removeFromCart` filters the item out
  **Derived values are not stored.** The navbar count and the cart total are computed with `reduce` on every render, so they can't drift out of sync with the cart.

**Product cards stay presentational.** The Shop page works out whether a product is in the cart and passes each card a plain `isInCart` boolean plus a callback. The card owns only its quantity input.

## Known limitations and ideas

- The cart is kept in memory only, so it resets on page refresh
- Checkout shows a toast and does not clear the cart
- The product fetch has a loading state but no error state yet

## Testing

Tests use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

```bash
npm test          # watch mode
npm test -- --run # run once
```

- **Component tests** (`ProductCard`, `CartItem`, `Navbar`) check what each one renders and which callbacks it fires, with no router or cart state involved.
- **Flow tests** (`App.test.jsx`) render the real routes with an in-memory router and a mocked `useProducts`, then click through the app: adding a product, the navbar count, the cart total, changing quantities (never below 1), removing items, the empty cart message, and the checkout toast.

## Deployment note

This is a single-page app, so a static host needs a rule that rewrites all paths to `index.html`. Otherwise refreshing on `/shop` or `/cart` returns a 404. The Vite dev server already handles this locally.

## Credits

Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.
