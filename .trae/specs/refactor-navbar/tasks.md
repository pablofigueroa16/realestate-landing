# Tasks

- [x] Task 1: Create Navbar Component: Implement a new `src/components/Navbar.tsx` component with sticky/fixed positioning and scroll-aware styling.
  - [x] SubTask 1.1: Create `Navbar.tsx` structure with Logo, Desktop Links, and Actions.
  - [x] SubTask 1.2: Implement `useEffect` for scroll detection to update styling (e.g., background opacity/blur).
  - [x] SubTask 1.3: Integrate `useSmoothScroll` for navigation links.

- [x] Task 2: Implement Mobile Menu: Add responsive mobile navigation logic to `Navbar.tsx`.
  - [x] SubTask 2.1: Create a hamburger menu button (visible only on mobile).
  - [x] SubTask 2.2: Implement the mobile menu overlay/dropdown with state management (`isOpen`).
  - [x] SubTask 2.3: Add smooth transitions/animations for opening/closing the menu.
  - [x] SubTask 2.4: Ensure accessibility (keyboard navigation, focus management, close on click outside/escape).

- [x] Task 3: Refactor Hero Component: Replace the inline navigation in `Hero.tsx` with the new `Navbar` component.
  - [x] SubTask 3.1: Remove old navigation code from `Hero.tsx`.
  - [x] SubTask 3.2: Import and place `<Navbar />` in `Hero.tsx`.

- [x] Task 4: Verify Consistency and Responsiveness: Ensure the new Navbar matches the original design and works seamlessly across devices.
  - [x] SubTask 4.1: Check desktop view for visual regression.
  - [x] SubTask 4.2: Test mobile menu functionality and responsiveness.
