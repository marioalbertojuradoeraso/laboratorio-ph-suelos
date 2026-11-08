/* =========================================
   APP — Orquestador de la interfaz
   ========================================= */

// ─── Pasos del procedimiento de laboratorio ──────────────────────────────
const PASOS_PROCEDIMIENTO = [
  {
    numero: 1,
    titulo: 'Paso 1 de 5 — Recolección de la muestra',
    textoSuelo: 'Antes de llegar al laboratorio, el técnico fue al campo y tomó suelo de varios puntos del mismo sitio con una pala o barrena limpia. Mezcló todo en una bolsa marcada con el nombre del lugar, la fecha y la temperatura del sitio.',
    textoSedimento: 'El técnico fue al borde del río y tomó sedimento del fondo con una herramienta especial. Guardó el material en una bolsa marcada con la ubicación, la fecha y la temperatura del agua.',
    notaSuelo: '¿Por qué de varios puntos y no de uno solo? Para que la bolsa represente bien todo el sitio, no solo un rincón que puede ser diferente del resto.',
    notaSedimento: '¿Por qué del fondo y no del agua? Porque el sedimento está acumulado en el lecho del río. No es el mismo material que flota en el agua.',
    imagenSuelo: 'recoleccion-suelo',
    imagenSedimento: 'recoleccion-sedimento',
  },
  {
    numero: 2,
    titulo: 'Paso 2 de 5 — Pesar y preparar la suspensión',
    textoSuelo: 'En el laboratorio, se pesan 10 gramos de suelo en un beaker (un vaso de vidrio de laboratorio). Luego se agregan 25 mL de agua destilada muy pura. Esa mezcla de suelo con agua se llama suspensión y es lo que se va a medir.',
    textoSedimento: 'En el laboratorio, se pesan 20 gramos de sedimento seco en un beaker. Luego se agregan 25 mL de agua desionizada muy pura para preparar la suspensión que se va a medir.',
    notaSuelo: 'Se usa agua destilada porque el agua normal del grifo tiene minerales disueltos que cambiarían el resultado del pH.',
    notaSedimento: 'El sedimento se seca antes de pesar, para que todos los laboratorios trabajen con la misma base y puedan comparar sus resultados.',
    imagenSuelo: 'preparacion-suelo',
    imagenSedimento: 'preparacion-sedimento',
  },
  {
    numero: 3,
    titulo: 'Paso 3 de 5 — Agitar y esperar',
    textoSuelo: 'La mezcla se agita con un palillo de vidrio y se deja reposar durante 30 minutos. Durante ese tiempo, el suelo suelta sus partículas al agua. Es en esa agua mezclada donde el pHómetro va a "escuchar" al suelo.',
    textoSedimento: 'La mezcla se agita de vez en cuando y se deja reposar un rato. Los minerales del sedimento se van soltando en el agua y la van cambiando.',
    notaSuelo: 'Lo que medimos no es el suelo puro: es el agua que absorbió lo que el suelo tiene. Por eso se llama "medición en suspensión acuosa".',
    notaSedimento: 'Si el sedimento tiene mucha materia orgánica, puede cambiar el agua muy rápido.',
    imagenSuelo: 'agitacion',
    imagenSedimento: 'agitacion',
  },
  {
    numero: 4,
    titulo: 'Paso 4 de 5 — Calibrar el pHómetro',
    textoSuelo: 'Antes de medir, el pHómetro se calibra con soluciones especiales de pH conocido, llamadas tampones o buffers. Es como ajustar una báscula a cero antes de pesar: si no se calibra, el número puede estar equivocado sin que nadie lo note.',
    textoSedimento: 'El pHómetro también se calibra antes de medir el sedimento, con las mismas soluciones de referencia (tampones pH 4, 7 y 10).',
    notaSuelo: 'Se usan al menos dos soluciones de referencia, una ácida y una alcalina, para que el instrumento quede bien ajustado en todo el rango de medición.',
    notaSedimento: 'Si el pHómetro lleva mucho tiempo encendido o si cambió la temperatura del ambiente, hay que calibrarlo de nuevo.',
    imagenSuelo: 'calibracion',
    imagenSedimento: 'calibracion',
  },
  {
    numero: 5,
    titulo: 'Paso 5 de 5 — ¿Qué vamos a medir?',
    textoSuelo: 'Ya preparamos la muestra y el instrumento está listo. Ahora sí vamos a medir. Pero antes de ver el número, entendamos qué nos va a decir el pHómetro.',
    textoSedimento: 'Ya preparamos la muestra y el instrumento está listo. Ahora sí vamos a medir. Antes de ver el número, entendamos qué nos va a decir el pHómetro.',
    notaSuelo: null,
    notaSedimento: null,
    imagenSuelo: 'barrio',
    imagenSedimento: 'barrio',
    esConceptoPH: true,
  },
];

