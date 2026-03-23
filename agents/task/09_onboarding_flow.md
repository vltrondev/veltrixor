# Tarea: Flujo de Onboarding (Bienvenida al Ecosistema)
**Asignado a:** Agente Especialista en Frontend
**Fase:** 3 (Experiencia de Usuario)

## Objetivo
Implementar la pantalla de bienvenida post-registro donde el usuario elige a qué producto (LaborSignal o PriceTrackr) desea suscribirse primero.

## Requerimientos Funcionales
1. **Página de Onboarding (`Onboarding.jsx` - Nueva)**:
   - Pantalla limpia y motivadora: "¡Bienvenido a Veltrixor! Tu cuenta global ha sido creada con éxito".
   - Dos grandes tarjetas interactivas (`VeltrixorCard`) para LaborSignal y PriceTrackr.
   - Cada tarjeta debe tener un breve resumen y un botón "Activar Suscripción" o "Explorar Producto".
2. **Lógica de Redirección**:
   - Al elegir un producto, simular que se ha activado una suscripción (puedes actualizar el estado del usuario en el `AuthContext`).
   - Redirigir al `Launchpad` (`/dashboard`) donde ahora el producto elegido debe aparecer como activo.

## Requerimientos UI/UX
- **Animaciones Gratificantes**: Uso de confeti (si es posible) o animaciones de entrada festivas para celebrar el registro.
- **Claridad Absoluta**: El usuario no debe tener dudas de que su cuenta de Veltrixor ya funciona para todos los productos.

## Ubicación
- `src/pages/Onboarding.jsx`
- Ruta: `/onboarding` (Nueva ruta protegida).

## Nota de Veltrixor
El Onboarding es el momento donde el usuario entiende el valor real de Veltrixor. Debe ser una experiencia impecable y emocionante.
