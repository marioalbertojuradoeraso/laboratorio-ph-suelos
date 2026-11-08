/* =========================================
   INTERPRETACIÓN — Panel de resultados y reglas
   ========================================= */

const Reglas = {
  rangoNeutro: [6.5, 7.5],
  mensajeCentral: 'El pH es una pista, no una respuesta completa.'
};

function obtenerInterpretacionSuelo(ph) {
  if (ph < 5.5) {
    return 'El suelo está muy ácido. Imagina el barrio con demasiados vecinos inquietos: los nutrientes como el calcio, el magnesio y el fósforo quedan "atrapados" y las raíces no los pueden tomar. Además, se sueltan más aluminio y manganeso, que pueden hacerle daño a cultivos delicados como el tomate. Antes de tomar cualquier decisión, se necesitan más análisis.';
  }
  if (ph < 6.5) {
    return 'El suelo está un poco ácido, pero muchos cultivos lo toleran bien. Algunos nutrientes como el fósforo, el calcio y el magnesio pueden estar un poco escasos, pero no de forma grave. No es suficiente con este solo número para decidir qué hacer con el suelo.';
  }
  if (ph <= 7.5) {
    return 'El suelo está en su zona tranquila: ni muy ácido ni muy alcalino. La mayoría de plantas pueden tomar bien sus nutrientes en este rango. Pero recuerda: un número bueno no garantiza por sí solo que el suelo sea fértil o que sea buen momento para abonar.';
  }
  return 'El suelo está alcalino. Es como un barrio demasiado cerrado: nutrientes como el fósforo, el hierro, el zinc y el boro se vuelven difíciles de tomar para la planta. Puede que haya "bicarbonato natural" (carbonatos) en el suelo. Se necesitan más datos antes de tomar decisiones.';
}

function obtenerInterpretacionSedimento(ph) {
  if (ph < 6.5) {
    return 'El sedimento está ligeramente ácido. Esto puede pasar de forma natural: la materia orgánica que se descompone en el fondo, la falta de oxígeno o el tipo de roca de la cuenca pueden bajar el pH. No significa contaminación por sí solo. Para saberlo, necesitarías más información.';
  }
  if (ph <= 7.5) {
    return 'El sedimento está cerca del equilibrio. Esto es común en ríos sanos, aunque un número cercano a 7 no garantiza que el sedimento esté bien ni que esté libre de contaminación. Es solo una pista entre varias que necesitas.';
  }
  return 'El sedimento está alcalino. Puede deberse a rocas con carbonatos (como piedra caliza) o minerales alcalinos que trae el río desde la cuenca. No prueba que el sedimento sea de buena o mala calidad por sí solo.';
}

function obtenerAdvertencia(ph, tipo) {
  const textos = {
    suelo: 'El pH es como el color de la piel de una fruta: te da una pista, pero no te dice si está buena por dentro. Para tomar decisiones sobre este suelo (abonar, sembrar, encalar) se necesitan más datos: qué tipo de tierra es, si tiene materia orgánica, cómo drena el agua y qué cultivo se quiere sembrar.',
    sedimento: 'Un solo número de pH no puede decirte si el río está contaminado o sano. Para eso necesitarías también medir cuánto oxígeno tiene el agua, qué tan conductora es, de dónde viene el río y qué actividades hay en sus orillas.'
  };
  return textos[tipo] || textos.suelo;
}

function renderizarInterpretacion() {
  const ph = Estado.phMedido;
  const temp = Estado.temperatura;
  const tipo = Estado.tipoMuestraActual;

  document.getElementById('resumen-ph').textContent = Util.formatearDecimal(ph);
  document.getElementById('resumen-temperatura').textContent = `${temp} °C`;
  document.getElementById('resumen-tipo').textContent = tipo === 'suelo' ? 'Suelo' : 'Sedimento de río';

  const clasificacion = Util.clasificarPh(ph);
  const elClas = document.getElementById('clasificacion-ph');
  elClas.textContent = Util.textoClasificacion(clasificacion);
  elClas.className = 'clasificacion ' + clasificacion;

  const significados = {
    acido: `El pH que mediste (${Util.formatearDecimal(ph)}) es menor a 7. Eso significa que el "barrio" está ácido: hay más vecinos inquietos (iones H⁺) de lo normal. Recuerda la escalera mágica: si bajara de pH 6 a pH 5, el suelo sería 10 veces más ácido.`,
    neutro: `El pH que mediste (${Util.formatearDecimal(ph)}) está en 7, el punto de equilibrio. Es como un barrio tranquilo. Pero recuerda, el pH por sí solo no dice todo sobre el suelo o el sedimento.`,
    alcalino: `El pH que mediste (${Util.formatearDecimal(ph)}) es mayor a 7. El "barrio" está alcalino: está demasiado cerrado y algunos nutrientes se vuelven difíciles de conseguir para las raíces.`
  };
  document.getElementById('texto-significado').textContent = significados[clasificacion];

  document.getElementById('texto-suelo').textContent = obtenerInterpretacionSuelo(ph);
  document.getElementById('texto-sedimento').textContent = obtenerInterpretacionSedimento(ph);
  document.getElementById('texto-advertencia').textContent = obtenerAdvertencia(ph, tipo);

  const lista = document.getElementById('lista-preguntas-reflexion');
  lista.innerHTML = '';
  const preguntas = tipo === 'suelo'
    ? [
        '¿Qué otros análisis ayudarían a saber más sobre este suelo antes de tomar una decisión?',
        '¿Qué cultivo o uso tiene previsto este suelo? ¿Será compatible con este pH?'
      ]
    : [
        '¿Qué hay alrededor de este río? ¿Hay cultivos, fábricas o casas cerca?',
        '¿Qué otras medidas (oxígeno, conductividad) ayudarían a entender este resultado?'
      ];
  preguntas.forEach(p => {
    const li = document.createElement('li');
    li.textContent = p;
    lista.appendChild(li);
  });
}

function renderizarComparador() {
  const ph = Estado.phMedido;
  document.getElementById('texto-suelo-comp').textContent = obtenerInterpretacionSuelo(ph);
  document.getElementById('texto-sedimento-comp').textContent = obtenerInterpretacionSedimento(ph);
  document.getElementById('texto-advertencia-comp').textContent =
    'El mismo número de pH no se interpreta igual en suelo que en sedimento. Siempre considera de dónde viene la muestra y a qué temperatura se midió.';
}