let pasoActualProcedimiento = 0;

function renderizarConceptoPH() {
  return `
    <div class="concepto-ph-procedimiento">
      <h3>🏘️ Imagina el suelo como un barrio</h3>
      <p>En ese barrio hay unos vecinos invisibles llamados <strong>iones de hidrógeno</strong>. Si hay <em>muchos de ellos</em>, el barrio se vuelve <strong style="color:#ef4444">ácido</strong>. Si hay <em>muy pocos</em>, se vuelve <strong style="color:#3b82f6">alcalino</strong>. Si están en equilibrio, el barrio está <strong style="color:#34d399">neutro</strong>.</p>
      <p>El pHómetro cuenta esos vecinos y te da un número del <strong>0 al 14</strong>. Ese número es el pH.</p>
      <div class="escala-ph-simple">
        <div class="escala-bloque acido">
          <span class="num">0 — 6</span>
          <span class="lab">Ácido 🔴</span>
          <small>Muchos vecinos</small>
        </div>
        <div class="escala-bloque neutro">
          <span class="num">7</span>
          <span class="lab">Neutro 🟢</span>
          <small>Equilibrio</small>
        </div>
        <div class="escala-bloque alcalino">
          <span class="num">8 — 14</span>
          <span class="lab">Alcalino 🔵</span>
          <small>Pocos vecinos</small>
        </div>
      </div>
      <p class="ejemplos-cotidianos">📌 <strong>Vinagre:</strong> pH 3 &nbsp;•&nbsp; <strong>Agua pura:</strong> pH 7 &nbsp;•&nbsp; <strong>Bicarbonato:</strong> pH 9</p>
      <div class="nota-escalera-mini">
        <strong>🪜 La escala es una escalera mágica:</strong> cada número es 10 veces mayor que el anterior. Si el pH pasa de 6 a 5, el suelo se vuelve <em>10 veces</em> más ácido (no solo "un poco"). Un cambio de 2 números = 100 veces más ácido.
      </div>
    </div>`;
}

function renderizarPasoProcedimiento(indice) {
  const paso = PASOS_PROCEDIMIENTO[indice];
  const tipo = Estado.tipoMuestraActual;

  // Indicador de progreso (puntos numerados)
  const progreso = document.getElementById('proc-progreso');
  progreso.innerHTML = PASOS_PROCEDIMIENTO.map((p, i) =>
    `<span class="paso-dot ${i === indice ? 'activo' : i < indice ? 'completado' : ''}">${p.numero}</span>`
  ).join('');

  document.getElementById('proc-titulo').textContent = paso.titulo;

  const texto   = tipo === 'suelo' ? paso.textoSuelo    : paso.textoSedimento;
  const nota    = tipo === 'suelo' ? paso.notaSuelo     : paso.notaSedimento;
  const imgClave = tipo === 'suelo' ? paso.imagenSuelo  : paso.imagenSedimento;

  let html = `<p class="proc-texto">${texto}</p>`;
  if (nota) html += `<div class="proc-nota">💡 ${nota}</div>`;
  if (paso.esConceptoPH) html += renderizarConceptoPH();
  document.getElementById('proc-cuerpo').innerHTML = html;

  const imgEl  = document.getElementById('proc-imagen');
  const loadEl = document.getElementById('proc-imagen-cargando');
  if (imgEl && loadEl) mostrarImagenPantalla(imgClave, imgEl, loadEl, null);

  const btnSig = document.getElementById('btn-proc-siguiente');
  btnSig.textContent = indice === PASOS_PROCEDIMIENTO.length - 1 ? '¡Medir el pH!' : 'Siguiente paso →';
}

