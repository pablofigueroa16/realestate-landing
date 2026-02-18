# Plan de Implementación de Multi-Landing (Dubai / Bali)

## 1. Estructura de Datos (`src/data/landing-content.ts`)
Crearemos un archivo centralizado para manejar el contenido de las diferentes landing pages.
- Definir interfaces para `Hero`, `About`, `WhyChoose`, `Navbar`, etc.
- Exportar objeto `landingContent` con claves `dubai` y `bali`.
- **Dubai**: Usará los valores por defecto (o `null` para indicar que use `useTranslation`).
- **Bali**: Usará los textos y medios proporcionados por el usuario.

## 2. Refactorización de Componentes
Modificaremos los componentes existentes para aceptar `props` opcionales. Si las props no existen, usarán el comportamiento actual (`useTranslation` y datos hardcodeados).

### `src/components/Navbar.tsx`
- **Props**: `currentDestination` ('dubai' | 'bali').
- **Cambios**:
  - Añadir un selector/dropdown para cambiar entre "Dubai" (`/`) y "Bali" (`/bali`).
  - Mantener la navegación actual (Inicio, Nosotros, etc.) ya que las secciones serán las mismas.

### `src/components/Hero.tsx`
- **Props**: `videoSrc`, `badge`, `title`, `subtitle`, `stats` (array de cards flotantes).
- **Cambios**:
  - Eliminar `<Navbar />` interno (lo moveremos a `LandingPage`).
  - Usar props para el contenido si están presentes.

### `src/components/AboutSection.tsx`
- **Props**: `benefits` (lista), `imageSrc`, `title`, `description`, `marketCard` (titulo/subtitulo).
- **Cambios**: Renderizar contenido dinámico.

### `src/components/WhyChooseSection.tsx`
- **Props**: `videoSrc`, `title`, `description`, `benefits`, `quote`.
- **Cambios**: Renderizar contenido dinámico.

### `src/components/UnitTypesSection.tsx`
- **Props**: `units` (array de propiedades).
- **Cambios**: Mapear `units` en lugar de importar `properties` directamente.

### `src/components/LocationSection.tsx`
- **Props**: `projects` (array de proyectos).
- **Cambios**: Mapear `projects` en lugar de la lista hardcodeada.

### `src/components/PresentationSection.tsx`
- **Props**: `isVisible` (boolean) o contenido específico.
- **Cambios**: Si es para Bali (donde se pidió "vacío"), podríamos ocultarlo o mostrar un placeholder si no hay contenido.

## 3. Componente Layout (`src/components/LandingPage.tsx`)
Crear un componente "Page Wrapper" que:
- Reciba el `destination` ('dubai' | 'bali').
- Seleccione los datos correctos de `landing-content.ts`.
- Renderice todos los componentes en orden: `Navbar`, `Hero`, `About`, `WhyChoose`, `Location`, `UnitTypes`, `Presentation`, `Developers`, `Contact`.

## 4. Actualización de Rutas
### `src/app/page.tsx` (Home/Dubai)
- Reemplazar contenido actual con `<LandingPage destination="dubai" />`.

### `src/app/bali/page.tsx` (Nueva ruta)
- Crear archivo.
- Renderizar `<LandingPage destination="bali" />`.

## 5. Ejecución
1. Crear `src/data/landing-content.ts`.
2. Refactorizar componentes uno a uno.
3. Crear `src/components/LandingPage.tsx`.
4. Implementar páginas.
