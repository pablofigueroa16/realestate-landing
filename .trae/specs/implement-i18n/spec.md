# Internationalization (i18n) Spec

## Why
The project currently only supports Spanish. To reach a broader audience, specifically international investors interested in Dubai real estate, we need to support English as well. Users should be able to switch languages seamlessly, and the system should auto-detect their preference.

## What Changes
- Implement a lightweight i18n system using React Context API.
- Create JSON translation files for Spanish (`es`) and English (`en`).
- Add a language toggle button to the `Navbar`.
- Auto-detect user language based on browser settings.
- Persist language preference in `localStorage`.
- Replace all hardcoded text strings in the application with translation keys.

## Impact
- **Affected specs**: None directly, but `refactor-navbar` will be modified to include the toggle.
- **Affected code**:
    - `src/components/Navbar.tsx`: Add language toggle.
    - `src/app/layout.tsx`: Wrap application in i18n provider.
    - All components with text: `Hero`, `AboutSection`, `LocationSection`, `UnitTypesSection`, `PresentationSection`, `DevelopersSection`, `WhyChooseSection`, `Footer`.
    - New files: `src/context/I18nContext.tsx`, `src/hooks/useTranslation.ts`, `src/locales/es.json`, `src/locales/en.json`.

## ADDED Requirements
### Requirement: Language Detection & Persistence
The system SHALL automatically detect the user's language preference on first visit.
- **Default**: English (`en`) for any system language other than Spanish.
- **Spanish**: Spanish (`es`) only if the system language is explicitly Spanish.
- **Persistence**: Store the selected language in `localStorage` so it persists across sessions.

#### Scenario: First Visit (English OS)
- **WHEN** a user with an English OS visits the site.
- **THEN** the site loads in English.

#### Scenario: First Visit (Spanish OS)
- **WHEN** a user with a Spanish OS visits the site.
- **THEN** the site loads in Spanish.

### Requirement: Manual Language Toggle
The system SHALL provide a visible toggle in the Navbar to switch between ES and EN.
- **Behavior**: Clicking the toggle switches the language immediately without reloading the page.
- **Visuals**: Clearly indicate the currently active language.

### Requirement: Content Translation
All user-facing text SHALL be translatable.
- **Scope**: Headings, paragraphs, button labels, alt text, placeholders, and error messages.

## MODIFIED Requirements
### Requirement: Navbar
The `Navbar` component SHALL include a language switcher button, visible on both desktop and mobile views.
