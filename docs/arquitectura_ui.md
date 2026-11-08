# ARQUITECTURA UI — Laboratorio Virtual de pH

**Inspiración:** `simulador_de_laboratorio_m_todo_de_bouyoucos.html` (pantalla de bienvenida, pasos secuenciales, cuaderno de datos, escala visual, informe final, diseño oscuro con acentos ámbar).  
**Fecha:** 08/11/2026 | **Agente:** Agente 3 — Diseñador de Interfaz y Experiencia

## 1. Principios de diseño

- Sencillo, claro, responsivo, atractivo.
- Comprensible sin instrucciones externas.
- Oscuro (fondo pizarra/azul oscuro) con acentos en ámbar y verde para legibilidad y contraste.
- El color nunca es el único indicador de acidez o alcalinidad (se acompaña siempre de texto y números).
- Totalmente ejecutable en navegador sin servidor.
- Accesible: contraste suficiente, foco visible, textos alternativos en imágenes, navegación por teclado.

## 2. Paleta de colores (sugerida)

| Uso | Color | Hex |
|-----|-------|-----|
| Fondo principal | Azul oscuro pizarra | #0b1520 |
| Panel / tarjeta | Gris azulado oscuro | #1e293b |
| Texto principal | Gris claro | #e7eef2 |
| Texto secundario | Gris medio | #94a3b8 |
| Acento principal (botones, destacados) | Ámbar | #fbbf24 |
| Acento éxito | Verde esmeralda | #34d399 |
| Acento alerta | Ámbar oscuro | #f59e0b |
| Ácido (pH bajo) | Rojo suave | #ef4444 |
| Neutro (pH 7) | Verde suave | #34d399 |
| Alcalino (pH alto) | Azul suave | #3b82f6 |

## 3. Tipografía

- Fuente principal: sans-serif del sistema (Inter, system-ui, Segoe UI, Arial).
- Números de pH: monoespaciada para fácil lectura (JetBrains Mono, Consolas, monospace).
- Títulos: negrita, tamaño grande.
- Cuerpo: tamaño base 1rem, interlineado 1.6.

## 4. Componentes principales

- Pantalla de inicio (objetivo, advertencia, botón comenzar).
- Selector de tipo de muestra (suelo / sedimento).
- Selector de muestra concreta (lista de 5 suelos, 5 sedimentos).
- Ficha de muestra (nombre, tipo, contexto, imagen/esquema, observaciones, temperatura sugerida).
- Escena de medición (visual de suspensión o lecho de río).
- Control de temperatura (deslizador 10–35 °C).
- Lectura de pH (número grande + escala de color).
- Panel de interpretación (pH, temperatura, clasificación, suelo, sedimento, limitaciones, preguntas).
- Comparador suelo-sedimento (explicación paralela).
- Bitácora (tabla de ensayos).
- Quiz final (preguntas con retroalimentación).
- Glosario (definiciones con tooltips).
- Fuentes y créditos.
- Advertencias contextuales (visibles cuando la interpretación depende de contexto).

## 5. Flujo de navegación

Inicio → ¿Qué es el pH? → Seleccionar tipo (suelo/sedimento) → Elegir muestra → Ficha de muestra → Medición (con temperatura) → Lectura de pH → Interpretación → (opcional: comparador) → Bitácora → Quiz → Glosario/Fuentes.

En cualquier momento se puede volver a la pantalla anterior o reiniciar.
