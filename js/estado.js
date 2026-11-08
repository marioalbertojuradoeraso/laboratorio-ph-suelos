/* =========================================
   ESTADO GLOBAL — Laboratorio Virtual de pH
   ========================================= */

const Estado = {
  tipoMuestraActual: null,        // 'suelo' | 'sedimento'
  muestraActual: null,            // objeto de muestra seleccionada
  temperatura: 21,                // °C
  phMedido: null,                 // valor de pH obtenido
  bitacora: [],                   // array de registros
  muestraSeleccionadaId: null,    // id de la muestra en la lista

  reiniciar() {
    this.tipoMuestraActual = null;
    this.muestraActual = null;
    this.temperatura = 21;
    this.phMedido = null;
    this.muestraSeleccionadaId = null;
  },

  agregarBitacora(registro) {
    this.bitacora.unshift({
      id: Util.idUnico(),
      fecha: new Date().toLocaleString('es-ES'),
      ...registro
    });
  },

  limpiarBitacora() {
    this.bitacora = [];
  }
};
