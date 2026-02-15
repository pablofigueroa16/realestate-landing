# Plan para Corregir Scroll Suave y Unificar Navegación

## Objetivo
Solucionar los problemas de navegación interna asegurando que el efecto de scroll suave funcione correctamente en todas las secciones y corrigiendo las inconsistencias de identificadores (IDs) entre el `Navbar` y el resto de la aplicación (`Hero`, `Footer`).

## Diagnóstico
1.  **Inconsistencia de IDs**:
    -   `Navbar.tsx` utiliza IDs en inglés (`#properties`, `#about`, `#contact`) y textos en inglés.
    -   `Hero.tsx` y `Footer.tsx` utilizan IDs en español (`#proyectos`, `#nosotros`, `#contacto`, `#unidades`, `#video`).
    -   Las secciones reales en el código (`AboutSection`, `LocationSection`, etc.) usan IDs en español (e.g., `id="nosotros"`).
    -   Esto causa que los enlaces del `Navbar` no funcionen o no lleven a ninguna parte.

2.  **Runtime Error (Solucionado parcialmente)**:
    -   El error "Event handlers cannot be passed to Client Component props" fue abordado añadiendo `"use client"` en `Hero.tsx` y `Footer.tsx`.
    -   Se debe verificar que `Navbar.tsx` también tenga `"use client"` y use el hook correctamente.

## Pasos de Ejecución

1.  **Actualizar `Navbar.tsx`**:
    -   Cambiar los textos del menú a Español para coincidir con el resto del sitio (HOME -> Inicio, PROPERTIES -> Proyectos, ABOUT -> Nosotros, CONTACT -> Contacto).
    -   Actualizar los `href` y los identificadores en la función `scrollToId` para que coincidan con las secciones existentes:
        -   `#properties` -> `#proyectos`
        -   `#about` -> `#nosotros`
        -   `#contact` -> `#contacto`
        -   Agregar enlace a `#unidades` y `#video` si es necesario para paridad con el menú del Hero/Footer.
    -   Asegurar que el componente tenga la directiva `"use client"`.

2.  **Verificación de Secciones**:
    -   Confirmar que todas las secciones destino existan con los IDs correctos:
        -   `#nosotros` (AboutSection)
        -   `#proyectos` (LocationSection / FeaturedProperties?) - *Nota: LocationSection tiene id="proyectos".*
        -   `#unidades` (UnitTypesSection)
        -   `#video` (WhyChooseSection)
        -   `#contacto` (Footer/ContactSection)

3.  **Validación Final**:
    -   Probar navegación desde el Navbar (escritorio y móvil).
    -   Probar navegación desde los botones del Hero.
    -   Probar navegación desde el Footer.
    -   Verificar que no haya errores de consola ni de hidratación.

## Archivos Afectados
-   `src/components/Navbar.tsx`
