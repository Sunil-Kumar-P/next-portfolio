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
- **The Chess Motif**: We will subtly weave the chess theme into the UI. For example, instead of a standard loading spinner or generic bullet points, we might use minimalist SVG outlines of chess pieces (like a Knight or King). The active state of the "Ghost Nav" might be a subtle checkerboard hover effect or a pawn moving forward.

## 4. The Flow & Wireframe Structure
We are abandoning the traditional "portfolio template" (sidebar + content) in favor of a fluid, story-driven scroll experience. The goal is to make the reviewer feel a personal connection.

### Global Layout & Navigation
- **Menu Strategy (The "Ghost" Nav)**: There is NO permanent navigation menu on the screen. The screen is dedicated 100% to the story. When the user scrolls up, or hovers near the top edge, a minimalist menu slowly and softly glows into existence. When they scroll down or move away, it dims and disappears.
- **Scroll Architecture**: A single, beautifully paced vertical column.

### Section-by-Section "Story chapters"
1. **Chapter 1: The Human (Hero Section)**:
   - A massive, gorgeous typographic introduction. Who is Sunil? Not just a "Software Engineer, a meticulous problem listener, and a relentless problem solver (even when the solution is elusive)." This sets the tone that they are hiring a human, not just a coder.
2. **Chapter 2: The Craft (Experience & Philosophy)**:
   - Instead of a dry timeline, we weave your experience into a narrative. Short, punchy paragraphs about *how* you build things, accompanied by the timeline of where you've been.
3. **Chapter 3: The Proof (Selected Works)**:
   - Large, immersive project presentations. Not a grid of cards, but full-width sections for each major project, detailing the problem, the solution, and the human/business impact.
4. **Chapter 4: The Dialogue (Contact)**:
   - A warm, inviting footer. "Let's build something great together."

## 5. Asset & Animation Strategy
- **Animations (Framer Motion)**:
  - *The Ghost Nav*: `opacity: 0` to `opacity: 1` with a long transition (`duration: 0.8`) tied to scroll direction.
  - *Cursor*: A custom highly-subtle glow effect tracking the mouse (optional, must be performant).
- **Assets Needed**:
  - We need valid `href` links for all projects.
  - If we use images, they must be formatted as `.webp` using Next.js `<Image>` component for instant loading (avoiding Adham's performance trap).
  - Icons: We will use `@mui/icons-material` for consistency and SVG performance.

## 6. Narrative & Copywriting (The Story)
*This section contains the actual text and themes we will use in the UI.*

### The Origin (Draft)
*Theme: Fascination, early exposure, and the drive for autonomy.*
"It started with keypad phones and settings menus. When my family got our first smartphone, an entire new world opened up. By 10th grade, while others followed traditional paths, I chose a diploma in Computer Science. The goal wasn't just to write code—it was to build my own 'Jarvis'. To automate my life, to gain the wisdom and confidence to build anything I could imagine, and to reach a point where my only true concern is the health and longevity of my family."

### The Philosophy & Superpower (Draft)
*Theme: Embracing chaos, root-cause analysis, and extreme composure.*
"When I see bad code—code that crashes, takes forever to load, or hemorrhages money—I don't get frustrated. I smile. Then I laugh. Chaos is just an opportunity to learn something new or contribute a fix. It makes you stronger. When things break and others panic, randomly pushing blame or overcomplicating the issue, I stay completely calm. Juniors ask me how. I tell them: 'None of the noise matters. Figure out the full story, find the exact reason it failed, and fix it.' Because every single time I've taken that approach, I've been right."

### The Energy & the "Why Me" (Draft)
*Theme: Unstoppable momentum, infectious positivity, and deep empathy.*
"Tech skills can be taught, but energy is innate. When people start talking with me, the silence vanishes. There are no empty moments. I don't know if it's a specific skill, but I've noticed a pattern: every single person around me, even if they are depressed or angry, ends up with a happy smile. They feel heard, they feel comfortable, and they open up. You aren't just hiring a developer to write Next.js; you are hiring a person who will make your team smile through the hardest sprints."

### Outside the Terminal
*Theme: Strategy and Teamwork.*
"When I'm not architecting web platforms, you can find me analyzing moves on a chessboard or spiking on the volleyball court. Both teach me the same lesson: whether it's a quiet strategic battle or high-energy teamwork, you have to read the room, anticipate the next move, and always play to win."

## 7. Fundamental Development Rules
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
