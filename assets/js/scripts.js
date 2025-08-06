const genericChordImages = {
    guitar: 'https://jevin1127.github.io/PRESBYTERIAN/assets/img/guitar/mayores/c-mayor-acorde-de-la-guitarra-ilustración.png',
    piano: 'assets/img/piano/32407b370080d1d7699b97799c01a300-doodle-de-instrumentos-musicales-para-piano.webp',
    bass: 'assets/img/bass/6196550.png'
};

// Objeto con las imágenes para cada instrumento y acorde
const chordImages = {
    guitar: {
        'C': {
            main: 'assets/img/guitar/mayores/c-mayor.webp',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'D': {
            main: 'assets/img/guitar/mayores/d-mayor.webp',
            fallback: 'assets/img/guitar/default-guitar.png'
        }
    },
    piano: {
        'C': {
            main: 'assets/img/piano/c-mayor.webp',
            fallback: 'assets/img/piano/default-piano.png'
        }
    },
    bass: {
        'C': {
            main: 'assets/img/bass/c-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        }
    }
};

// Mapeo de acordes
const chordMap = {
    'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
    'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11
};
const chordNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Estado
let currentTransposition = 0;
const originalKey = 'D';
let currentKey = originalKey;

// Inicializar los botones de tonalidad
function initKeyButtons() {
    const keySelector = document.getElementById('key-selector');
    chordNames.forEach((key, index) => {
        const btn = document.createElement('button');
        btn.className = 'key-btn';
        btn.textContent = key;
        if (key === originalKey) btn.classList.add('active');
        btn.onclick = () => setKey(key);
        keySelector.appendChild(btn);
    });
}

// Transponer canción
function transpose(semitones) {
    currentTransposition += semitones;
    if (currentTransposition > 6) currentTransposition = 6;
    if (currentTransposition < -6) currentTransposition = -6;

    updateKey();
    updateChords();
    updateTransitions();
    updateJazzSuggestions();
    updateScales();
    updateChordDiagrams();
}

// Establecer tonalidad específica
function setKey(key) {
    const targetIndex = chordMap[key];
    const originalIndex = chordMap[originalKey];
    currentTransposition = (targetIndex - originalIndex + 12) % 12;
    if (currentTransposition > 6) currentTransposition -= 12;

    updateKey();
    updateChords();
    updateTransitions();
    updateJazzSuggestions();
    updateScales();
    updateChordDiagrams();
}

// Resetear a tonalidad original
function resetKey() {
    currentTransposition = 0;
    updateKey();
    updateChords();
    updateTransitions();
    updateJazzSuggestions();
    updateScales();
    updateChordDiagrams();
}

// Actualizar la tonalidad mostrada
function updateKey() {
    currentKey = chordNames[(chordMap[originalKey] + currentTransposition + 12) % 12];
    document.getElementById('current-key').textContent = currentKey;

    // Actualizar botones activos
    document.querySelectorAll('.key-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === currentKey) {
            btn.classList.add('active');
        }
    });
}

// Transponer un acorde individual
function transposeChord(chord, semitones) {
    if (!chord) return '';

    // Manejar acordes con bajo (slash chords)
    const [mainChord, bassNote] = chord.split('/');

    // Transponer acorde principal
    const transposedMain = transposeSingleChord(mainChord, semitones);

    // Transponer nota de bajo si existe
    if (bassNote) {
        const transposedBass = transposeSingleChord(bassNote, semitones);
        return transposedMain + '/' + transposedBass;
    }

    return transposedMain;
}

