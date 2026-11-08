# MAPA DE PANTALLAS — Laboratorio Virtual de pH

| Pantalla | ID | Elementos principales | Acción del usuario |
|----------|-----|----------------------|-------------------|
| Inicio | `screen-inicio` | Título, objetivo, qué aprenderá, advertencia "El pH orienta, pero no diagnostica solo", registro de temperatura obligatorio, botón "Comenzar" | Clic en "Comenzar" |
| Qué es el pH | `screen-que-es-ph` | Definición, escala logarítmica, ejemplos (pH 5 vs 6), ácido/neutro/alcalino, tooltips | Leer, continuar |
| Selección de tipo | `screen-tipo-muestra` | Botones: Suelo / Sedimento de río, descripción breve de cada uno | Elegir tipo |
| Selección de muestra | `screen-elegir-muestra` | Lista de 5 suelos y 5 sedimentos con nombre, contexto y miniatura | Elegir muestra |
| Ficha de muestra | `screen-ficha-muestra` | Nombre, tipo, contexto narrativo, imagen/esquema, observaciones visuales, temperatura sugerida | Continuar a medición |
| Medición | `screen-medicion` | Visual de suspensión o lecho, control de temperatura (10–35 °C), botón "Medir pH" | Ajustar temperatura, medir |
| Lectura de pH | `screen-lectura-ph` | Número grande de pH, temperatura, escala de color visual, botón "Registrar en bitácora" | Registrar resultado |
| Interpretación | `screen-interpretacion` | pH, temperatura, clasificación, interpretación suelo, interpretación sedimento, posibles explicaciones, limitaciones, preguntas de reflexión, advertencia contextual, botón "Comparar con otro tipo de muestra" | Leer, comparar |
| Comparador | `screen-comparador` | Mismo valor de pH, explicación paralela suelo vs sedimento, temperatura de cada medición | Comparar, volver |
| Bitácora | `screen-bitacora` | Tabla de ensayos (número, ID, tipo, nombre, pH, temperatura, interpretación, reflexión), botón "Repetir", "Limpiar" | Ver historial, repetir |
| Quiz final | `screen-quiz` | 10 preguntas con opciones y retroalimentación explicativa, puntuación final | Responder, ver resultado |
| Glosario | `screen-glosario` | Lista de términos con definiciones sencillas, buscador | Consultar |
| Fuentes y créditos | `screen-fuentes` | Enlaces a docs, trazabilidad, créditos, advertencias | Leer |

## 6. Responsive

- Escritorio (≥1024px): layout de dos columnas (izquierda: instrucciones/cuaderno; derecha: escena interactiva).
- Tablet y móvil (<1024px): layout de una columna apilada, botones más grandes, fuentes escalables.
