# Portfolio Product Requirements Document (PRD)

## 1. Executive Summary
The goal is to build a "Best-in-Class" professional portfolio that showcases Sunil-Kumar-P's skills as a Fullstack Engineer, UI Developer, and Product Engineer. The portfolio will leverage Next.js 16, Material UI v6, and Sass to deliver a performant, accessible, and visually stunning experience.

## 2. Target Audience
- **Tech Recruiters**: Looking for quick access to skills, experience, and contact info.
- **Hiring Managers/Tech Leads**: Looking for technical depth, code quality, and problem-solving abilities.
- **Peer Developers**: Looking for inspiration and evidence of modern tech stack mastery.

## 3. Visual Design Language & Theme
To achieve the premium feel of Himanshu's portfolio while maintaining Brittany Chiang's typography focus, we will use the following design system:

- **Theme Mode**: Strict Dark Mode. It feels more "developer-centric" and makes bright accent colors pop.
- **Color Palette (MUI `theme.ts`)**:
  - *Background*: Deep Obsidian (`#0F1115` or `#121212`) - Not pure black.
  - *Surface/Cards*: Elevated Dark (`#1A1D24`) with subtle 1px semi-transparent borders (glassmorphism hint).
  - *Primary Accent*: Electric Cyan (`#00E5FF`) or Neon Purple (`#BB86FC`) - Used *very* sparingly for active states, links, and the hero highlight.
  - *Text*: Primary (`#E2E8F0` - off white for less eye strain), Secondary (`#94A3B8` - slate gray for descriptions).
- **Typography**:
  - *Headings*: **Outfit** or **Plus Jakarta Sans** (Modern, geometric, confident).
  - *Body*: **Inter** (The industry standard for perfect legibility).
  - *Monospace (Code/Tags)*: **Fira Code** or **JetBrains Mono**.

## 4. The Flow & Wireframe Structure
We will avoid the "generic template" by using an asymmetrical, sticky-scroll architecture.

### Global Layout
- **Container**: Max-width capped at `1200px` to keep line lengths readable.
- **Desktop Grid**: 40% Left / 60% Right split.
  - *Left (Sticky)*: Hero pitch, Navigation links (that highlight on scroll), Social links. It stays fixed as the user scrolls.
  - *Right (Scrollable)*: The content (Experience, Projects, Skills).
- **Mobile Grid**: Single column. Left section becomes the top header; Right section scrolls normally below it.

### Section-by-Section Components
1. **Hero (Left Sticky Nav)**: Large typography for Name. A dynamic, typed, or staggered-fade-in Role description. Minimalist navigation menu.
2. **Experience (Right Column)**: A vertical timeline (no boxes, just text aligned to a subtle vertical line to mimic Brittany Chiang's clean approach).
3. **Projects (Right Column)**: 
   - Not flat cards. We will use interactive, slightly elevated "rows" containing a small thumbnail on the left, and data (Title, Tech Stack Chips, **Business Impact**) on the right. 
   - *Interaction*: Hovering a project row gently dims the other rows.
4. **Skills (Right Column)**: Instead of a boring list, we'll use an irregular `display: flex; flex-wrap: wrap` cluster of pill-shaped MUI `<Chip>` components that fade in staggardly on scroll.

## 5. Asset & Animation Strategy
- **Animations (Framer Motion)**:
  - *Entrance*: Staggered fade-up (`y: 20, opacity: 0` to `y: 0, opacity: 1`) when sections enter the viewport.
  - *Cursor*: A custom highly-subtle glow effect tracking the mouse (optional, must be performant).
- **Assets Needed**:
  - We need valid `href` links for all projects.
  - If we use images, they must be formatted as `.webp` using Next.js `<Image>` component for instant loading (avoiding Adham's performance trap).
  - Icons: We will use `@mui/icons-material` for consistency and SVG performance.

## 6. Fundamental Development Rules
To guarantee a "Best in Class" result that ranks above 95 on Lighthouse, we will adhere to these non-negotiable rules:

- **Rule 1: Content Separation**: UI components must remain dumb. All text and data must flow from `dataset/portfolio_data.json` and `portfolio_extra.json`.
- **Rule 2: Server First**: In Next.js 16, every page and component defaults to a Server Component. We only use `'use client'` at the very edges of the tree where `framer-motion` or React state (`useState`) is strictly required.
- **Rule 3: Performance Checkpoints**: We optimize images *during* implementation using `<Image>` and WebP, not at the end. (The Adham Lesson).
- **Rule 4: The "Anti-Template" Layout**: We will use MUI v6's CSS Grid system to create asymmetric or staggered layouts, preventing the "cookie-cutter" look of standard bootstrap templates (The Brittany Lesson).
- **Rule 5: Motion with Purpose**: `framer-motion` will be used for entrance and scroll reveals, but *never* tied directly to aggressive mouse-move loops on heavy DOM elements to preserve rendering speed.

## 5. Strategic Recommendations for Your Success
To make this portfolio truly stand out, I strongly recommend you (the USER) focus on the following while I build the code:

1. **Audit Your JSON Data**: Go into `portfolio_data.json` and ensure your project descriptions are punching hard. Change "A weather app using React" to "Architected a real-time weather dashboard using React Query, reducing data fetching latency by 40%."
2. **Curate, Don't Dump**: Only show your absolute best work. 3 spectacular projects speak louder than 10 mediocre ones. We can create an "Archive" section for the lesser ones later.
3. **High-Quality Assets**: If you have project screenshots, ensure they are high-res, clean, and ideally wrapped in a browser or phone mockup frame for a premium feel.

## 6. Implementation Phases (Next Steps)
- **Phase 1 (Data & Types)**: Define strict TypeScript interfaces for our JSON data.
- **Phase 2 (Architecture)**: Setup `framer-motion` and build the global layout wrapper, custom animated cursor (if desired), and navigation structure.
- **Phase 3 (Sections)**: Build the Hero, Skills, Projects, and Experience sections iteratively.
- **Phase 4 (Polish)**: Audit with Lighthouse, tune animations, and ensure perfect mobile responsiveness. 

## 6. Technical Stack
- **Framework**: Next.js 16 (App Router)
- **UI Library**: Material UI v6
- **Styling**: Sass (.scss)
- **Data**: JSON (`dataset/`)
- **Hosting**: Vercel/similar (TBD)
