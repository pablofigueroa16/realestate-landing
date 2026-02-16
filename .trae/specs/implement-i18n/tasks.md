# Tasks

- [x] Task 1: Set up i18n System: Create the context, hook, and provider for handling language state and translations.
  - [x] SubTask 1.1: Create `src/locales/es.json` and `src/locales/en.json` with initial keys.
  - [x] SubTask 1.2: Create `src/context/I18nContext.tsx` with `I18nProvider` to manage language state, detection logic, and persistence.
  - [x] SubTask 1.3: Create `src/hooks/useTranslation.ts` hook for consuming translations.
  - [x] SubTask 1.4: Wrap the application with `I18nProvider` in a new client component `src/components/Providers.tsx` and use it in `layout.tsx`.

- [x] Task 2: Implement Language Toggle: Add a language switcher to the Navbar.
  - [x] SubTask 2.1: Add a toggle button (ES/EN) to `src/components/Navbar.tsx`.
  - [x] SubTask 2.2: Ensure the toggle updates the language state and persists to localStorage.
  - [x] SubTask 2.3: Style the toggle to match the existing design (desktop and mobile).

- [x] Task 3: Translate Content: Replace hardcoded text with translation keys in all components.
  - [x] SubTask 3.1: Translate `Hero.tsx`.
  - [x] SubTask 3.2: Translate `Navbar.tsx` links and buttons.
  - [x] SubTask 3.3: Translate `AboutSection.tsx`.
  - [x] SubTask 3.4: Translate `LocationSection.tsx`.
  - [x] SubTask 3.5: Translate `UnitTypesSection.tsx`.
  - [x] SubTask 3.6: Translate `PresentationSection.tsx`.
  - [x] SubTask 3.7: Translate `DevelopersSection.tsx`.
  - [x] SubTask 3.8: Translate `WhyChooseSection.tsx`.
  - [x] SubTask 3.9: Translate `Footer.tsx` and form placeholders.
  - [x] SubTask 3.10: Update metadata in `layout.tsx` (if possible dynamically, or use a default).

- [x] Task 4: Verify Functionality: Ensure language detection, switching, and persistence work correctly.
  - [x] SubTask 4.1: Test initial load with different browser languages (mocked).
  - [x] SubTask 4.2: Test manual switching via toggle.
  - [x] SubTask 4.3: Verify persistence after reload.