function transposeSingleChord(chord, semitones) {
    // Extraer la raíz del acorde (nota + alteración)
    const rootMatch = chord.match(/^[A-G][#b]?/);
    if (!rootMatch) return chord;

    const root = rootMatch[0];
    const suffix = chord.slice(root.length);

    // Transponer la raíz
    const rootIndex = chordMap[root];
    if (rootIndex === undefined) return chord;

    const newRootIndex = (rootIndex + semitones + 12) % 12;
    const newRoot = chordNames[newRootIndex];

    return newRoot + suffix;
}

// Actualizar todos los acordes en la letra
function updateChords() {
    const chords = document.querySelectorAll('.lyrics .chord');
    chords.forEach(chord => {
        const originalChord = chord.getAttribute('data-original') || chord.textContent;
        if (!chord.getAttribute('data-original')) {
            chord.setAttribute('data-original', originalChord);
        }
        chord.textContent = transposeChord(originalChord, currentTransposition);
    });
}

// Actualizar transiciones sugeridas
function updateTransitions() {
    const transitions = [
        { from: 'D', to: 'Bm', suggestion: 'Em' },
        { from: 'Bm', to: 'G', suggestion: 'Am' },
        { from: 'G', to: 'D', suggestion: 'A' },
        { from: 'D', to: 'Em', suggestion: 'D/F#' },
        { from: 'Em', to: 'A9', suggestion: 'F#m7b5' }
    ];

    const transposedTransitions = transitions.map(t => ({
        from: transposeChord(t.from, currentTransposition),
        to: transposeChord(t.to, currentTransposition),
        suggestion: transposeChord(t.suggestion, currentTransposition)
    }));

    const transitionsContainer = document.querySelector('.transition-box');
    transitionsContainer.innerHTML = `
                <h3>🎼 Transiciones entre Acordes</h3>
                ${transposedTransitions.map(t => `
                    <div class="transition-item">
                        <strong>Original:</strong> ${t.from} → ${t.to}<br>
                        <strong>Con transición:</strong> ${t.from} → ${t.suggestion} → ${t.to}
                    </div>
                `).join('')}
            `;
}

// Actualizar sugerencias jazz
function updateJazzSuggestions() {
    // Progresión jazz
    const jazzChords = ['Dmaj7', 'D6/9', 'Bm9', 'A13sus4', 'Dmaj9', 'D6/9', 'A13'];
    const transposedJazz = jazzChords.map(c => transposeChord(c, currentTransposition));

    // Walking bass
    const walkingChords = ['D', 'D/C#', 'Bm', 'Bm/A', 'B', 'B/F#', 'D/A', 'A7'];
    const transposedWalking = walkingChords.map(c => transposeChord(c, currentTransposition));

    // Sustituciones
    const substitutions = {
        'D': ['maj7', '6/9'],
        'Bm': ['m7', 'm9'],
        'G': ['maj9', '6/9'],
        'A9': ['13sus4', '7alt']
    };

    let subsHTML = '';
    Object.entries(substitutions).forEach(([chord, exts]) => {
        const transposedChord = transposeChord(chord, currentTransposition);
        const transposedExts = exts.map(ext => transposedChord + ext);
        subsHTML += `
                    <div class="transition-item">
                        <strong>${transposedChord}</strong> → ${transposedExts.join(' o ')}
                    </div>
                `;
    });

    // Reharmonización avanzada
    const advancedChords = ['Dmaj7', 'B7#11', 'Em9', 'A13sus4', 'Dmaj7#11', 'D6/9', 'A7alt'];
    const transposedAdvanced = advancedChords.map(c => transposeChord(c, currentTransposition));

    const jazzContainer = document.querySelector('.jazz-box');
    jazzContainer.innerHTML = `
                <h3>🎷 Sugerencias de Arreglos Jazzeros</h3>
                
                <div class="jazz-subsection">
                    <h4>Progresión Jazz alternativa:</h4>
                    <div class="chord-progression">
                        ${transposedJazz.join(' - ')}
                    </div>
                </div>
                
                <div class="jazz-subsection">
                    <h4>Substituciones recomendadas:</h4>
                    ${subsHTML}
                </div>
                
                <div class="jazz-subsection">
                    <h4>Reharmonización Avanzada:</h4>
                    <div class="chord-progression">
                        ${transposedAdvanced.join(' - ')}
                    </div>
                </div>
                
                <div class="jazz-subsection">
                    <h4>Walking Bass Line:</h4>
                    <div class="chord-progression">
                        ${transposedWalking.join(' - ')}
                    </div>
                </div>
            `;
}

// Función para actualizar las escalas al transponer
function updateScales() {
    const scales = [
        {
            name: `Escala de ${currentKey} Mayor (Original)`,
            notes: ['', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'],
            desc: `Ideal para pasajes alegres y brillantes. Usar sobre acordes ${currentKey}, ${transposeChord('G', currentTransposition)}, ${transposeChord('A', currentTransposition)}.`
        },
        {
            name: `Modo Mixolidio de ${currentKey}`,
            notes: ['', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7'],
            desc: `Para partes con acordes de séptima dominante (${transposeChord('A7', currentTransposition)}).`
        },
        {
            name: `Escala de ${transposeChord('B', currentTransposition)} Menor (Relativa menor)`,
            notes: ['', 'M2', 'm3', 'P4', 'P5', 'm6', 'm7'],
            desc: `Funciona bien sobre acordes ${transposeChord('Bm', currentTransposition)}, ${currentKey}, ${transposeChord('Em', currentTransposition)}. Da un sonido más melancólico.`
        },
        {
            name: `Blues de ${currentKey}`,
            notes: ['', 'm3', 'P4', 'd5', 'P5', 'm7'],
            desc: `Para agregar un toque bluesero, especialmente en pasajes con ${transposeChord('A7', currentTransposition)}.`
        },
        {
            name: `Pentatónica de ${currentKey} Mayor`,
            notes: ['', 'M2', 'M3', 'P5', 'M6'],
            desc: 'Simplificada, evita notas de conflicto. Segura para improvisar.'
        },
        {
            name: `Escala Bebop de ${currentKey} Mayor`,
            notes: ['', 'M2', 'M3', 'P4', 'P5', 'M6', 'm7', 'M7'],
            desc: `Escala mayor con nota de paso cromática (m7) para crear líneas fluidas. Ideal para jazz.`
        }
    ];

    const container = document.getElementById('scales-container');
    container.innerHTML = '';

    scales.forEach(scale => {
        const scaleElement = document.createElement('div');
        scaleElement.className = 'scale-option';

        // Calcular las notas de la escala
        const rootIndex = chordMap[currentKey];
        const scaleNotes = scale.notes.map(interval => {
            if (!interval) return currentKey;

            const semitones = {
                'M2': 2, 'm3': 3, 'M3': 4, 'P4': 5, 'd5': 6,
                'P5': 7, 'm6': 8, 'M6': 9, 'm7': 10, 'M7': 11
            }[interval];

            return chordNames[(rootIndex + semitones) % 12];
        });

        scaleElement.innerHTML = `
                    <h4>${scale.name}</h4>
                    <div class="scale-notes">${scaleNotes.join(' - ')}</div>
                    <p>${scale.desc}</p>
                `;

        container.appendChild(scaleElement);
    });
}

// Función para actualizar los diagramas de acordes
function updateChordDiagrams() {
    const chords = getUniqueChordsFromLyrics();
    const instruments = ['guitar', 'piano', 'bass'];
    const container = document.getElementById('chord-diagrams-grid');

    container.innerHTML = '';

    chords.forEach(chord => {
        const transposedChord = transposeChord(chord, currentTransposition);

        instruments.forEach(instrument => {
            const diagram = document.createElement('div');
            diagram.className = `chord-diagram ${instrument}-chord`;
            diagram.setAttribute('data-instrument', instrument);
            diagram.setAttribute('title', `${transposedChord} en ${instrument === 'guitar' ? 'Guitarra' : instrument === 'piano' ? 'Piano' : 'Bajo'}`);

            const imgSrc = genericChordImages[instrument];
            const instrumentName = instrument === 'guitar' ? 'Guitarra' :
                instrument === 'piano' ? 'Piano' : 'Bajo';

            diagram.innerHTML = `
                <div class="chord-image-container ${instrument}-img">
                    <img src="${imgSrc}" alt="${transposedChord} en ${instrumentName}">
                </div>
                <div class="chord-info">
                    <div class="chord-name">${transposedChord}</div>
                    <div class="chord-instrument">${instrumentName}</div>
                </div>
            `;

            diagram.addEventListener('click', () => {
                showChordDetail(transposedChord, instrumentName);
            });

            container.appendChild(diagram);
        });
    });
}

function getUniqueChordsFromLyrics() {
    const chords = new Set();
    document.querySelectorAll('.lyrics .chord').forEach(chord => {
        const originalChord = chord.getAttribute('data-original') || chord.textContent;
        chords.add(originalChord);
    });
    return Array.from(chords);
}

// Función para mostrar detalles del acorde (simulado)
function showChordDetail(chord, instrument) {
    // Ocultar todos los contenidos de canciones primero
    document.querySelectorAll('.song-content').forEach(content => {
        content.style.display = 'none';
    });

    // Ocultar la librería de acordes
    document.getElementById('chord-library').style.display = 'none';

    // Mostrar el detalle del acorde
    const chordDetail = document.getElementById('chord-detail');
    if (!chordDetail) {
        createChordDetailSection();
    }

    document.getElementById('chord-detail').style.display = 'block';
    document.getElementById('chord-detail-title').textContent = `Acorde ${chord} en ${instrument}`;

    // Generar contenido específico del acorde e instrumento
    generateChordDetailContent(chord, instrument);

    // Desplazarse a la sección de detalle
    window.scrollTo({
        top: document.getElementById('chord-detail').offsetTop - 20,
        behavior: 'smooth'
    });
}

// Crear la sección de detalle de acorde si no existe
function createChordDetailSection() {
    const section = document.createElement('section');
    section.className = 'song-content';
    section.id = 'chord-detail';
    section.style.display = 'none';

    section.innerHTML = `
                <h2 class="song-title" id="chord-detail-title"></h2>
                
                <div class="chord-detail">
                    <div id="chord-detail-content"></div>
                </div>
                
                <a href="#chord-library" class="back-btn">Volver a la Librería de Acordes</a>
                <a href="#indice" class="back-btn">Volver al índice</a>
            `;

    document.querySelector('.container').appendChild(section);
}

// Generar contenido detallado del acorde
function generateChordDetailContent(chord, instrument) {
    const content = document.getElementById('chord-detail-content');
    content.innerHTML = '';

    // Extraer información del acorde
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : '';
    const suffix = root ? chord.slice(root.length) : chord;

    // Determinar el tipo de acorde
    let chordType = 'Desconocido';
    let chordNotes = [];

    if (suffix === '' || suffix === 'maj') {
        chordType = 'Mayor';
        chordNotes = getMajorChordNotes(root);
    } else if (suffix === 'm') {
        chordType = 'Menor';
        chordNotes = getMinorChordNotes(root);
    } else if (suffix === '7') {
        chordType = 'Séptima Dominante';
        chordNotes = getDominant7ChordNotes(root);
    } else if (suffix === 'maj7' || suffix === 'M7') {
        chordType = 'Séptima Mayor';
        chordNotes = getMajor7ChordNotes(root);
    } else if (suffix === 'm7') {
        chordType = 'Séptima Menor';
        chordNotes = getMinor7ChordNotes(root);
    } else if (suffix === 'dim') {
        chordType = 'Disminuido';
        chordNotes = getDiminishedChordNotes(root);
    } else if (suffix === 'aug') {
        chordType = 'Aumentado';
        chordNotes = getAugmentedChordNotes(root);
    } else if (suffix === 'sus2') {
        chordType = 'Suspendido 2';
        chordNotes = getSus2ChordNotes(root);
    } else if (suffix === 'sus4') {
        chordType = 'Suspendido 4';
        chordNotes = getSus4ChordNotes(root);
    } else if (suffix === '6') {
        chordType = 'Sexta';
        chordNotes = get6ChordNotes(root);
    } else if (suffix === 'm6') {
        chordType = 'Menor Sexta';
        chordNotes = getMinor6ChordNotes(root);
    } else if (suffix === '9') {
        chordType = 'Novena';
        chordNotes = get9ChordNotes(root);
    } else if (suffix === 'm9') {
        chordType = 'Menor Novena';
        chordNotes = getMinor9ChordNotes(root);
    } else if (suffix === 'maj9') {
        chordType = 'Novena Mayor';
        chordNotes = getMajor9ChordNotes(root);
    } else if (suffix === 'add9') {
        chordType = 'Add 9';
        chordNotes = getAdd9ChordNotes(root);
    } else if (suffix === '11') {
        chordType = 'Undécima';
        chordNotes = get11ChordNotes(root);
    } else if (suffix === '13') {
        chordType = 'Trecena';
        chordNotes = get13ChordNotes(root);
    } else if (suffix === '5') {
        chordType = 'Power Chord';
        chordNotes = getPowerChordNotes(root);
    }

    // Mostrar información general del acorde
    const generalInfo = document.createElement('div');
    generalInfo.innerHTML = `
        <h3>Información del Acorde ${chord}</h3>
        <p><strong>Tipo:</strong> ${chordType}</p>
        <p><strong>Notas:</strong> ${chordNotes.join(' - ')}</p>
        <p><strong>Intervalos:</strong> ${getChordIntervals(suffix)}</p>
        <div class="chord-detail-image-box">
            <h4>Diagrama para ${instrument}</h4>
            ${getChordImage(chord, instrument)}
        </div>
    `;
    content.appendChild(generalInfo);

    // Agregar progresiones comunes
    const progressions = document.createElement('div');
    progressions.innerHTML = `
                <h3>Progresiones comunes con ${chord}</h3>
                <p>Este acorde funciona bien en las siguientes progresiones:</p>
            `;

    getCommonProgressions(chord).forEach(progression => {
        const progItem = document.createElement('div');
        progItem.className = 'chord-progression';
        progItem.textContent = progression;
        progressions.appendChild(progItem);
    });

    content.appendChild(progressions);
}

// Función auxiliar CORREGIDA - Esta es la clave del problema
function getChordImage(chord, instrument) {
    console.log('=== DEBUG getChordImage ===');
    console.log('Chord recibido:', chord);
    console.log('Instrument recibido:', instrument);
    
    // Normalizar el nombre del instrumento
    let normalizedInstrument = instrument;
    if (instrument === 'Guitarra') normalizedInstrument = 'guitar';
    if (instrument === 'Piano') normalizedInstrument = 'piano';
    if (instrument === 'Bajo') normalizedInstrument = 'bass';
    
    console.log('Instrumento normalizado:', normalizedInstrument);
    console.log('¿Existe instrumento?', chordImages.hasOwnProperty(normalizedInstrument));
    
    const instrumentData = chordImages[normalizedInstrument];
    if (!instrumentData) {
        console.log('Instrumentos disponibles:', Object.keys(chordImages));
        return `<p class="chord-detail-no-img">Instrumento no soportado: ${instrument}</p>`;
    }

    const chordData = instrumentData[chord];
    if (!chordData) {
        console.log('Acordes disponibles para', normalizedInstrument + ':', Object.keys(instrumentData));
        return '<p class="chord-detail-no-img">No hay imagen disponible para este acorde</p>';
    }

    console.log('✅ Imagen encontrada:', chordData.main);
    
    return `
        <div class="chord-detail-main-img">
            <img src="${chordData.main}" 
                 alt="${chord} en ${instrument}" 
                 class="chord-detail-img" 
                 style="max-width: 100%; height: auto;"
                 onerror="this.src='${chordData.fallback}'; this.onerror=null;">
            <p class="chord-image-caption">Diagrama para ${chord} en ${instrument}</p>
        </div>
    `;
}

// Obtener digitación recomendada
function getFingering(chord, instrument) {
    // Esto es un ejemplo simplificado
    if (instrument === 'Guitarra') {
        if (chord.includes('maj7')) return '1 2 3 4';
        if (chord.includes('m7')) return '1 2 3 4';
        if (chord.includes('7')) return '1 2 3 4';
        return '1 2 3 4';
    } else if (instrument === 'Piano') {
        return '1 3 5 (mano derecha) / 5 3 1 (mano izquierda)';
    } else if (instrument === 'Bajo') {
        return '1 2 4';
    }
    return 'Consulta con tu instructor';
}

// Obtener variaciones del acorde
function getChordVariations(chord, instrument) {
    // Esto es un ejemplo simplificado
    const variations = [];

    if (instrument === 'Guitarra') {
        variations.push({
            name: 'Posición abierta',
            position: 'open',
            notes: getRandomChordNotes(chord),
            fingering: '1 2 3 4'
        });

        variations.push({
            name: 'Posición en 5to traste',
            position: '5th',
            notes: getRandomChordNotes(chord),
            fingering: '1 3 4'
        });

        variations.push({
            name: 'Posición en 7mo traste',
            position: '7th',
            notes: getRandomChordNotes(chord),
            fingering: '2 3 4'
        });
    } else if (instrument === 'Piano') {
        variations.push({
            name: 'Inversión primera',
            position: '1st',
            notes: getRandomChordNotes(chord),
            fingering: '1 2 5'
        });

        variations.push({
            name: 'Inversión segunda',
            position: '2nd',
            notes: getRandomChordNotes(chord),
            fingering: '1 3 5'
        });

        variations.push({
            name: 'Extensión con 9na',
            position: '9th',
            notes: getRandomChordNotes(chord),
            fingering: '1 2 3 5'
        });
    } else if (instrument === 'Bajo') {
        variations.push({
            name: 'Posición baja',
            position: 'low',
            notes: getRandomChordNotes(chord),
            fingering: '1 4'
        });

        variations.push({
            name: 'Posición media',
            position: 'mid',
            notes: getRandomChordNotes(chord),
            fingering: '1 3'
        });

        variations.push({
            name: 'Posición alta',
            position: 'high',
            notes: getRandomChordNotes(chord),
            fingering: '2 4'
        });
    }

    return variations;
}

// Obtener progresiones comunes
function getCommonProgressions(chord) {
    // Esto es un ejemplo simplificado
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : '';

    if (!root) return [];

    return [
        `${root} - ${transposeChord('G', chordMap[root] - chordMap['D'])} - ${transposeChord('A', chordMap[root] - chordMap['D'])}`,
        `${root} - ${transposeChord('F#m', chordMap[root] - chordMap['D'])} - ${transposeChord('Bm', chordMap[root] - chordMap['D'])} - ${transposeChord('E', chordMap[root] - chordMap['D'])}`,
        `${transposeChord('C#m', chordMap[root] - chordMap['D'])} - ${transposeChord('F#m', chordMap[root] - chordMap['D'])} - ${root} - ${transposeChord('Bm', chordMap[root] - chordMap['D'])}`,
        `${root} - ${transposeChord('Em', chordMap[root] - chordMap['D'])} - ${transposeChord('C', chordMap[root] - chordMap['D'])} - ${transposeChord('G', chordMap[root] - chordMap['D'])}`
    ];
}

// Funciones para obtener notas de acordes (simplificadas)
function getMajorChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12]
    ];
}

function getMinorChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 3) % 12],
        chordNames[(rootIndex + 7) % 12]
    ];
}

