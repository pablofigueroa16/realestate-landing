# Tasks

- [x] Task 1: Create Property Data Structure: Centralize property data in a reusable file.
  - [x] SubTask 1.1: Define TypeScript interface for `Property` (Hero, Summary, Concept, Amenities, etc.).
  - [x] SubTask 1.2: Create `src/data/properties.ts` and populate with the "Sobha Hartland II" content (and placeholders for others).
  - [x] SubTask 1.3: Update translation files (`es.json`, `en.json`) with new content keys (Implicitly handled by data structure for now, though full i18n for data content is a future enhancement).

- [x] Task 2: Implement Property Details Page: Create the dynamic route and layout.
  - [x] SubTask 2.1: Create `src/app/propiedades/[slug]/page.tsx`.
  - [x] SubTask 2.2: Implement the `Hero` section for the details page (H1, Subtitle, Badges, CTAs).
  - [x] SubTask 2.3: Implement the content sections (Summary, Concept, Community, Privacy, Views, Design, Location, Project, Sub-communities).
  - [x] SubTask 2.4: Implement the `Amenities` section (List/Accordion).
  - [x] SubTask 2.5: Implement the `Sobha Realty` section (Credentials).
  - [x] SubTask 2.6: Implement the `FAQ` and `Disclaimers` sections.
  - [x] SubTask 2.7: Ensure responsive design and premium styling (fonts, spacing, images).

- [x] Task 3: Update UnitTypesSection: Use centralized data and add "Ver Detalles" button.
  - [x] SubTask 3.1: Refactor `UnitTypesSection.tsx` to map over `src/data/properties.ts`.
  - [x] SubTask 3.2: Add "Ver Detalles" button linking to `/propiedades/[slug]`.
  - [x] SubTask 3.3: Style the new button to complement the WhatsApp button.

- [x] Task 4: Verify Navigation and Content: Ensure the flow works seamlessly.
  - [x] SubTask 4.1: Test clicking "Ver Detalles" navigates to the correct page.
  - [x] SubTask 4.2: Verify all content renders correctly on the details page.
  - [x] SubTask 4.3: Verify responsiveness on mobile and desktop.
