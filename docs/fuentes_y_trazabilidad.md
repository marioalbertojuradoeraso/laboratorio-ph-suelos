# FUENTES Y TRAZABILIDAD — Laboratorio Virtual de pH

**Archivo requerido por el LOOP MAESTRO.**  
**Ruta:** `C:\Users\majur\Downloads\Clase Química del Suelo\pH\docs\fuentes_y_trazabilidad.md`  
**Fecha de revisión:** 08/11/2026  
**Estado:** Versión inicial basada en los dos archivos MD de referentes técnicos.

---

## 1. Fuentes de consulta

| ID | Archivo | Tipo | Autor/Editor | Año | Contenido principal | Ubicación |
|----|---------|------|--------------|-----|---------------------|-----------|
| F1 | `cb3637en.md` | SOP (procedimiento operativo estándar) | FAO / GLOSOLAN | 2021 | Determinación de pH del suelo: definición, escala, métodos (agua, KCl, CaCl2), temperatura 25 °C, influencia en nutrientes, toxicidad por Al, limitaciones. | `pH/Referentes técnicos en MD/cb3637en.md` |
| F2 | `637-Published Articles-1910-3-10-20240724.md` | Artículo científico revisado por pares | Ikhuoriah, S. O. & Igheghe, V. C. | 2024 | Evaluación de pará fisicoquímicos y metales en sedimentos del río Amagba-Okoroma, Nigeria: pH 7,55-7,68, temperatura 25,67-26 °C, metodología de pH en sedimento, interpretación ambiental, índices de contaminación. | `pH/Referentes técnicos en MD/637-Published Articles-1910-3-10-20240724.md` |
| F3 | `simulador_de_laboratorio_m_todo_de_bouyoucos.html` | Simulador de referencia | (no especificado) | — | Estructura de interacción, pantalla de bienvenida, pasos secuenciales, cuaderno de datos, escala visual, informe final. | `sim_Boyoucus/` |

---

## 2. Registro de afirmaciones científicas con trazabilidad

Cada afirmación utilizada en la interfaz del laboratorio debe tener una fila aquí. El nivel de certeza puede ser: **alto** (hecho bien establecido), **medio** (estudio de caso o contexto específico), **contextual** (depende de condiciones específicas).

