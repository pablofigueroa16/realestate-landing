# Plan de Corrección Definitiva del Scroll Suave

## Diagnóstico
A pesar de la implementación anterior, el usuario reporta que el efecto de scroll suave "sigue sin aplicarse". Tras revisar el código, identifico las siguientes causas probables:

1.  **Conflicto con `scroll-behavior: smooth` en CSS**: Aunque se comentó en `globals.css`, es posible que algún estilo residual o el comportamiento por defecto del navegador esté interfiriendo.
2.  **Cálculo de posición incorrecto**: El cálculo actual `const distance = targetPosition - startPosition - offset;` puede ser inexacto en algunos navegadores o contextos de renderizado dinámico.
3.  **Manejo del evento**: El `e.preventDefault()` podría no estar deteniendo completamente la navegación nativa de Next.js en todos los casos, especialmente si el `Link` tiene un `href` válido.
4.  **Hidratación**: Si el componente no está montado o el ID no existe en el momento del clic, no ocurrirá nada.

## Solución Propuesta
Voy a refactorizar el hook `useSmoothScroll` para hacerlo más robusto y garantizar que tome el control total del desplazamiento.

### Cambios Clave:

1.  **Simplificación del Cálculo**: Usar `element.getBoundingClientRect().top` directamente como la distancia relativa al viewport actual, restando el offset. Esto elimina la dependencia de `window.scrollY` para el cálculo de la distancia delta.
    *   *Nueva fórmula*: `const targetPosition = window.pageYOffset + element.getBoundingClientRect().top - offset;`
    *   *Distancia*: `targetPosition - startPosition`

2.  **Forzar el control del evento**: Asegurar que `e.preventDefault()` se ejecute inmediatamente y que la URL se actualice manualmente *después* de la animación, no antes.

3.  **Polyfill de `requestAnimationFrame`**: Asegurar compatibilidad (aunque es estándar moderno, garantiza robustez).

4.  **Easing Mejorado**: Ajustar la función de easing para que sea más perceptible.

## Pasos de Ejecución

1.  **Refactorizar `src/hooks/useSmoothScroll.ts`**:
    -   Reescribir la lógica de cálculo de posición.
    -   Asegurar que el `offset` (100px) se aplique correctamente.
    -   Verificar que `window.scrollTo` se llame con coordenadas absolutas correctas.

2.  **Verificación en Componentes**:
    -   Revisar `Navbar.tsx` para asegurar que los enlaces a "Inicio" (`href="#"`) también usen el hook (apuntando a un ID `#inicio` o similar que añadiremos al Hero/Body).
    -   Asegurar que todos los IDs objetivo (`#proyectos`, `#nosotros`, etc.) existan realmente en el DOM.

3.  **Añadir ID al Hero**:
    -   Editar `src/components/Hero.tsx` para agregar `id="inicio"` a la sección principal, permitiendo que el enlace "Inicio" del Navbar funcione con scroll suave.

## Archivos Afectados
-   `src/hooks/useSmoothScroll.ts` (Refactorización completa)
-   `src/components/Navbar.tsx` (Añadir scroll a "Inicio")
-   `src/components/Hero.tsx` (Añadir `id="inicio"`)
