# Scadence Automation — Project Description

This is a small responsive React frontend built with Vite. It demonstrates a marketing-style landing page for a fictional company "Scadence Automation" that provides industrial automation services (marine, oil & gas, pharma, panel manufacturing, VFD retrofitting, and IoT/cloud integration).

Key technologies

- React (functional components)
- Vite for bundling and dev server
- lucide-react for icons
- Inline styles for component layout

## How the app is structured

Top-level

- `index.html` — Application entry that mounts the React app at `#root`.
- `package.json` — Scripts and dependencies (vite, react, lucide-react). Use `npm run dev` to serve.

Source (src/)

- `src/main.jsx` — App bootstrap: imports global CSS and renders `App`.
- `src/App.jsx` — Page composition. Renders `Navbar`, `Hero`, `About`, `Services`, `Features`, and `Footer` in order.

Components (`src/components/`)

- `Navbar.jsx` — Fixed, responsive navigation. Uses `useScrollPosition` to toggle a border when scrolled and `useResponsive` to switch between mobile and desktop layouts. Imports `scadance-logo.png` from `src/assets`.
- `Hero.jsx` — Hero section with primary CTA buttons and fluid typography. Uses `ChevronRight` icon from lucide-react.
- `About.jsx` — Responsive About section showcasing company capabilities and stats. Includes a small decorative geometric illustration using inline styles.
- `Services.jsx` — Section that lists all services by mapping `src/data/services.js` to `ServiceCard` components.
- `ServiceCard.jsx` — Card used by `Services.jsx`. Displays a blurred background image (from `service.images`), overlay, icon, title, summary, and tech badges. Provides hover interactions on non-mobile.
- `Features.jsx` — Small grid of features (icon + title) sourced from `src/data/features.js`.
- `Footer.jsx` — Contact information and links, responsive layout, and simple bottom bar.

Data (`src/data/`)

- `features.js` — Exports an array of feature objects (title + lucide-react icon). Used by `Features.jsx`.
- `services.js` — Exports an array of service objects (id, title, icon, summary, tech, color, images). Imports many images from `src/assets` and uses colors from `src/styles/theme.js`.

Hooks (`src/hooks/`)

- `useResponsive.js` — Tracks window width/height and exposes helpful booleans (isMobile, isTablet, isLaptop, isDesktop, isUltrawide). Useful for responsive rendering in components.
- `useScrollPosition.js` — Returns `window.scrollY` and subscribes to scroll events. Used by `Navbar.jsx` to adjust styles when the page scrolls.

Styles (`src/styles/`)

- `index.css` — Global CSS reset and responsive typography rules. Contains comments mapping to images used by the services data.
- `theme.js` — Exports a theme object with named colors used throughout components.

Other

- `src/pages/Home.jsx` — Present but empty. Could be used later to host the assembled page or for routing.

## Notes & recommendations

- Inline styles are used throughout. For scaling the project, consider adopting a more maintainable styling solution (CSS Modules, Tailwind, or styled-components).
- Ensure all images referenced in `src/data/services.js` exist under `src/assets/`. If any are missing, the build may fail due to import errors.
- `README_DETAILS.md` was added because the existing `README.md` could not be read; consider replacing or fixing the original `README.md` if you want a single canonical README.

## Running the project

1. npm install
2. npm run dev

Linting and build

- npm run lint
- npm run build

## Contact

This is a demo scaffold. If you'd like more detailed documentation (component API, prop-types, or storybook), tell me which parts to expand and I will add them.