function getDominant7ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12]
    ];
}

function getMajor7ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 11) % 12]
    ];
}

function getMinor7ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 3) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12]
    ];
}

function getDiminishedChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 3) % 12],
        chordNames[(rootIndex + 6) % 12]
    ];
}

function getAugmentedChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 8) % 12]
    ];
}

function getSus2ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 2) % 12],
        chordNames[(rootIndex + 7) % 12]
    ];
}

function getSus4ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 5) % 12],
        chordNames[(rootIndex + 7) % 12]
    ];
}

function get6ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 9) % 12]
    ];
}

function getMinor6ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 3) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 9) % 12]
    ];
}

function get9ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12],
        chordNames[(rootIndex + 14) % 12]
    ];
}

function getMinor9ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 3) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12],
        chordNames[(rootIndex + 14) % 12]
    ];
}

function getMajor9ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 11) % 12],
        chordNames[(rootIndex + 14) % 12]
    ];
}

function getAdd9ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 14) % 12]
    ];
}

function get11ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12],
        chordNames[(rootIndex + 14) % 12],
        chordNames[(rootIndex + 17) % 12]
    ];
}

function get13ChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 4) % 12],
        chordNames[(rootIndex + 7) % 12],
        chordNames[(rootIndex + 10) % 12],
        chordNames[(rootIndex + 14) % 12],
        chordNames[(rootIndex + 17) % 12],
        chordNames[(rootIndex + 21) % 12]
    ];
}

