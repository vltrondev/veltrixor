# Tarea: Interfaz de Perfil de Usuario y Ajustes
**Asignado a:** Agente Especialista en Frontend
**Fase:** 4 (Dashboard)

## Objetivo
Desarrollar la página de Perfil de Usuario donde los clientes de Veltrixor puedan gestionar sus datos personales y visualizar sus métodos de pago.

## Requerimientos Funcionales
1. **Información de Perfil**:
   - Mostrar nombre completo y email (datos extraídos de Supabase Auth).
   - Formulario para editar el nombre de visualización.
2. **Sección de Seguridad**:
   - Enlaces o botones para cambiar contraseña (redirigir a flujo de Supabase).
3. **Gestión de Pagos (Placeholders)**:
   - Sección para mostrar tarjetas guardadas (diseño estético de tarjeta de crédito).
   - Historial de facturación simple (Tabla con Fecha, Producto, Monto y Estado).

## Requerimientos UI/UX
- **Estética**: Usar el `VeltrixorCard` para separar las secciones de información.
- **Interactividad**: Feedback visual claro al guardar cambios (Toasts o mensajes de éxito).
- **Layout**: Mantener la coherencia con el `PrivateLayout`.

## Ubicación
`src/pages/Profile.jsx` (Reemplazar el dummy anterior).

## Nota de Veltrixor
El perfil debe transmitir orden y control. Es el lugar donde el usuario gestiona su identidad global dentro del ecosistema.