| # | Afirmación | Fuente (ID) | Sección / Página / Tabla | Nivel de certeza | Aplicabilidad | Advertencias / Condiciones | Fecha de revisión |
|---|------------|-------------|--------------------------|------------------|---------------|---------------------------|-------------------|
| A1 | pH es medida de acidez/alcalinidad del suelo | F1 | Sección 1 | Alto | Suelo agrícola, suelo natural | — | 08/11/2026 |
| A2 | pH = -log₁₀[αH⁺]; medida de intensidad de H⁺, no de cantidad | F1 | Sección 3 | Alto | Suelo agrícola, suelo natural | Medición en suspensión suelo-agua, KCl o CaCl₂ | 08/11/2026 |
| A3 | pH 7 = neutro; <7 ácido; >7 alcalino | F1 | Sección 1 | Alto | Suelo agrícola, suelo natural | Rango típico 3-9 | 08/11/2026 |
| A4 | Escala logarítmica: 1 unidad de pH = 10× cambio en actividad de H⁺ | F1 | Sección 3 (definición logarítmica) | Alto | Suelo agrícola, suelo natural | — | 08/11/2026 |
| A5 | pH 6,0-7,5 aceptable para la mayoría de plantas | F1 | Sección 1 | Medio | Suelo agrícola | No es regla absoluta; depende del cultivo | 08/11/2026 |
| A6 | Suelos ácidos: mayor solubilidad de Al, Fe, Mn; riesgo de toxicidad por Al o Mn | F1 | Sección 1 | Alto | Suelo agrícola | Según el suelo y el contexto | 08/11/2026 |
| A7 | Suelos alcalinos: menor disponibilidad de P, Fe, Mn, Zn, Cu, B | F1 | Sección 1 | Alto | Suelo agrícola | No diagnóstico universal | 08/11/2026 |
| A8 | pH no determina fertilidad por sí solo | F1 + regla de fidelidad | Sección 1 | Alto | Suelo agrícola | Requiere otros parámetros | 08/11/2026 |
| A9 | Temperatura afecta actividad química y respuesta del electrodo | F1 | Sección 2, 3, 8.1 | Alto | Suelo agrícola | ATC corrige instrumental, no necesariamente químico | 08/11/2026 |
| A10 | 59,16 mV por unidad de pH a 25 °C (Nernst) | F1 | Sección 3 | Alto | Suelo agrícola | Específico de electrodos de vidrio | 08/11/2026 |
| A11 | Sedimentos actúan como sumideros de contaminantes | F2 | Sección Introduction | Medio | Sedimento fluvial | Contexto de cuenca requerido | 08/11/2026 |
| A12 | pH del sedimento 7,55-7,68 (ligeramente alcalino) en río Amagba-Okoroma | F2 | Tabla 2 | Medio (caso específico) | Sedimento de río periurbano | No generalizable universalmente | 08/11/2026 |
| A13 | pH del sedimento medido en suspensión 20 g + 25 mL agua desionizada | F2 | Sección Lab Analysis | Alto | Sedimento fluvial | Metodología específica del estudio | 08/11/2026 |
| A14 | Temperatura del sedimento medida in situ, 5 min de estabilización | F2 | Sección Lab Analysis | Alto | Sedimento fluvial | Relevante para comparación de datos | 08/11/2026 |
| A15 | pH del sedimento no es necesariamente igual al pH del agua de encima | F2 (inferido metodológico) | — | Medio | Sedimento fluvial | Matrices distintas | 08/11/2026 |
| A16 | pH bajo o alto no prueba contaminación por sí solo | Regla de fidelidad | — | Alto | Todo tipo de sedimento | Requiere análisis adicionales | 08/11/2026 |
| A17 | pH cercano a 7 no garantiza buena calidad ambiental | Regla de fidelidad | — | Alto | Todo tipo de sedimento | Requiere contexto adicional | 08/11/2026 |
| A18 | pH del suelo afecta disponibilidad de nutrientes y procesos biológicos | F1 | Sección 1 | Alto | Suelo agrícola | — | 08/11/2026 |
| A19 | pH-Kcl típicamente más bajo que pH-H2O (hasta 1 unidad) | F1 | Sección 1 | Alto | Suelo agrícola | Diferencia por intercambio catiónico | 08/11/2026 |
| A20 | pH debe registrarse con la temperatura | Regla de fidelidad + F1 | Sección 3, 8.1 | Alto | Suelo y sedimento | "pH a una temperatura determinada" | 08/11/2026 |

---

## 3. Notas de trazabilidad

- Ninguna afirmación en la interfaz del laboratorio debe carecer de una fila en esta tabla.
- Las afirmaciones marcadas como "Medio" o "Contextual" deben ir acompañadas en la interfaz de una advertencia de que son orientativas y dependen del contexto.
- Las recomendaciones de manejo (encalado, fertilización, corrección de acidez) no se incluyen como instrucciones directas; solo se mencionan como posibilidades que requieren análisis adicional (ver A8, A5).
- El artículo F2 es un estudio de caso en una cuenca específica (Nigeria); sus valores numéricos (pH 7,55-7,68, temperatura 25,67-26 °C) se usan como ejemplo ilustrativo, no como estándar universal.

---

## 4. Archivos generados a partir de estas fuentes

- `docs/conocimiento_ph_suelos.md` — conocimiento sobre pH en suelos (F1).
- `docs/conocimiento_ph_sedimentos.md` — conocimiento sobre pH en sedimentos (F2).
- `docs/diferencias_suelo_sedimento.md` — comparación suelo vs sedimento (F1, F2).
- `docs/errores_frecuentes_y_misinterpretaciones.md` — errores a evitar (F1, F2 + regla de fidelidad).
- `docs/matriz_interpretacion_ph.md` — matriz de interpretación por rango (F1, F2).
