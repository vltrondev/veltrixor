# Tarea: Dashboard y Lanzador de Aplicaciones ("Launchpad")
**Asignado a:** Agente Especialista en Frontend
**Fase:** 4 (Centro de Lanzamiento)

## Objetivo
Implementar la página principal privada (Launchpad) donde el usuario gestiona sus suscripciones a LaborSignal y PriceTrackr y accede a ellas.

## Requerimientos Funcionales
1. **Bienvenida Dinámica**:
   - Saludo personalizado: "Hola, [Nombre], gestiona tus suscripciones".
2. **Centro de Gestión de Suscripciones**:
   - Dos grandes tarjetas interactivas (LaborSignal y PriceTrackr).
   - Indicar visualmente el estado: "Activa", "Inactiva" o "Pendiente".
   - Si está activa, mostrar botón "Acceder a la Aplicación".
   - Si está inactiva, mostrar botón "Activar ahora" (redirigir a la landing de producto o checkout placeholder).
3. **Lógica de Redirección (SSO Mock)**:
   - Al hacer clic en "Acceder", abrir una nueva pestaña redirigiendo a los subdominios correspondientes.
   - Pasar un token simulado en la URL (solo para fines de prototipo).

## Requerimientos UI/UX
- **Estado Visual Premium**: Usar colores de estado (Verde para Activa, Rojo/Gris para Inactiva).
- **Animaciones**: Entrada fluida de las tarjetas del Launchpad.
- **Glassmorphism**: Mantener la estética centralizada del ecosistema.

## Ubicación
`src/pages/Dashboard.jsx` (Reemplazar el dummy anterior).

## Nota de Veltrixor
El Launchpad es la cara principal de Veltrixor para el cliente. Debe ser extremadamente eficiente y estéticamente superior.
