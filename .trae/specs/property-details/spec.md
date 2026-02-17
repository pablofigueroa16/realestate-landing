# Property Details Spec

## Why
Users need more in-depth information about each property than what is currently available on the main landing page card. The "Ver Detalles" button will provide a dedicated view with comprehensive details about the project, amenities, location, and credentials, increasing user engagement and potential conversion.

## What Changes
- **Add "Ver Detalles" Button**: In `UnitTypesSection.tsx`, add a secondary button next to the WhatsApp button for each property card.
- **Create Property Details Page**: Create a dynamic route `/propiedades/[id]` (or similar) to display the full details of a property.
- **Structure Property Data**: Centralize property data (currently hardcoded in `UnitTypesSection`) into a data file or constant that can be shared between the listing and the details page.
- **Implement Details UI**: Build a rich, premium UI for the property details page following the structure provided in the user prompt (Hero, Summary, Concept, Community, etc.).
- **Translation Support**: Ensure all new content is translatable.

## Impact
- **Affected specs**: `implement-i18n` (need to add new translation keys).
- **Affected code**:
    - `src/components/UnitTypesSection.tsx`: Update card UI.
    - `src/app/propiedades/[slug]/page.tsx`: New dynamic page.
    - `src/data/properties.ts`: New file for centralized data.
    - `src/locales/*.json`: New translation keys.

## ADDED Requirements
### Requirement: Property Data Structure
The system SHALL store property data in a structured format (e.g., `src/data/properties.ts`) that includes all fields required for the details page (Hero, Summary, Concept, Amenities list, FAQs, etc.).

### Requirement: Dynamic Details Page
The system SHALL provide a dynamic route `/propiedades/[slug]` that renders the full details of a selected property.
- **Hero Section**: Full-screen video/image, title, subtitle, badges, and CTAs.
- **Content Sections**: Render "Resumen Rápido", "El Concepto", "Comunidad", "Privacidad", "Vistas", "Diseño", "Ubicación", "El Proyecto", "Sub-comunidades", "Amenities", "Sobha Realty", "FAQ", "Disclaimers".
- **Design**: Maintain the premium aesthetic (serif fonts for headings, clean sans-serif for body, high-quality images).

### Requirement: Navigation to Details
The Property Card in `UnitTypesSection` SHALL include a "Ver Detalles" button.
- **Action**: Navigates to `/propiedades/[slug]`.
- **Style**: Secondary button style (e.g., outlined or gray background) to contrast with the primary WhatsApp button.

## MODIFIED Requirements
### Requirement: UnitTypesSection
- **Modification**: Use the centralized data source instead of hardcoded array.
- **Modification**: Update card layout to accommodate two buttons.

