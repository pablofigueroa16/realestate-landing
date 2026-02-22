# Plan de Actualización: Floating Cards Hero Section

Este plan detalla los cambios necesarios para transformar las "Floating Cards" de la sección Hero en un carrusel adaptable.

## Objetivo
Actualizar el bloque de "Floating Cards (Bottom Right)" en `src/components/Hero.tsx` para que:
1.  **Web (Desktop/Tablet)**: Se muestre como un carrusel vertical con un mínimo de 2 tarjetas visibles simultáneamente.
2.  **Mobile**: Se muestre como un carrusel horizontal con 1 tarjeta visible y funcionalidad táctil (scroll horizontal).

## Estrategia de Implementación

### 1. Preparación de Datos
- Unificar la fuente de datos de las tarjetas (`stats`). Si `content?.stats` existe, usarlo. Si no, crear un array por defecto con los datos hardcodeados actuales (Card 1 y Card 2) para mantener la compatibilidad.

### 2. Estructura del Carrusel
- Reemplazar el `div` contenedor actual (`absolute bottom-6 right-6...`) con una nueva estructura.
- **Contenedor Principal**: Mantener el posicionamiento absoluto en bottom-right.
- **Versión Mobile (Horizontal)**:
    - Usar `flex-row`, `overflow-x-auto`, `snap-x` para el scroll horizontal nativo.
    - Ocultar barra de scroll.
    - Cada tarjeta tendrá `min-w-[80%]`, `snap-center`.
- **Versión Desktop (Vertical)**:
    - Usar `flex-col`, `overflow-y-hidden` (o auto si hay muchas).
    - Altura fija o máxima para mostrar al menos 2 tarjetas.
    - Animación automática vertical (opcional, pero el requerimiento dice "carrusel vertical", asumiremos estático si son pocas, o scroll vertical si son muchas. Dado "mínimo 2 cards", si son solo 2, se muestran ambas. Si son más, se podría hacer scroll).
    - *Refinamiento*: El usuario pide "carrusel vertical". Si hay más de 2, deberían rotar hacia arriba. Si hay 2, se muestran fijas. Para simplificar y cumplir el "mínimo 2", usaremos un contenedor que permita mostrar 2 y hacer scroll si hay más, o una animación CSS simple.
    - *Decisión*: Implementar un scroll container vertical con `max-h` ajustado para mostrar 2.5 tarjetas, o simplemente mostrar todas apiladas si son pocas (el diseño actual muestra 2).
    - *Requerimiento específico*: "carrusel vertical". Esto implica movimiento. Sin embargo, para una implementación robusta y rápida sin librerías externas pesadas (como Swiper), usaremos un contenedor con `overflow-y-auto` y estilos personalizados para ocultar la barra, o una animación CSS de marquee vertical si se desea movimiento automático.
    - *Interpretación*: "Carrusel vertical de mínimo 2 cards" probablemente se refiere a la disposición visual. Si son estáticas y caben, es una lista vertical. Si son muchas, es un carrusel. Dado que los datos suelen ser 2-4 items, una lista vertical estática (o con scroll si excede altura) es lo más UX-friendly en desktop. En mobile, el horizontal swipe es estándar.

### 3. Cambios en `src/components/Hero.tsx`
- Modificar el renderizado condicional.
- Usar clases de Tailwind para responsividad (`md:flex-col`, `flex-row`).
- Asegurar que el contenedor no rompa el layout en pantallas pequeñas.

## Pasos Técnicos

1.  **Definir `stats`**: Crear una variable `stats` que contenga `content.stats` o los valores por defecto.
2.  **Renderizado**:
    ```tsx
    const statsToRender = content?.stats || defaultStats;
    
    // Contenedor
    <div className="absolute bottom-6 right-0 left-0 md:left-auto md:right-10 lg:right-16 z-40 w-full md:w-[300px] flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible md:overflow-y-auto px-6 md:px-0 snap-x snap-mandatory md:snap-none scrollbar-hide">
      {statsToRender.map(stat => (
         <div className="min-w-[85%] md:min-w-full snap-center ...">
            {/* Card Content */}
         </div>
      ))}
    </div>
    ```
3.  **Estilos**: Ajustar márgenes y paddings para que en mobile el carrusel ocupe el ancho pero tenga padding lateral (efecto "peek").

## Archivos Afectados
- `src/components/Hero.tsx`
