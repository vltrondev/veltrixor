# Task 21: Rediseño Global de Paleta de Colores y Logo
**Asignado a:** Frontend Specialist Agent

## Objetivo
Aplicar la nueva paleta de colores corporativa a todo el sitio web para lograr la estética espacial/tecnológica deseada, y recrear el logotipo de Veltrixor en formato digital (SVG) basándose en la imagen de referencia provista.

## Esquema de Colores Oficial
Se deben sobreescribir las variables CSS del sistema de diseño (ej. en `index.css` o el archivo de estilos globales) usando obligatoriamente estos códigos hexadecimales. Cualquier diseño libre o mejora visual debe ceñirse a estos tonos.

| Nombre | Hex Code | Uso Sugerido |
| :--- | :--- | :--- |
| **Electric Blue** | `#3182F1` | Color principal. Usar en el logo, iconos, textos destacados y botones primarios. |
| **Deep Azure** | `#1A4B8E` | Color secundario. Usar para sombras, fondos de degradados y estados interactivos ("hover"/"focus"). |
| **Space Black** | `#0B0E14` | Background principal. Fondo de toda la interfaz para generar contraste con el azul eléctrico. |
| **PriceTrackr Green** | *(Mantener)* | Conservar el color verde original única y exclusivamente cuando se referencie a PriceTrackr (ej. en sus tarjetas o botones). |

## Trabajo de Logo y Marca
1. **Creación/Implementación de Logo SVG:**
   - El equipo de frontend debe diseñar o integrar un archivo SVG limpio del logo enviado como referencia visual.
   - **Descripción Visual:** El logo es una letra "V" estilizada y tecnológica, con detalles geométricos y un par de bloques/cubos 3D modulares a los lados. En la parte inferior lleva el texto "modular systems by veltrixor" (o vertixor, en la imagen).
   - Reemplazar el texto simple "VELTRIXOR" del `Navbar.jsx` por este nuevo logotipo con sus colores oficiales.
2. **Atmósfera (Look & Feel):** El sitio ahora debe invocar un ambiente "Hacker/Espacial de Alta Gama". Usa los degradados entre el *Electric Blue* y el *Deep Azure* para darle vida al *Space Black*.
