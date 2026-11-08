# PLAN MAESTRO — Laboratorio Virtual de pH de Suelos y Sedimentos

**Ruta del proyecto:** `C:\Users\majur\Downloads\Clase Química del Suelo\pH\`  
**Producto final:** `index.html` (laboratorio virtual educativo, interactivo, ejecutable en navegador sin servidor)  
**Fecha de inicio:** 08/11/2026  
**Estado:** En ejecución — Ciclo 1 (Descubrimiento)

## 1. Objetivo del proyecto

Construir un laboratorio virtual educativo, interactivo, visualmente atractivo y científicamente prudente sobre el pH de suelos y sedimentos de río, inspirado en el simulador de Bouyoucos (`sim_Boyoucus\simulador_de_laboratorio_m_todo_de_bouyoucos.html`), que permita a estudiantes, docentes y personas sin conocimientos previos comprender qué es el pH, medirlo virtualmente, interpretar resultados en suelo y sedimento, y entender que el pH es evidencia pero no diagnóstico único, registrando siempre la temperatura.

## 2. Arquitectura de agentes (simulada)

| Agente | Rol | Responsabilidad principal | Entregables clave |
|--------|-----|---------------------------|-------------------|
| Agente 0 | Orquestador | Plan, criterios de aceptación, registro de decisiones, coordinación, validación final | `docs/plan_maestro.md`, `docs/criterios_aceptacion.md`, `docs/registro_decisiones.md` |
| Agente 1 | Investigador Científico | Leer referentes MD, extraer afirmaciones verificables, construir base de conocimiento, matriz de interpretación, trazabilidad | `docs/conocimiento_ph_suelos.md`, `docs/conocimiento_ph_sedimentos.md`, `docs/diferencias_suelo_sedimento.md`, `docs/errores_frecuentes_y_misinterpretaciones.md`, `docs/matriz_interpretacion_ph.md`, `docs/fuentes_y_trazabilidad.md` |
| Agente 2 | Diseñador Pedagógico | Experiencia de aprendizaje, perfiles de usuario, narrativa progresiva, casos de estudio, banco de preguntas | `docs/diseno_pedagogico.md`, `docs/guion_interactivo.md`, `docs/banco_preguntas.md`, `docs/mensajes_educativos.md`, `docs/casos_de_estudio.md` |
| Agente 3 | Diseñador UI/UX | Arquitectura de interfaz, mapa de pantallas, estilo visual, accesibilidad, patrones del simulador Bouyoucos | `docs/arquitectura_ui.md`, `docs/mapa_pantallas.md`, `docs/estilo_visual.md`, `docs/accesibilidad.md` |
| Agente 4 | Artista Visual (API BFL) | Recursos visuales didácticos (SVG/PNG), manifesto de imágenes | `assets/`, `assets/manifesto_imagenes.md` |
| Agente 5 | Arquitecto de Simulación | Modelo de simulación, muestras virtuales, reglas de interpretación, datos | `docs/modelo_simulacion.md`, `data/muestras.json`, `docs/reglas_interpretacion.json` |
| Agente 6 | Desarrollador Frontend | Implementación HTML/CSS/JS, funcionamiento local sin servidor | `index.html`, `css/`, `js/`, `README.md` |
| Agente 7 | Redactor Científico-Educativo | Textos de interfaz, glosario, explicaciones por rango, retroalimentación quiz | `docs/textos_interfaz.md`, `docs/glosario.md`, `docs/explicaciones_por_rango.md`, `docs/retroalimentacion_quiz.md` |
| Agente 8 | Revisor Científico | Auditoría científica, trazabilidad, detección de errores, validación | `docs/auditoria_científica.md`, `docs/correcciones_requeridas.md`, `docs/version_final_validada.md` |
| Agente 9 | Revisor de Experiencia y Accesibilidad | Pruebas de usuario final, accesibilidad, fricciones UX | `docs/pruebas_usabilidad.md`, `docs/mejoras_ux.md`, `docs/lista_errores_ui.md` |

## 3. Referentes técnicos de entrada (base de conocimiento)

| Archivo | Tipo | Contenido principal | Ubicación |
|---------|------|---------------------|-----------|
| `cb3637en.md` | SOP FAO GLOSOLAN | Procedimiento estándar para determinación de pH del suelo (Método A: agua, B: KCl, C: CaCl2), definición de pH, escala logarítmica, temperatura 25 °C, influencia en nutrientes y toxicidad, limitaciones | `pH/Referentes técnicos en MD/cb3637en.md` |
| `637-Published Articles-1910-3-10-20240724.md` | Artículo científico | Evaluación de pará fisicoquímicos y metales en sedimentos del río Amagba-Okoroma, pH 7.55–7.68, temperatura 25.67–26 °C, metodología de pH en sedimento (20 g sedimento + 25 mL agua desionizada), interpretación ambiental, índices de contaminación | `pH/Referentes técnicos en MD/637-Published Articles-1910-3-10-20240724.md` |
| `simulador_de_laboratorio_m_todo_de_bouyoucos.html` | Simulador de referencia | Interfaz paso a paso, cuaderno de datos, pantalla de bienvenida, escala visual, triángulo USDA, informe final, patrones de interacción | `sim_Boyoucus/` |

## 4. Ciclos de ejecución

1. **Ciclo 1 — Descubrimiento:** Lectura de referentes, base científica, matriz de interpretación, trazabilidad.
2. **Ciclo 2 — Diseño:** Diseño pedagógico, arquitectura UI, modelo de simulación, recursos visuales.
3. **Ciclo 3 — Construcción:** Implementación frontend, integración de textos, datos, imágenes, temperatura.
4. **Ciclo 4 — Validación científica:** Auditoría del Agente 8, correcciones, trazabilidad final.
5. **Ciclo 5 — Validación de uso:** Pruebas UX del Agente 9, correcciones de interfaz.
6. **Ciclo 6 — Entrega:** README, versión final validada, verificación de criterios de aceptación.

## 5. Criterios de aceptación (resumen)

1. `index.html` funcional en `pH/`.
2. Al menos 5 muestras de suelo y 5 de sedimento.
3. Explicación correcta de pH, ácido, neutro, alcalino, escala logarítmica.
4. Diferencia claro entre interpretación de suelo y sedimento.
5. pH afecta nutrientes y procesos biológicos.
6. pH no diagnostica contaminación ni fertilidad por sí solo.
7. Advertencias de interpretación contextual.
8. Al menos 6 casos de estudio.
9. Quiz con retroalimentación educativa.
10. Bitácora de mediciones, glosario, fuentes y trazabilidad.
11. Imágenes/esquemas (API BFL o alternativas SVG/CSS).
12. Relación pH–temperatura obligatoria; registro de temperatura con cada medición.
13. No hay calibración de electrodos.
14. No hay afirmaciones inventadas.
15. Todos los archivos dentro de `pH/`.

## 6. Regla de auto-corrección

Después de cada ciclo, el Agente 0 responde: ¿qué se completó? ¿qué falta? ¿errores detectados? ¿afirmaciones que requieren corrección? ¿archivos creados o modificados? ¿el proyecto es científicamente defendible? ¿es comprensible para no expertos? ¿se incluyó pH–temperatura? ¿se cumplen criterios de aceptación?

---

**Orquestador (Agente 0)** — Plan vigente desde el Ciclo 1.
