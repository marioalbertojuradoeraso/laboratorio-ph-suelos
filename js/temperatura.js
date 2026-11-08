/* =========================================
   TEMPERATURA — Control y registro
   ========================================= */

const Temperatura = {
  min: 10,
  max: 35,

  init() {
    const input = document.getElementById('input-temperatura');
    const valor = document.getElementById('valor-temperatura');
    if (!input || !valor) return;

    input.min = this.min;
    input.max = this.max;
    input.value = Estado.temperatura;
    valor.textContent = `${Estado.temperatura} °C`;

    input.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      if (val >= this.min && val <= this.max) {
        Estado.temperatura = val;
        valor.textContent = `${val} °C`;
      }
    });
  },

  obtener() {
    return Estado.temperatura;
  }
};
