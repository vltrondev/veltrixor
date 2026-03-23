# Tarea: Lógica de Autenticación y Protección de Rutas
**Asignado a:** Agente Especialista en Frontend
**Fase:** 3 (Control de Acceso)

## Objetivo
Implementar el estado global de autenticación, guardar la sesión (mockeada) y proteger las rutas privadas del portal.

## Requerimientos Técnicos
1. **Contexto de Autenticación (`AuthContext.jsx`)**:
   - Crear un `Provider` que maneje el estado de `user` (nulo por defecto).
   - Funciones `login(credentials)`, `signup(userData)` y `logout()`.
   - Simular persistencia guardando un "mock-token" en `localStorage`.
2. **Componente de Protección (`ProtectedRoute.jsx`)**:
   - Un wrapper que verifique si hay un usuario autenticado.
   - Si no hay usuario, redirigir automáticamente a `/login`.
3. **Integración en AppRoutes**:
   - Envolver el `PrivateLayout` y sus rutas hijas (`/dashboard`, `/profile`) con el `ProtectedRoute`.

## Lógica de Simulación (Mock)
- Al hacer login/signup, esperar 1.5 segundos (simular red), guardar un objeto de usuario en el estado y redirigir al `/dashboard`.
- Mostrar un mensaje de "Bienvenido de nuevo, [Nombre]" al entrar.

## Ubicación
- `src/context/AuthContext.jsx`
- `src/routes/ProtectedRoute.jsx`
- Actualizar `src/routes/AppRoutes.jsx` y `src/main.jsx` (para el AuthProvider).

## Nota de Veltrixor
Aunque no hay una base de datos real en este proyecto (somos especialistas frontend), la arquitectura debe estar lista para conectarse a una API en el futuro. No omitas la seguridad de las rutas.
