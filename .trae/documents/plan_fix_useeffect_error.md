# Plan de Corrección: Error de useEffect Condicional

Este plan detalla los pasos para solucionar el error "React Hook "useEffect" is called conditionally" en el archivo `src/components/UnitTypesSection.tsx`.

## Problema Identificado
El hook `useEffect` se está ejecutando después de una sentencia de retorno temprano (`if (units.length === 0) return null;`). Esto viola las reglas de React Hooks, que exigen que los hooks se ejecuten siempre en el mismo orden y no estén condicionados por retornos previos.

## Solución Propuesta
Mover la validación de `units.length === 0` para que ocurra **después** de la declaración del `useEffect`. De esta manera, el hook se registrará siempre, independientemente de si hay unidades para mostrar o no.

## Pasos de Ejecución

1.  **Localizar Código**: Abrir `src/components/UnitTypesSection.tsx`.
2.  **Reordenar**:
    *   Mover la sentencia `if (units.length === 0) return null;` (actualmente en la línea 153) para que se ejecute **después** del bloque `useEffect` (que termina en la línea 169).
    *   Se recomienda colocarla justo después del `useEffect` para mantener la lógica clara.
3.  **Verificación**: Asegurar que no existan otras llamadas a hooks después del retorno temprano.

## Archivos Afectados
- `src/components/UnitTypesSection.tsx`
