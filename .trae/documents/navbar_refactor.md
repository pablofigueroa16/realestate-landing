# Plan de Refactorización del Navbar

Este plan describe los cambios necesarios en `src/components/Navbar.tsx` para actualizar los enlaces de navegación de la página de inicio e integrar el selector de destinos dentro de la barra de navegación principal.

## Objetivos
1.  **Actualizar Enlaces (Solo para Home):** Modificar la lista de enlaces cuando el destino actual es "home" para seguir la estructura solicitada:
    *   HOME -> `/`
    *   NOSOTROS -> `#nosotros`
    *   UBICACIÓN -> `#proyectos`
    *   CIUDADES -> `#unidades`
    *   MERCADO -> `#video`
    *   CONTACTO -> `#contacto`
2.  **Integrar Selector de Destinos:** Mover el selector de destinos (actualmente en la derecha) al interior de la barra de navegación, posicionándolo como el **segundo elemento** (después de HOME) y cambiando su texto inicial a "DESTINOS".

## Pasos de Implementación

### 1. Modificar `src/components/Navbar.tsx`

#### A. Definición de Enlaces
Crear una lógica condicional para definir los enlaces de navegación.
- Si `currentDestination === 'home'`, usar la nueva lista especificada.
- Mantener la lógica existente o una lista por defecto para otros destinos (Dubai, Bali, Miami) para no romper su navegación actual.

#### B. Reestructuración del JSX (Desktop Nav)
Actualizar el contenedor `<nav>` (desktop) para renderizar elementos mixtos (Enlaces y Dropdown).
- **Elemento 1:** Link "HOME".
- **Elemento 2:** Componente "Destination Selector" (movido desde la sección derecha).
  - Cambiar la etiqueta del botón de `{currentDestination}` a `"DESTINOS"`.
  - Asegurar que el dropdown se posicione correctamente relativo a este nuevo contenedor.
- **Elementos Restantes:** Mapear el resto de los enlaces (NOSOTROS, UBICACIÓN, etc.).

#### C. Limpieza
- Eliminar el "Destination Selector" de su ubicación original en el contenedor `div` de acciones a la derecha (donde están los botones de idioma y redes sociales).

### 2. Verificación
- Verificar que en la ruta `/` (Home), la barra muestre: HOME | DESTINOS | NOSOTROS | UBICACIÓN | CIUDADES | MERCADO | CONTACTO.
- Verificar que el dropdown "DESTINOS" funcione correctamente y permita navegar a Dubai, Bali y Miami.
- Verificar que en otras rutas (ej. `/miami`), la navegación siga funcionando (aunque no se especificaron cambios para ellas, se debe asegurar que no rompa).

## Archivos Afectados
- `src/components/Navbar.tsx`
