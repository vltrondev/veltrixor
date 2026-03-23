# Task 19: Ocultamiento Global y Reemplazo de CTA (Condicional de Sesión)
**Asignado a:** Frontend Specialist Agent

## Objetivo
Quitar los botones de "Create Global Account", "Register" o equivalentes en todo el sitio para los usuarios logueados, y reemplazar los "Call to Actions" descriptivos de los productos por botones de acceso directo a las apps (en inglés).

## Requerimientos Funcionales
1. **Ocultamiento de Registro:**
   - En la página de inicio (Home) y en cualquier otra vista, ocultar las secciones o botones que inviten a crear una cuenta si ya existe una sesión activa.
2. **Reemplazo Dinámico de CTAs en Productos:**
   Si el usuario ya tiene sesión iniciada, debe modificarse el texto y acción de los botones promocionales de los productos para que funcionen como enlaces directos:
   - **PriceTrackr:** Reemplazar el botón *"Create Free Account"* para que diga **"Go to PriceTrackr"**.
   - **LaborSignal:** Reemplazar el botón de *"Access Workforce"* (o "Get Started") para que diga **"Go to LaborSignal"**.
3. **Refinamiento de Navegación:** Estos botones dinámicos deberán actuar como accesos directos al Dashboard/Launchpad (o al subdominio del producto correspondiente), garantizando fluidez para los miembros de Veltrixor.
