// song-page.js - Funcionalidades específicas para páginas de canciones

// Configuración básica para la página de canción
document.addEventListener('DOMContentLoaded', function () {
    // 1. Inicializar controles de transposición

        document.body.addEventListener("click", ensureToneStarted);

    // También si hay interacción táctil (móviles)
    document.body.addEventListener("touchstart", ensureToneStarted);

    // Si usas un botón play de <audio>, detecta también
    const audioEl = document.getElementById("song-audio");
    if (audioEl) {
        audioEl.addEventListener("play", ensureToneStarted);
    }


    // 2. Configurar placeholders de tutoriales
    setupTutorialPlaceholders();

    // 3. Actualizar todos los elementos transponibles
    updateAllTransposableElements();

        // 1. Inicializar controles de transposición
    initKeyButtons();

    // 2. Configurar placeholders de tutoriales
    setupTutorialPlaceholders();

    // 3. Actualizar todos los elementos transponibles
    updateAllTransposableElements();

    // 4. Configurar filtros de acordes
    setupChordFilters();
});

// Funciones que necesitas copiar del script principal:
// -----------------------------------------------
function initKeyButtons() {
    const keySelector = document.getElementById('key-selector');
    if (!keySelector) return;

    const chordNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    chordNames.forEach((key, index) => {
        const btn = document.createElement('button');
        btn.className = 'key-btn';
        btn.textContent = key;
        if (key === originalKey) btn.classList.add('active');
        btn.onclick = () => setKey(key);
        keySelector.appendChild(btn);
    });
}

function setupTutorialPlaceholders() {
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function () {
            const songName = this.getAttribute('data-song');
            const instrument = this.getAttribute('data-instrument');
            searchYouTubeTutorial(songName, instrument, this);
        });
    });
}

function updateAllTransposableElements() {
    updateChords();
    updateTransitions();
    updateJazzSuggestions();
    updateScales();
    updateChordDiagrams();
}



// songs.js - Versión corregida manteniendo la funcionalidad original pero mejorando slash chords
function getChordImagePath(chord, instrument) {
    const instrumentMap = {
        'guitarra': 'guitar',
        'bajo': 'bass',
        'piano': 'piano'
    };
    const instrumentKey = instrumentMap[instrument.toLowerCase()] || instrument.toLowerCase();

    // 1. Primero verificar si tenemos una imagen definida para este acorde
    if (window.chordImages && window.chordImages[instrumentKey] && window.chordImages[instrumentKey][chord]) {
        return window.chordImages[instrumentKey][chord].main;
    }

    // 2. Manejo específico para slash chords (ej: D/C#, A/C, D/F#)
    if (chord.includes('/')) {
        const slashChordName = chord
            .replace('#', 'sos')  // Transforma C# a Csos
            .replace('b', 'bem') // Transforma Bb a Bbem
            .replace('/', '')    // Elimina la barra
            .toLowerCase();      // Todo a minúsculas

        // Intentar con .png primero
        const slashPath = `../../assets/img/${instrumentKey}/slash/${slashChordName}.png`;
        
        // Verificar si existe esta imagen en el objeto chordImages
        if (window.chordImages && window.chordImages[instrumentKey] && window.chordImages[instrumentKey][chord]) {
            return window.chordImages[instrumentKey][chord].main;
        }
        
        // Si no existe en chordImages, usar la ruta generada
        return slashPath;
    }

    // 3. Comportamiento original para acordes regulares (que ya te funcionaba)
    const imageExtensions = ['.webp', '.png', '.jpg', '.jpeg'];
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = chord.slice(root.length);
    const normalizedRoot = root.replace('#', 'sos').replace('b', 'bem').toLowerCase();
    
    let chordType = 'mayores';
    let chordSuffix = '-mayor';
    
    if (suffix === 'm') {
        chordType = 'menores';
        chordSuffix = '-menor';
    } else if (suffix === '7') {
        chordType = 'dominantes';
        chordSuffix = '7';
    } else if (suffix === 'maj7') {
        chordType = 'mayores7';
        chordSuffix = '-mayor7';
    }
    
    const basePath = '../../assets/img/';
    const possibleFileNames = [
        `${normalizedRoot}${chordSuffix}`,
        `${normalizedRoot}`,
        `${root.toLowerCase()}${chordSuffix}`,
        `${root.toLowerCase()}`
    ];
    
    // Devolver la primera combinación posible
    for (const name of possibleFileNames) {
        for (const ext of imageExtensions) {
            const path = `${basePath}${instrumentKey}/${chordType}/${name}${ext}`;
            return path;
        }
    }
    
    // Fallback final
    return `../../assets/img/${instrumentKey}/default-${instrumentKey}.png`;
}
// Función auxiliar para determinar el tipo de acorde
function getChordType(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : '';
    const suffix = root ? chord.slice(root.length) : chord;

    if (suffix === '' || suffix === 'maj') return 'Acorde Mayor';
    if (suffix === 'm') return 'Acorde Menor';
    if (suffix === '7') return 'Séptima Dominante';
    if (suffix === 'maj7') return 'Séptima Mayor';
    if (suffix === 'm7') return 'Séptima Menor';
    if (suffix === 'dim') return 'Acorde Disminuido';
    if (suffix === 'aug') return 'Acorde Aumentado';
    if (suffix === 'sus2') return 'Suspendido 2da';
    if (suffix === 'sus4') return 'Suspendido 4ta';
    return 'Acorde';
}

