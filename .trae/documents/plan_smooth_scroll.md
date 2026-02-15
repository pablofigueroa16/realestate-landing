# Plan de corrección del desplazamiento suave (Smooth Scroll)

El usuario reporta que el efecto de desplazamiento suave no se está aplicando correctamente. Para garantizar una solución robusta y compatible, simplificaremos la implementación utilizando APIs nativas del navegador y CSS, que son más fiables que las animaciones manuales en JavaScript.

## Análisis
1.  **Estado actual**: Se utiliza un hook personalizado `useSmoothScroll` con un bucle de animación `requestAnimationFrame` complejo.
2.  **Problema probable**: La animación manual puede estar fallando, ser interrumpida, o no calcular correctamente la posición en todos los dispositivos. Además, Next.js puede estar interfiriendo si no se cancela correctamente la navegación por defecto.
3.  **Solución propuesta**: 
    - Utilizar `element.scrollIntoView({ behavior: 'smooth' })` nativo, que delega la animación al navegador (altamente optimizado).
    - Habilitar `scroll-behavior: smooth` en CSS global como respaldo.
    - Asegurar que `scroll-padding-top` esté configurado para respetar los márgenes superiores (cabeceras, etc.).

## Pasos de implementación

### 1. Modificar `src/app/globals.css`
- Descomentar o asegurar que `html { scroll-behavior: smooth; }` esté activo.
- Verificar que `scroll-padding-top` esté definido (ya visto en 100px, mantenerlo).

### 2. Simplificar `src/hooks/useSmoothScroll.ts`
- Reescribir el hook para eliminar la lógica de `requestAnimationFrame`.
- Utilizar `document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' })`.
- Mantener la prevención del comportamiento por defecto (`e.preventDefault()`).
- Manejar correctamente la actualización de la URL (`history.pushState`) después del scroll (o dejar que el navegador lo maneje si es nativo, pero mejor manual para evitar saltos).

### 3. Verificación
- Confirmar que los componentes `Hero.tsx` y `Footer.tsx` (y otros si los hay) siguen utilizando el hook correctamente.
- El uso de `scroll={false}` en los componentes `Link` de Next.js es correcto y necesario.

## Archivos afectados
- `src/app/globals.css`
- `src/hooks/useSmoothScroll.ts`
