# Plan para mejorar el contraste del Navbar

El usuario solicita mejorar el contraste del `Navbar` cuando se desplaza sobre secciones con fondo blanco. Actualmente, el navbar utiliza un fondo oscuro translúcido (`bg-black/80 backdrop-blur-md`) cuando se hace scroll, lo cual ya proporciona buen contraste sobre fondos claros. Sin embargo, para mejorar la legibilidad y la estética, podemos ajustar dinámicamente el color del texto y los iconos, o refinar el fondo del navbar para que sea más sólido o tenga un color diferente que contraste mejor con el contenido blanco.

Dado que el diseño actual ya cambia a un navbar oscuro al hacer scroll, el contraste debería ser suficiente. Es posible que el usuario quiera un efecto inverso (navbar blanco con texto negro) o que el fondo actual no sea lo suficientemente oscuro/opaco en ciertas situaciones.

Para una solución robusta y elegante que se adapte a cualquier fondo (oscuro o claro), implementaremos un sistema que detecte la sección visible y ajuste el tema del navbar (texto claro/oscuro) en consecuencia, o simplemente reforzaremos el diseño del estado "scrolled" para garantizar legibilidad universal.

**Estrategia Propuesta:**
Mantener el fondo oscuro translúcido al hacer scroll es una práctica segura para garantizar contraste sobre secciones claras. Refinaremos este estilo para asegurar que sea consistente y legible.

Si el usuario se refiere a que el navbar se "pierde" o no se ve bien sobre fondos blancos, la solución más directa es asegurar que el estado `isScrolled` aplique un fondo con suficiente opacidad y un color de texto contrastante (blanco).

Revisando el código actual de `Navbar.tsx`:
- Estado inicial (top): `bg-transparent`, texto blanco. (Ideal para el Hero oscuro).
- Estado scroll (>10px): `bg-black/80 backdrop-blur-md`, texto blanco.

Esto *debería* funcionar bien sobre fondos blancos. Tal vez el usuario quiera que el navbar sea **blanco con texto negro** cuando está sobre secciones blancas para un look más "limpio" y corporativo, manteniendo el estilo oscuro solo para el Hero.

**Plan de Acción:**
1.  Modificar `src/components/Navbar.tsx` para que el estado `isScrolled` cambie el estilo a un fondo **blanco** (`bg-white/90`) con texto **negro** (`text-gray-900`) y sombra suave. Esto proporciona un contraste excelente y un look moderno sobre las secciones de contenido (que son mayormente blancas/grises).
2.  Ajustar los colores de los iconos y el logo para que cambien a negro cuando el navbar es blanco.

## Pasos
1.  **Actualizar `src/components/Navbar.tsx`**:
    - Cambiar la clase del header en estado `isScrolled` a `bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200`.
    - Condicionar el color del texto de los enlaces (`text-gray-900` cuando scrolled, `text-white` cuando no).
    - Condicionar el color del borde del logo y los iconos.
    - Condicionar el color de los botones de acción.

## Archivos afectados
- `src/components/Navbar.tsx`
