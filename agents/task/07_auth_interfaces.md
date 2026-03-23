# Tarea: Vistas de Autenticación Global (Veltrixor ID)
**Asignado a:** Agente Especialista en Frontend
**Fase:** 3 (Sistema de Cuentas)

## Objetivo
Desarrollar las interfaces de Login, Registro y Recuperación de Contraseña con una estética premium y validaciones de formulario completas.

## Interfaces a Crear
1. **Página de Login (`Login.jsx`)**:
   - Campos: Email y Contraseña.
   - Opción "Recordarme" y enlace a "Olvidé mi contraseña".
   - Botón de acción principal usando `VeltrixorButton`.
   - Alternativas de login social (Placeholders: Google, GitHub).
2. **Página de Registro (`SignUp.jsx`)**:
   - Campos: Nombre completo, Email, Contraseña y Confirmar Contraseña.
   - Checkbox de aceptación de términos y condiciones.
3. **Página de Recuperación (`ForgotPassword.jsx` - Nueva)**:
   - Campo: Email para envío de instrucciones.

## Requerimientos UI/UX
- **Layout Centrado**: Formulario dentro de una `VeltrixorCard` centrada en pantalla con fondo de gradiente sutil.
- **Validaciones en Tiempo Real**: Mensajes de error claros si el email es inválido o la contraseña es muy corta.
- **Estados de Carga**: El botón debe mostrar un estado de "Cargando..." al ser presionado.
- **Consistencia**: Mantener el modo oscuro y el `Electric Blue` como acento.

## Ubicación
- `src/pages/Login.jsx`
- `src/pages/SignUp.jsx`
- `src/pages/ForgotPassword.jsx` (Asegúrate de agregar esta ruta en `AppRoutes.jsx`)

## Nota de Veltrixor
Veltrixor ID es la llave maestra. La interfaz debe transmitir seguridad, modernidad y confianza absoluta.
