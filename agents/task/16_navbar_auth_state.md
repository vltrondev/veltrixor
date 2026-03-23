# Task 16: Actualización de Estado de Autenticación en el Navbar
**Asignado a:** Frontend Specialist Agent

## Objetivo
Modificar la barra de navegación (`Navbar.jsx`) para que responda adecuadamente al estado de la sesión del usuario.

## Requerimientos Funcionales
1. **Ocultar botones de Auth:** Si el usuario ya inició sesión (logueado), los botones de "Sign In" y "Get Started" deben desaparecer de la vista pública del Navbar (tanto en la versión de escritorio como en la móvil).
2. **Nuevos Controles de Usuario (Logged In):** En reemplazo de los botones de login/registro, se deben mostrar los siguientes elementos cuando la sesión está activa:
   - **Ícono/Enlace de Perfil:** Para dirigir al usuario a su cuenta o panel principal.
   - **Ícono/Enlace de Herramienta (Configuración):** Un acceso rápido a los ajustes de usuario.
   - **Botón de Salir (Log Out):** Un botón claramente visible para cerrar la sesión actual y redirigir al usuario a la página de inicio.
3. **Consistencia:** Mantener el diseño del "Design System" de Veltrixor (VeltrixorButton, estilos de la barra, glassmorphism) al integrar estos nuevos íconos y botones.
