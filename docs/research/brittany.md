# Research: Brittany Chiang

## General Overview
**URL**: [https://brittanychiang.com/](https://brittanychiang.com/)
**Vibe**: Minimalist, text-forward, highly responsive, "developer-first".

## User's Feedback
- **Pros**: Perfect simplicity, "pin-point" focus on content, excellent execution across both desktop and mobile views.
- **Cons/Risks**: It is almost *too* popular. Copying this layout directly will make the portfolio look like a generic template rather than an original product.

## Deep Dive Analysis
- **Layout Architecture**: 
  - Desktop: Uses a fixed left column (Navigation & Intro) and a scrolling right column (Content). This keeps the user's focus grounded while allowing deep exploration of projects.
  - Mobile: Gracefully collapses into a standard single-column scrolling view.
- **Micro-Interactions**: 
  - The most famous element is the subtle radial gradient "glow" that follows the user's cursor.
  - Hover states on project cards slightly highlight the active card while dimming the others (focus state).
- **Typography**: Exceptionally well-spaced. Relies on Inter/sans-serif fonts with varying font weights and distinct slate/teal colors to create hierarchy without needing borders or boxes.

## How We Will Adapt This (Without Copying)
1. **The Layout**: Instead of the exact left/right split, we can use a dynamic grid layout (thanks to MUI v6) that achieves the same "always accessible navigation" but feels bespoke.
2. **The Glow Effect**: We can implement mouse-tracking for interactive elements, but perhaps apply it to the borders or backgrounds of specific "Project Concept" cards rather than a global spotlight, giving it a unique twist.
3. **The Focus**: We will steal her masterful use of typography and whitespace. Our Sass/MUI setup allows us to perfectly tune line heights and letter spacing.
