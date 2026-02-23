# Plan de Implementación de Mapa Interactivo

Este plan detalla los pasos para agregar un mapa interactivo en la página de detalles de cada propiedad utilizando `leaflet` y `react-leaflet`.

## 1. Instalación de Dependencias

Se instalarán las librerías necesarias para el manejo de mapas.

- `leaflet`: Librería core de mapas.
- `react-leaflet`: Componentes de React para Leaflet.
- `@types/leaflet`: Tipos de TypeScript para Leaflet.

## 2. Actualización de Datos de Propiedades

Se actualizará la interfaz `Property` y los datos existentes para incluir las coordenadas (latitud y longitud).

### 2.1. Actualizar `src/data/properties.ts`
- Modificar la interfaz `Property` para agregar `latitude` y `longitude` (opcionales) dentro del objeto `location`.
- Agregar las coordenadas correspondientes a las propiedades de Dubai listadas en este archivo.

### 2.2. Actualizar `src/data/landing-content.ts`
- Agregar las coordenadas correspondientes a las propiedades de Miami y Bali dentro de `landingContent`.

## 3. Creación del Componente de Mapa

Se creará un nuevo componente reutilizable para mostrar el mapa.

### 3.1. Crear `src/components/PropertyMap.tsx`
- Este componente utilizará `MapContainer`, `TileLayer`, `Marker` y `Popup` de `react-leaflet`.
- **Importante**: Se debe manejar la carga dinámica (Dynamic Import) para evitar errores de SSR (Server-Side Rendering) ya que Leaflet requiere acceso al objeto `window`.
- El componente aceptará `latitude`, `longitude` y `title` como props.
- Incluirá los estilos CSS necesarios de Leaflet.
- Se configurará un icono personalizado para el marcador si es necesario (o se corregirá el problema común de iconos perdidos en Leaflet con Next.js).

## 4. Integración en la Página de Detalle

Se reemplazará el placeholder actual por el nuevo componente de mapa.

### 4.1. Modificar `src/app/propiedades/[slug]/page.tsx`
- Importar el componente `PropertyMap`.
- Reemplazar el `div` que contiene el texto "Mapa Interactivo" por el componente `<PropertyMap />`.
- Pasar las coordenadas `property.location.latitude` y `property.location.longitude` al componente.
- Manejar el caso donde no haya coordenadas (mostrar un fallback o el placeholder actual).

## 5. Verificación
- Verificar que el mapa se cargue correctamente en las páginas de detalle de propiedades de Dubai, Miami y Bali.
- Asegurar que los marcadores estén en la posición correcta.
- Comprobar la responsividad y el estilo (bordes redondeados).
