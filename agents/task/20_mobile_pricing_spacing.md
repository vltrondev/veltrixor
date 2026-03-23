# Task 20: Espaciado de Tarjetas de Precios en Móvil
**Asignado a:** Frontend Specialist Agent

## Objetivo
Corregir el diseño y espaciado (margen o *gap*) entre las tarjetas de suscripción/precios cuando se visualizan en dispositivos móviles (resoluciones pequeñas), tanto para LaborSignal como para PriceTrackr.

## Requerimientos Visuales y CSS
1. **Separación Vertical:** Actualmente, en el modo móvil, las tarjetas de los planes se apilan una debajo de la otra y quedan muy pegadas. Se debe agregar el espaciado adecuado (ejemplo: `gap: 2rem` en flex/grid, o un `margin-bottom` en las tarjetas) para que respiren visualmente.
2. **Aplicación Global:** Asegurarse de que la clase CSS corregida o el ajuste de layout se aplique simétricamente en los archivos que manejan los precios:
   - `LaborSignalInfo.jsx` (y su respectivo `.css`).
   - `PriceTrackrInfo.jsx` (y su respectivo `.css`).
3. **Responsive Design:** Comprobar que estas reglas de separación vertical apliquen estrictamente bajo la media query de móviles (e.g. `@media (max-width: 768px)`), sin afectar la cuadrícula horizontal en pantallas grandes.
