// song-page.js - Funcionalidades específicas para páginas de canciones

// Configuración básica para la página de canción
document.addEventListener('DOMContentLoaded', function () {
    // 1. Inicializar controles de transposición
    initKeyButtons();

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


function getChordImagePath(chord, instrument) {
    const instrumentMap = {
        'guitarra': 'guitar',
        'bajo': 'bass',
        'piano': 'piano'
    };
    const instrumentKey = instrumentMap[instrument.toLowerCase()] || instrument.toLowerCase();
    
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
    
    const allPossiblePaths = [];
    possibleFileNames.forEach(name => {
        imageExtensions.forEach(ext => {
            allPossiblePaths.push(`${basePath}${instrumentKey}/${chordType}/${name}${ext}`);
        });
    });
    
    return allPossiblePaths[0];
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
            
            <div class="chord-fingering">
                <h3>Digitación:</h3>
                <p>${getFingering(chord, instrument)}</p>
            </div>
            
            <div class="chord-progressions">
                <h3>Progresiones comunes:</h3>
                ${getCommonProgressions(chord).map(p => `<p>${p}</p>`).join('')}
            </div>
        </div>
    `;
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