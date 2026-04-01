# F-Union Africa Summit 2026

Professional landing page for the **F-Union Africa Summit 2026** — a pan-African platform connecting women leaders, entrepreneurs, and decision-makers to transform visibility into economic opportunities.

---

## 🚀 Getting Started

### 📦 Prerequisites
-   **Node.js**: v18+ (tested on v20+)
-   **NPM**: v9+

### 🛠️ Local Development
To run the project in development mode:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

> [!IMPORTANT]
> **Asset Loading**: The project uses a conditional `basePath` in `next.config.ts`. In development (`npm run dev`), assets serve from the root `/`. In production builds, they serve from `/f-union-project/` to support GitHub Pages.

---

## 🏗️ Project Architecture

The project follows a **Feature-based Atomic Architecture** within the `src` directory:

-   📂 `src/app`: **Next.js App Router**. Contains the root `layout.tsx`, global styles (`globals.css`), and the main `page.tsx`.
-   📂 `src/core`: **Shared Core**. Cross-cutting concerns used throughout the entire app.
    -   `components/`: Reusable UI elements (`Button`, `Navbar`, `Footer`, `Container`).
    -   `assets/`: Shared images, logos, and icons.
-   📂 `src/features`: **Domain-specific Features**.
    -   `landing/`: All components and screens specifically for the landing page (Hero, Speakers, Partners, etc.).
    -   `landing/components/`: Modularized sections of the single-page application.

---

## 🎨 Design System & Conventions

### Brand Colors (Tailwind Tokens)
We use a premium, high-contrast color palette defined in `tailwind.config.ts`:
-   `summit-purple`: `#2D0A54` (Primary brand color)
-   `summit-red`: `#E33E33` (Accent color)
-   `summit-blue`: `#0070B8` (Informational/Secondary blue)
-   `summit-dark`: `#1A1A1A` (Backgrounds and dark text)
-   **Hero Gradient Palette**: `#3a2051`, `#845ec2`, `#b39ddb`.

### Navigation & Anchor Mapping
The header links correspond to specific section IDs on the landing page:
-   **Vision**: `#vision` (Why/Mission section)
-   **Programme**: `#programme` (Event schedule)
-   **Intervenant(e)s**: `#speakers` (Speaker gallery)
-   **Pass**: `#pass` (Pricing/Offers)
-   **Partenaires**: `#partenaires` (Partner carousels)
-   **Contact**: `#contact` (Footer)

---

## 🏗️ Component Conventions
1.  **Strict Mutually Exclusive Visibility**: Use wrapper `div`s with Tailwind visibility classes (`hidden lg:block` vs `lg:hidden`) for elements that should toggle between mobile and desktop (e.g., Navbar CTA vs Hamburger).
2.  **Premium Aesthetics**: Prioritize glassmorphism (via `backdrop-blur`) and vibrant gradients for immersive UI elements like the mobile sidebar.
3.  **Responsive Layouts**: Always test with `max-` and standard Tailwind breakpoints to ensure consistency across distinct viewports.

---

## 🌍 Deployment

### GitHub Pages
This project is configured for automated deployment to GitHub Pages via the `gh-pages` branch.

**To build & deploy manually:**
```bash
npm run deploy
```
This script runs a build and pushes the contents of the `out/` directory to the `gh-pages` branch of the origin repository.

---

## ✍️ Contribution Notes
-   Avoid inline styles; use Tailwind utilities or predefined `core` components.
-   Keep sections decoupled within `src/features/landing/components/` for easy maintenance.
