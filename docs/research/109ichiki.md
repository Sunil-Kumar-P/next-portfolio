# Research: 109ichiki.com

## General Overview
**URL**: [https://109ichiki.com/](https://109ichiki.com/)
**Type**: Illustration & 3D Artwork Portfolio
**Vibe**: Playful, vibrant, highly interactive, "kawaii" aesthetic.

## Tech Stack & Architecture (Inferred)
Based on structural analysis of the DOM:
- **Core Technology**: Heavy reliance on WebGL. The HTML is packed with `<canvas>` wrapping elements like `data-js="footer-gl-holo"`, `data-js="transition-overlay"`, and `data-js="footer-gl-meme"`. 
- **Libraries**: Likely **Three.js** or **PixiJS** for 2D/3D WebGL rendering.
- **Styling**: Scoped CSS modules (evident from class names like `_root_3fli2_1`, `_dialog_183c8_11`).
- **Framework**: Use of `<template>` tags and custom data attributes (`data-js`) suggests a custom vanilla JS orchestrator or a lightweight framework rather than a heavy SPA like Next.js (no `_next` artifacts found).

## Notable Features
1. **WebGL Overlays**: Uses canvas elements for global transition effects (`transition-overlay`), providing seamless, fluid page changes instead of hard reloads.
2. **Interactive 3D Elements**: Prominent integration of 3D characters ("mochiusa", "meme-chan") directly into the footer and UI.
3. **Custom Scrollbar**: Replaces the native browser scrollbar with a custom implementation (`data-scrollbar="container"`).
4. **Dialog System**: Custom modal system (`data-js="at109-dialog"`) for displaying detailed text or interactive easter eggs.

## Takeaways for Our Project
- **Transitions Matter**: fluid page transitions elevate the perceived quality. We should explore `framer-motion` `AnimatePresence` in Next.js to achieve a similar seamless feel between pages.
- **Customization Over Native**: Custom scrollbars and cursors (if used sparingly) add a premium "app-like" feel that standard sites lack.
