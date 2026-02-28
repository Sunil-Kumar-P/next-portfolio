# Research: Adham Dannaway

## General Overview
**URL**: [https://adhamdannaway.com/](https://adhamdannaway.com/)
**Vibe**: Creative, dual-identity (Designer vs. Coder), highly visual.

## User's Feedback
- **Pros**: The underlying concept (showing two sides of a skillset) is very strong and memorable.
- **Cons**: The site feels heavy, unoptimized, and takes too much time to load and render, leading to a degraded user experience.

## Performance Deep Dive & Diagnosis
Why does Adham's site feel slow, and how do we prevent it in our Next.js architecture?

1. **Heavy Asset Loading (The "Big Image" Problem)**:
   - *The Issue*: The core mechanic of his site is a huge, high-resolution split image (or complex layered images) reacting to mouse movement. If these are unoptimized PNGs or heavy SVG nodes, the browser struggles to paint them quickly, especially on initial load or lower-end devices.
   - *Our Solution*: We will use Next.js `next/image` with WebP/AVIF formatting and aggressive caching. Any visual split-screen effects we do will rely on CSS `clip-path` and lightweight CSS variables rather than huge image files.

2. **DOM Heaviness & Repaints**:
   - *The Issue*: Binding animations directly to the window `scroll` or `mousemove` events without debouncing or utilizing `requestAnimationFrame` causes continuous browser repaints, tanking the frame rate (FPS).
   - *Our Solution*: By using `framer-motion`, we offload complex layout recalculations to the GPU. Framer Motion uses hardware-accelerated transforms (`transform: translate3d`) instead of animating layout properties (like `width` or `margin`).

3. **Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR)**:
   - *The Issue*: Older or traditional React SPAs download a massive JavaScript bundle before rendering anything, leading to a blank screen or "loading" state.
   - *Our Solution*: We are using Next.js 16 App Router. Our pages will be Server Components by default. The HTML and CSS will stream to the user instantly, and only the specific interactive components (like a split-screen slider) will require client-side hydration.

## Takeaways for Our Project
- We can explore a "Product vs. Engineering" concept, but it must be built using pure CSS and optimized Next.js patterns to guarantee a 100/100 Lighthouse performance score. Performance is a feature.