function getPowerChordNotes(root) {
    const rootIndex = chordMap[root];
    return [
        root,
        chordNames[(rootIndex + 7) % 12]
    ];
}

function getRandomChordNotes(chord) {
    // Función auxiliar para generar notas aleatorias (simuladas)
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';

    const notes = [];
    const rootIndex = chordMap[root];

    for (let i = 0; i < 3 + Math.floor(Math.random() * 3); i++) {
        notes.push(chordNames[(rootIndex + Math.floor(Math.random() * 12)) % 12]);
    }

    return [...new Set(notes)]; // Eliminar duplicados
}

function getChordIntervals(suffix) {
    // Esto es un ejemplo simplificado
    if (suffix === '' || suffix === 'maj') return '1 - 3 - 5';
    if (suffix === 'm') return '1 - m3 - 5';
    if (suffix === '7') return '1 - 3 - 5 - m7';
    if (suffix === 'maj7' || suffix === 'M7') return '1 - 3 - 5 - 7';
    if (suffix === 'm7') return '1 - m3 - 5 - m7';
    if (suffix === 'dim') return '1 - m3 - d5';
    if (suffix === 'aug') return '1 - 3 - #5';
    if (suffix === 'sus2') return '1 - 2 - 5';
    if (suffix === 'sus4') return '1 - 4 - 5';
    if (suffix === '6') return '1 - 3 - 5 - 6';
    if (suffix === 'm6') return '1 - m3 - 5 - 6';
    if (suffix === '9') return '1 - 3 - 5 - m7 - 9';
    if (suffix === 'm9') return '1 - m3 - 5 - m7 - 9';
    if (suffix === 'maj9') return '1 - 3 - 5 - 7 - 9';
    if (suffix === 'add9') return '1 - 3 - 5 - 9';
    if (suffix === '11') return '1 - 3 - 5 - m7 - 9 - 11';
    if (suffix === '13') return '1 - 3 - 5 - m7 - 9 - 11 - 13';
    if (suffix === '5') return '1 - 5';
    return 'Consulta un diccionario de acordes';
}

