# CRITERIOS DE ACEPTACIÓN — Laboratorio Virtual de pH

Estos criterios son la referencia de validación final. El proyecto se considera terminado solo si cumple **todos**.

## Estructura y funcionamiento

- [ ] Existe `index.html` funcional en `C:\Users\majur\Downloads\Clase Química del Suelo\pH\`.
- [ ] El laboratorio se abre directamente en navegador moderno sin servidor.
- [ ] No hay errores de consola (JavaScript) al navegar por todas las pantallas.
- [ ] Funciona razonablemente en pantallas pequeñas (móviles).
- [ ] Todo el texto está en español claro.
- [ ] No hay enlaces rotos ni archivos temporales o código muerto.

## Contenido científico mínimo

- [ ] Explica qué es el pH (medida de acidez/alcalinidad, actividad de iones hidrógeno, escala logarítmica, pH 7 neutro).
- [ ] Explica que una diferencia de una unidad de pH representa un cambio de diez veces en la actividad de iones hidrógeno (ejemplo: pH 5 es diez veces más ácido que pH 6).
- [ ] Explica qué significa pH ácido (<7), neutro (=7) y alcalino (>7).
- [ ] Explica que el pH del suelo influye en disponibilidad de nutrientes (fósforo, calcio, magnesio, hierro, manganeso, zinc, cobre, boro) y en microorganismos.
- [ ] Explica que en suelos ácidos puede aumentar solubilidad de aluminio, hierro y manganeso; riesgo de toxicidad por aluminio o manganeso según contexto.
- [ ] Explica que en suelos alcalinos puede reducirse disponibilidad de fósforo, hierro, manganeso, zinc, cobre y boro.
- [ ] Explica que el pH no determina por sí solo la fertilidad del suelo ni permite diagnosticar contaminantes.
- [ ] Explica que el pH del sedimento se relaciona con materia orgánica, minerales, carbonatos, actividad microbiana, procesos redox, oxígeno y aportes de la cuenca.
- [ ] Explica que el pH del sedimento no es necesariamente igual al pH del agua encima ni al del agua intersticial.
- [ ] Explica que un pH bajo o alto en sedimento no prueba contaminación por sí solo.
- [ ] Explica que el pH debe interpretarse junto con textura, materia orgánica, drenaje, manejo, cultivo, clima, historia de uso y otras propiedades.

## Diferencia suelo vs sedimento

- [ ] Sección destacada titulada "¿Por qué no se interpreta igual un suelo que un sedimento?".
- [ ] Explica que el suelo está asociado a superficie terrestre, plantas, raíces y manejo agrícola/forestal.
- [ ] Explica que el sedimento se acumula en cuerpos de agua e integra material de toda la cuenca.
- [ ] Explica que en suelo el pH se relaciona con nutrición vegetal y manejo agronómico.
- [ ] Explica que en sedimento el pH puede estar más vinculado a procesos acuáticos, materia orgánica, carbonatos, condiciones redox y aportes de la cuenca.
- [ ] Explica que el mismo valor de pH puede tener implicaciones distintas según el sistema.

## Temperatura

- [ ] Sección interactiva titulada "Temperatura y medición del pH".
- [ ] Regla central visible: "Un valor de pH no está completo si no se conoce la temperatura a la que se midió."
- [ ] Explica que la temperatura influye en la medición, en la actividad de iones hidrógeno y en la respuesta del electrodo/sensor.
- [ ] Explica la ecuación de Nernst (en parte) como base de la relación temperatura-respuesta electroquímica.
- [ ] Explica que los medidores modernos pueden tener compensación automática de temperatura (ATC).
- [ ] Explica que la compensación automática corrige parte del efecto instrumental pero no necesariamente el efecto químico de la temperatura.
- [ ] Explica que el pH debe registrarse siempre junto con la temperatura (ejemplo: "pH 5,8 a 22 °C").
- [ ] Explica que no existe una regla universal de que el pH siempre suba o baje con la temperatura; la dirección y magnitud dependen de la composición de la muestra.
- [ ] Interfaz incluye control de temperatura (rango 10 °C a 35 °C).
- [ ] El usuario puede ajustar/registrar temperatura y observa que el pH siempre se acompaña de la temperatura.
- [ ] La bitácora registra pH y temperatura juntos.
- [ ] Advertencia al comparar mediciones a temperaturas muy diferentes.
- [ ] Pregunta de reflexión: "¿Puedo comparar directamente dos valores de pH si fueron medidos a temperaturas distintas?" con retroalimentación educativa.
- [ ] No hay calibración de electrodos.

## Muestras y casos

- [ ] Al menos 5 muestras de suelo (ácido, cercano a neutro, calcáreo/alcalino, forestal ácido con alta materia orgánica, afectado por manejo agrícola).
- [ ] Al menos 5 muestras de sedimento (montaña bajo orgánico, alta materia orgánica, zona urbana/agrícola, con carbonatos, ambiguo).
- [ ] Al menos 6 casos de estudio (3 suelo, 3 sedimento, 2 comparativos, 1 incertidumbre, 1 importancia de temperatura).
- [ ] Cada muestra incluye: nombre, tipo, contexto, pH objetivo/rango, temperatura, textura, materia orgánica, observaciones, posibles explicaciones, interpretación prudente, preguntas, límites de conclusión.

## Interpretación y quiz

- [ ] Panel de interpretación muestra: valor de pH, temperatura, clasificación, interpretación para suelo, interpretación para sedimento, posibles explicaciones, limitaciones, preguntas de reflexión, botón "Comparar con otro tipo de muestra".
- [ ] Regla visible: "El pH orienta, pero no diagnostica solo."
- [ ] Quiz final con mínimo 10 preguntas y retroalimentación explicativa (no solo correcto/incorrecto).
- [ ] El quiz no premia respuestas simplistas o incorrectas.
- [ ] Glosario accesible.
- [ ] Fuentes y trazabilidad visibles.

## Imágenes y trazabilidad

- [ ] Recursos visuales en `assets/` (esquemas, ilustraciones planas, diagramas).
- [ ] `assets/manifesto_imagenes.md` registrado.
- [ ] Si la API BFL falló, se usaron alternativas SVG/CSS y se documentó la limitación.
- [ ] `docs/fuentes_y_trazabilidad.md` completo y actualizado.
- [ ] Ninguna afirmación científica en la interfaz sin trazabilidad.

## Revisión científica

- [ ] `docs/auditoria_científica.md` completada.
- [ ] `docs/correcciones_requeridas.md` atendidas.
- [ ] `docs/version_final_validada.md` generado.
