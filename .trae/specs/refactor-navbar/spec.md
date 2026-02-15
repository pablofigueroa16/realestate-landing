# Refactor Navbar Spec

## Why
The current navigation logic is embedded within the `Hero` component, making it difficult to maintain and reuse. Additionally, the current implementation lacks a proper mobile menu and sticky behavior, which are essential for a modern, user-friendly experience across devices.

## What Changes
- Extract the navigation bar logic and UI from `src/components/Hero.tsx` to a new component `src/components/Navbar.tsx`.
- Implement a sticky/fixed positioning strategy for the Navbar so it remains visible while scrolling.
- Add a comprehensive mobile navigation menu with a hamburger toggle, animated transitions, and proper state management.
- Ensure the new Navbar uses the existing `useSmoothScroll` hook for navigation links.
- Update `Hero.tsx` to use the new `Navbar` component.

## Impact
- **Affected specs**: None directly, but improves overall UI architecture.
- **Affected code**:
    - `src/components/Hero.tsx`: Code removal/replacement.
    - `src/components/Navbar.tsx`: New file.
    - `src/app/globals.css` (possibly): For custom animations if needed, though Tailwind is preferred.

## ADDED Requirements
### Requirement: Navbar Component
The system SHALL provide a `Navbar` component that:
- Renders the logo, desktop navigation links, and action buttons.
- Uses `position: fixed` or `sticky` to remain at the top of the viewport.
- Changes appearance (e.g., background color/blur) based on scroll position (transparent at top, solid/glassmorphism when scrolled).

#### Scenario: Scroll Behavior
- **WHEN** the user scrolls down more than a threshold (e.g., 50px).
- **THEN** the Navbar background transitions to a solid or blurred state to ensure readability over content.

### Requirement: Mobile Menu
The system SHALL provide a responsive mobile menu that:
- Displays a hamburger button on screens smaller than the `md` breakpoint.
- Opens a full-screen or dropdown menu when the hamburger is clicked.
- Animates the opening/closing action smoothly.
- Closes automatically when a link is clicked or the user clicks outside/presses Escape.
- Is accessible via keyboard navigation.

#### Scenario: Mobile Interaction
- **WHEN** the user clicks the hamburger icon.
- **THEN** the mobile menu opens with a smooth transition.
- **WHEN** the user clicks a navigation link inside the menu.
- **THEN** the menu closes and the page smooth-scrolls to the target section.

## MODIFIED Requirements
### Requirement: Hero Component
The `Hero` component SHALL delegate navigation rendering to the `Navbar` component.
- **Migration**: Remove the internal `<nav>` and related header code from `Hero.tsx` and replace it with `<Navbar />`.
