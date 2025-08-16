const genericChordImages = {
    guitar: 'https://jevin1127.github.io/assets/img/guitar/guitar.webp',
    piano: 'https://jevin1127.github.io/assets/img/piano/32407b370080d1d7699b97799c01a300-doodle-de-instrumentos-musicales-para-piano.webp',
    bass: 'https://jevin1127.github.io/assets/img/bass/6196550.png'
};

// Objeto con las imágenes para cada instrumento y acorde
const chordImages = {
    guitar: {
        'C': {
            main: 'assets/img/guitar/mayores/c-mayor.webp',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'C#': {
            main: 'assets/img/guitar/mayores/csos-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'D': {
            main: 'assets/img/guitar/mayores/d-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'D/C#': {
            main: 'assets/img/guitar/slash/dcsos.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'D#': {
            main: 'assets/img/guitar/mayores/dsos-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'E': {
            main: 'assets/img/guitar/mayores/e-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'F': {
            main: 'assets/img/guitar/mayores/f-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'F#': {
            main: 'assets/img/guitar/mayores/fsos-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'G': {
            main: 'assets/img/guitar/mayores/g-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'Gmaj7': {
            main: 'assets/img/guitar/mayores7/g-mayor7.webp',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'G#': {
            main: 'assets/img/guitar/mayores/gsos-mayor.jpg',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'G#maj7': {
            main: 'assets/img/guitar/mayores7/gsos-mayor7.webp',
            fallback: 'assets/img/guitar/default-piano.png'
        },
        'A': {
            main: 'assets/img/guitar/mayores/a-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'A9': {
            main: 'assets/img/guitar/mayores9/a-mayor9.webp',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'A#': {
            main: 'assets/img/guitar/mayores/asos-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        },
        'B': {
            main: 'assets/img/guitar/mayores/b-mayor.png',
            fallback: 'assets/img/guitar/default-guitar.png'
        }
    },
    piano: {
        'C': {
            main: 'assets/img/piano/mayores/c-mayor.jpg',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'C#': {
            main: 'assets/img/piano/mayores/csos-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'D': {
            main: 'assets/img/piano/mayores/d-mayor.png',
            ffallback: 'assets/img/piano/default-piano.png'
        },
        'D/C#': {
            main: 'assets/img/piano/slash/dcsos.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'D/F#': {
            main: 'assets/img/piano/slash/dfsos.jpg',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'D#': {
            main: 'assets/img/piano/mayores/dsos-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'E': {
            main: 'assets/img/piano/mayores/e-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'Em': {
            main: 'assets/img/piano/menores/e-menor.webp',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'F': {
            main: 'assets/img/piano/mayores/f-mayor.png',
            ffallback: 'assets/img/piano/default-piano.png'
        },
        'F#': {
            main: 'assets/img/piano/mayores/fsos-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'G': {
            main: 'assets/img/piano/mayores/g-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'Gmaj7': {
            main: 'assets/img/piano/mayores7/g-mayor7.webp',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'G#': {
            main: 'assets/img/piano/mayores/gsos-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'G#maj7': {
            main: 'assets/img/piano/mayores7/gsos-mayor7.webp',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'A': {
            main: 'assets/img/piano/mayores/a-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'Am7': {
            main: 'assets/img/piano/menores7/a-menor7.webp',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'A9/F#': {
            main: 'assets/img/piano/slash/a9fsos.jpg',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'A9': {
            main: 'assets/img/piano/mayores9/a-mayor9.webp',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'A#': {
            main: 'assets/img/piano/mayores/asos-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'B': {
            main: 'assets/img/piano/mayores/b-mayor.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'Bm': {
            main: 'assets/img/piano/menores/b-menor.webp',
            fallback: 'assets/img/piano/default-piano.png'
        }
    },
    bass: {
        'C': {
            main: 'assets/img/bass/mayores/c-mayor.png',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Cmaj7': {
            main: 'assets/img/bass/mayores7/c-mayor7.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'C7': {
            main: 'assets/img/bass/dominantes7/c7.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Cm': {
            main: 'assets/img/bass/menores/c-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Cm7': {
            main: 'assets/img/bass/menores7/c-menor7.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'C#': {
            main: 'assets/img/bass/mayores/csos-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'C#m': {
            main: 'assets/img/bass/menores/csosmenor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'D': {
            main: 'assets/img/bass/mayores/d-mayor.webp',
            ffallback: 'assets/img/bass/default-bass.png'
        },
        'Dm': {
            main: 'assets/img/bass/menores/d-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'D/F#': {
            main: 'assets/img/bass/slash/dfsos.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'D/C#': {
            main: 'assets/img/bass/slash/dcsos.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'D#': {
            main: 'assets/img/bass/mayores/dsos-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'D#m': {
            main: 'assets/img/bass/menores/dsosmenor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'E': {
            main: 'assets/img/bass/mayores/e-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Em': {
            main: 'assets/img/bass/menores/e-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'F': {
            main: 'assets/img/bass/mayores/f-mayor.webp',
            ffallback: 'assets/img/bass/default-bass.png'
        },
        'Fm': {
            main: 'assets/img/bass/menores/f-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'F#': {
            main: 'assets/img/bass/mayores/fsos-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'F#m': {
            main: 'assets/img/bass/menores/fsosmenor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'G': {
            main: 'assets/img/bass/mayores/g-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Gmaj7': {
            main: 'assets/img/bass/mayores7/g-mayor7.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Gm': {
            main: 'assets/img/bass/menores/g-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'G#': {
            main: 'assets/img/bass/mayores/gsos-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'G#maj7': {
            main: 'assets/img/bass/mayores7/gsos-mayor7.webp',
            fallback: 'assets/img/bass/default-piano.png'
        },
        'G#m': {
            main: 'assets/img/bass/menores/gsosmenor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'A': {
            main: 'assets/img/bass/mayores/a-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Am': {
            main: 'assets/img/bass/menores/a-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'A9': {
            main: 'assets/img/bass/mayores9/a-mayor9.png',
            fallback: 'assets/img/bass/default-piano.png'
        },
        'A9/F#': {
            main: '.assets/img/bass/slash/a9fsos.png',
            fallback: 'assets/img/piano/default-piano.png'
        },
        'A#': {
            main: 'assets/img/bass/mayores/asos-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'A#m': {
            main: 'assets/img/bass/menores/asosmenor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'B': {
            main: 'assets/img/bass/mayores/b-mayor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Bm': {
            main: 'assets/img/bass/menores/b-menor.webp',
            fallback: 'assets/img/bass/default-bass.png'
        },
        'Bm7': {
            main: 'assets/img/bass/menores7/b-menor7.webp',
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
                
                <a href="../templates/chords-library.html" class="back-btn">Volver a la Librería de Acordes</a>
                <a href="../index.html" class="back-btn">Volver al índice</a>
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

function getChordNotes(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = root ? chord.slice(root.length) : '';
    const rootIndex = chordMap[root] || 0;
    
    // Simplificación - en una implementación real deberías calcular las notas correctas
    if (suffix === 'm') {
        return [root, chordNames[(rootIndex + 3) % 12], chordNames[(rootIndex + 7) % 12]];
    } else if (suffix === '7') {
        return [root, chordNames[(rootIndex + 4) % 12], chordNames[(rootIndex + 7) % 12], chordNames[(rootIndex + 10) % 12]];
    } else {
        // Acorde mayor por defecto
        return [root, chordNames[(rootIndex + 4) % 12], chordNames[(rootIndex + 7) % 12]];
    }
}

// Obtener digitación recomendada
function getFingering(chord, instrument) {
    const inst = instrument.toLowerCase();
    const root = chord.match(/^[A-G][#b]?/)?.[0] || '';
    
    if (inst.includes('guitar') || inst.includes('guitarra')) {
        if (chord.includes('m')) {
            return `Posición abierta: ${root}m - 1-3-4\nPosición en trastes: 5-7-8`;
        }
        return `Posición abierta: ${root} - 1-2-3\nPosición en trastes: 5-7-8`;
    }
    
    if (inst.includes('piano')) {
        return `Mano derecha: 1-3-5\nMano izquierda: 5-3-1\nInversiones disponibles`;
    }
    
    if (inst.includes('bass') || inst.includes('bajo')) {
        return `Posición media: 1-3-4\nPosición alta: 2-4`;
    }
    
    return "Varias posiciones disponibles - Consulta con tu instructor";
}

function getCommonProgressions(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    
    return [
        `${root} - ${transposeChord('C', chordMap[root] - chordMap['G'])} - ${transposeChord('D', chordMap[root] - chordMap['G'])}`,
        `${root} - ${transposeChord('Em', chordMap[root] - chordMap['G'])} - ${transposeChord('Am', chordMap[root] - chordMap['G'])} - ${transposeChord('D', chordMap[root] - chordMap['G'])}`,
        `${transposeChord('Am', chordMap[root] - chordMap['G'])} - ${transposeChord('F', chordMap[root] - chordMap['G'])} - ${root} - ${transposeChord('C', chordMap[root] - chordMap['G'])}`,
        `${root} - ${transposeChord('D', chordMap[root] - chordMap['G'])} - ${transposeChord('Em', chordMap[root] - chordMap['G'])} - ${transposeChord('C', chordMap[root] - chordMap['G'])}`
    ];
}


function showChordModal(chord, instrument) {
    const normalizedInstrument = instrument.toLowerCase() === 'guitarra' ? 'guitar' : 
                               instrument.toLowerCase() === 'bajo' ? 'bass' : 
                               instrument.toLowerCase();
    
    const chordData = chordImages[normalizedInstrument][chord];
    const imgSrc = chordData ? chordData.main : genericChordImages[normalizedInstrument];
    const fallbackSrc = chordData ? chordData.fallback : genericChordImages[normalizedInstrument];

    const htmlContent = `
        <div class="modal-chord-content">
            <h3>${chord} en ${instrument}</h3>
            <div class="modal-chord-diagram">
                <img src="${imgSrc}" alt="${chord}" onerror="this.src='${fallbackSrc}'">
            </div>
            <div class="modal-chord-info">
                <p><strong>Notas:</strong> ${getChordNotes(chord).join(' - ')}</p>
                <p><strong>Digitación:</strong> ${getFingering(chord, instrument)}</p>
            </div>
        </div>
    `;

    Swal.fire({
        html: htmlContent,
        width: '600px',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar'
    });
}

// En la inicialización de la página de canción
function setupSongPage() {
    // ... otras configuraciones
    
    // Configurar clics en diagramas de acordes para abrir modal
    document.querySelectorAll('.chord-diagram').forEach(diagram => {
        diagram.addEventListener('click', function() {
            const chord = this.closest('[data-chord]').getAttribute('data-chord');
            const instrument = this.closest('[data-instrument]').getAttribute('data-instrument');
            showChordModal(chord, instrument);
        });
    });
}

function showChordDetail(chord, instrument) {
    const chordImgPath = getChordImagePath(chord, instrument);
    const fallbackImg = '../../assets/img/default-chord.png';
    
    // Función para manejo de errores de imagen (igual que antes)
    window.handleChordImageError = function(img) {
        const currentSrc = img.src;
        console.log(`Error al cargar imagen: ${currentSrc}`);
        
        const pathParts = currentSrc.split('/');
        const fileName = pathParts.pop();
        const basePath = pathParts.join('/') + '/';
        const fileNameWithoutExt = fileName.split('.').slice(0, -1).join('.');
        
        const altExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
        const currentExt = '.' + fileName.split('.').pop();
        const currentExtIndex = altExtensions.indexOf(currentExt);
        const nextExtensions = [...altExtensions.slice(currentExtIndex + 1), ...altExtensions.slice(0, currentExtIndex)];
        
        for (const ext of nextExtensions) {
            const newSrc = basePath + fileNameWithoutExt + ext;
            if (newSrc !== currentSrc) {
                img.src = newSrc;
                return;
            }
        }
        
        img.src = fallbackImg;
    };

    // Contenido HTML del modal con estilos inline para el tamaño de la imagen
    const htmlContent = `
        <div class="swal-chord-container">
            <div class="swal-chord-header">
                <h3>${chord} en ${instrument}</h3>
                <div class="chord-type">${getChordType(chord)}</div>
            </div>
            
            <div class="swal-chord-image" style="text-align: center; margin: 15px 0;">
                <img src="${chordImgPath}" alt="Diagrama de ${chord}" 
                     style="max-width: 100%; max-height: 250px; width: auto; height: auto; border-radius: 8px; border: 1px solid #eee;"
                     onerror="handleChordImageError(this)">
                <div class="chord-caption" style="font-size: 0.9em; color: #666; margin-top: 8px; font-style: italic;">
                    Diagrama para ${instrument}
                </div>
            </div>
            
            <div class="swal-chord-details" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0;">
                <div class="chord-notes" style="background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <strong>Notas:</strong> ${getChordNotes(chord).join(' - ')}
                </div>
                <div class="chord-fingering" style="background: white; padding: 12px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                    <strong>Digitación:</strong> ${getFingering(chord, instrument)}
                </div>
            </div>
            
            <div class="chord-progressions" style="background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
                <strong>Progresiones comunes:</strong>
                <ul style="padding-left: 20px; margin: 10px 0 0 0;">
                    ${getCommonProgressions(chord).map(p => `<li style="margin-bottom: 5px;">${p}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Mostrar modal con SweetAlert (configuración igual)
    Swal.fire({
        html: htmlContent,
        width: '650px',
        background: '#f8f8f8',
        showConfirmButton: true,
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#3085d6',
        showCloseButton: true,
        customClass: {
            popup: 'chord-modal-popup',
            closeButton: 'chord-modal-close-btn'
        }
    });
}

// Función para verificar si una imagen existe (simulada)
function imageExists(url) {
    // En producción, esto debería ser una verificación real con fetch o similar
    // Para desarrollo, asumimos que todas las rutas son válidas
    return true;
}

function debugImagePaths(chord, instrument) {
    console.group('Depuración de rutas de imágenes');
    console.log('Acorde:', chord);
    console.log('Instrumento:', instrument);
    
    const instrumentKey = instrument.toLowerCase() === 'guitarra' ? 'guitar' : 
                         instrument.toLowerCase() === 'bajo' ? 'bass' : 
                         instrument.toLowerCase();
    
    console.log('Ruta base:', getBaseImagePath());
    
    const path = getChordImagePath(chord, instrument);
    console.log('Ruta final generada:', path);
    
    // Verificar si la ruta es accesible (solo en servidor web)
    if (window.location.protocol !== 'file:') {
        fetch(path, { method: 'HEAD' })
            .then(res => {
                console.log('Imagen existe:', res.ok);
                if (!res.ok) {
                    console.warn('La imagen no se encuentra en la ruta especificada');
                }
            })
            .catch(err => {
                console.error('Error al verificar imagen:', err);
            });
    } else {
        console.warn('No se puede verificar imagen en protocolo file://');
    }
    
    console.groupEnd();
}

// Ejemplo de uso:
// debugImagePaths('D', 'guitar');
// debugImagePaths('Bm', 'guitar');


// Precargar imágenes para mejor experiencia
function preloadChordImages(chord, instrument) {
    const mainImg = new Image();
    mainImg.src = getChordImagePath(chord, instrument);
    
    const fallbackImg = new Image();
    fallbackImg.src = 'assets/img/default-chord.png';
}

// Llamar esta función antes de mostrar el modal
preloadChordImages(chord, instrument);

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




// En tu scripts.js principal (para el index.html)
function setupCategoryToggles() {
    document.querySelectorAll('.category-title').forEach(title => {
        title.addEventListener('click', function () {
            // Solo alternar visualmente (opcional)
            this.parentElement.classList.toggle('active');
            const icon = this.querySelector('.category-icon');
            icon.textContent = this.parentElement.classList.contains('active') ? '▼' : '▶';
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
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const title = category.querySelector('.category-title');
        const content = category.querySelector('.category-content');
        const icon = title.querySelector('.category-icon');

        // Configurar evento click
        title.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';

            // Alternar visibilidad
            content.style.display = isOpen ? 'none' : 'block';
            icon.textContent = isOpen ? '▶' : '▼';

            // Cerrar otras categorías si se desea (opcional)
            // closeOtherCategories(category);
        });

        // Estado inicial (opcional: abrir primera categoría)
        if (category === categories[0]) {
            content.style.display = 'block';
            icon.textContent = '▼';
        } else {
            content.style.display = 'none';
        }
    });
}

function closeOtherCategories(currentCategory) {
    document.querySelectorAll('.category').forEach(cat => {
        if (cat !== currentCategory) {
            cat.querySelector('.category-content').style.display = 'none';
            cat.querySelector('.category-icon').textContent = '▶';
        }
    });
}

// FUNCIONALIDAD DE BÚSQUEDA (si la necesitas)
function setupSearchFunctionality() {
    const searchInput = document.getElementById('song-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const allSongs = document.querySelectorAll('.songs-list a');

        allSongs.forEach(song => {
            const songName = song.textContent.toLowerCase();
            const listItem = song.closest('li');

            if (songName.includes(searchTerm)) {
                listItem.style.display = 'block';
            } else {
                listItem.style.display = 'none';
            }
        });
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
    header.addEventListener('click', () => {
        const category = header.parentElement;
        category.classList.toggle('active');
    });

    // También permitir abrir/cerrar con Enter o Espacio para accesibilidad
    header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            header.parentElement.classList.toggle('active');
        }
    });

    setupCategoryToggles();
    setupSearchFunctionality();
    initKeyButtons();
    updateTransitions();
    updateJazzSuggestions();
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

document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});

// === Buscador de cantos mejorado ===
const searchInput = document.getElementById('song-search');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Quitar acentos y normalizar texto
function normalizeText(text) {
    return text
        .normalize("NFD") // separa acentos
        .replace(/[\u0300-\u036f]/g, "") // elimina diacríticos
        .toLowerCase()
        .trim();
}

// Calcular similitud usando distancia de Levenshtein
function levenshteinDistance(a, b) {
    const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
        Array(b.length + 1).fill(0)
    );

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // eliminación
                matrix[i][j - 1] + 1,      // inserción
                matrix[i - 1][j - 1] + cost // sustitución
            );
        }
    }
    return matrix[a.length][b.length];
}

function similarity(a, b) {
    const distance = levenshteinDistance(a, b);
    return 1 - distance / Math.max(a.length, b.length);
}

function searchSongs() {
    const queryRaw = searchInput.value;
    const query = normalizeText(queryRaw);
    searchResults.innerHTML = '';

    if (!query) {
        searchResults.style.display = 'none';
        return;
    }

    const allSongs = document.querySelectorAll('.songs-list a');
    const matches = Array.from(allSongs).filter(song => {
        const songName = normalizeText(song.textContent);
        return (
            songName.includes(query) || // coincidencia directa
            similarity(songName, query) >= 0.7 // tolerancia a errores
        );
    });

    if (matches.length === 0) {
        searchResults.innerHTML = '<div class="no-results">No se encontraron cantos.</div>';
        searchResults.style.display = 'block';
        return;
    }

    matches.forEach(song => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.textContent = song.textContent;
        item.addEventListener('click', () => {
            window.location.href = song.getAttribute('href');
        });
        searchResults.appendChild(item);
    });

    searchResults.style.display = 'block';
}

// Eventos
searchButton.addEventListener('click', searchSongs);
searchInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') searchSongs();
});


// Reemplazar el event listener actual con este código más robusto
function initializeApp() {
    // Verificar que los elementos existen antes de manipularlos
    const keySelector = document.getElementById('key-selector');
    const currentKeyElement = document.getElementById('current-key');
    const chordDiagramsGrid = document.getElementById('chord-diagrams-grid');
    const scalesContainer = document.getElementById('scales-container');
    
    if (keySelector) initKeyButtons();
    if (currentKeyElement) updateKey();
    if (chordDiagramsGrid) updateChordDiagrams();
    if (scalesContainer) updateScales();
    
    setupTutorialPlaceholders();
    setupChordFilters();
    // ... otras inicializaciones
}

// Usar DOMContentLoaded y verificar elementos
document.addEventListener('DOMContentLoaded', function() {
    // Primero verificar elementos críticos
    const container = document.querySelector('.container');
    if (!container) {
        console.error('No se encontró el contenedor principal');
        return;
    }
    
    initializeApp();
});

// Mover la inicialización de header dentro del DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header'); // o el selector correcto
    if (header) {
        header.addEventListener('click', () => {
            const category = header.parentElement;
            if (category) category.classList.toggle('active');
        });
    }
});

