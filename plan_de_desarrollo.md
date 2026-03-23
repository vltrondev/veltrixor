# Plan de Desarrollo: Veltrixor (Portal Central y Cuentas Globales)

Este plan detalla el desarrollo de la **plataforma central de Veltrixor**. Los productos (LaborSignal y PriceTrackr) ya están creados en subdominios independientes. Este proyecto se enfocará exclusivamente en ser la "cara" pública de la empresa, el sistema de registro/autenticación global, y el "Launchpad" o panel de control central para gestionar suscripciones.

## Fase 1: Arquitectura Base y UI/UX Corporativo
**Objetivo**: Establecer la estructura del proyecto Frontend y el sistema de diseño central de Veltrixor.
- **Tarea 1.1**: Configuración inicial con React, Vite y enrutamiento (ej: React Router).
- **Tarea 1.2**: Diseñar el "Design System" de Veltrixor (Paleta de colores, tipografía, componentes reutilizables como Botones, Modales, y Tarjetas de suscripción).
- **Tarea 1.3**: Estructurar el Layout principal (Navegación pública vs. Navegación privada para usuarios autenticados).

## Fase 2: Sitio Corporativo y Landing Pages
**Objetivo**: Crear la presencia pública para atraer clientes y publicitar ambos productos.
- **Tarea 2.1**: **Página de Inicio (Veltrixor)**: Presentación de la empresa creadora de software y vitrina de los productos.
- **Tarea 2.2**: **Página de Información - LaborSignal**: Explicación de las ventajas de la plataforma de despidos/contrataciones, con sus respectivos planes de precio y enlaces para suscribirse.
- **Tarea 2.3**: **Página de Información - PriceTrackr**: Explicación del sistema de ahorro, alertas pro y carrito inteligente, con sus respectivos planes de precio y enlaces para suscribirse.

## Fase 3: Sistema de Cuentas Globales (Veltrixor ID)
**Objetivo**: Implementar el sistema central de registro e inicio de sesión desde el cual los usuarios accederán a todo el ecosistema.
- **Tarea 3.1**: Vistas de autenticación: Crear interfaces de Registro, Autenticación (Login) y Recuperación de Contraseña con validaciones completas.
- **Tarea 3.2**: Lógica de Autenticación Frontend: Guardar el JWT o sesión global y proteger las rutas privadas.
- **Tarea 3.3**: Flujo de Onboarding: Integración para que el usuario, tras crear la cuenta, decida a qué producto desea suscribirse o ingresar.

## Fase 4: Dashboard y Centro de Lanzamiento ("Launchpad")
**Objetivo**: Construir el panel privado del usuario donde verá sus accesos y gestionará sus cuentas.
- **Tarea 4.1**: **Perfil de Usuario**: Interfaz para editar datos personales, métodos de pago e historial de facturación.
- **Tarea 4.2**: **Gestor de Suscripciones**: Tarjetas dinámicas que le indiquen al usuario si su suscripción a LaborSignal o PriceTrackr está *Activa*, *Inactiva* o *Pendiente*.
- **Tarea 4.3**: **Lanzador de Apps (App Launcher)**: Interfaz destacada con los logotipos de LaborSignal y PriceTrackr. Al hacer clic en un producto con suscripción activa, el sistema redireccionará automáticamente al subdominio del producto correspondiente pasando el token de sesión (SSO) si es necesario. (Los enlaces específicos serán configurados posteriormente).

## Fase 5: Refinamiento Premium y Testing
**Objetivo**: Asegurar una experiencia de usuario estéticamente impecable ("WOW factor").
- **Tarea 5.1**: Auditoría de Diseño: Revisión de micro-animaciones (Glassmorphism, hover effects) y Dark Mode en todas las pantallas.
- **Tarea 5.2**: Mobile-First: Pruebas estrictas de responsividad para que el "Launchpad" y la web corporativa se vean perfectos en móviles.
- **Tarea 5.3**: Simulación y validación de los flujos de redirección y pagos.