function generateChordModalContent(chord, instrument) {
    // Normalizar el nombre del instrumento
    const instrumentMap = {
        'guitarra': 'guitar',
        'piano': 'piano',
        'bajo': 'bass'
    };
    const instrumentKey = instrumentMap[instrument.toLowerCase()] || instrument.toLowerCase();

    // Obtener la imagen del acorde
    const chordData = chordImages[instrumentKey] && chordImages[instrumentKey][chord];
    const imgSrc = chordData ? chordData.main : genericChordImages[instrumentKey];
    const fallbackSrc = chordData ? chordData.fallback : genericChordImages[instrumentKey];

    // Extraer información del acorde
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : '';
    const suffix = root ? chord.slice(root.length) : chord;

    // Determinar el tipo de acorde
    let chordType = 'Desconocido';
    if (suffix === '' || suffix === 'maj') chordType = 'Mayor';
    else if (suffix === 'm') chordType = 'Menor';
    else if (suffix === '7') chordType = 'Séptima Dominante';
    else if (suffix === 'maj7' || suffix === 'M7') chordType = 'Séptima Mayor';
    else if (suffix === 'm7') chordType = 'Séptima Menor';
    else if (suffix === 'dim') chordType = 'Disminuido';
    else if (suffix === 'aug') chordType = 'Aumentado';
    else if (suffix === 'sus2') chordType = 'Suspendido 2';
    else if (suffix === 'sus4') chordType = 'Suspendido 4';
    else if (suffix === '6') chordType = 'Sexta';
    else if (suffix === 'm6') chordType = 'Menor Sexta';
    else if (suffix === '9') chordType = 'Novena';

    // Generar el HTML del modal
    return `
        <div class="modal-chord-header">
            <h2>Acorde ${chord} en ${instrument}</h2>
            <div class="chord-type">Tipo: ${chordType}</div>
        </div>
        
        <div class="modal-chord-diagram">
            <img src="${imgSrc}" alt="${chord} en ${instrument}" 
                 onerror="this.src='${fallbackSrc}'">
        </div>
        
        <div class="modal-chord-info">
            <div class="chord-notes">
                <h3>Notas:</h3>
                <p>${getChordNotes(chord).join(' - ')}</p>
            </div>
            
            <div class="chord-intervals">
                <h3>Intervalos:</h3>
                <p>${getIntervals(chord)}</p>
            </div>
            
            <div class="chord-fingering">
                <h3>Digitación:</h3>
                <p>${getFingering(chord, instrument)}</p>
            </div>
            
            <div class="chord-progressions">
                <h3>Progresiones comunes:</h3>
                <ul>
                    ${getCommonProgressions(chord).map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
            
            <div class="chord-tips">
                <h3>Consejos:</h3>
                <p>${getChordTips(chord, instrument)}</p>
            </div>
        </div>
    `;
}

