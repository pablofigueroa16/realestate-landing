# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

No test suite is configured.

## Architecture

Next.js 15 App Router project (TypeScript + Tailwind CSS v4) for a multilingual real estate platform targeting multiple cities.

### Routing
- `src/app/page.tsx` — Home
- `src/app/propiedades/page.tsx` — Property listing
- `src/app/propiedades/[slug]/page.tsx` — Individual property (slug from `src/data/properties.ts`)
- City landing pages: `/cdmx`, `/dubai`, `/madrid`, `/miami`, `/bali`
- Other pages: `/agentes`, `/inversiones`, `/nosotros`

### i18n System
Language is managed client-side via `src/context/I18nContext.tsx`:
- Two locales: `es` (default) and `en`
- Locale persisted in `localStorage`, auto-detected from browser language
- Translations live in `src/locales/` — split by `general/` and `landings/<page>/`
- All locale JSON files are statically imported and deep-merged at startup
- Use `useI18n()` hook for `t(key)` and `locale`; keys use dot notation (e.g. `t('home.hero.title')`)

### Data Layer
- `src/data/properties.ts` — typed `Property` interface + all property data (static, no API)
- `src/data/landing-content.ts` — content for city landing pages
- `src/utils/getAllProperties.ts` — utility to access property list
- Remote images are served from `https://real-state-landing.s3.us-east-1.amazonaws.com` (configured in `next.config.ts`)

### Component Patterns
- `LandingPage.tsx` — generic template reused by all city pages; pass content props
- `AgentLandingPage.tsx` / `InvestmentLandingPage.tsx` — specialized page templates
- Map components (`PropertyMap.tsx`, `PropertyMapClient.tsx`) use React Leaflet — always render client-side only
- `Providers.tsx` wraps `I18nProvider` at the root layout level

### Styling
- Tailwind CSS v4 via PostCSS plugin
- Font: Montserrat (Google Fonts, weights 300–900) configured in `globals.css`
- Custom CSS variables for color theme defined in `globals.css`
- Gradient background: beige → light gray

### Config Notes
- `reactCompiler: true` is enabled in `next.config.ts` (experimental React Compiler)
- Path alias `@/*` maps to `src/*`
