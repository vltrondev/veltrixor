# Tarea: Auditoría de Diseño y Refinamiento UX Premium
**Asignado a:** Agente Especialista en Frontend
**Fase:** 5 (Refinamiento y Calidad)

## Objetivo
Realizar una revisión exhaustiva de todas las vistas del portal para asegurar que cumplen con el estándar visual de Veltrixor: moderno, fluido y estéticamente impecable.

## Requerimientos de Refinamiento
1. **Micro-animaciones de Entrada**:
   - Asegurar que todas las páginas utilicen el sistema de revelado (`reveal`) al hacer scroll de forma consistente.
   - Añadir transiciones suaves de opacidad al cambiar entre rutas.
2. **Consistencia de Glassmorphism**:
   - Verificar que todos los `VeltrixorCard` y el `Navbar` tengan el mismo nivel de desenfoque (`blur`) y transparencia.
   - Añadir bordes semitransparentes sutiles donde falten para enfatizar la elevación.
3. **Interacciones de Botones**:
   - Pulir los efectos de `hover` y `active` en `VeltrixorButton`.
   - Asegurar que el "glow" del botón primario sea sutil y elegante.
4. **Dark Mode Perfection**:
   - Revisar que no existan contrastes demasiado agresivos. El fondo debe ser un negro profundo (`#0a0a0a`) con superficies en gris oscuro (`#1a1a1a`).
5. **Feedback Visual**:
   - Añadir estados de carga (skeletons o spinners) en todas las acciones que requieran espera (Login, Registro, Carga de datos de perfil).

## Entregable
Un reporte de las mejoras aplicadas y el código actualizado en los componentes UI base (`src/components/ui/`) y en las páginas principales.

## Nota de Veltrixor
Veltrixor se diferencia por su acabado profesional. Si una transición se siente "tosca" o un color desentona, debe ser corregido. El objetivo es el "Wow Factor".
