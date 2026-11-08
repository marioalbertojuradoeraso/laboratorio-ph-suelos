/* =========================================
   IMÁGENES — Usa imágenes embebidas (pre-generadas con BFL)
   =========================================
   Las imágenes están en js/imagenes_embebidas.js.
   Para generarlas: python generar_imagenes.py (una sola vez).
   Sin imágenes generadas, el laboratorio muestra los SVG de respaldo.
   ======================================= */

const CLAVES_MUESTRAS = {
  'suelo-01':     'suelo-01',
  'suelo-02':     'suelo-02',
  'suelo-03':     'suelo-03',
  'suelo-04':     'suelo-04',
  'suelo-05':     'suelo-05',
  'sedimento-01': 'sedimento-01',
  'sedimento-02': 'sedimento-02',
  'sedimento-03': 'sedimento-03',
  'sedimento-04': 'sedimento-04',
  'sedimento-05': 'sedimento-05',
};

function _obtenerSrc(clave, fallback) {
  if (typeof IMAGENES_EMBEBIDAS !== 'undefined' && IMAGENES_EMBEBIDAS[clave]) {
    return IMAGENES_EMBEBIDAS[clave];
  }
  return fallback || null;
}

function _mostrarInmediata(src, elementoImg, elementoCargando) {
  if (elementoCargando) elementoCargando.style.display = 'none';
  if (!elementoImg) return;
  if (src) {
    elementoImg.src = src;
    elementoImg.style.display = 'block';
  }
}

function mostrarImagenMuestra(idMuestra, tipo, elementoImg, elementoCargando) {
  const fallback = tipo === 'suelo'
    ? 'assets/perfil_suelo.svg'
    : 'assets/sedimento_rio.svg';
  const src = _obtenerSrc(idMuestra, fallback);
  _mostrarInmediata(src, elementoImg, elementoCargando);
}

function mostrarImagenMedicion(tipo, elementoImg, elementoCargando) {
  const clave = tipo === 'suelo' ? 'medicion-suelo' : 'medicion-sedimento';
  const fallback = tipo === 'suelo'
    ? 'assets/suspension_suelo_agua.svg'
    : 'assets/lecho_rio.svg';
  const src = _obtenerSrc(clave, fallback);
  _mostrarInmediata(src, elementoImg, elementoCargando);
}

function mostrarImagenPantalla(clave, elementoImg, elementoCargando, fallback) {
  const src = _obtenerSrc(clave, fallback);
  _mostrarInmediata(src, elementoImg, elementoCargando);
}
