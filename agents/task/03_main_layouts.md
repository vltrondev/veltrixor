# Tarea: Layout Principal y Navegación Corporativa
**Asignado a:** Agente Especialista en Frontend
**Fase:** 1 (Arquitectura de Layout)

## Objetivo
Crear las estructuras base (Layouts) para las secciones públicas y privadas del portal central.

## Requerimientos Funcionales
1. **PublicLayout**:
   - **Navbar Superior**: Logotipo de Veltrixor (Placeholder actual), enlaces de productos ("LaborSignal", "PriceTrackr"), y botón de "Entrar / Registrarse".
   - **Footer Corporativo**: Enlaces legales, redes sociales ficticias y copyright.
2. **PrivateLayout (Dashboard Layout)**:
   - **Sidebar o Navbar Especializado**: Con el perfil del usuario, enlaces a sus suscripciones y botón de cerrar sesión.
   - **Área de Contenido**: El espacio donde se renderizarán las vistas dinámicas (Outlet).

## Especificaciones UI/UX
- **Navegación**: El Navbar debe tener un fondo Glassmorphism que se vuelva más opaco al hacer scroll.
- **Logotipo**: Usar un texto estilizado o SVG temporal con el nombre "Veltrixor".
- **Interacción**: Los enlaces a los productos deben estar claramente diferenciados de los enlaces a la cuenta de usuario.
- **Transiciones**: Añadir animaciones suaves (fades o deslizamientos) al cambiar entre vistas dentro del Layout.

## Ubicación
- `src/components/layout/PublicLayout.jsx`
- `src/components/layout/PrivateLayout.jsx`

## Nota de Veltrixor
El Launchpad será el corazón de la experiencia de usuario. Asegúrate de que el PrivateLayout se sienta como una aplicación moderna, no solo como un sitio web.
