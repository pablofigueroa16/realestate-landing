# Smooth Dropdown Animation Spec

## Why
The "DESTINATION SELECTOR" dropdown in the navigation bar currently opens and closes abruptly, which can feel jarring and unpolished. A smooth transition improves user experience by providing visual feedback and a more premium feel.

## What Changes
- Implement a smooth CSS transition or animation for the opening and closing of the dropdown menu.
- Use a transform-based animation (e.g., `scaleY`, `opacity`, `translateY`) to ensure performance.
- Set the duration between 200ms and 400ms.
- Apply an `ease-out` timing function for a natural feel.
- Ensure the dropdown deploys vertically downwards from the selector button.

## Impact
- **Affected specs**: None directly.
- **Affected code**: `src/components/Navbar.tsx`.

## ADDED Requirements
### Requirement: Dropdown Animation
The system SHALL animate the "DESTINATION SELECTOR" dropdown menu when it is opened or closed.
- **Duration**: The animation MUST last between 200ms and 400ms.
- **Timing**: The animation MUST use an `ease-out` timing function.
- **Direction**: The dropdown MUST appear to unfold or slide down from the top (selector button).
- **Trigger**: The animation MUST start immediately upon clicking the selector button.
- **State**: The dropdown MUST transition smoothly between hidden/collapsed and visible/expanded states.

#### Scenario: User Interaction
- **WHEN** the user clicks the "DESTINOS" button.
- **THEN** the dropdown menu smoothly expands downwards and fades in over ~300ms.
- **WHEN** the user selects an option or clicks outside.
- **THEN** the dropdown menu smoothly collapses upwards and fades out.
