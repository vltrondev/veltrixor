# Tarea: Configuración Inicial de Enrutamiento (React + Vite)
**Asignado a:** Agente Especialista en Frontend
**Fase:** 1 (Arquitectura Base)

## Objetivo
Configurar la infraestructura de navegación del portal central de Veltrixor utilizando React Router.

## Requerimientos Técnicos
1. **Instalación**: Configurar `react-router-dom` v6+.
2. **Estructura de Carpetas**:
   - `src/pages/`: Para las vistas principales.
   - `src/components/layout/`: Para los contenedores de rutas (Layouts).
   - `src/routes/`: Para la configuración centralizada de rutas.
3. **Definición de Rutas Iniciales**:
   - `/`: Landing Page Corporativa (Public).
   - `/laborsignal`: Info de LaborSignal (Public).
   - `/pricetrackr`: Info de PriceTrackr (Public).
   - `/login`: Inicio de sesión global (Public).
   - `/signup`: Registro global (Public).
   - `/dashboard`: Launchpad central (Private - usar un componente dummy por ahora).
   - `/profile`: Gestión de cuenta (Private - usar un componente dummy por ahora).

## Calidad Premium (Veltrixor Standard)
- Implementar **Lazy Loading** para todas las rutas de las páginas.
- Configurar un componente `Loading` elegante (Spinner o Skeleton) para las transiciones.
- Asegurar que el scroll se reinicie al tope de la página en cada cambio de ruta.

## Nota de Veltrixor
Recuerda que este es el núcleo central. El acceso a los productos LaborSignal y PriceTrackr será mediante redirecciones externas desde el Launchpad en fases posteriores.
