# Development Guidelines & Standards

This document outlines the engineering standards and best practices for the project, catering to Frontend Engineering, UI Development, and Product Engineering roles.

---

## 🏗️ Frontend Engineering Standards
*Focus: Architecture, Performance, Maintainability.*

### 1. Component Architecture
- **Atomic Design-ish**: Organize components logically (e.g., `components/common`, `components/layout`, `components/features`).
- **Composition over Inheritance**: Use React composition patterns and hooks for logic reuse.
- **Server vs. Client**: Default to Server Components for data fetching. Use `'use client'` strictly for interactivity and hooks.

### 2. Performance & optimization
- **Image Optimization**: Always use `next/image` with proper `priority` for LCP elements.
- **Dynamic Imports**: Use `next/dynamic` for heavy components below the fold.
- **Bundle Size**: Monitor package additions. Use `@mui/material/Button` type imports to enable tree-shaking (MUI v6 handles this well, but be mindful).

### 3. State Management
- **Local State**: Use `useState`/`useReducer` for UI-only state.
- **Global State**: Use Context API for theme/auth. Avoid heavy global state libraries unless strictly necessary.
- **URL as State**: Use query params for filtering/sorting to ensure shareable links.

---

## 🎨 UI Development Standards
*Focus: Aesthetics, Theming, Consistency, UX.*

### 1. Material UI (MUI) v6
- **Theme First**: Never Use hardcoded colors or spacing. Always access the theme via `sx` prop or `useTheme()` hook: `sx={{ mb: 2, color: 'primary.main' }}`.
- **Theming**: Centralize all global styles in `theme.ts`. Use `components.styleOverrides` for project-wide consistency.
- **Baseline**: `CssBaseline` must always be at the root to normalize cross-browser styles.

### 2. Sass Strategy
- **Scoped Styles**: Use `.module.scss` for component-specific styles that MUI cannot easily handle.
- **Global Utilities**: Use `globals.scss` for resets and root CSS variables ONLY.
- **Nesting**: Use Sass nesting sparingly (max 3 levels) to keep selectors readable.

### 3. Responsive Design
- **Mobile First**: Design for smaller screens first, then use MUI breakpoints (`xs`, `sm`, `md`, etc.) to scale up.
- **Fluidity**: Use `rem` units for typography and relative units (%) for layout containers.

---

## 🚀 Product Engineering & Strategy
*Focus: User Centricity, Scalability, Data Integrity, and Strategic Value.*

### 1. The PRD/BRD First Approach
- **Requirements defined**: No component is built without a clear "Why" and "Who". 
- **Research-Driven**: Every feature must solve a specific problem for the target audience (Recruiters, Tech Leads, Open Source Collaborators).
- **PRD Alignment**: All development must map back to the active PRD (located in `docs/strategy/`).

### 2. Analytical Mindset
- **Competitive Analysis**: Review top-tier portfolios periodically to ensure our implementation is "Best in Class".
- **Feedback Loops**: Components should be designed with instrumentation in mind (e.g., event tracking placeholders).

### 3. Next.js 16 Mastery
- **PPR (Partial Prerendering)**: Design layouts to support PPR for maximum perceived performance.
- **Server Actions**: Use Server Actions for all data mutations to simplify the mental model and improve security.

### 4. Accessibility & SEO
- **Semantic SEO**: Use structured data (JSON-LD) for projects and professional experience.
- **Inclusive UI**: Maintain 100% WCAG compatibility.

---

## 🛠️ Tooling & Workflow
- **Linting**: Follow `.eslintrc.json` rules strictly.
- **Commits**: Use conventional commits (e.g., `feat:`, `fix:`, `refactor:`).
- **Environment**: Always use Node v24 LTS (or current active version).
