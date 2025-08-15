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
            main: '../assets/img/guitar/mayores/csos-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D': {
            main: '../assets/img/guitar/mayores/d-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D/C#': {
            main: '../assets/img/guitar/slash/dcsos.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D/F#': {
            main: '../assets/img/guitar/slash/dfsos.jpg',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'D#': {
            main: '../assets/img/guitar/mayores/dsos-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'E': {
            main: '../assets/img/guitar/mayores/e-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'Em': {
            main: '../assets/img/guitar/menores/e-menor.webp',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'F': {
            main: '../assets/img/guitar/mayores/f-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'F#': {
            main: '../assets/img/guitar/mayores/fsos-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'G': {
            main: '../assets/img/guitar/mayores/g-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'Gmaj7': {
            main: '../assets/img/guitar/mayores7/g-mayor7.webp',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'G#': {
            main: '../assets/img/guitar/mayores/gsos-mayor.jpg',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'G#maj7': {
            main: '../assets/img/guitar/mayores7/gsos-mayor7.webp',
            fallback: '../assets/img/guitar/default-piano.png'
        },
        'A': {
            main: '../assets/img/guitar/mayores/a-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'A9/F#': {
            main: '../assets/img/piano/slash/a9fsos.jpg',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A9': {
            main: '../assets/img/piano/mayores9/a-mayor9.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A#': {
            main: '../assets/img/guitar/mayores/asos-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'B': {
            main: '../assets/img/guitar/mayores/b-mayor.png',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'Bm': {
            main: '../assets/img/guitar/menores/b-menor.webp',
            fallback: '../assets/img/guitar/default-guitar.png'
        },
        'Bm7': {
            main: '../assets/img/guitar/menores7/b-menor7.webp',
            fallback: '../assets/img/guitar/default-guitar.png'
        }
    },
    piano: {
        'C': {
            main: '../assets/img/piano/mayores/c-mayor.jpg',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'C#': {
            main: '../assets/img/piano/mayores/csos-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'D': {
            main: '../assets/img/piano/mayores/d-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'D/C#': {
            main: '../assets/img/piano/slash/dcsos.jpg',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'D#': {
            main: '../assets/img/piano/mayores/dsos-mayor.png',
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
            main: '../assets/img/piano/mayores/fsos-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'G': {
            main: '../assets/img/piano/mayores/g-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'Gmaj7': {
            main: '../assets/img/piano/mayores7/g-mayor7.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'Gmin7': {
            main: '../assets/img/piano/menores7/g-menor7.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'G#': {
            main: '../assets/img/piano/mayores/gsos-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'G#maj7': {
            main: '../assets/img/piano/mayores7/gsos-mayor7.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A': {
            main: '../assets/img/piano/mayores/a-mayor.png',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A9': {
            main: '../assets/img/piano/mayores9/a-mayor9.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A9/F#': {
            main: '../assets/img/piano/slash/a9fsos.jpg',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'Aminor7': {
            main: '../assets/img/piano/menores7/a-menor7.webp',
            fallback: '../assets/img/piano/default-piano.png'
        },
        'A#': {
            main: '../assets/img/piano/mayores/asos-mayor.png',
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
            main: '../assets/img/bass/mayores/csos-mayor.webp',
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
            main: '../assets/img/bass/mayores/dsos-mayor.webp',
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
            main: '../assets/img/bass/mayores/fsos-mayor.webp',
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
        'Gmaj7': {
            main: '../assets/img/bass/mayores7/g-mayor7.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'Gm': {
            main: '../assets/img/bass/menores/g-menor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'G#': {
            main: '../assets/img/bass/mayores/gsos-mayor.webp',
            fallback: '../assets/img/bass/default-bass.png'
        },
        'G#maj7': {
            main: '../assets/img/bass/mayores7/gsos-mayor7.webp',
            fallback: '../assets/img/bass/default-piano.png'
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
            main: '../assets/img/bass/mayores/asos-mayor.webp',
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
document.addEventListener('DOMContentLoaded', function () {
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

    grid.innerHTML = ''; // Limpiar primero
    
    // Ordenar acordes: primero los básicos, luego los slash chords
    const allChords = Object.keys(chordImages[instrumentKey] || []);
    const basicChords = allChords.filter(c => !c.includes('/'));
    const slashChords = allChords.filter(c => c.includes('/'));
    
    // Generar acordes básicos
    basicChords.sort().forEach(chord => {
        createChordCard(chord, instrumentKey, instrumentName, grid);
    });
    
    // Generar slash chords (si existen)
    if (slashChords.length > 0) {

        
        slashChords.sort().forEach(chord => {
            createChordCard(chord, instrumentKey, instrumentName, grid);
        });
    }
}

function createChordCard(chord, instrumentKey, instrumentName, container) {
    const chordCard = document.createElement('div');
    chordCard.className = `chord-variant ${instrumentKey}-chord`;
    chordCard.setAttribute('data-chord-type', getChordType(chord));
    chordCard.setAttribute('title', `${chord} en ${instrumentName}`);

    const chordData = chordImages[instrumentKey][chord];
    const imgSrc = chordData?.main || defaultImages[instrumentKey];
    const fallbackSrc = chordData?.fallback || defaultImages[instrumentKey];

    chordCard.innerHTML = `
        <h4>${chord}</h4>
        <div class="chord-image-container">
            <img src="${imgSrc}" alt="${chord} en ${instrumentName}" 
                 class="chord-diagram"
                 onerror="this.src='${fallbackSrc}'">
        </div>
        <div class="chord-info">
            <span class="chord-instrument">${instrumentName}</span>
            <span class="chord-type">${getChordTypeName(chord)}</span>
        </div>
    `;

    chordCard.addEventListener('click', () => {
        showChordDetails(chord, instrumentName, instrumentKey);
    });

    container.appendChild(chordCard);
}


function showChordDetails(chord, instrumentName, instrumentKey) {
    const detailContainer = document.getElementById(`${instrumentKey}-chord-detail`);
    const grid = document.getElementById(`${instrumentKey}-chords-grid`);

    grid.style.display = 'none';
    detailContainer.style.display = 'block';

    const chordData = chordImages[instrumentKey][chord];
    const imgSrc = chordData?.main || defaultImages[instrumentKey];
    const fallbackSrc = chordData?.fallback || defaultImages[instrumentKey];

    // Verificar si la imagen existe antes de mostrarla
    const imgExists = chordData?.main ? true : false;

    detailContainer.innerHTML = `
        <div class="chord-detail-header">
            <button class="back-to-library" onclick="hideChordDetail('${instrumentKey}')">← Volver</button>
            <h2>${chord} en ${instrumentName}</h2>
            <div class="chord-type-badge">${getChordTypeName(chord)}</div>
        </div>
        
        <div class="chord-detail-content">
            ${imgExists ? `
            <div class="chord-diagram-large">
                <img src="${imgSrc}" alt="${chord}" onerror="this.src='${fallbackSrc}'">
            </div>
            ` : `<p class="no-image">Imagen no disponible</p>`}
            
            <div class="chord-info-details">
                <h3>Formación del Acorde</h3>
                <p><strong>Notas:</strong> ${getChordNotes(chord).join(' - ')}</p>
                <p><strong>Intervalos:</strong> ${getIntervals(chord)}</p>
                
                <h3>Digitación</h3>
                <div class="fingering-info">${getFingering(chord, instrumentName).replace(/\n/g, '<br>')}</div>
                
                <h3>Uso Armónico</h3>
                <p>${getHarmonicFunction(chord)}</p>
                
                <h3>Progresiones Comunes</h3>
                <ul class="common-progressions">
                    ${getCommonProgressions(chord).map(p => `<li>${p}</li>`).join('')}
                </ul>
                
                ${getAdditionalChordInfo(chord, instrumentName)}
            </div>
        </div>
    `;
}

function getHarmonicFunction(chord) {
    const type = getChordType(chord);
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    
    switch(type) {
        case 'major':
            return `Acorde tónico, usado como centro tonal. Funciona como punto de reposo (I grado).`;
        case 'minor':
            return `Acorde tónico menor, usado en tonalidades menores o como modo dórico (i grado).`;
        case '7':
            return `Acorde dominante, crea tensión que resuelve en un acorde a una 4ta justa arriba (V7 grado).`;
        case 'maj7':
            return `Acorde tónico con coloración jazzística (I maj7). También usado como acorde de reposo.`;
        case 'm7':
            return `Acorde menor con 7ma, común en progresiones ii-V-I (ii grado) o como tónico en menor.`;
        case 'slash':
            return `Acorde con bajo diferente, usado para crear líneas de bajo descendentes/ascendentes o suavizar transiciones.`;
        default:
            return `Acorde con función armónica según su contexto tonal.`;
    }
}

function getAdditionalChordInfo(chord, instrument) {
    const type = getChordType(chord);
    let tips = '';
    
    if (type === 'slash') {
        const [baseChord, bassNote] = chord.split('/');
        tips = `
            <h3>Consejos para ${chord}</h3>
            <ul>
                <li>En ${instrument}, enfatiza la nota ${bassNote} en el bajo</li>
                <li>Usado comúnmente para transiciones suaves entre ${baseChord} y ${transposeChord(baseChord, 5)}</li>
                <li>La nota ${bassNote} crea un bajo caminante cuando se usa en progresiones</li>
            </ul>
        `;
    } else if (type === 'maj7') {
        tips = `
            <h3>Consejos para acordes maj7</h3>
            <ul>
                <li>Sonido jazzístico y sofisticado</li>
                <li>Evita tocar la 7ma mayor muy cerca de la tónica</li>
                <li>Funciona bien como acorde final en lugar del acorde mayor simple</li>
            </ul>
        `;
    }
    
    return tips;
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
    // 1. Primero detectamos slash chords (ej: A/C, D/F#)
    if (chord.includes('/')) {
        return 'slash';
    }

    // 2. Luego detectamos otros tipos específicos con mejor prioridad
    if (/maj7|M7/.test(chord)) return 'maj7';
    if (/m7|min7/.test(chord)) return 'm7';
    if (/7/.test(chord)) return '7';
    if (/m|min/.test(chord)) return 'minor';
    if (/sus/.test(chord)) return 'sus';
    if (/dim/.test(chord)) return 'dim';
    if (/aug/.test(chord)) return 'aug';
    if (/(9|11|13)/.test(chord)) return 'extended';
    
    // Si no coincide con ninguno de los anteriores, es mayor
    return 'major';
}

function getChordTypeName(chord) {
    if (chord.includes('/')) {
        const [baseChord, bassNote] = chord.split('/');
        return `${getChordTypeName(baseChord)}/${bassNote}`;
    }
    
    const types = {
        'major': 'Mayor',
        'minor': 'Menor',
        '7': '7ma Dominante',
        'maj7': '7ma Mayor',
        'm7': '7ma Menor',
        'sus': 'Suspendido',
        'dim': 'Disminuido',
        'aug': 'Aumentado',
        'extended': 'Extendido',
        'slash': 'Con bajo diferente'
    };
    return types[getChordType(chord)] || 'Mayor';
}

function getChordNotes(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const suffix = root ? chord.slice(root.length) : '';
    const rootIndex = getNoteIndex(root);

    // Para slash chords
    if (chord.includes('/')) {
        const [baseChord, bassNote] = chord.split('/');
        const baseNotes = getChordNotes(baseChord);
        return [...baseNotes, bassNote].filter((v, i, a) => a.indexOf(v) === i); // Notas únicas
    }

    switch(suffix.toLowerCase()) {
        case 'm':
        case 'min':
            return [root, getNoteName(rootIndex + 3), getNoteName(rootIndex + 7)];
        case '7':
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7), getNoteName(rootIndex + 10)];
        case 'maj7':
        case 'M7':
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7), getNoteName(rootIndex + 11)];
        case 'm7':
        case 'min7':
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
            // Acorde mayor por defecto
            return [root, getNoteName(rootIndex + 4), getNoteName(rootIndex + 7)];
    }
}

function getIntervals(chord) {
    const type = getChordType(chord);
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    
    // Para slash chords
    if (type === 'slash') {
        const [baseChord, bassNote] = chord.split('/');
        return `${getIntervals(baseChord)} con bajo en ${bassNote}`;
    }

    switch(type) {
        case 'major':
            return `Tónica (${root}) - 3ª Mayor (${getNoteName(getNoteIndex(root) + 4)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)})`;
        case 'minor':
            return `Tónica (${root}) - 3ª Menor (${getNoteName(getNoteIndex(root) + 3)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)})`;
        case '7':
            return `Tónica (${root}) - 3ª Mayor (${getNoteName(getNoteIndex(root) + 4)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)}) - 7ª Menor (${getNoteName(getNoteIndex(root) + 10)})`;
        case 'maj7':
            return `Tónica (${root}) - 3ª Mayor (${getNoteName(getNoteIndex(root) + 4)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)}) - 7ª Mayor (${getNoteName(getNoteIndex(root) + 11)})`;
        case 'm7':
            return `Tónica (${root}) - 3ª Menor (${getNoteName(getNoteIndex(root) + 3)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)}) - 7ª Menor (${getNoteName(getNoteIndex(root) + 10)})`;
        case 'sus2':
            return `Tónica (${root}) - 2ª Mayor (${getNoteName(getNoteIndex(root) + 2)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)})`;
        case 'sus4':
            return `Tónica (${root}) - 4ª Justa (${getNoteName(getNoteIndex(root) + 5)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)})`;
        case 'dim':
            return `Tónica (${root}) - 3ª Menor (${getNoteName(getNoteIndex(root) + 3)}) - 5ª Disminuida (${getNoteName(getNoteIndex(root) + 6)})`;
        case 'aug':
            return `Tónica (${root}) - 3ª Mayor (${getNoteName(getNoteIndex(root) + 4)}) - 5ª Aumentada (${getNoteName(getNoteIndex(root) + 8)})`;
        default:
            return `Tónica (${root}) - 3ª Mayor (${getNoteName(getNoteIndex(root) + 4)}) - 5ª Justa (${getNoteName(getNoteIndex(root) + 7)})`;
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
    const chordType = getChordType(chord);
    const rootNote = chord.split('/')[0].replace(/maj7|m7|7|m|min|dim|aug|sus/g, '');
    
    if (instrument.toLowerCase().includes('guitarra')) {
        switch(chordType) {
            case 'major':
                return 'Posición abierta: 1-2-3 / Posición cerrada: 5-7-8';
            case 'minor':
                return 'Posición abierta: 1-3-4 / Posición cerrada: 5-7-8 (3ª menor)';
            case '7':
                return 'Posición abierta: 1-2-3-4 / Posición cerrada: 5-7-8-10';
            case 'maj7':
                return 'Posición: 1-2-3-4 (dedo 4 en 7ª mayor)';
            case 'm7':
                return 'Posición: 1-3-4-5 (3ª menor + 7ª menor)';
            case 'slash':
                const [baseChord, bassNote] = chord.split('/');
                return `Digitación especial: bajo en ${bassNote}, ${getFingering(baseChord, instrument)}`;
            default:
                return 'Varias posiciones disponibles';
        }
    } else if (instrument.toLowerCase().includes('piano')) {
        let fingering = '';
        switch(chordType) {
            case 'major':
                fingering = 'Mano derecha: 1-3-5 / Mano izquierda: 5-3-1';
                break;
            case 'minor':
                fingering = 'Mano derecha: 1-3-5 (bajar 3ª) / Mano izquierda: 5-3-1';
                break;
            case '7':
                fingering = 'Mano derecha: 1-2-3-5 / Mano izquierda: 5-3-2-1';
                break;
            case 'maj7':
                fingering = 'Mano derecha: 1-2-3-5 (7ª mayor) / Mano izquierda: 5-4-2-1';
                break;
            case 'm7':
                fingering = 'Mano derecha: 1-3-4-5 (3ª y 7ª menores) / Mano izquierda: 5-4-2-1';
                break;
            case 'slash':
                const [baseChord, bassNote] = chord.split('/');
                return `Bajo con ${bassNote}: ${getFingering(baseChord, instrument)} (bajo con 5-1)`;
            default:
                fingering = 'Mano derecha: 1-3-5 / Mano izquierda: 5-3-1';
        }
        return `${fingering}\nRecomendación: Toca el bajo (${rootNote}) con la mano izquierda`;
    } else if (instrument.toLowerCase().includes('bajo')) {
        // ... implementación similar para bajo ...
    }
    return 'Consulta digitaciones específicas para este acorde';
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

function getCommonProgressions(chord) {
    const rootMatch = chord.match(/^[A-G][#b]?/);
    const root = rootMatch ? rootMatch[0] : 'C';
    const chordType = getChordType(chord);

    // Progresiones específicas por tipo de acorde
    switch(chordType) {
        case 'major':
            return [
                `${root} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('vi', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('ii', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))}`
            ];
        case 'minor':
            return [
                `${root} - ${transposeChord('III', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('VI', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('VII', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('III', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('iv', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('v', getNoteIndex(root) - getNoteIndex('C'))}`
            ];
        case '7':
            return [
                `${root}7 - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('I', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root}7 - ${transposeChord('iii', getNoteIndex(root) - getNoteIndex('C'))}7 - ${transposeChord('vi', getNoteIndex(root) - getNoteIndex('C'))}7`,
                `II7 - ${root}7 - V7 - I (Progresión jazz)`
            ];
        case 'maj7':
            return [
                `${root}maj7 - ${transposeChord('iv', getNoteIndex(root) - getNoteIndex('C'))}m7 - ${transposeChord('VII', getNoteIndex(root) - getNoteIndex('C'))}7`,
                `${root}maj7 - ${transposeChord('III', getNoteIndex(root) - getNoteIndex('C'))}7 - ${transposeChord('VI', getNoteIndex(root) - getNoteIndex('C'))}maj7`,
                `I - VI - II - V (Progresión jazz)`
            ];
        case 'slash':
            const [baseChord, bassNote] = chord.split('/');
            return [
                `${chord} - ${transposeChord(baseChord, 5)} - ${transposeChord(baseChord, 7)}`,
                `${transposeChord('I', getNoteIndex(root) - getNoteIndex('C'))}/${bassNote} - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))}`,
                `Usado comúnmente como transición entre ${baseChord} y ${transposeChord(baseChord, 5)}`
            ];
        default:
            return [
                `${root} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('I', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('V', getNoteIndex(root) - getNoteIndex('C'))}`,
                `${root} - ${transposeChord('vi', getNoteIndex(root) - getNoteIndex('C'))} - ${transposeChord('IV', getNoteIndex(root) - getNoteIndex('C'))}`
            ];
    }
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
        tab.addEventListener('click', function () {
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
    
    // Guardar texto original para no duplicar al actualizar counts
    buttons.forEach(btn => {
        btn.dataset.originalText = btn.textContent;
    });
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Activar botón seleccionado
            buttons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const type = this.getAttribute('data-type');
            filterChordsByType(type);
        });
    });
    
    // Filtrar inicialmente
    filterChordsByType('all');
}

function filterChordsByType(type) {
    const activeTab = document.querySelector('.instrument-tab.active');
    if (!activeTab) return;
    
    const instrument = activeTab.getAttribute('data-instrument');
    const chords = document.querySelectorAll(`#${instrument}-chords-grid .chord-variant`);
    
    chords.forEach(chord => {
        const chordName = chord.querySelector('h4').textContent;
        const chordType = getChordType(chordName);
        
        // Mostrar u ocultar según el filtro
        if (type === 'all') {
            chord.style.display = 'block';
        } else if (type === 'slash') {
            chord.style.display = chordType === 'slash' ? 'block' : 'none';
        } else {
            // Para otros tipos, ocultar los slash chords a menos que sea el filtro específico
            chord.style.display = (chordType === type && !chordName.includes('/')) ? 'block' : 'none';
        }
    });
    
    // Actualizar contadores
    updateFilterCounts();
}

function updateFilterCounts() {
    const activeTab = document.querySelector('.instrument-tab.active');
    if (!activeTab) return;
    
    const instrument = activeTab.getAttribute('data-instrument');
    const chords = Array.from(document.querySelectorAll(`#${instrument}-chords-grid .chord-variant`));
    
    document.querySelectorAll('.chord-type-btn').forEach(btn => {
        const type = btn.getAttribute('data-type');
        let count;
        
        if (type === 'all') {
            count = chords.length;
        } else if (type === 'slash') {
            count = chords.filter(c => c.querySelector('h4').textContent.includes('/')).length;
        } else {
            count = chords.filter(c => {
                const chordName = c.querySelector('h4').textContent;
                return getChordType(chordName) === type && !chordName.includes('/');
            }).length;
        }
        
        btn.textContent = `${btn.dataset.originalText} (${count})`;
    });
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
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') performSearch();
    });
}

// Hacer funciones accesibles globalmente
window.hideChordDetail = hideChordDetail;