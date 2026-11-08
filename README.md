# LABORATORIO VIRTUAL DE pH — SUELOS Y SEDIMENTOS DE RÍO

**Ruta:** `C:\Users\majur\Downloads\Clase Química del Suelo\pH\`  
**Producto:** `index.html` — laboratorio virtual educativo, interactivo y ejecutable en navegador sin servidor.

---

## Objetivo educativo

Permitir que estudiantes, docentes y personas sin conocimientos previos comprendan:

1. Qué es el pH y qué significa ácido, neutro y alcalino.
2. Cómo medir virtualmente el pH de suelos y sedimentos de río.
3. Cómo interpretar el pH según el tipo de muestra (suelo vs sedimento).
4. Que el pH afecta la disponibilidad de nutrientes y procesos biológicos.
5. Que el pH es una evidencia importante, pero **no un diagnóstico único**.
6. Que la temperatura debe registrarse siempre junto con el pH.

---

## Cómo abrir el laboratorio

1. Abre la carpeta `C:\Users\majur\Downloads\Clase Química del Suelo\pH\`.
2. Haz doble clic en `index.html`.
3. El laboratorio se ejecutará directamente en tu navegador web (Chrome, Firefox, Edge, Safari). No se requiere servidor ni conexión a internet.

---

## Estructura de archivos

```
pH/
├── index.html                 # Punto de entrada del laboratorio
├── css/
│   ├── estilos.css            # Estilos principales
│   └── accesibilidad.css      # Reglas de accesibilidad
├── js/
│   ├── app.js                 # Orquestador de la interfaz
│   ├── estado.js              # Estado global
│   ├── muestras.js            # Carga y lista de muestras
│   ├── simulacion.js          # Visuales y valor de pH
│   ├── temperatura.js         # Control de temperatura
│   ├── interpretacion.js      # Panel de interpretación y reglas
│   ├── quiz.js                # Quiz final con retroalimentación
│   └── utilidades.js          # Funciones de utilidad
├── assets/
│   ├── perfil_suelo.svg
│   ├── sedimento_rio.svg
│   ├── escala_ph.svg
│   ├── disponibilidad_nutrientes.svg
│   ├── suspension_suelo_agua.svg
│   ├── lecho_rio.svg
│   ├── temperatura_ph.svg
│   ├── iconos.svg
│   └── manifesto_imagenes.md  # Registro de recursos visuales
├── data/
│   └── muestras.json          # 5 suelos y 5 sedimentos con contexto
└── docs/
    ├── plan_maestro.md
    ├── criterios_aceptacion.md
    ├── registro_decisiones.md
    ├── conocimiento_ph_suelos.md
    ├── conocimiento_ph_sedimentos.md
    ├── diferencias_suelo_sedimento.md
    ├── errores_frecuentes_y_misinterpretaciones.md
    ├── matriz_interpretacion_ph.md
    ├── fuentes_y_trazabilidad.md
    ├── diseno_pedagogico.md
    ├── guion_interactivo.md
    ├── banco_preguntas.md
    ├── mensajes_educativos.md
    ├── casos_de_estudio.md
    ├── arquitectura_ui.md
    ├── mapa_pantallas.md
    ├── estilo_visual.md
    ├── accesibilidad.md
    ├── modelo_simulacion.md
    ├── reglas_interpretacion.json
    ├── auditoria_cientifica.md
    ├── correcciones_requeridas.md
    └── version_final_validada.md
```

---

## Funcionalidades principales

- Selección de tipo de muestra: suelo o sedimento de río.
- 5 muestras de suelo y 5 de sedimento con contexto narrativo.
- Control de temperatura de medición (10 °C – 35 °C).
- Lectura de pH con escala visual y temperatura registrada.
- Interpretación contextual para suelo y sedimento.
- Comparador suelo vs sedimento (mismo pH, implicaciones distintas).
- Bitácora de mediciones (pH, temperatura, tipo, muestra).
- Quiz final de 10 preguntas con retroalimentación educativa.
- Glosario accesible.
- Fuentes y trazabilidad de cada afirmación científica.
- Advertencias contextuales: el pH orienta, no diagnostica solo.

---

## Créditos y fuentes

Este laboratorio se basa íntegramente en dos referentes técnicos:

- **cb3637en.md** — FAO, *Standard operating procedure for soil pH determination*, GLOSOLAN-SOP-06, Roma, 2021.
- **637-Published Articles-1910-3-10-20240724.md** — Ikhuoriah & Igheghe (2024), *Assessment of Physicochemical Parameters and Metal Contamination in Sediments of the Peri-Urban Amagba-Okoroma River*, Open Journal of Agricultural Science, 5(1), 10-24.

La interfaz se inspiró en el simulador de Bouyoucos (`sim_Boyoucus/simulador_de_laboratorio_m_todo_de_bouyoucos.html`).

---

## Limitaciones

- Es un modelo educativo simplificado, no un simulador de reactividad química real.
- No incluye calibración de electrodos.
- Los valores de pH de las muestras son objetivos educativos, no medidas de sitios reales.
- La API BFL no estuvo disponible en este entorno; se usaron alternativas SVG (documentadas en `assets/manifesto_imagenes.md`).
- El pH no determina fertilidad ni diagnostica contaminación por sí solo. Siempre se requiere contexto adicional.
