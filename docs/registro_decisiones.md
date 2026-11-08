# REGISTRO DE DECISIONES — Laboratorio Virtual de pH

Registro de decisiones de diseño, ciencia y toma, con fecha, agente responsable y justificación.

| # | Fecha | Agente | Decisión | Ámbito | Justificación | Estado |
|---|-------|--------|----------|--------|---------------|--------|
| 001 | 08/11/2026 | Agente 0 | Estructura de carpetas: `docs/`, `assets/`, `data/`, `css/`, `js/` dentro de `pH/` | Arquitectura | Cumplir con la ruta obligatoria del proyecto y separar lógica, datos, estilos y documentación. | Completado |
| 002 | 08/11/2026 | Agente 1 | Usar únicamente los dos archivos MD de referentes técnicos como fuente científica primaria | Ciencia | Cumplir la regla de fidelidad científica: no inventar datos, rangos ni conclusiones; toda afirmación debe tener fuente trazable. | Completado |
| 003 | 08/11/2026 | Agente 0 | Inspirar la interfaz en el simulador Bouyoucos (pantalla de bienvenida, pasos secuenciales, cuaderno de datos, escala visual, informe final) | Interfaz | El usuario solicitó explícitamente inspirarse en la experiencia, estructura y lógica de interacción de ese simulador. | Completado |
| 004 | 08/11/2026 | Agente 0 | Tecnología: HTML + CSS + JavaScript nativos, sin servidor, ejecutable localmente | Arquitectura | Garantizar que cualquier usuario pueda abrir `index.html` en un navegador sin instalar dependencias. | Completado |
| 005 | 08/11/2026 | Agente 4 | Si la API BFL falla o no está disponible, usar SVG/CSS como alternativa visual y documentar la limitación | Visual | Evitar que el proyecto se bloquee si la API de generación de imágenes no responde. | Completado (SVG generados y manifesto documentado) |
| 006 | 08/11/2026 | Agente 5 | No simular procesos químicos complejos; mantener el modelo simple y científicamente defendible | Simulación | El objetivo es educativo, no un modelo de reactividad suelo-sedimento real. | Completado |
| 007 | 08/11/2026 | Agente 5 | Incluir temperatura como variable registrable (10 °C a 35 °C) y registrarla junto con cada pH | Simulación | Requisito obligatorio del LOOP MAESTRO y regla científica central. | Completado |
| 008 | 08/11/2026 | Agente 6 | No incluir calibración de electrodos en la interfaz | Interfaz | Requisito explícito: "No incluir calibración de electrodos." | Completado |

---

**Nota:** Este registro se actualiza al finalizar cada ciclo. Las decisiones marcadas como "Pendiente" se confirman al completar el ciclo correspondiente.
