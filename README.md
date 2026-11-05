# Chulo

A React and Vite food-menu app for exploring Nepali dishes and planning an order.

## Development

Use Node.js **22.12 or newer** (Vite 8 and ESLint 10 require a modern Node runtime).

```sh
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

The VS Code tasks provide Dev server, Build, Lint, and Test commands. This is a JavaScript project; no TypeScript/type-check script is configured. Tests use Node's built-in test runner, with no extra dependencies.

## Structure

```text
index.html                 Vite HTML entry
vite.config.js             Vite/React configuration
eslint.config.js           Lint configuration
package.json
package-lock.json
public/                    Images and icons served at stable URLs
src/
  main.jsx                 React entry and theme stylesheet
  App.jsx                  Routes, shared shell, cart and theme state
  components/
    layout/                Navbar and Footer with their styles
    ui/                    Accessible native modal and styles
  features/
    account/               Account availability dialog
    cart/                  Drawer, item controls, model, hook and tests
    menu/                  Shared dish data, categories and filter tests
  lib/                     Defensive browser storage helpers and tests
  pages/
    landing/               Landing screen, reviews, sections and styles
    menu/                  Menu screen, cards, category nav and slider
    about/                 About screen, sections and styles
    product/               Product detail screen and styles
  styles/
    theme.css              Palette tokens and semantic color roles
    app.css                App shell and shared styles
```

Components use PascalCase filenames; helpers and styles use descriptive lowercase names. Route-only components stay beside their screen. Shared menu data lives in a feature folder because both catalog and product/cart views use it. The old standalone DOM scripts and duplicated cart/auth implementations are removed. Images remain in `public/` because the catalog and CSS reference their stable URLs directly; future assets imported from JavaScript should go under `src/` beside their consumer or in `src/assets/`.

## Routes

Hash routing works with static hosting without server route rewrites:

- `/#/`: landing page and reviews
- `/#/dashboard`: menu (`/#/menu` redirects here)
- `/#/dashboard?q=momo&diet=Non-veg`: shareable search/filter state
- `/#/dashboard?section=Trending`: category navigation
- `/#/aboutus`: restaurant information
- `/#/product/1`: product details
- Unknown routes and product IDs show recovery links.

## User flows

- Search by dish name or ingredient and filter vegetarian/non-vegetarian dishes. Empty results offer a filter reset.
- Add dishes from menu cards or product details. Adjust individual quantities, remove dishes, clear the cart and review a calculated estimate. Cart items and quantities survive reloads; prices always come from the catalog. Quantities are capped at 99 per dish.
- Toggle light/dark mode from the navigation. The chosen theme persists across reloads.
- Cart and account panels use native dialogs for Escape, focus containment and restoration. Navigation, reviews, and purchase controls are keyboard accessible.

## Current boundaries

This is a frontend prototype. There is **no account, order, or payment backend**. Account inputs are disabled with an explanation, and the cart's review explicitly says that it does not place an order or charge a payment. Call the restaurant to confirm pricing and availability. The estimate retains the existing app's 13% VAT calculation; this is not a validated billing service.

Cart/theme storage is local to the browser. If storage is unavailable, the app still works in memory. External Google Fonts and the embedded location map require a network connection; critical controls do not rely on the removed Font Awesome kit.

## Verification

`npm test` covers cart merging, independent quantities, removals, limits, invalid saved data, totals, combined menu filters, catalog consistency, and storage failures. Run `npm run lint` and `npm run build` before publishing. Browser checks should cover desktop/mobile navigation, search, add/change/remove/clear, reload persistence, both themes, keyboard dialogs, and invalid routes.

## Credits

Created by Prayush Shrestha and the Chulo team for educational purposes. All rights reserved.
