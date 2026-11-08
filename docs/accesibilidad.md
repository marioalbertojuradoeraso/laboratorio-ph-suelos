# ACCESIBILIDAD — Laboratorio Virtual de pH

## 1. Contraste

- Texto principal sobre fondo oscuro con ratio de contraste ≥ 4.5:1.
- Botones de acento (ámbar) con texto oscuro para contraste suficiente.
- Estados de foco visibles (anillo de 3 px en color ámbar).

## 2. Navegación por teclado

- Todos los elementos interactivos (botones, selectores, deslizadores) operables con Tab, Enter, Espacio y flechas.
- Orden lógico de foco siguiendo el flujo narrativo.

## 3. Imágenes y esquemas

- Todas las imágenes tienen `alt` descriptivo.
- Los esquemas SVG incluyen `<title>` y `<desc>`.
- No hay texto extenso dentro de imágenes que dificulte la accesibilidad o traducción.

## 4. Lectores de pantalla

- Roles ARIA en pantallas y componentes dinámicos (`role="region"`, `aria-live="polite"` para lecturas de pH).
- Etiquetas claras en controles de temperatura y medición.

## 5. Reducción de movimiento

- Respetar `prefers-reduced-motion`: desactivar animaciones si el usuario lo indica.

## 6. Lenguaje

- Español claro, sin jerga innecesaria.
- Términos técnicos con tooltip o entrada en glosario ("¿Qué significa esto?").