/**
 * Obtiene la digitación recomendada para un acorde específico en un instrumento dado
 * @param {string} chord - Nombre del acorde (ej: "C", "Am7", "G/B")
 * @param {string} instrument - Instrumento ("guitarra", "piano", "bajo")
 * @returns {string} Descripción detallada de la digitación
 */
function getFingering(chord, instrument) {
    const chordType = getChordType(chord).toLowerCase();
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = chord.slice(root.length);
    
    // Para instrumento guitarra
    if (instrument.toLowerCase().includes('guitarra')) {
        switch(chordType) {
            case 'acorde mayor':
                return `Posición abierta: 
                        - Cejilla en traste ${root === 'F' ? '1' : '0'}
                        - Dedos 1, 2 y 3 en cuerdas 4, 3 y 2
                        Posición cerrada: cejilla en traste ${getNoteIndex(root)}`;
                        
            case 'acorde menor':
                return `Posición abierta: 
                        - Dedo 1 en cuerda 2 traste 1
                        - Dedo 2 en cuerda 4 traste 2
                        - Dedo 3 en cuerda 3 traste 2
                        Posición cerrada: cejilla + dedo 3 en 7ª menor`;
                        
            case 'séptima dominante':
                return `Posición típica: 
                        - Cejilla en traste ${getNoteIndex(root)}
                        - Dedo 2 en cuerda 3 traste ${getNoteIndex(root)+1}
                        - Dedo 3 en cuerda 5 traste ${getNoteIndex(root)+2}
                        - Dedo 4 en cuerda 4 traste ${getNoteIndex(root)+2}`;
                        
            case 'séptima mayor':
                return `Posición jazz: 
                        - Dedo 1 en cuerda 5 traste ${getNoteIndex(root)}
                        - Dedo 2 en cuerda 4 traste ${getNoteIndex(root)+1}
                        - Dedo 3 en cuerda 3 traste ${getNoteIndex(root)+1}
                        - Dedo 4 en cuerda 2 traste ${getNoteIndex(root)+2}`;
                        
            case 'slash':
                const [baseChord, bassNote] = chord.split('/');
                return `Digitación especial:
                        - Forma de ${baseChord} modificada
                        - Bajo en ${bassNote} con pulgar
                        - Evitar duplicar la nota ${bassNote} en agudos`;
                        
            default:
                return `Forma movible en traste ${getNoteIndex(root)}`;
        }
    }
    // Para instrumento piano
    else if (instrument.toLowerCase().includes('piano')) {
        const third = suffix.includes('m') ? 3 : 4;
        const seventh = suffix.includes('7') ? (suffix.includes('maj7') ? 11 : 10) : null;
        
        let fingering = `Mano derecha: `;
        
        if (seventh) {
            fingering += `1 (${root}), 2 (${getNoteName(getNoteIndex(root)+third)}), ` +
                        `3 (${getNoteName(getNoteIndex(root)+7)}), 5 (${getNoteName(getNoteIndex(root)+seventh)})`;
        } else {
            fingering += `1 (${root}), 3 (${getNoteName(getNoteIndex(root)+third)}), ` +
                        `5 (${getNoteName(getNoteIndex(root)+7)})`;
        }
        
        if (chord.includes('/')) {
            const [baseChord, bassNote] = chord.split('/');
            fingering += `\nMano izquierda: ${bassNote} (bajo)`;
        } else {
            fingering += `\nMano izquierda: ${root} (octava baja)`;
        }
        
        return fingering;
    }
    // Para instrumento bajo
    else if (instrument.toLowerCase().includes('bajo')) {
        return `Posiciones para ${chord}:
                - Traste ${getNoteIndex(root)} (posición fundamental)
                - Traste ${getNoteIndex(root)+5} (inversión)
                - Traste ${getNoteIndex(root)+7} (otra inversión)`;
    }
    
    return `Digitación estándar para ${chord} en ${instrument}`;
}

/**
 * Obtiene el índice de una nota en la escala cromática
 * @param {string} note - Nota musical (ej: "C", "F#", "Bb")
 * @returns {number} Índice de la nota (0-11)
 */
