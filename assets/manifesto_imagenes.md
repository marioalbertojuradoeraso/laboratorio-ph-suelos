# MANIFIESTO DE IMÁGENES — Laboratorio Virtual de pH

**Ruta:** `C:\Users\majur\Downloads\Clase Química del Suelo\pH\assets\manifesto_imagenes.md`  
**Fecha:** 08/11/2026  
**Agente:** Agente 4 — Artista Visual

## Nota sobre la API BFL

El LOOP MAESTRO solicita generar recursos visuales mediante la API BFL si está disponible. En este entorno no se pudo acceder a la API BFL directamente. Por lo tanto, se aplicó la regla de alternativa establecida: **se usaron esquemas SVG generados manualmente y documentados aquí**. La API BFL no bloqueó el proyecto.

## Recursos visuales generados

| # | Archivo | Descripción | Uso en el laboratorio | Dimensiones | Relación con contenido |
|---|---------|-------------|----------------------|-------------|------------------------|
| 1 | `perfil_suelo.svg` | Perfil de suelo con horizontes, raíces, materia orgánica y agua infiltrada. | Sección "¿Qué es el suelo?", ficha de muestra suelo. | 600×400 | Explicación de suelo como sistema terrestre. |
| 2 | `sedimento_rio.svg` | Lecho de río con agua sobrenadante, partículas, materia orgánica y microorganismos. | Sección "¿Qué es un sedimento?", ficha de muestra sedimento. | 600×400 | Explicación de sedimento como sistema acuático. |
| 3 | `escala_ph.svg` | Escala de pH 0-14 con gradiente, punto neutro en 7 y ejemplos (pH 5 vs 6, pH 9 vs 8). | Pantalla "¿Qué es el pH?". | 600×300 | Escala logarítmica, ácido/neutro/alcalino. |
| 4 | `disponibilidad_nutrientes.svg` | Disponibilidad de nutrientes según pH (P, Fe, Zn, Al, Mn). | Panel de interpretación, sección nutrientes. | 600×350 | pH afecta disponibilidad de nutrientes (cb3637en.md). |
| 5 | `suspension_suelo_agua.svg` | Vaso con suspensión suelo-agua, electrodo de pH y lectura numérica. | Pantalla de medición de suelo. | 600×350 | Método de medición en suspensión (cb3637en.md). |
| 6 | `lecho_rio.svg` | Lecho de río con agua sobrenadante y sedimento, distinción pH agua vs pH sedimento. | Pantalla de medición de sedimento. | 600×350 | pH del sedimento ≠ pH del agua de encima. |
| 7 | `temperatura_ph.svg` | Termómetro, suspensión y lectura de pH con temperatura. Advertencia: no regla universal. | Sección "Temperatura y medición del pH". | 600×320 | Relación pH-temperatura obligatoria. |
| 8 | `iconos.svg` | Iconos simples: suelo, sedimento, gota, planta, microorganismo, termómetro, alerta, fuente. | Interfaz general, botones, glosario. | 600×120 | Apoyo visual sin texto extenso. |

## Reglas cumplidas

- Imágenes guardadas en `assets/`.
- Nombres descriptivos en minúsculas y sin espacios.
- Formato SVG (vectorial, escalable, ligero).
- No hay texto extenso dentro de las imágenes que dificulte accesibilidad o traducción.
- Cada imagen tiene `<title>` y `<desc>` para accesibilidad.
- Se prefiere esquemas e ilustraciones planas antes que imágenes decorativas.
- Las imágenes no sustituyen explicaciones científicas; las acompañan.

## Limitación documentada

- La API BFL no fue utilizada porque no estuvo disponible en este entorno. Se documenta esta limitación y se usaron alternativas SVG/CSS funcionales y referenciadas, cumpliendo el criterio de aceptación #15.
