"""
generar_imagenes.py
===================
Genera TODAS las imagenes del laboratorio virtual de pH usando la API BFL (Flux Pro 1.1)
y las embebe como base64 en js/imagenes_embebidas.js.

Ejecutar con FORCE_REGENERATE = True para regenerar todas (gasta creditos de BFL).
Ejecutar con FORCE_REGENERATE = False para solo generar las nuevas.
"""

import sys
import io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

import requests
import base64
import time
import json
import os

# ── Configuracion ────────────────────────────────────────────────────────────
API_KEY     = 'TU_CLAVE_BFL_AQUI'  # Obtén tu clave en https://api.bfl.ai
ENDPOINT    = 'https://api.bfl.ai/v1/flux-pro-1.1'
ASSETS_DIR  = 'assets/bfl'
OUTPUT_JS   = 'js/imagenes_embebidas.js'

# True = regenerar todas las imagenes (corrige las que tienen texto ilegible)
# False = solo generar las que faltan
FORCE_REGENERATE = False

# Frase que se agrega a todos los prompts para evitar texto en las imagenes
NT = 'no text, no labels, no numbers, no watermarks, no writing anywhere in the image, clean photograph'

# ── Prompts de cada imagen ───────────────────────────────────────────────────
PROMPTS = {

    # === PROCEDIMIENTO: Recoleccion de campo ===
    'recoleccion-suelo': (
        f'{NT}. '
        'Colombian farmer kneeling in an agricultural field collecting a soil sample, '
        'using a clean trowel or auger, placing dark brown soil into a labeled plastic bag, '
        'green farm landscape in background, natural daylight, '
        'photorealistic educational photo, warm natural colors, high detail'
    ),
    'recoleccion-sedimento': (
        f'{NT}. '
        'Environmental technician standing at a Colombian river bank collecting sediment '
        'from the riverbed with a sampling tool, placing wet sediment into a clean plastic bag, '
        'clear river water visible, rocks and vegetation nearby, natural outdoor lighting, '
        'photorealistic educational photo'
    ),

    # === PROCEDIMIENTO: Preparacion en laboratorio ===
    'preparacion-suelo': (
        f'{NT}. '
        'Close-up of laboratory bench: technician weighing dry soil on a precision analytical balance, '
        'white glass beaker receiving measured soil, pipette adding distilled water from a bottle, '
        'clean bright laboratory setting, gloved hands, '
        'photorealistic educational science photo, professional environment'
    ),
    'preparacion-sedimento': (
        f'{NT}. '
        'Close-up of laboratory bench: dried river sediment being weighed on a precision scale, '
        'white glass beaker, deionized water being poured from a pipette, '
        'clean science laboratory, gloved hands, '
        'photorealistic educational photo'
    ),

    # === PROCEDIMIENTO: Agitacion ===
    'agitacion': (
        f'{NT}. '
        'Close-up of a glass beaker containing a cloudy turbid soil-water suspension, '
        'scientist stirring with a glass rod, mixture is milky brown color, '
        'clean white laboratory bench, gloved hands holding the rod, '
        'photorealistic educational science photo'
    ),

    # === PROCEDIMIENTO: Calibracion del phometro ===
    'calibracion': (
        f'{NT}. '
        'pH meter probe being carefully dipped into a small cup of clear buffer solution '
        'on a laboratory bench, two or three small calibration cups visible, '
        'modern digital pH meter device nearby, clean laboratory environment, '
        'photorealistic educational science photo'
    ),

    # === MUESTRAS DE SUELO ===
    'suelo-01': (
        f'{NT}. '
        'Acidic Colombian smallholder garden, wilting tomato plants with yellow chlorotic leaves, '
        'brown dry acidic soil close-up, natural daylight, photorealistic'
    ),
    'suelo-02': (
        f'{NT}. '
        'Healthy maize cornfield with dark rich fertile soil, Colombian agricultural land, '
        'optimal growing conditions, sunny day, photorealistic'
    ),
    'suelo-03': (
        f'{NT}. '
        'Calcareous alkaline soil with white mineral deposits and calcite crust, '
        'sparse vegetation, plant leaves showing yellowing, dry arid landscape, photorealistic'
    ),
    'suelo-04': (
        f'{NT}. '
        'Dark rich humid forest floor with decomposing leaves and organic matter, '
        'Colombian Andean jungle, mushrooms and roots visible in soil, '
        'photorealistic, moody forest lighting'
    ),
    'suelo-05': (
        f'{NT}. '
        'Plowed conventional agricultural field with tractor marks in soil, '
        'Colombian countryside, crop residues from previous harvest visible, '
        'photorealistic, golden hour light'
    ),

    # === MUESTRAS DE SEDIMENTO ===
    'sedimento-01': (
        f'{NT}. '
        'Clear mountain stream with sandy gravelly bottom sediment visible through transparent water, '
        'Colombian Andes, smooth rocks and pebbles underwater, '
        'photorealistic, clean and pristine environment'
    ),
    'sedimento-02': (
        f'{NT}. '
        'Slow dark river with high organic sediment visible underwater, decomposing plant matter, '
        'slightly murky brown water, overhanging tropical vegetation, photorealistic'
    ),
    'sedimento-03': (
        f'{NT}. '
        'River near an urban area with fine suspended sediment, slightly discolored brown water, '
        'concrete bridge infrastructure visible in background, photorealistic'
    ),
    'sedimento-04': (
        f'{NT}. '
        'Clear riverbed with white chalky calcareous sediment particles, '
        'limestone geology visible, slightly alkaline clear water, photorealistic'
    ),
    'sedimento-05': (
        f'{NT}. '
        'River sediment sample collected in a white plastic bucket for water quality testing, '
        'field collection site near river, gloved hands holding the bucket, photorealistic'
    ),

    # === ESCENAS DE MEDICION ===
    'medicion-suelo': (
        f'{NT}. '
        'Soil pH measurement in laboratory: digital pH meter electrode probe inserted into '
        'a white beaker containing a cloudy soil-water suspension, '
        'distilled water bottle nearby on lab bench, gloved hands adjusting the meter, '
        'clean bright laboratory, photorealistic educational science photo, high detail'
    ),
    'medicion-sedimento': (
        f'{NT}. '
        'River sediment pH measurement in laboratory: digital pH meter probe inserted into '
        'a white beaker containing sediment-water mixture, '
        'clean lab bench, gloved hands, photorealistic educational photo'
    ),

    # === ILUSTRACION CONCEPTUAL ===
    'barrio': (
        f'{NT}. '
        'Colorful cross-section illustration of soil showing healthy plant roots growing underground, '
        'with friendly cartoon-style round molecules as tiny neighbors living in the soil pores, '
        'some molecules are red and crowded (acid side), some are blue and sparse (alkaline side), '
        'warm inviting colors, infographic illustration style, educational visual metaphor'
    ),
}

