/* =========================================
   QUIZ FINAL — Preguntas y retroalimentación
   ========================================= */

const PREGUNTAS_QUIZ = [
  {
    id: 1,
    enunciado: '¿Qué nos dice el número del pH?',
    opciones: [
      'Cuántos nutrientes tiene el suelo.',
      'Si el suelo o sedimento está ácido, neutro o alcalino.',
      'La temperatura de la muestra.',
      'Si el suelo está contaminado.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! El pH nos dice si el "barrio de las raíces" está ácido (muchos vecinos inquietos), neutro (equilibrado) o alcalino (muy cerrado). Número menor a 7 = ácido; 7 = neutro; mayor a 7 = alcalino.',
    retroIncorrecta: [
      'No. El pH no mide cuántos nutrientes hay. Te dice si el ambiente es ácido, neutro o alcalino.',
      '¡Exacto!',
      'No. La temperatura es una variable aparte que siempre debes anotar junto con el pH.',
      'No. Un pH bajo o alto no prueba contaminación. Es solo una pista.'
    ]
  },
  {
    id: 2,
    enunciado: 'El pH del suelo es como una escalera mágica. ¿Qué ocurre cuando el pH baja de 6 a 5?',
    opciones: [
      'El suelo se vuelve 10 veces más ácido.',
      'El suelo se vuelve el doble de ácido.',
      'No cambia casi nada, es solo un número.',
      'El suelo se vuelve alcalino.'
    ],
    correcta: 0,
    retroCorrecta: '¡Correcto! La escala del pH es como una escalera mágica: cada escalón que bajas multiplica por 10 la acidez. De pH 6 a pH 5 = 10 veces más ácido. De pH 6 a pH 4 = 100 veces más ácido. No es como contar 1, 2, 3.',
    retroIncorrecta: [
      '¡Exacto!',
      'No. No es el doble; es 10 veces. La escala "salta" mucho más de lo que parece.',
      'No. Aunque parece un cambio pequeño, es una diferencia enorme: 10 veces más ácido.',
      'No. Bajar el pH siempre significa más acidez.'
    ]
  },
  {
    id: 3,
    enunciado: '¿Qué significa que el pH del suelo sea menor que 7?',
    opciones: [
      'El suelo está contaminado.',
      'El suelo está ácido.',
      'El suelo no tiene ningún nutriente.',
      'El suelo no sirve para sembrar nada.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! Un pH menor que 7 indica que el suelo está ácido. Eso no significa necesariamente que esté contaminado ni que no sirva. Muchos cultivos se adaptan a suelos ligeramente ácidos.',
    retroIncorrecta: [
      'No. Un pH ácido no prueba contaminación. Puede ser natural.',
      '¡Exacto!',
      'No. Un suelo ácido puede tener nutrientes, aunque algunos sean más difíciles de tomar para las raíces.',
      'No. Muchos cultivos crecen bien en suelos ácidos. Depende del cultivo y del nivel de acidez.'
    ]
  },
  {
    id: 4,
    enunciado: '¿Qué puede pasar en un suelo con pH mayor que 7 (alcalino)?',
    opciones: [
      'Tiene más nutrientes disponibles que cualquier otro suelo.',
      'Algunos nutrientes, como el hierro y el zinc, se vuelven más difíciles de tomar para la planta.',
      'El suelo está contaminado con metales pesados.',
      'Las raíces no pueden vivir allí.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! En un suelo alcalino, el "barrio" está demasiado cerrado. Nutrientes como el hierro, el zinc, el fósforo y el boro se vuelven difíciles de conseguir para las raíces, aunque físicamente estén en el suelo.',
    retroIncorrecta: [
      'No. Un pH alto no significa más nutrientes disponibles; en realidad puede bloquear varios de ellos.',
      '¡Exacto!',
      'No. Un pH alcalino no demuestra contaminación con metales.',
      'No. Las raíces sí pueden vivir en suelos alcalinos, aunque algunas plantas lo toleran mejor que otras.'
    ]
  },
  {
    id: 5,
    enunciado: '¿Por qué no se interpreta igual el pH del suelo y el del sedimento de río?',
    opciones: [
      'Porque son ambientes diferentes: el suelo es para plantas, el sedimento es el fondo del río. Cada uno tiene sus propias causas y contextos.',
      'Porque el sedimento siempre tiene pH más alto que el suelo.',
      'Porque el sedimento no tiene pH.',
      'Porque el agua del río siempre tiene el mismo pH que el sedimento del fondo.'
    ],
    correcta: 0,
    retroCorrecta: '¡Correcto! El suelo está asociado a plantas, cultivos y manejo del terreno. El sedimento se acumula en el fondo de los ríos y recoge material de toda la cuenca. El mismo número de pH puede deberse a causas muy distintas en cada caso.',
    retroIncorrecta: [
      '¡Exacto!',
      'No. No hay una regla así. El pH de suelos y sedimentos puede ser cualquier valor.',
      'No. El sedimento sí tiene pH. Se mide igual que en el suelo.',
      'No. El pH del agua del río y el del sedimento del fondo pueden ser muy diferentes.'
    ]
  },
  {
    id: 6,
    enunciado: '¿Cómo afecta el pH a los nutrientes de las plantas?',
    opciones: [
      'No tiene ninguna relación con los nutrientes.',
      'El pH influye en si los nutrientes están disponibles: si el "barrio" está muy ácido o muy alcalino, algunos nutrientes quedan atrapados y las raíces no los pueden tomar.',
      'A mayor pH, más nutrientes tiene el suelo.',
      'El pH solo afecta al nitrógeno, no a los demás nutrientes.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! El pH del suelo es como el "clima del barrio": si está muy alterado (muy ácido o muy alcalino), los nutrientes quedan como vecinos encerrados que no pueden salir. Las raíces los necesitan pero no los alcanzan. Por eso se mide el pH antes de abonar.',
    retroIncorrecta: [
      'No. El pH tiene un efecto muy importante en la disponibilidad de nutrientes para las plantas.',
      '¡Exacto!',
      'No. Un pH muy alto puede bloquear varios nutrientes, no aumentarlos.',
      'No. El pH afecta al fósforo, al hierro, al zinc, al manganeso, al cobre y al boro, entre otros.'
    ]
  },
  {
    id: 7,
    enunciado: '¿Puede el pH, solo, decirte si un suelo es fértil o si un río está contaminado?',
    opciones: [
      'Sí, siempre. El pH lo dice todo.',
      'No. El pH es una pista útil, pero necesitas más información para dar una respuesta completa.',
      'Sí, si el pH es exactamente 7.',
      'Sí, si el pH es muy extremo (muy ácido o muy alcalino).'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! El pH es como el color de la piel de una fruta: te da una pista, pero no te dice si está buena por dentro. Se necesita más información: tipo de suelo, materia orgánica, dónde está, qué actividades hay cerca, entre otras.',
    retroIncorrecta: [
      'No. El pH nunca es suficiente por sí solo para diagnosticar fertilidad ni contaminación.',
      '¡Exacto!',
      'No. pH 7 es neutro, pero no garantiza fertilidad ni ausencia de contaminación.',
      'No. Incluso un pH extremo no permite un diagnóstico definitivo sin más datos.'
    ]
  },
  {
    id: 8,
    enunciado: '¿Por qué siempre hay que anotar la temperatura junto con el pH?',
    opciones: [
      'Porque la temperatura no influye en nada.',
      'Porque la temperatura afecta el resultado: el mismo suelo puede dar un pH diferente si está más frío o más caliente. Sin temperatura, el número no sirve para comparar con otras mediciones.',
      'Solo importa si la temperatura es mayor a 30 °C.',
      'La temperatura determina completamente el pH del suelo.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! La temperatura es como la báscula cuando pesas algo: si se mueve con el calor, el peso varía. El pH también varía con la temperatura. Por eso, siempre se reporta así: "pH 5,8 a 22 °C". Un número sin temperatura está incompleto.',
    retroIncorrecta: [
      'No. La temperatura sí influye en el resultado del pH.',
      '¡Exacto!',
      'No. La temperatura es importante en todo el rango, no solo cuando hace mucho calor.',
      'No. La temperatura influye en el pH, pero no lo determina completamente.'
    ]
  },
  {
    id: 9,
    enunciado: 'Mediste un suelo a 15 °C y otro a 25 °C. ¿Puedes comparar directamente los dos pH?',
    opciones: [
      'Sí, el pH es el pH en cualquier temperatura.',
      'No directamente. La temperatura afecta el resultado, así que hay que tenerla en cuenta al comparar.',
      'Solo si los dos pH resultaron ser 7.',
      'Solo si la diferencia de temperatura es menos de 1 °C.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! Comparar pH sin tener en cuenta la temperatura es como comparar pesos medidos en básculas calibradas distinto. Los números pueden parecer iguales o distintos, pero no sabemos si la diferencia es real o por el efecto de la temperatura.',
    retroIncorrecta: [
      'No. La temperatura puede cambiar el resultado del pH, así que dos mediciones a temperaturas distintas no son directamente comparables.',
      '¡Exacto!',
      'No. La comparación directa es problemática sin importar cuál sea el valor de pH.',
      'No. Cualquier diferencia de temperatura es relevante, no solo las mayores de 1 °C.'
    ]
  },
  {
    id: 10,
    enunciado: 'El pH del sedimento de un río es 5,5. ¿Qué conclusión es correcta?',
    opciones: [
      'El sedimento está contaminado.',
      'Un pH bajo puede tener varias causas naturales, como la materia orgánica que se descompone o el tipo de roca. No es prueba de contaminación solo con este dato.',
      'El sedimento es apto para cualquier uso.',
      'Hay que sacar el sedimento del río de inmediato.'
    ],
    correcta: 1,
    retroCorrecta: '¡Correcto! Un pH de 5,5 en un sedimento de río puede deberse a cosas completamente naturales: hojas y plantas en descomposición, poca circulación de agua o el tipo de roca de la cuenca. Para hablar de contaminación se necesitan muchos más datos.',
    retroIncorrecta: [
      'No. Un pH bajo no demuestra contaminación. Puede ser completamente natural.',
      '¡Exacto!',
      'No. Un pH bajo no garantiza que el sedimento sea apto para ningún uso específico.',
      'No. No se toman acciones drásticas basándose solo en el pH de un sedimento.'
    ]
  }
];

let indicePreguntaActual = 0;
let respuestasCorrectas = 0;
let quizRespondido = false;

function renderizarQuiz() {
  const contenedor = document.getElementById('contenedor-quiz');
  const resultado = document.getElementById('resultado-quiz');
  contenedor.innerHTML = '';
  resultado.classList.add('oculta');
  resultado.innerHTML = '';
  indicePreguntaActual = 0;
  respuestasCorrectas = 0;
  quizRespondido = false;
  mostrarPreguntaQuiz();
}

function mostrarPreguntaQuiz() {
  const contenedor = document.getElementById('contenedor-quiz');
  const pregunta = PREGUNTAS_QUIZ[indicePreguntaActual];
  const esFinal = indicePreguntaActual === PREGUNTAS_QUIZ.length - 1;
  contenedor.innerHTML = `
    <div class="pregunta-quiz">
      <h4>Pregunta ${pregunta.id} de ${PREGUNTAS_QUIZ.length}</h4>
      <p>${pregunta.enunciado}</p>
      <div class="opciones-quiz" id="opciones-quiz"></div>
      <div id="retroalimentacion-quiz" class="oculta"></div>
      <div style="margin-top:1rem;">
        <button id="btn-siguiente-quiz" class="btn-principal" disabled style="max-width:200px;">${esFinal ? 'Ver mi resultado' : 'Siguiente pregunta'}</button>
      </div>
    </div>
  `;

  const opcionesEl = document.getElementById('opciones-quiz');
  pregunta.opciones.forEach((opcion, i) => {
    const btn = document.createElement('button');
    btn.className = 'opcion-quiz';
    btn.textContent = opcion;
    btn.onclick = () => seleccionarOpcionQuiz(i, btn);
    opcionesEl.appendChild(btn);
  });
}

function seleccionarOpcionQuiz(indice, btn) {
  const pregunta = PREGUNTAS_QUIZ[indicePreguntaActual];
  const retro = document.getElementById('retroalimentacion-quiz');
  const btnSiguiente = document.getElementById('btn-siguiente-quiz');
  const opciones = document.querySelectorAll('.opcion-quiz');

  opciones.forEach(b => { b.disabled = true; b.style.cursor = 'default'; });

  if (indice === pregunta.correcta) {
    btn.classList.add('correcta-visual');
    retro.className = 'retroalimentacion correcta';
    retro.textContent = pregunta.retroCorrecta;
    respuestasCorrectas++;
  } else {
    btn.classList.add('incorrecta-visual');
    retro.className = 'retroalimentacion incorrecta';
    retro.textContent = pregunta.retroIncorrecta[indice];
    opciones[pregunta.correcta].classList.add('correcta-visual');
  }

  retro.classList.remove('oculta');
  btnSiguiente.disabled = false;
  quizRespondido = true;

  btnSiguiente.onclick = () => {
    if (indicePreguntaActual < PREGUNTAS_QUIZ.length - 1) {
      indicePreguntaActual++;
      mostrarPreguntaQuiz();
    } else {
      mostrarResultadoQuiz();
    }
  };
}

function mostrarResultadoQuiz() {
  const contenedor = document.getElementById('contenedor-quiz');
  const resultado = document.getElementById('resultado-quiz');
  contenedor.innerHTML = '';
  resultado.classList.remove('oculta');
  const porcentaje = Math.round((respuestasCorrectas / PREGUNTAS_QUIZ.length) * 100);

  let mensaje, emoji;
  if (porcentaje >= 80) {
    emoji = '🏆';
    mensaje = '¡Muy bien! Lograste comprender los conceptos clave del pH del suelo y del sedimento.';
  } else if (porcentaje >= 50) {
    emoji = '👍';
    mensaje = 'Vas bien. Te recomendamos repasar la sección "¿Qué es el pH?" y los resultados de las muestras antes de seguir.';
  } else {
    emoji = '📖';
    mensaje = 'No te preocupes. Vuelve a repasar el laboratorio desde el principio, especialmente la parte de la escalera mágica y el glosario.';
  }

  resultado.innerHTML = `
    <div class="resultado-quiz-final">
      <div class="emoji-resultado">${emoji}</div>
      <h3>Resultado del quiz</h3>
      <p>Respondiste correctamente <strong>${respuestasCorrectas} de ${PREGUNTAS_QUIZ.length}</strong> preguntas (${porcentaje}%).</p>
      <p>${mensaje}</p>
      <button id="btn-reiniciar-quiz" class="btn-principal" style="max-width:220px;">Intentar de nuevo</button>
    </div>
  `;
  document.getElementById('btn-reiniciar-quiz').onclick = () => {
    resultado.classList.add('oculta');
    renderizarQuiz();
  };
}
