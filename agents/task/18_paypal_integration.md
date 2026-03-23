# Task 18: Integración de Pagos con PayPal
**Asignado a:** Backend Agent / Frontend Specialist Agent

## Objetivo
Configurar e integrar PayPal como la pasarela de pagos oficial de Veltrixor para gestionar las suscripciones de LaborSignal y PriceTrackr.

## Requerimientos Funcionales
1. **Flujo de Checkout (Frontend):** Actualizar el sistema de pago (`VeltrixorCheckout.jsx`) para que incluya un botón inteligente de PayPal (PayPal Smart Buttons).
2. **Procesamiento (Backend):** 
   - Generar y verificar las órdenes de suscripción o pago único hacia PayPal.
   - Escuchar y procesar webhooks (notificaciones de pago exitoso, cancelación, disputas, etc.).
3. **Activación de Suscripción:** Una vez que PayPal apruebe el pago, el sistema debe actualizar la fila del usuario en la base de datos (Ej: `subscriptions: ['laborsignal']`) para habilitar el servicio inmediatamente.
4. **Historial de Facturación:** Guardar un registro de la transacción autorizada por PayPal en la cuenta del usuario para que pueda ver e imprimir recibos si lo necesita en su panel de "Launchpad".