function getNoteIndex(note) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const normalizedNote = note.replace('b', '#').replace(/^(.)b/, '$1#'); // Convertir bemoles a sostenidos
    return notes.indexOf(normalizedNote);
}

/**
 * Obtiene el nombre de una nota dado su índice
 * @param {number} index - Índice de la nota
 * @returns {string} Nombre de la nota
 */
function getNoteName(index) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    // Asegurar que el índice esté en el rango 0-11
    const safeIndex = ((index % 12) + 12) % 12;
    return notes[safeIndex];
}

function getChordTips(chord, instrument) {
    const chordType = getChordType(chord).toLowerCase();
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    
    if (chord.includes('/')) {
        const [baseChord, bassNote] = chord.split('/');
        return `Este acorde con bajo diferente (${bassNote}) se usa frecuentemente para crear líneas de bajo fluidas. 
                En ${instrument}, enfatiza la nota ${bassNote} en el registro grave.`;
    }
    
    switch(chordType) {
        case 'séptima mayor':
            return `El acorde ${chord} tiene un sonido jazzístico. En ${instrument}, evita duplicar la 7ª mayor 
                    y considera omitir la 5ª si es necesario para mayor claridad armónica.`;
        case 'séptima dominante':
            return `El acorde ${chord} crea tensión que resuelve naturalmente al acorde ${transposeChord(root, -5)}. 
                    En ${instrument}, la 7ª y la 3ª son las notas más características.`;
        case 'acorde menor':
            return `El acorde ${chord} funciona bien como tónica en tonalidades menores. En ${instrument}, 
                    la 3ª menor (${getNoteName(getNoteIndex(root)+3)}) es la nota que define su carácter.`;
        default:
            return `El acorde ${chord} es la base de la armonía tonal. En ${instrument}, busca posiciones 
                    cómodas que permitan buena conexión con los acordes vecinos.`;
    }
}

function getCommonProgressions(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const chordType = getChordType(chord).toLowerCase();
    
    switch(chordType) {
        case 'acorde mayor':
            return [
                `${chord} → ${transposeChord('V', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('IV', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('vi', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('IV', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('ii', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('V', getNoteIndex(root)-getNoteIndex('C'))}`
            ];
        case 'acorde menor':
            return [
                `${chord} → ${transposeChord('III', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('VI', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('VII', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('III', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('iv', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('v', getNoteIndex(root)-getNoteIndex('C'))}`
            ];
        case 'séptima dominante':
            return [
                `${chord} → ${transposeChord('IV', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('I', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('iii', getNoteIndex(root)-getNoteIndex('C'))}7 → ${transposeChord('vi', getNoteIndex(root)-getNoteIndex('C'))}7`,
                `II7 → ${chord} → V7 → I (Progresión jazz)`
            ];
        case 'séptima mayor':
            return [
                `${chord} → ${transposeChord('iv', getNoteIndex(root)-getNoteIndex('C'))}m7 → ${transposeChord('VII', getNoteIndex(root)-getNoteIndex('C'))}7`,
                `${chord} → ${transposeChord('III', getNoteIndex(root)-getNoteIndex('C'))}7 → ${transposeChord('VI', getNoteIndex(root)-getNoteIndex('C'))}maj7`,
                `I → VI → II → V (Progresión jazz)`
            ];
        case 'slash':
            const [baseChord, bassNote] = chord.split('/');
            return [
                `${chord} → ${transposeChord(baseChord, 5)}/${bassNote} → ${transposeChord(baseChord, 7)}/${bassNote}`,
                `Usado comúnmente como transición entre ${baseChord} y ${transposeChord(baseChord, 5)}`,
                `Bajo descendente: ${chord} → ${baseChord}/${getNoteName(getNoteIndex(bassNote)-1)} → ${baseChord}/${getNoteName(getNoteIndex(bassNote)-2)}`
            ];
        default:
            return [
                `${chord} → ${transposeChord('V', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('I', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('IV', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('V', getNoteIndex(root)-getNoteIndex('C'))}`,
                `${chord} → ${transposeChord('vi', getNoteIndex(root)-getNoteIndex('C'))} → ${transposeChord('IV', getNoteIndex(root)-getNoteIndex('C'))}`
            ];
    }
}

