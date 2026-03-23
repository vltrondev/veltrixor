# Tarea: Diseño del "Veltrixor Design System"
**Asignado a:** Agente Especialista en Frontend
**Fase:** 1 (UI/UX Corporativo)

## Objetivo
Establecer la identidad visual de Veltrixor y crear una biblioteca de componentes básicos reutilizables.

## Requerimientos Visuales (Corporate Premium)
- **Modo Oscuro por defecto**: Veltrixor es una empresa de tecnología moderna.
- **Paleta de Colores Principal**:
  - `Veltrixor Deep Black` (#0a0a0a) para fondos base.
  - `Veltrixor Electric Blue` (#0066ff) como color de acento principal.
  - `Surface Gray` (#1a1a1a) para tarjetas y paneles elevados.
  - `Text Primary` (#ffffff) y `Text Secondary` (#a0a0a0).
- **Tipografía**: Sans-serif moderna (Ej: Inter, Roboto o Montserrat).
- **Glassmorphism**: Utilizar efectos de desfoque (`backdrop-filter: blur(10px)`) y bordes semitransparentes en componentes elevados (Tarjetas, Modales).

## Componentes a Crear
1. **Botones (`VeltrixorButton`)**:
   - `Primary`: Fondo Electric Blue, sin bordes, con sutil resplandor (glow).
   - `Secondary`: Borde fino, fondo transparente.
   - `Ghost`: Solo texto con hover effect sutil.
2. **Tarjetas (`VeltrixorCard`)**: Contenedores con Glassmorphism y bordes redondeados (12px - 16px).
3. **Tipografía (`VeltrixorTypography`)**: Componente para manejar H1-H6 y párrafos con el espaciado corporativo correcto.
4. **Modales (`VeltrixorModal`)**: Con overlay oscuro y animación de entrada fluida.

## Entrega
Guardar los componentes en `src/components/ui/` y las variables de estilo (CSS variables o Tailwind config) en `src/styles/`.

## Nota de Veltrixor
La calidad de estos componentes definirá la percepción del usuario de toda la plataforma. Deben ser responsivos y tener estados de hover/active extremadamente pulidos.
