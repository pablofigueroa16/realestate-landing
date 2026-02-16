# Plan para corregir errores de Server/Client Components y ámbito

Se han identificado dos tipos de errores principales:
1.  **Componentes de Servidor usando hooks**: `AboutSection` y `PresentationSection` están intentando usar `useTranslation` (que usa `useContext` internamente) sin ser declarados como "use client".
2.  **Error de referencia (`t is not defined`)**: En `UnitTypesSection.tsx`, el componente hijo `ProjectImageCarousel` intenta usar `t` sin tener acceso a él (no se le pasa como prop ni usa el hook internamente).

## Solución

### 1. `src/components/AboutSection.tsx`
- Añadir la directiva `"use client";` al inicio del archivo.

### 2. `src/components/PresentationSection.tsx`
- Añadir la directiva `"use client";` al inicio del archivo.

### 3. `src/components/UnitTypesSection.tsx`
- El componente principal `UnitTypesSection` ya es un Client Component.
- El problema está en `ProjectImageCarousel`.
- **Opción A**: Mover `useTranslation` dentro de `ProjectImageCarousel`.
- **Opción B**: Pasar `t` como prop desde el padre.
- **Decisión**: Usar `useTranslation` dentro de `ProjectImageCarousel` es más limpio y autónomo.

## Pasos de implementación
1.  Editar `src/components/AboutSection.tsx` para agregar `"use client";`.
2.  Editar `src/components/PresentationSection.tsx` para agregar `"use client";`.
3.  Editar `src/components/UnitTypesSection.tsx` para llamar a `useTranslation` dentro de `ProjectImageCarousel`.

## Archivos afectados
- `src/components/AboutSection.tsx`
- `src/components/PresentationSection.tsx`
- `src/components/UnitTypesSection.tsx`