HEADERS = {'Content-Type': 'application/json', 'X-Key': API_KEY}


def enviar_solicitud(prompt):
    """Envia la solicitud a BFL y devuelve (task_id, polling_url)."""
    resp = requests.post(
        ENDPOINT,
        headers=HEADERS,
        json={'prompt': prompt, 'width': 1024, 'height': 768},
        timeout=30,
    )
    resp.raise_for_status()
    data = resp.json()
    if 'id' not in data:
        raise ValueError(f'BFL no devolvio id: {data}')
    polling_url = data.get('polling_url') or f'https://api.bfl.ai/v1/get_result?id={data["id"]}'
    return data['id'], polling_url


def esperar_resultado(polling_url, max_intentos=40, espera=3):
    """Espera a que BFL termine y devuelve la URL de la imagen."""
    for intento in range(max_intentos):
        time.sleep(espera)
        r = requests.get(polling_url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        data = r.json()
        status = data.get('status', '')
        if status == 'Ready':
            return data['result']['sample']
        if status in ('Error', 'Failed', 'Content Moderated'):
            raise ValueError(f'BFL estado: {status}')
        print(f'    intento {intento + 1}/{max_intentos}: {status}')
    raise TimeoutError('Tiempo agotado esperando imagen BFL')


def descargar_base64(url):
    """Descarga una imagen y la devuelve como data URI base64."""
    r = requests.get(url, timeout=60)
    r.raise_for_status()
    content_type = r.headers.get('Content-Type', 'image/jpeg').split(';')[0].strip()
    b64 = base64.b64encode(r.content).decode('ascii')
    return f'data:{content_type};base64,{b64}', r.content


def main():
    os.makedirs(ASSETS_DIR, exist_ok=True)

    # Cargar imagenes ya generadas (a menos que FORCE_REGENERATE este activo)
    ya_generados = {}
    if not FORCE_REGENERATE and os.path.exists(OUTPUT_JS):
        with open(OUTPUT_JS, 'r', encoding='utf-8') as f:
            contenido = f.read()
        inicio = contenido.find('{')
        fin = contenido.rfind('}') + 1
        if inicio != -1 and fin > inicio:
            try:
                ya_generados = json.loads(contenido[inicio:fin])
                print(f'Ya generadas: {list(ya_generados.keys())}')
            except json.JSONDecodeError:
                pass
    elif FORCE_REGENERATE:
        print('[FORCE_REGENERATE = True] Regenerando todas las imagenes...')

    resultados = dict(ya_generados)
    pendientes = [(k, v) for k, v in PROMPTS.items() if k not in ya_generados]

    if not pendientes:
        print('LISTO: Todas las imagenes ya estan generadas. Nada que hacer.')
        return

    total_pendientes = len(pendientes)
    print(f'[IMG] Generando {total_pendientes} imagen(es) con BFL...\n')

    for idx, (key, prompt) in enumerate(pendientes, 1):
        print(f'-> [{idx}/{total_pendientes}] {key}')
        print(f'   Prompt: {prompt[:80]}...')
        try:
            task_id, polling_url = enviar_solicitud(prompt)
            print(f'   Task ID: {task_id}')
            img_url = esperar_resultado(polling_url)
            data_uri, raw = descargar_base64(img_url)

            img_path = os.path.join(ASSETS_DIR, f'{key}.jpg')
            with open(img_path, 'wb') as f:
                f.write(raw)

            resultados[key] = data_uri
            print(f'   OK ({len(raw) // 1024} KB)\n')

        except Exception as exc:
            print(f'   ERROR: {exc}\n', file=sys.stderr)

        # Guardar progreso parcial despues de cada imagen
        js_parcial = (
            '/* Imagenes generadas con BFL — NO editar manualmente */\n'
            'const IMAGENES_EMBEBIDAS = ' + json.dumps(resultados, indent=2) + ';\n'
        )
        with open(OUTPUT_JS, 'w', encoding='utf-8') as f:
            f.write(js_parcial)

    total = len(resultados)
    print(f'\nLISTO: {total}/{len(PROMPTS)} imagenes embebidas en {OUTPUT_JS}')
    print(f'   Copias fisicas en: {ASSETS_DIR}/')


if __name__ == '__main__':
    main()