function iniciarProcedimiento() {
  pasoActualProcedimiento = 0;
  renderizarPasoProcedimiento(0);
  Util.mostrarPantalla('pantalla-procedimiento');
}

function irAMedicion() {
  Estado.temperatura = Estado.muestraActual.temperatura;
  document.getElementById('input-temperatura').value = Estado.temperatura;
  document.getElementById('valor-temperatura').textContent = Estado.temperatura + ' °C';
  renderizarEscenaMedicion();
  Util.mostrarPantalla('pantalla-medicion');
  const imgEl  = document.getElementById('medicion-imagen-bfl');
  const loadEl = document.getElementById('medicion-imagen-cargando');
  if (imgEl && loadEl) mostrarImagenMedicion(Estado.tipoMuestraActual, imgEl, loadEl);
}

// ─── Orquestador principal ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await cargarMuestras();
  Temperatura.init();

  const btnEmpezar          = document.getElementById('btn-empezar');
  const btnTipoSuelo        = document.getElementById('btn-tipo-suelo');
  const btnTipoSedimento    = document.getElementById('btn-tipo-sedimento');
  const btnTipoSiguiente    = document.getElementById('btn-tipo-siguiente');
  const btnTipoAnterior     = document.getElementById('btn-tipo-anterior');
  const btnMuestraAnterior  = document.getElementById('btn-muestra-anterior');
  const btnMuestraSiguiente = document.getElementById('btn-muestra-siguiente');
  const btnFichaAnterior    = document.getElementById('btn-ficha-anterior');
  const btnFichaMedir       = document.getElementById('btn-ficha-medir');
  const btnProcAnterior     = document.getElementById('btn-proc-anterior');
  const btnProcSiguiente    = document.getElementById('btn-proc-siguiente');
  const btnMedicionAnterior = document.getElementById('btn-medicion-anterior');
  const btnMedirPh          = document.getElementById('btn-medir-ph');
  const btnLecturaInterpretar       = document.getElementById('btn-lectura-interpretar');
  const btnInterpretacionComparar   = document.getElementById('btn-interpretacion-comparar');
  const btnInterpretacionBitacora   = document.getElementById('btn-interpretacion-bitacora');
  const btnCompVolver       = document.getElementById('btn-comp-volver');
  const btnCompBitacora     = document.getElementById('btn-comp-bitacora');
  const btnBitacoraLimpiar  = document.getElementById('btn-bitacora-limpiar');
  const btnBitacoraQuiz     = document.getElementById('btn-bitacora-quiz');
  const btnGlosario         = document.getElementById('btn-glosario');
  const btnFuentes          = document.getElementById('btn-fuentes');
  const btnGlosarioCerrar   = document.getElementById('btn-glosario-cerrar');
  const btnFuentesCerrar    = document.getElementById('btn-fuentes-cerrar');

  // ── Inicio ──
  btnEmpezar.onclick = () => {
    Util.mostrarPantalla('pantalla-tipo-muestra');
  };

  // ── Selección de tipo ──
  btnTipoSuelo.onclick = () => {
    Estado.tipoMuestraActual = 'suelo';
    btnTipoSuelo.classList.add('selecionada');
    btnTipoSedimento.classList.remove('selecionada');
    btnTipoSiguiente.disabled = false;
  };
  btnTipoSedimento.onclick = () => {
    Estado.tipoMuestraActual = 'sedimento';
    btnTipoSedimento.classList.add('selecionada');
    btnTipoSuelo.classList.remove('selecionada');
    btnTipoSiguiente.disabled = false;
  };
  btnTipoSiguiente.onclick = () => {
    if (!Estado.tipoMuestraActual) return;
    renderizarListaMuestras(Estado.tipoMuestraActual);
    Util.mostrarPantalla('pantalla-elegir-muestra');
  };
  btnTipoAnterior.onclick = () => {
    Util.mostrarPantalla('pantalla-inicio');
  };

  // ── Selección de muestra → Ficha ──
  btnMuestraSiguiente.onclick = () => {
    if (!Estado.muestraSeleccionadaId) return;
    Estado.muestraActual = buscarMuestraPorId(Estado.muestraSeleccionadaId, Estado.tipoMuestraActual);
    if (!Estado.muestraActual) return;
    const m = Estado.muestraActual;
    document.getElementById('ficha-nombre').textContent = m.nombre;
    document.getElementById('ficha-tipo').textContent =
      Estado.tipoMuestraActual === 'suelo' ? '🌱 Muestra de suelo' : '🌊 Muestra de sedimento de río';
    document.getElementById('ficha-contexto').textContent = m.contexto;
    document.getElementById('ficha-observaciones').textContent = m.observaciones;
    document.getElementById('ficha-temperatura-sugerida').textContent = m.temperatura + ' °C';
    Util.mostrarPantalla('pantalla-ficha-muestra');
    const imgEl  = document.getElementById('ficha-imagen');
    const loadEl = document.getElementById('ficha-imagen-cargando');
    if (imgEl && loadEl) mostrarImagenMuestra(Estado.muestraSeleccionadaId, Estado.tipoMuestraActual, imgEl, loadEl);
  };
  btnMuestraAnterior.onclick = () => {
    Util.mostrarPantalla('pantalla-tipo-muestra');
  };

  // ── Ficha → Procedimiento ──
  btnFichaMedir.onclick = () => {
    iniciarProcedimiento();
  };
  btnFichaAnterior.onclick = () => {
    Util.mostrarPantalla('pantalla-elegir-muestra');
  };

  // ── Procedimiento (pasos 1-5) ──
  btnProcAnterior.onclick = () => {
    if (pasoActualProcedimiento > 0) {
      pasoActualProcedimiento--;
      renderizarPasoProcedimiento(pasoActualProcedimiento);
    } else {
      Util.mostrarPantalla('pantalla-ficha-muestra');
    }
  };
  btnProcSiguiente.onclick = () => {
    if (pasoActualProcedimiento < PASOS_PROCEDIMIENTO.length - 1) {
      pasoActualProcedimiento++;
      renderizarPasoProcedimiento(pasoActualProcedimiento);
    } else {
      irAMedicion();
    }
  };

  // ── Medición → Lectura ──
  btnMedicionAnterior.onclick = () => {
    pasoActualProcedimiento = PASOS_PROCEDIMIENTO.length - 1;
    renderizarPasoProcedimiento(pasoActualProcedimiento);
    Util.mostrarPantalla('pantalla-procedimiento');
  };
  btnMedirPh.onclick = () => {
    Estado.phMedido = obtenerValorPhMuestra();
    document.getElementById('valor-ph-grande').textContent = Util.formatearDecimal(Estado.phMedido);
    document.getElementById('valor-temperatura-ph').textContent = Estado.temperatura + ' °C';

    const ph = Estado.phMedido;
    const posicion = Math.min(Math.max((ph / 14), 0), 1) * 100;
    const indicador = document.getElementById('indicador-ph');
    indicador.querySelectorAll('.marcador-ph').forEach(e => e.remove());
    const marcador = document.createElement('div');
    marcador.className = 'marcador-ph';
    marcador.style.cssText = `position:absolute; left:${posicion}%; top:-10px;
      width:14px; height:14px; background:#ffffff; border:2px solid #0b1520;
      border-radius:50%; transform:translateX(-50%);`;
    indicador.appendChild(marcador);

    const clas = Util.clasificarPh(ph);
    const elClas = document.getElementById('clasificacion-ph');
    const textos = {
      acido: '🔴 Ácido — el barrio tiene demasiados vecinos inquietos',
      neutro: '🟢 Neutro — el barrio está en equilibrio',
      alcalino: '🔵 Alcalino — el barrio está demasiado cerrado'
    };
    elClas.textContent = textos[clas] || Util.textoClasificacion(clas);
    elClas.className = 'clasificacion ' + clas;

    Util.mostrarPantalla('pantalla-lectura-ph');
  };

  // ── Lectura → Interpretación ──
  btnLecturaInterpretar.onclick = () => {
    renderizarInterpretacion();
    Util.mostrarPantalla('pantalla-interpretacion');
  };

  // ── Interpretación → Comparador / Bitácora ──
  btnInterpretacionComparar.onclick = () => {
    renderizarComparador();
    Util.mostrarPantalla('pantalla-comparador');
  };
  btnInterpretacionBitacora.onclick = () => {
    registrarEnBitacora();
    renderizarBitacora();
    Util.mostrarPantalla('pantalla-bitacora');
  };

  btnCompVolver.onclick = () => {
    Util.mostrarPantalla('pantalla-interpretacion');
  };
  btnCompBitacora.onclick = () => {
    registrarEnBitacora();
    renderizarBitacora();
    Util.mostrarPantalla('pantalla-bitacora');
  };

  // ── Bitácora ──
  btnBitacoraLimpiar.onclick = () => {
    Estado.limpiarBitacora();
    renderizarBitacora();
  };
  btnBitacoraQuiz.onclick = () => {
    renderizarQuiz();
    Util.mostrarPantalla('pantalla-quiz');
  };

  // ── Glosario y fuentes ──
  btnGlosario.onclick = () => {
    renderizarGlosario();
    Util.mostrarPantalla('pantalla-glosario');
  };
  btnFuentes.onclick = () => {
    Util.mostrarPantalla('pantalla-fuentes');
  };
  btnGlosarioCerrar.onclick = () => {
    Util.mostrarPantalla('pantalla-inicio');
  };
  btnFuentesCerrar.onclick = () => {
    Util.mostrarPantalla('pantalla-inicio');
  };

  Util.mostrarPantalla('pantalla-inicio');
});

