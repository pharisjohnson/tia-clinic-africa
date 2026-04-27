# Tia Clinics Africa

This project is a high-end, responsive website for **Tia Clinics**, a premier aesthetic and wellness clinic based in Nairobi. It is built using modern web technologies focusing on performance, type safety, and a luxury visual aesthetic.

## Project Overview

- **Architecture:** TanStack Start (Full-stack React framework building on TanStack Router).
- **Styling:** Tailwind CSS 4.0 with a custom luxury design system.
- **Components:** Radix UI primitives via Shadcn/UI.
- **Deployment:** Configured for Cloudflare (Pages/Workers).
- **Development Tooling:** Managed via Lovable, using Vite and TypeScript.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing & SSR:** [TanStack Start](https://tanstack.com/router/v1/docs/guide/start/overview) / [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/) (Radix UI)
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Package Manager:** [Bun](https://bun.sh/) (preferred) or NPM

## Building and Running

### Development
```bash
bun dev
# or
npm run dev
```

### Build for Production
```bash
bun build
# or
npm run build
```

### Linting & Formatting
```bash
bun lint      # Run ESLint
bun format    # Format with Prettier
```

## Project Structure

- `src/routes/`: File-based routing using TanStack Router.
    - `__root.tsx`: The root layout and shell.
    - `index.tsx`: The landing page with Hero, Services, and Testimonials.
- `src/components/`:
    - `ui/`: Low-level Shadcn/UI components.
    - `site-header.tsx` & `site-footer.tsx`: Layout-specific components.
- `src/styles.css`: Global Tailwind 4.0 configuration and custom design system (Pink, Gold, Ink palette).
- `src/lib/utils.ts`: Helper functions (e.g., `cn` for Tailwind class merging).
- `src/assets/`: Clinical and lifestyle imagery for the clinic.

## Design System

The project uses a custom luxury theme defined in `src/styles.css` using the Tailwind 4.0 `@theme` block:
- **Primary Color:** Pink (`#f15d8d` / `oklch(0.68 0.18 358)`), often referred to as "Gold" in utility classes for legacy/aesthetic reasons.
- **Secondary Color:** Light ivory/white (`oklch(0.97 0 0)`).
- **Accent/Text Color:** Ink/Forest (`oklch(0.16 0 0)`).
- **Typography:**
    - Serif: *Cormorant Garamond* (Headings)
    - Sans: *Manrope* (Body)
    - Small Caps: *Cormorant SC* (Eyebrows, Buttons)

## Development Conventions

1.  **Type Safety:** Leverage TanStack Router's type-safe routing. Always define routes using `createFileRoute`.
2.  **Styling:** Use Tailwind utility classes. For semantic clinic-specific styles (e.g., `.btn-gold`, `.eyebrow`), refer to the definitions in `src/styles.css`.
3.  **Components:** When adding new UI elements, prefer extending existing Shadcn components in `src/components/ui/`.
4.  **Assets:** Use the `@/assets/` alias for importing images and logos.
