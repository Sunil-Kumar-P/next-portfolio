# Technical Architecture & Implementation Plan
*This document defines the strict engineering architecture required to fulfill the business and design requirements outlined in the `portfolio-prd.md`.*

## 1. Directory & Component Structure
We will adopt an atomic-inspired, feature-based directory structure to keep the codebase maintainable.

### `app/` (The Router Coast)
- `layout.tsx`: The global wrapper. Contains the `ThemeProvider`, `AppRouterCacheProvider`, and the global `framer-motion` `AnimatePresence` wrapper for page transitions.
- `page.tsx`: The primary container. Since we are building a single-column, story-driven scroll experience, this page will simply compose the "Chapters" in order.
- `globals.scss`: Global typography scale overrides and the foundational background `#0F1115` setting.

### `components/` (The Building Blocks)
- **`ui/` (Dumb Components, Pure Rendering)**:
  - `Typography.tsx` (Wraps MUI Typography to enforce strict variant usage)
  - `GhostNav.tsx` (The scroll-activated navigation menu)
  - `ProjectRow.tsx` (The interactive list item for projects)
  - `TimelineItem.tsx`
- **`sections/` (Smart(er) Components, Data Consumers)**:
  - `HeroSection.tsx`
  - `CraftSection.tsx` (Experience & Philosophy)
  - `ProofSection.tsx` (Projects loop)
  - `DialogueSection.tsx` (Footer & Contact)
- **`decorations/` (Visual Flair)**:
  - `ChessMotif.tsx` (SVG wrappers for the subtle chess elements)
  - `AnimatedCursor.tsx` (Handles the subtle glow effect)

### `types/` (The Data Contract)
- `portfolio.d.ts`: Mandatory TypeScript definitions that strictly mirror `dataset/portfolio_data.json` and `portfolio_extra.json`.

---

## 2. Dependency Management & Tooling

### Core Stack
- **Next.js (v16 App Router)**: Leveraging Server Components by default.
- **Material UI (v6)**: Our design system foundation.
- **Sass**: For complex selector logic (like the hover-dimming effect on sibling rows) that is cumbersome in pure MUI `sx` props.

### New Dependencies to Install
- `framer-motion`: The *only* animation library we will use. Essential for the `GhostNav` scroll triggers and staggered text entrances.
- `@mui/icons-material`: For lightweight svg icons.

---

## 3. Data Integration Strategy (The "Dumb UI" Rule)

All components in the `sections/` directory must be strictly data-driven. 
- During build/runtime, `app/page.tsx` will `import data from '@/dataset/portfolio_data.json'`.
- This data is then passed as props down into the sections.
- **No static strings** (except for structural copy like "Selected Works" or "Contact Me") should live inside the component files.

---

## 4. Performance & UX Rules

### The "Adham" Constraints (Performance)
1. **Next.js Image**: All raster images (if used) MUST use `next/image` to prevent massive layout shifts and ensure WebP delivery.
2. **GPU Acceleration**: All animations in `framer-motion` MUST target properties that do not trigger layout recalculations (`transform`, `opacity`). We will never animate `margin`, `width`, or `top`.
3. **Event Listeners**: The `GhostNav` visibility logic must use `framer-motion`'s `useScroll` hook (which is highly optimized) instead of attaching raw `window.addEventListener('scroll')` to prevent memory leaks and jank.

### The CSS `&:has()` Strategy
For the Project Rows (where hovering one dims the others), we will use modern CSS via Sass instead of complex React state to ensure perfect 60fps performance:
```scss
// Example Implementation Strategy in projects.module.scss
.projectList {
  &:has(.projectRow:hover) .projectRow:not(:hover) {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
```

---

## 5. Execution Phasing (The Dev Roadmap)

- **Phase 1: Foundation (Data & Types)**
  - Install `framer-motion` & setup `types/portfolio.d.ts`.
  - Override MUI `theme.ts` for strict typography and dark mode palette.
- **Phase 2: Global Architecture**
  - Implement the `GhostNav` logic and the global background styling.
- **Phase 3: The Story Sections**
  - Build `HeroSection`, `CraftSection`, `ProofSection`, `DialogueSection`.
- **Phase 4: The Details**
  - Refine `framer-motion` timings, insert the `ChessMotif` elements, and perform Lighthouse audits.