// Configurar los filtros de acordes
function setupChordFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            const diagrams = document.querySelectorAll('.chord-diagram');

            diagrams.forEach(diagram => {
                if (filter === 'all') {
                    diagram.style.display = 'block';
                } else {
                    const instrument = diagram.getAttribute('data-instrument');
                    diagram.style.display = instrument.includes(filter) ? 'block' : 'none';
                }
            });
        });
    });
}

// Configurar los tabs de instrumentos
function setupInstrumentTabs() {
    document.querySelectorAll('.instrument-tab').forEach(tab => {
        tab.addEventListener('click', function () {
            document.querySelectorAll('.instrument-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const instrument = this.getAttribute('data-instrument');
            document.querySelectorAll('.chord-detail-container').forEach(container => {
                container.classList.remove('active');
            });

            document.getElementById(`${instrument}-chords`).classList.add('active');
        });
    });
}

// Configurar los filtros de tipos de acordes
function setupChordTypeFilters() {
    document.querySelectorAll('.chord-type-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.chord-type-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const type = this.getAttribute('data-type');
            // Aquí implementarías la lógica para filtrar los acordes por tipo
            // Esto dependería de cómo estés generando los acordes en la librería
        });
    });
}

// Función para buscar cantos
function searchSong() {
    const searchTerm = document.getElementById('song-search').value.toLowerCase();
    const allSongs = document.querySelectorAll('.songs-list a');
    const resultsContainer = document.getElementById('search-results');

    resultsContainer.innerHTML = '';

    if (searchTerm.trim() === '') {
        resultsContainer.style.display = 'none';
        return;
    }

    const matches = [];

    allSongs.forEach(song => {
        const songName = song.textContent.toLowerCase();
        if (songName.includes(searchTerm)) {
            matches.push({
                name: song.textContent,
                href: song.getAttribute('href')
            });
        }
    });

    if (matches.length === 0) {
        resultsContainer.innerHTML = '<div class="no-results">No se encontraron cantos con ese nombre</div>';
    } else {
        matches.forEach(match => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            resultItem.textContent = match.name;
            resultItem.addEventListener('click', () => {
                const targetId = match.href.substring(1);
                showSongContent(targetId);
                resultsContainer.style.display = 'none';
            });
            resultsContainer.appendChild(resultItem);
        });
    }

    resultsContainer.style.display = matches.length > 0 ? 'block' : 'block';
}

