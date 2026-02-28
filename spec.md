# Specification

## Summary
**Goal:** Add a semi-transparent disclaimer overlay caption to every image rendered across the entire frontend application.

**Planned changes:**
- Create a reusable `ImageWithDisclaimer` wrapper component that renders a dark semi-transparent banner anchored to the bottom of any image, containing the exact text: "Not reality, but a vision of tomorrow — because every child deserves dignity, not a tree for shade or a hut for shelter." in white legible text
- Replace all direct image elements across all pages (HomePage, SafeLearningPage, EcoSevaPage, EmpowermentPage, AboutPage, and any other page rendering images) with the `ImageWithDisclaimer` component
- The overlay must be visually contained within the image boundaries and must not be applied to icons, logos, or decorative SVGs

**User-visible outcome:** Every image in the app displays a dark semi-transparent disclaimer banner at its bottom edge with the specified caption text, applied uniformly across all pages.
