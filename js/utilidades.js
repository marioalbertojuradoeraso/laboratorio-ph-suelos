/* =========================================
   UTILIDADES — Laboratorio Virtual de pH
   ========================================= */

const Util = {
  // Mostrar u ocultar pantallas por id
  mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
    document.querySelectorAll('.pantalla').forEach(p => p.classList.add('oculta'));
    const el = document.getElementById(id);
    if (el) {
      el.classList.remove('oculta');
      el.classList.add('activa');
    }
  },

  // Formatear número con coma decimal (español)
  formatearDecimal(numero, decimales = 1) {
    return Number(numero).toFixed(decimales).replace('.', ',');
  },

  // Clasificar pH en ácido / neutro / alcalino
  clasificarPh(ph) {
    if (ph < 7) return 'acido';
    if (ph > 7) return 'alcalino';
    return 'neutro';
  },

  // Texto de clasificación
  textoClasificacion(tipo) {
    const map = { acido: 'Ácido', neutro: 'Neutro', alcalino: 'Alcalino' };
    return map[tipo] || '';
  },

  // Generar id único simple
  idUnico() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
};