// Función para cargar tutoriales
function setupTutorialPlaceholders() {
    document.querySelectorAll('.video-placeholder').forEach(placeholder => {
        placeholder.addEventListener('click', function () {
            const songName = this.getAttribute('data-song');
            const instrument = this.getAttribute('data-instrument');
            searchYouTubeTutorial(songName, instrument, this);
        });
    });
}

// Función simulada para buscar tutoriales en YouTube
function searchYouTubeTutorial(songName, instrument, element) {
    // En una implementación real, esto haría una llamada a la API de YouTube
    // Aquí simulamos la respuesta con videos genéricos

    const instrumentVideos = {
        'piano': 'https://www.youtube.com/embed/VIDEO_PIANO',
        'guitarra': 'https://www.youtube.com/embed/VIDEO_GUITARRA',
        'bajo': 'https://www.youtube.com/embed/VIDEO_BAJO',
        'bateria': 'https://www.youtube.com/embed/VIDEO_BATERIA',
        'canto': 'https://www.youtube.com/embed/VIDEO_CANTO'
    };

    element.innerHTML = `<iframe class="video-embed" src="${instrumentVideos[instrument]}" frameborder="0" allowfullscreen></iframe>`;
}

// Manejar clicks en los enlaces de canciones
function setupSongLinks() {
    // Usar event delegation para manejar clicks/touch
    document.querySelector('.container').addEventListener('click', function (e) {
        let target = e.target;
        // Subir en el DOM hasta encontrar el enlace
        while (target && !target.matches('.songs-list a')) {
            target = target.parentElement;
            if (!target) return;
        }

        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        showSongContent(targetId);
    });

    // También manejar eventos táctiles
    document.querySelector('.container').addEventListener('touchstart', function (e) {
        let target = e.target;
        while (target && !target.matches('.songs-list a')) {
            target = target.parentElement;
            if (!target) return;
        }

        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        showSongContent(targetId);
    }, { passive: false });
}