function getChordNotes(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = root ? chord.slice(root.length) : chord;
    const rootIndex = getNoteIndex(root);

    // Para slash chords
    if (chord.includes('/')) {
        const [baseChord, bassNote] = chord.split('/');
        const baseNotes = getChordNotes(baseChord);
        return [...baseNotes, bassNote].filter((v, i, a) => a.indexOf(v) === i);
    }

    switch(suffix.toLowerCase()) {
        case 'm':
            return [root, getNoteName(rootIndex + 3), getNoteName(rootIndex + 7)];
        case '7':
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7), getNoteName(rootIndex + 10)];
        case 'maj7':
        case 'M7':
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7), getNoteName(rootIndex + 11)];
        case 'm7':
            return [root, getNoteName(rootIndex + 3), getNoteName(rootIndex + 7), getNoteName(rootIndex + 10)];
        case 'dim':
            return [root, getNoteName(rootIndex + 3), getNoteName(rootIndex + 6)];
        case 'aug':
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 8)];
        case 'sus2':
            return [root, getNoteName(rootIndex + 2), getNoteName(rootIndex + 7)];
        case 'sus4':
            return [root, getNoteName(rootIndex + 5), getNoteName(rootIndex + 7)];
        default:
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7)];
    }
}

/***********************
 *  PITCH + TRANSPOSICIÓN
 ***********************/

function ensureToneStarted() {
    if (Tone.context.state !== "running") {
        Tone.start().then(() => {
            console.log("Tone.js iniciado (AudioContext activo)");
        }).catch(err => {
            console.error("Error al iniciar Tone.js", err);
        });
    }
}


window.chordImages = window.chordImages || {}; // evita doble declaración

// --- AUDIO / Tone.js ---
let tonePitch = null;
let mediaSrc = null;
let audioEl = null;

// --- Estado de transposición (en semitonos) ---
let totalSemitoneOffset = 0;   // desplazamiento actual
let BASE_KEY = 'D';            // tonalidad original del audio (se detecta abajo)

// Mapa de notas (doce semitonos)
const KEYS = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
const FLAT_TO_SHARP = { 'Db':'C#','Eb':'D#','Gb':'F#','Ab':'G#','Bb':'A#' };

function toSharp(k){ return FLAT_TO_SHARP[k] || k; }
function idxOf(k){ return KEYS.indexOf(toSharp(k)); }

// Distancia en semitonos desde 'fromKey' hasta 'toKey' (valor absoluto con signo)
function semitoneDistance(fromKey, toKey) {
  const a = idxOf(fromKey), b = idxOf(toKey);
  if (a < 0 || b < 0) return 0;
  // distancia absoluta basada en origen (¡no el camino más corto!)
  // para que coincida exactamente con el audio grabado en BASE_KEY
  let diff = b - a;
  if (diff > 11) diff -= 12;
  if (diff < -11) diff += 12;
  return diff;
}

