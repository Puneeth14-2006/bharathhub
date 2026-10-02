# BharathHub — One Hub. Every Local Need.

Multi-role local commerce platform frontend (Customer, Shop Owner, Delivery Partner, Admin).

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- React Router v6
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Logging in (mock auth)

There is no real backend yet. Go to `/login`, pick one of the four role
cards (Customer, Shop Owner, Delivery Partner, Admin), enter any
email/password, and you'll be redirected to that role's dashboard.
Session is kept in `localStorage` under `bharathhub_session`.

## Project Structure

```
src/
├── components/      Shared UI: Logo, Navbar, Footer, cards, charts, DashboardShell...
├── layouts/         CustomerLayout, ShopLayout, DeliveryLayout, AdminLayout
├── pages/
│   ├── landing/      Marketing homepage
│   ├── auth/         Login, Register
│   ├── customer/      10 pages (dashboard, shops, cart, orders...)
│   ├── shop/          9 pages (dashboard, products, inventory, sales...)
│   ├── delivery/       8 pages (dashboard, deliveries, earnings...)
│   └── admin/          11 pages (dashboard, users, shops, payments...)
├── data/            mockData.js — all mock/static data, ready to swap for API calls
├── context/         AuthContext.jsx — mock auth, swap for real JWT later
├── routes/          ProtectedRoute.jsx — role-based route guard
└── App.jsx          All routing
```

## Connecting a real backend later

- Replace the mock `login()` / `logout()` in `src/context/AuthContext.jsx`
  with real calls to your Node/Express API, and store the returned JWT
  instead of a plain session object.
- Replace the contents of `src/data/mockData.js` with API calls (e.g. via
  `fetch` or a small API client) — components already consume this data
  as plain arrays/objects, so swapping the source is a drop-in change.
- `ProtectedRoute` already checks `user.role`; once you verify a JWT and
  decode its role claim there instead of trusting localStorage, the rest
  of the app needs no changes.

## Design System

- Primary: Deep blue (`navy` palette, e.g. `#0F3D63`)
- Secondary: Orange (`saffron` palette, e.g. `#EC7A2A`)
- Supporting: Green (`leaf` palette) and Violet (admin accent)
- Fonts: Sora (display/headings) + Inter (body)

All tokens live in `tailwind.config.js`.
