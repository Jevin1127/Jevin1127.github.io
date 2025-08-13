// chord.js - Versión completa para la librería de acordes

// Objeto con las imágenes para cada instrumento y acorde
// chord.js - Versión con rutas corregidas
const chordImages = {
    guitar: {
        'C': {
            main: '../assets/img/guitar/mayores/c-mayor.webp',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'C#': {
            main: '../assets/img/guitar/mayores/csosmayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D': {
            main: '../assets/img/guitar/mayores/d-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D#': {
            main: '../assets/img/guitar/mayores/dsosmayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'E': {
            main: '../assets/img/guitar/mayores/e-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'F': {
            main: '../assets/img/guitar/mayores/f-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'F#': {
            main: '../assets/img/guitar/mayores/fsosmayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'G': {
            main: '../assets/img/guitar/mayores/g-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'G#': {
            main: '../assets/img/guitar/mayores/gsosmayor.jpg',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'A': {
            main: '../assets/img/guitar/mayores/a-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'A#': {
            main: '../assets/img/guitar/mayores/asosmayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'B': {
            main: '../assets/img/guitar/mayores/b-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        }
    },
    piano: {
        'C': {
            main: '../assets/img/piano/mayores/c-mayor.jpg',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'C#': {
            main: '../assets/img/piano/mayores/csosmayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'D': {
            main: '../assets/img/piano/mayores/d-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'D#': {
            main: '../assets/img/piano/mayores/dsosmayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'E': {
            main: '../assets/img/piano/mayores/e-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'F': {
            main: '../assets/img/piano/mayores/f-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'F#': {
            main: '../assets/img/piano/mayores/fsosmayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'G': {
            main: '../assets/img/piano/mayores/g-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'G#': {
            main: '../assets/img/piano/mayores/gsosmayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A': {
            main: '../assets/img/piano/mayores/a-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A#': {
            main: '../assets/img/piano/mayores/asosmayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'B': {
            main: '../assets/img/piano/mayores/b-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        }
    },
    bass: {
        'C': {
            main: '../assets/img/bass/mayores/c-mayor.png',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Cmaj7': {
            main: '../assets/img/bass/mayores7/c-mayor7.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'C7': {
            main: '../assets/img/bass/dominantes7/c7.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Cm': {
            main: '../assets/img/bass/menores/c-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Cm7': {
            main: '../assets/img/bass/menores7/c-menor7.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'C#': {
            main: '../assets/img/bass/mayores/csosmayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'C#m': {
            main: '../assets/img/bass/menores/csosmenor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'D': {
            main: '../assets/img/bass/mayores/d-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Dm': {
            main: '../assets/img/bass/menores/d-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'D#': {
            main: '../assets/img/bass/mayores/dsosmayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'D#m': {
            main: '../assets/img/bass/menores/dsosmenor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'E': {
            main: '../assets/img/bass/mayores/e-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Em': {
            main: '../assets/img/bass/menores/e-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'F': {
            main: '../assets/img/bass/mayores/f-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Fm': {
            main: '../assets/img/bass/menores/f-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'F#': {
            main: '../assets/img/bass/mayores/fsosmayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'F#m': {
            main: '../assets/img/bass/menores/fsosmenor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'G': {
            main: '../assets/img/bass/mayores/g-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Gm': {
            main: '../assets/img/bass/menores/g-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'G#': {
            main: '../assets/img/bass/mayores/gsosmayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'G#m': {
            main: '../assets/img/bass/menores/gsosmenor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'A': {
            main: '../assets/img/bass/mayores/a-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Am': {
            main: '../assets/img/bass/menores/a-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'A#': {
            main: '../assets/img/bass/mayores/asosmayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'A#m': {
            main: '../assets/img/bass/menores/asosmenor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'B': {
            main: '../assets/img/bass/mayores/b-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Bm': {
            main: '../assets/img/bass/menores/b-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        }
    }
};

// Imagen por defecto para cada instrumento
const defaultImages = {
    guitar: '../assets/img/guitar/default-guitar.webp',
    piano: '../assets/img/piano/default-piano.webp',
    bass: '../assets/img/bass/default-bass.webp'
};

// Configuración inicial
document.addEventListener('DOMContentLoaded', function() {
    console.log("Inicializando librería de acordes");
    setupChordLibrary();
    setupChordSearch();
    setupInstrumentTabs();
    setupChordTypeFilters();
});

function setupChordLibrary() {
    generateInstrumentChords('guitar', 'Guitarra');
    generateInstrumentChords('piano', 'Piano');
    generateInstrumentChords('bass', 'Bajo');
}

function generateInstrumentChords(instrumentKey, instrumentName) {
    const grid = document.getElementById(`${instrumentKey}-chords-grid`);
    if (!grid) return;

    const availableChords = Object.keys(chordImages[instrumentKey] || []);
    
    if (availableChords.length === 0) {
        grid.innerHTML = `<p class="no-chords">No hay acordes disponibles para ${instrumentName}</p>`;
        return;
    }

    availableChords.sort((a, b) => a.localeCompare(b)).forEach(chord => {
        const chordCard = document.createElement('div');
        chordCard.className = `chord-variant ${instrumentKey}-chord`;
        chordCard.setAttribute('data-chord-type', getChordType(chord));
        chordCard.setAttribute('title', `${chord} en ${instrumentName}`);

        // Asegurarse de que estamos accediendo correctamente a las rutas
        const chordData = chordImages[instrumentKey][chord];
        const imgSrc = chordData?.main || defaultImages[instrumentKey];
        const fallbackSrc = chordData?.fallback || defaultImages[instrumentKey];

        chordCard.innerHTML = `
            <h4>${chord}</h4>
            <div class="chord-image-container">
                <img src="${imgSrc}" alt="${chord} en ${instrumentName}" 
                     onerror="this.src='${fallbackSrc}'">
            </div>
            <div class="chord-info">
                <span class="chord-instrument">${instrumentName}</span>
            </div>
        `;

        chordCard.addEventListener('click', () => {
            showChordDetails(chord, instrumentName, instrumentKey);
        });

        grid.appendChild(chordCard);
    });
}

function showChordDetails(chord, instrumentName, instrumentKey) {
    const detailContainer = document.getElementById(`${instrumentKey}-chord-detail`);
    const grid = document.getElementById(`${instrumentKey}-chords-grid`);
    
    grid.style.display = 'none';
    detailContainer.style.display = 'block';

    const chordData = chordImages[instrumentKey][chord];
    const imgSrc = chordData?.main || defaultImages[instrumentKey];
    const fallbackSrc = chordData?.fallback || defaultImages[instrumentKey];

    detailContainer.innerHTML = `
        <div class="chord-detail-header">
            <button class="back-to-library" onclick="hideChordDetail('${instrumentKey}')">← Volver</button>
            <h2>${chord} en ${instrumentName}</h2>
        </div>
        
        <div class="chord-detail-content" style="display: flex; flex-direction: column; align-items: center;">
            <div class="chord-diagram-large" style="width: 100%; max-width: 500px; margin: 20px 0;">
                <img src="${imgSrc}" alt="${chord}" 
                     style="width: 100%; height: auto; max-height: 400px; object-fit: contain;"
                     onerror="this.src='${fallbackSrc}'">
            </div>
            
            <div class="chord-info-details" style="width: 100%; max-width: 600px;">
                <h3>Información del Acorde</h3>
                <p><strong>Tipo:</strong> ${getChordTypeName(chord)}</p>
                <p><strong>Notas:</strong> ${getChordNotes(chord).join(' - ')}</p>
                <p><strong>Digitación:</strong> ${getFingering(chord, instrumentName)}</p>
                <p><strong>Intervalos:</strong> ${getIntervals(chord)}</p>
                
                <h3>Progresiones comunes</h3>
                <ul class="common-progressions" style="padding-left: 20px;">
                    ${getCommonProgressions(chord).map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function hideChordDetail(instrumentKey) {
    const detailContainer = document.getElementById(`${instrumentKey}-chord-detail`);
    const grid = document.getElementById(`${instrumentKey}-chords-grid`);
    
    if (detailContainer) detailContainer.style.display = 'none';
    if (grid) grid.style.display = 'grid';
}

// Función auxiliar para manejar errores de imágenes
function handleImageError(imgElement, fallbackSrc) {
    console.error(`Error al cargar imagen: ${imgElement.src}`);
    console.log(`Usando fallback: ${fallbackSrc}`);
    imgElement.src = fallbackSrc;
}
// Funciones auxiliares para información de acordes
function getChordType(chord) {
    if (chord.includes('m') && chord.includes('7')) return 'm7';
    if (chord.includes('m')) return 'minor';
    if (chord.includes('maj7') || chord.includes('M7')) return 'maj7';
    if (chord.includes('7')) return '7';
    if (chord.includes('sus')) return 'sus';
    if (chord.includes('dim')) return 'dim';
    if (chord.includes('aug')) return 'aug';
    if (chord.includes('9') || chord.includes('11') || chord.includes('13')) return 'extended';
    return 'major';
}

function getChordTypeName(chord) {
    const types = {
        'major': 'Mayor',
        'minor': 'Menor',
        '7': 'Séptima dominante',
        'maj7': 'Séptima mayor',
        'm7': 'Séptima menor',
        'sus': 'Suspendido',
        'dim': 'Disminuido',
        'aug': 'Aumentado',
        'extended': 'Extendido'
    };
    return types[getChordType(chord)] || 'Mayor';
}

function getChordNotes(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = root ? chord.slice(root.length) : '';
    const rootIndex = getNoteIndex(root);
    
    if (suffix === 'm') {
        return [
            root,
            getNoteName(rootIndex + 3),
            getNoteName(rootIndex + 7)
        ];
    } else if (suffix === '7') {
        return [
            root,
            getNoteName(rootIndex + 4),
            getNoteName(rootIndex + 7),
            getNoteName(rootIndex + 10)
        ];
    } else if (suffix === 'maj7') {
        return [
            root,
            getNoteName(rootIndex + 4),
            getNoteName(rootIndex + 7),
            getNoteName(rootIndex + 11)
        ];
    } else {
        // Acorde mayor por defecto
        return [
            root,
            getNoteName(rootIndex + 4),
            getNoteName(rootIndex + 7)
        ];
    }
}

function getIntervals(chord) {
    const type = getChordType(chord);
    switch(type) {
        case 'major': return 'Tónica - 3ª Mayor - 5ª Justa';
        case 'minor': return 'Tónica - 3ª Menor - 5ª Justa';
        case '7': return 'Tónica - 3ª Mayor - 5ª Justa - 7ª Menor';
        case 'maj7': return 'Tónica - 3ª Mayor - 5ª Justa - 7ª Mayor';
        case 'm7': return 'Tónica - 3ª Menor - 5ª Justa - 7ª Menor';
        case 'sus': return 'Tónica - 4ª Justa - 5ª Justa';
        case 'dim': return 'Tónica - 3ª Menor - 5ª Disminuida';
        case 'aug': return 'Tónica - 3ª Mayor - 5ª Aumentada';
        default: return 'Tónica - 3ª Mayor - 5ª Justa';
    }
}

function getNoteIndex(note) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return notes.indexOf(note);
}

function getNoteName(index) {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    return notes[index % 12];
}

function getFingering(chord, instrument) {
    if (instrument.toLowerCase().includes('guitarra')) {
        return 'Posiciones: 1-2-3-4 (abierta), 5-7-8 (trastes)';
    } else if (instrument.toLowerCase().includes('piano')) {
        return 'Mano derecha: 1-3-5 / Mano izquierda: 5-3-1';
    } else if (instrument.toLowerCase().includes('bajo')) {
        return 'Posiciones: 1-3-4 (media), 2-4 (alta)';
    }
    return 'Varias posiciones disponibles';
}

function getCommonProgressions(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    
    return [
        `${root} - ${transposeChord('G', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('F', getNoteIndex(root) - getNoteIndex('C'))}`,
        `${root} - ${transposeChord('Am', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('F', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('G', getNoteIndex(root) - getNoteIndex('C'))}`,
        `${root} - ${transposeChord('Dm', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('G', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('C', getNoteIndex(root) - getNoteIndex('C'))}`
    ];
}

function transposeChord(chord, semitones) {
    if (!chord) return '';
    const [mainChord, bassNote] = chord.split('/');
    const transposedMain = transposeSingleChord(mainChord, semitones);
    if (bassNote) {
        const transposedBass = transposeSingleChord(bassNote, semitones);
        return transposedMain + '/' + transposedBass;
    }
    return transposedMain;
}

function transposeSingleChord(chord, semitones) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    if (!rootMatch) return chord;
    const root = rootMatch[0];
    const suffix = chord.slice(root.length);
    const rootIndex = getNoteIndex(root);
    if (rootIndex === -1) return chord;
    const newRootIndex = (rootIndex + semitones + 12) % 12;
    return getNoteName(newRootIndex) + suffix;
}

// Configuración de UI
function setupInstrumentTabs() {
    const tabs = document.querySelectorAll('.instrument-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const instrument = this.getAttribute('data-instrument');
            document.querySelectorAll('.instrument-chords-container').forEach(container => {
                container.style.display = 'none';
            });
            document.querySelector(`#${instrument}-chords-grid`).parentElement.style.display = 'block';
        });
    });
    
    // Activar la primera pestaña por defecto
    document.querySelector('.instrument-tab').click();
}

function setupChordTypeFilters() {
    const buttons = document.querySelectorAll('.chord-type-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const type = this.getAttribute('data-type');
            const activeTab = document.querySelector('.instrument-tab.active');
            const instrument = activeTab ? activeTab.getAttribute('data-instrument') : 'guitar';
            const chords = document.querySelectorAll(`#${instrument}-chords-grid .chord-variant`);
            
            chords.forEach(chord => {
                const chordType = chord.getAttribute('data-chord-type');
                chord.style.display = (type === 'all' || chordType === type) ? 'block' : 'none';
            });
        });
    });
    
    // Activar el filtro "Todos" por defecto
    document.querySelector('.chord-type-btn').click();
}

function setupChordSearch() {
    const searchInput = document.getElementById('chord-search');
    const searchBtn = document.getElementById('search-btn');
    
    function performSearch() {
        const term = searchInput.value.trim().toUpperCase();
        const activeTab = document.querySelector('.instrument-tab.active');
        const instrument = activeTab ? activeTab.getAttribute('data-instrument') : 'guitar';
        const chords = document.querySelectorAll(`#${instrument}-chords-grid .chord-variant`);
        
        chords.forEach(chord => {
            const chordName = chord.querySelector('h4').textContent.toUpperCase();
            chord.style.display = chordName.includes(term) ? 'block' : 'none';
        });
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

// Hacer funciones accesibles globalmente
window.hideChordDetail = hideChordDetail;