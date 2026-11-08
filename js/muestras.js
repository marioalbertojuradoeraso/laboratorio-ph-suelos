/* =========================================
   MUESTRAS — Carga y lista de muestras virtuales
   ========================================= */

let MUESTRAS_DATOS = { suelos: [], sedimentos: [] };

async function cargarMuestras() {
  try {
    const resp = await fetch('data/muestras.json');
    if (!resp.ok) throw new Error('No se pudo cargar data/muestras.json');
    MUESTRAS_DATOS = await resp.json();
  } catch (e) {
    console.error('Error cargando muestras:', e);
    // Datos de fallback mínimo si falla la carga
    MUESTRAS_DATOS = {
      suelos: [],
      sedimentos: []
    };
  }
}

function obtenerMuestrasPorTipo(tipo) {
  return tipo === 'suelo' ? MUESTRAS_DATOS.suelos : MUESTRAS_DATOS.sedimentos;
}

function buscarMuestraPorId(id, tipo) {
  const lista = obtenerMuestrasPorTipo(tipo);
  return lista.find(m => m.id === id) || null;
}

function renderizarListaMuestras(tipo) {
  const contenedor = document.getElementById('lista-muestras');
  const titulo = document.getElementById('titulo-elegir-muestra');
  const btnSiguiente = document.getElementById('btn-muestra-siguiente');
  const muestras = obtenerMuestrasPorTipo(tipo);

  if (titulo) {
    textoTitulo = tipo === 'suelo' ? 'Elige una muestra de suelo' : 'Elige una muestra de sedimento de río';
    titulo.textContent = textoTitulo;
  }

  contenedor.innerHTML = '';

  muestras.forEach(m => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-muestra';
    // Mostrar primera oración del contexto como descripción breve
    const descripcionCorta = m.contexto.split('. ')[0] + '.';
    tarjeta.innerHTML = `
      <div class="etiqueta-tipo">${tipo === 'suelo' ? '🌱 SUELO' : '🌊 SEDIMENTO'}</div>
      <h4>${m.nombre}</h4>
      <p style="color:#94a3b8; font-size:0.85rem; margin:0;">${descripcionCorta}</p>
    `;
    tarjeta.onclick = () => {
      document.querySelectorAll('.tarjeta-muestra').forEach(t => t.classList.remove('seleccionada'));
      tarjeta.classList.add('seleccionada');
      Estado.muestraSeleccionadaId = m.id;
      if (btnSiguiente) btnSiguiente.disabled = false;
    };
    contenedor.appendChild(tarjeta);
  });
}