// Mostrar el contenido de una canción específica
function showSongContent(songId) {
    // Ocultar todos los contenidos primero
    const allContents = document.querySelectorAll('.song-content');
    for (let i = 0; i < allContents.length; i++) {
        allContents[i].style.display = 'none';
    }

    // Mostrar solo el contenido solicitado
    const songContent = document.getElementById(songId);
    if (songContent) {
        songContent.style.display = 'block';

        // Scroll suave con polyfill para Android si es necesario
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: songContent.offsetTop - 20,
                behavior: 'smooth'
            });
        } else {
            // Fallback para navegadores antiguos
            window.scrollTo(0, songContent.offsetTop - 20);
        }
    }
}

// Configurar los toggles de categorías
function setupCategoryToggles() {
    document.querySelectorAll('.category-title').forEach(title => {
        title.addEventListener('click', () => {
            title.parentElement.classList.toggle('active');
        });
    });
}

// Generar la librería de acordes
function generateChordLibrary() {
    const guitarGrid = document.getElementById('guitar-chords-grid');
    const pianoGrid = document.getElementById('piano-chords-grid');
    const bassGrid = document.getElementById('bass-chords-grid');

    // Acordes básicos y extensiones
    const roots = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const types = [
        '', 'm', '5', '6', '7', '9', '11', '13',
        'maj7', 'm7', 'm9', 'm11', 'm13',
        'dim', 'dim7', 'aug', 'sus2', 'sus4',
        '7b5', '7#5', '7b9', '7#9', 'm7b5',
        'add9', 'add11', '6/9', 'maj9', 'maj13'
    ];

    // Bajos alternativos para slash chords
    const bassNotes = ['', '/C', '/C#', '/D', '/D#', '/E', '/F', '/F#', '/G', '/G#', '/A', '/A#', '/B'];

    // Generar para cada instrumento
    [guitarGrid, pianoGrid, bassGrid].forEach((grid, index) => {
        const instrument = index === 0 ? 'Guitarra' : index === 1 ? 'Piano' : 'Bajo';

        roots.forEach(root => {
            types.forEach(type => {
                // Acordes regulares
                const chord = root + type;
                addChordCard(grid, chord, instrument);

                // Slash chords (excepto para bajo)
                if (instrument !== 'Bajo') {
                    bassNotes.forEach(bass => {
                        if (bass) { // Evitar duplicar acordes sin bajo
                            const slashChord = chord + bass;
                            addChordCard(grid, slashChord, instrument);
                        }
                    });
                }
            });
        });
    });
}

