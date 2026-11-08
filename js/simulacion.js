/* =========================================
   SIMULACIÓN — Visuales y valor de pH de la muestra
   ========================================= */

function renderizarEscenaMedicion() {
  const contenedor = document.getElementById('escena-medicion');
  if (!contenedor || !Estado.muestraActual) return;

  const esSuelo = Estado.tipoMuestraActual === 'suelo';
  const altFallback = esSuelo
    ? 'pHómetro midiendo muestra de suelo'
    : 'pHómetro midiendo sedimento de río';

  contenedor.innerHTML = `
    <div style="text-align:center; width:100%;">
      <div id="medicion-imagen-cargando" class="cargando-imagen">
        <div class="spinner"></div>
        <span>Generando imagen del proceso...</span>
      </div>
      <img id="medicion-imagen-bfl" src="" alt="${altFallback}"
        class="imagen-bfl" style="display:none; max-width:480px;">
    </div>
  `;
}

function obtenerValorPhMuestra() {
  if (!Estado.muestraActual) return null;
  return Estado.muestraActual.ph;
}
