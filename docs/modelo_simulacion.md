# MODELO DE SIMULACIÓN — Laboratorio Virtual de pH

**Fecha:** 08/11/2026 | **Agente:** Agente 5 — Arquitecto de Simulación

## 1. Alcance y simplificaciones

- Modelo educativo simple, no un modelo de reactividad suelo-sedimento real.
- No simula procesos químicos complejos más allá de lo necesario para el objetivo educativo.
- No incluye calibración de electrodos.
- El pH de cada muestra es un valor objetivo (rango plausible) asociado a la muestra; no se calcula dinámicamente a partir de reacciones químicas.
- La temperatura es una variable registrable (10 °C – 35 °C) que se muestra junto con el pH, pero no se usa para alterar numéricamente el pH de forma universal (no existe regla universal temperatura-pH).
- El valor de pH mostrado es el pH objetivo de la muestra; la temperatura se registra como metadato de la medición.

## 2. Variables del modelo

| Variable | Descripción | Rango / Valores |
|----------|-------------|-----------------|
| tipoMuestra | "suelo" o "sedimento" | texto |
| nombre | Nombre de la muestra | texto |
| contexto | Contexto narrativo | texto |
| pH | Valor objetivo de pH | 3.0 – 9.0 |
| temperatura | Temperatura de medición | 10 – 35 °C |
| textura | Descripción de textura | texto |
| materiaOrganica | Aproximada, si relevante | texto |
| observaciones | Observaciones cualitativas | texto |
| explicaciones | Posibles causas del pH | array de texto |
| interpretacion | Interpretación prudente | texto |
| preguntas | Preguntas de reflexión | array de texto |
| limites | Límites de la conclusión | texto |
| fuente | Fuente trazable | texto |

## 3. Reglas de presentación

- Cada muestra muestra pH y temperatura juntos (ejemplo: "pH 5,2 a 21 °C").
- La interpretación varía según tipo (suelo vs sedimento).
- Siempre se incluye advertencia: "El pH orienta, pero no diagnostica solo."
- No se recomiendan enmiendas sin advertir que requieren análisis y contexto.
- No se afirma que pH bajo/alto demuestra contaminación.

## 4. Muestras

Definidas en `data/muestras.json`: 5 suelos y 5 sedimentos.