// Modifica los event listeners de categorías
function setupCategoryToggles() {
    document.querySelectorAll('.category-title').forEach(title => {
        title.addEventListener('click', () => {
            const parent = title.parentElement;
            parent.classList.toggle('active');

            if (parent.classList.contains('active')) {
                const category = parent.querySelector('.songs-list-container').getAttribute('data-category');
                loadSongs(category);
            }
        });

        // También para eventos táctiles
        title.addEventListener('touchstart', () => {
            const parent = title.parentElement;
            parent.classList.toggle('active');

            if (parent.classList.contains('active')) {
                const category = parent.querySelector('.songs-list-container').getAttribute('data-category');
                loadSongs(category);
            }
        }, { passive: true });
    });
}

function addChordCard(grid, chord, instrument) {
    const chordCard = document.createElement('div');
    chordCard.className = 'chord-variant';
    chordCard.setAttribute('title', `Ver detalles de ${chord} en ${instrument}`);

    const chordDiagram = document.createElement('div');
    chordDiagram.className = `chord-diagram-large ${instrument.toLowerCase()}-chord`;
    chordDiagram.setAttribute('data-chord', chord);

    const imgSrc = genericChordImages[instrument.toLowerCase()];

    chordDiagram.innerHTML = `
        <div class="chord-image-container ${instrument.toLowerCase()}-img">
            <img src="${imgSrc}" alt="${chord} en ${instrument}">
        </div>
    `;

    chordCard.innerHTML = `
        <h4>${chord}</h4>
        ${chordDiagram.outerHTML}
        <div class="chord-notes">${instrument}</div>
    `;

    chordCard.addEventListener('click', () => {
        showChordDetail(chord, instrument);
    });

    grid.appendChild(chordCard);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {

    // Añade este event listener para el botón de volver
    document.addEventListener('click', function (e) {
        if (e.target.matches('.back-btn[href="#chord-library"]')) {
            e.preventDefault();
            document.getElementById('chord-library').style.display = 'block';
            document.getElementById('chord-detail').style.display = 'none';
            window.scrollTo({
                top: document.getElementById('chord-library').offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });

    initKeyButtons();
    updateTransitions();
    updateJazzSuggestions();
    setupCategoryToggles();
    setupSongLinks();
    setupTutorialPlaceholders();
    setupChordFilters();
    setupInstrumentTabs();
    setupChordTypeFilters();

    // Mostrar la primera canción por defecto
    showSongContent('a-quien-ire');

    // Configurar la búsqueda al presionar Enter
    document.getElementById('song-search').addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            searchSong();
        }
    });

    // Inicializar escalas y diagramas
    updateScales();
    updateChordDiagrams();

    // Generar la librería de acordes
    generateChordLibrary();
});