// ─────────────────────────────────────────
function registrarEnBitacora() {
  const clasificacion = Util.clasificarPh(Estado.phMedido);
  const breve = clasificacion === 'acido'
    ? 'Ácido — revisar disponibilidad de nutrientes'
    : clasificacion === 'alcalino'
      ? 'Alcalino — puede bloquear hierro y zinc'
      : 'Neutro — rango favorable para la mayoría de plantas';

  Estado.agregarBitacora({
    tipo: Estado.tipoMuestraActual === 'suelo' ? 'Suelo' : 'Sedimento',
    nombre: Estado.muestraActual.nombre,
    ph: Util.formatearDecimal(Estado.phMedido),
    temperatura: Estado.temperatura + ' °C',
    interpretacionBreve: breve,
    clasificacion
  });
}

function renderizarBitacora() {
  const cuerpo = document.getElementById('cuerpo-bitacora');
  cuerpo.innerHTML = '';
  if (Estado.bitacora.length === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td colspan="6" style="text-align:center; color:#94a3b8;">Sin mediciones registradas aún.</td>';
    cuerpo.appendChild(tr);
    return;
  }
  Estado.bitacora.forEach((r, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${r.tipo}</td>
      <td>${r.nombre}</td>
      <td><strong>${r.ph}</strong></td>
      <td>${r.temperatura}</td>
      <td>${r.interpretacionBreve}</td>
    `;
    cuerpo.appendChild(tr);
  });
}

function renderizarGlosario() {
  const contenedor = document.getElementById('contenedor-glosario');
  const terminos = [
    {
      termino: 'pH',
      definicion: 'El pH es como el "estado del barrio" donde viven las raíces. Si hay muchos "vecinos inquietos" (iones de hidrógeno), el suelo está ácido. Si hay muy pocos, está alcalino. Si están equilibrados, el barrio está tranquilo y neutro. El pH va del 0 al 14: menos de 7 es ácido, 7 es neutro, más de 7 es alcalino.'
    },
    {
      termino: 'Iones de hidrógeno (H⁺)',
      definicion: 'Son los "vecinos inquietos" del barrio. Cuando hay muchos en el suelo o el sedimento, el ambiente se vuelve ácido. Cuando hay pocos, se vuelve alcalino. El pHómetro los cuenta de forma indirecta para darte el número de pH.'
    },
    {
      termino: 'Escala del pH (escalera mágica)',
      definicion: 'La escala del pH es como una escalera mágica: cada escalón que subes o bajas hace una diferencia enorme, no pequeña. Si el pH pasa de 6 a 5, el suelo se vuelve 10 veces más ácido. Si pasa de 6 a 4, se vuelve 100 veces más ácido. No es como contar 1, 2, 3; cada paso es mucho mayor que el anterior.'
    },
    {
      termino: 'Suelo',
      definicion: 'La "tierra viva" que cubre el suelo. Es como una ciudad subterránea con minerales, tierra, agua, bichos y raíces. Las plantas viven allí y toman el alimento que necesitan. El pH del suelo afecta qué tan bien pueden hacerlo.'
    },
    {
      termino: 'Sedimento de río',
      definicion: 'Es el "polvo del fondo del río": arena, arcilla, piedrecitas y restos orgánicos que el río arrastra desde las montañas y campos. Con el tiempo se acumula en el fondo como capas de historia. Tiene su propio pH, que puede ser muy diferente al del agua que corre encima.'
    },
    {
      termino: 'Suspensión acuosa',
      definicion: 'La mezcla de suelo o sedimento con agua que se prepara en el laboratorio antes de medir. No medimos el suelo puro sino el agua que absorbió lo que el suelo tiene. La proporción suelo:agua importa (1:2.5 para suelos, según normas FAO).'
    },
    {
      termino: 'Materia orgánica',
      definicion: 'Todo lo que alguna vez estuvo vivo y ahora se está descomponiendo: hojas caídas, animales muertos, restos de plantas. Es el "abono natural" del suelo y del sedimento. Cuando se descompone, puede bajar el pH y hacer el ambiente más ácido.'
    },
    {
      termino: 'Carbonatos',
      definicion: 'Son como "bicarbonato de soda natural" que hay en algunas rocas y suelos. Cuando hay muchos carbonatos, el suelo o el sedimento se vuelve alcalino (pH alto). Los suelos calcáreos o las cuencas con piedra caliza suelen tener mucho de esto.'
    },
    {
      termino: 'Temperatura de medición',
      definicion: 'La temperatura del suelo o sedimento cuando lo mediste. Es tan importante como el pH mismo: el mismo suelo puede dar un número diferente si está más frío o más caliente. Por eso siempre se anota así: "pH 5,8 a 22 °C". Sin temperatura, el número no sirve para comparar con otras mediciones.'
    },
    {
      termino: 'El pH no diagnostica solo',
      definicion: 'El pH es como el color de la piel de una fruta: te da una pista, pero no te dice si está buena por dentro. Para saber si un suelo es fértil o si un sedimento tiene un problema, necesitas más información: qué tipo de tierra es, qué actividades hay cerca, qué otros parámetros se midieron. El pH solo no es suficiente.'
    }
  ];

  contenedor.innerHTML = terminos.map(t => `
    <div class="entrada-glosario">
      <span class="termino">${t.termino}</span>
      <p style="margin:0;">${t.definicion}</p>
    </div>
  `).join('');
}