// Detecta BASE_KEY al cargar (ej. del botón "Original (D)" o del span actual)
function detectBaseKey() {
  // 1) Intentar leer del texto del botón "Original (X)"
  const originalBtn = document.querySelector('.transpose-buttons button:nth-child(3)');
  const fromBtn = originalBtn?.textContent || '';
  const m = fromBtn.match(/\(([A-G][#b]?)\)/i);
  if (m && m[1]) return toSharp(m[1].toUpperCase());

  // 2) O del span #current-key al inicio
  const span = document.getElementById('current-key');
  const k = span?.textContent?.trim().toUpperCase();
  if (k && idxOf(k) >= 0) return toSharp(k);

  return 'D';
}

/* ------------------ Tone.js setup ------------------ */
function setupPitchShift() {
    if (!window.Tone) {
        console.warn('Tone.js no está cargado');
        return;
    }

    if (mediaSrc) {
        console.log("PitchShift ya inicializado");
        return; // evita crear MediaElementSource dos veces
    }

    audioEl = document.getElementById('song-audio');
    if (!audioEl) {
        console.warn('No encontré #song-audio');
        return;
    }

    BASE_KEY = detectBaseKey();

    const ctx = Tone.getContext().rawContext;
    mediaSrc = ctx.createMediaElementSource(audioEl);

    tonePitch = new Tone.PitchShift({
        pitch: 0,         // tono inicial
        windowSize: 0.15, // mejor calidad
        delayTime: 0,
        feedback: 0
    }).toDestination();

    Tone.connect(mediaSrc, tonePitch);

    // Asegurar que Tone.js inicia con cualquier interacción
    const startTone = () => {
        Tone.start().then(() => {
            console.log("Tone.js iniciado (AudioContext activo)");
        }).catch(err => console.error("Error iniciando Tone.js", err));
    };

    // Escuchar clic en cualquier parte de la página o botones
    document.addEventListener('click', startTone, { once: true });
    document.addEventListener('touchstart', startTone, { once: true });

    console.log("PitchShift configurado correctamente");
}


/* ----- Cambiar pitch exacto (absoluto) ----- */
window.setPitchShift = function(semitones) {
  totalSemitoneOffset = semitones;
  if (tonePitch) tonePitch.pitch = semitones;
};

/* ------------------ ENGANCHAR TUS CONTROLES EXISTENTES ------------------ */
// Guardamos las funciones originales si existen (de tus scripts)
const _originalTranspose = typeof transpose === 'function' ? transpose : null;
const _originalResetKey  = typeof resetKey  === 'function' ? resetKey  : null;
const _originalSetKey    = typeof setKey    === 'function' ? setKey    : null;

/* 
 * transpose(±1): sigue haciendo lo tuyo (acordes) y además mueve el audio
 * totalSemitoneOffset lleva el acumulado actual.
 */
window.transpose = function(deltaSemi) {
  if (_originalTranspose) _originalTranspose(deltaSemi);
  window.setPitchShift(totalSemitoneOffset + deltaSemi);
};

/* 
 * resetKey(): NO reinicia el <audio> ni su salida nativa; solo:
 * - resetea acordes/UI (tu función)
 * - pone el pitch del audio en 0 semitonos (tono original)
 */
window.resetKey = function() {
  if (_originalResetKey) _originalResetKey();
  window.setPitchShift(0);
};

/*
 * setKey('X'): selección directa de tonalidad desde los botones del selector.
 * - Deja que tu setKey original haga el trabajo de acordes/UI.
 * - Calcula cuántos semitonos hay de BASE_KEY (grabación) a 'X'
 *   y aplica ese pitch al MP3.
 */
window.setKey = function(targetKey) {
  const tgt = toSharp(String(targetKey).toUpperCase());
  if (_originalSetKey) _originalSetKey(tgt);

  const shiftFromBase = semitoneDistance(BASE_KEY, tgt);
  window.setPitchShift(shiftFromBase);

  // (opcional) marcar botón activo si tu código no lo hace
  const ks = document.getElementById('key-selector');
  if (ks) {
    ks.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    const btn = Array.from(ks.querySelectorAll('button')).find(b => b.textContent.trim().toUpperCase() === tgt);
    if (btn) btn.classList.add('active');
  }

  // (opcional) actualizar el span "Tonalidad actual"
  const span = document.getElementById('current-key');
  if (span) span.textContent = tgt;
};

/* ------------------ LISTOS ------------------ */
document.addEventListener('DOMContentLoaded', setupPitchShift);

/* 
 * (Opcional) por si tu generador de botones no añade onclick,
 * delegamos el click del selector a setKey():
 */
const ks = document.getElementById('key-selector');
if (ks && !ks.__pitchHooked) {
  ks.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) window.setKey(btn.textContent.trim());
  });
  ks.__pitchHooked = true;
}



// Copia también estas funciones dependientes:
// - transpose()
// - setKey()
// - resetKey()
// - updateKey()
// - transposeChord()
// - updateChords()
// - updateTransitions()
// - updateJazzSuggestions()
// - updateScales()
// - updateChordDiagrams()
// - getUniqueChordsFromLyrics()
// - searchYouTubeTutorial()
// - Las funciones auxiliares de transposición