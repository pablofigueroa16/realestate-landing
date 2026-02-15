# Plan de Implementación Tipográfica

Este plan detalla los pasos para implementar un sistema tipográfico profesional y sofisticado utilizando `Playfair Display` (Serif) e `Inter` (Sans-Serif), optimizado para rendimiento y legibilidad.

## 1. Configuración de Fuentes en Next.js (`src/app/layout.tsx`)
- Importar `Playfair_Display` e `Inter` desde `next/font/google`.
- Configurar `Playfair_Display`:
  - Variable: `--font-playfair`
  - Subsets: `['latin']`
  - Weights: `['700', '800', '900']` (para títulos de alto impacto)
  - Display: `'swap'`
- Configurar `Inter`:
  - Variable: `--font-inter`
  - Subsets: `['latin']`
  - Weights: `['300', '400', '500', '600']` (para cuerpo y subtítulos)
  - Display: `'swap'`
- Reemplazar `Geist` y `Geist_Mono` en el `className` del `body`.

## 2. Definición de Variables y Estilos Globales (`src/app/globals.css`)
- Actualizar el bloque `@theme`:
  - Mapear `--font-serif` a `var(--font-playfair)`.
  - Mapear `--font-sans` a `var(--font-inter)`.
- Implementar reglas CSS globales:
  - **Body**:
    - `font-family: var(--font-sans)`
    - `font-weight: 300` (Light/Book para elegancia)
    - `font-size: 1.125rem` (18px para legibilidad óptima)
    - `line-height: 1.6`
    - `color: var(--foreground)`
  - **Headings (h1, h2)**:
    - `font-family: var(--font-serif)`
    - `font-weight: 700`
    - `line-height: 1.2`
    - Uso de `clamp()` para escalado fluido:
      - `h1`: `font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem)`
      - `h2`: `font-size: clamp(2rem, 4vw + 1rem, 3.5rem)`
  - **Subtítulos (h3, h4)**:
    - `font-family: var(--font-sans)`
    - `font-weight: 400`
    - `letter-spacing: -0.02em`

## 3. Revisión de Componentes Clave
- Verificar `Hero.tsx` para asegurar que el título principal use las nuevas clases o herede correctamente.
- Verificar `Footer.tsx` y otros componentes para consistencia.

## 4. Validación
- Verificar que las fuentes se carguen correctamente (sin FOUT excesivo gracias a `swap`).
- Confirmar la legibilidad y el contraste.
- Asegurar que la responsividad funcione con `clamp()`.
