
// Configuración inicial
document.addEventListener('DOMContentLoaded', function () {
    // 1. Corregir rutas de imágenes para esta página
    const basePath = '../assets/img/';

    // Actualizar rutas en el objeto chordImages
    Object.keys(chordImages).forEach(instrument => {
        Object.keys(chordImages[instrument]).forEach(chord => {
            if (chordImages[instrument][chord].main) {
                chordImages[instrument][chord].main = basePath + chordImages[instrument][chord].main.replace('assets/img/', '');
            }
            if (chordImages[instrument][chord].fallback) {
                chordImages[instrument][chord].fallback = basePath + chordImages[instrument][chord].fallback.replace('assets/img/', '');
            }
        });
    });

    // 2. Generar la librería
    generateChordLibrary();
    // Configurar el buscador de acordes
    setupChordSearch();
    // 3. Configurar filtros y pestañas
    setupInstrumentTabs();
    setupChordTypeFilters();

    // Generar la librería con las mejoras
    generateChordLibrary();

    // Configurar el buscador
    setupChordSearch();
});

// Configurar las pestañas de instrumentos
function setupInstrumentTabs() {
    const tabs = document.querySelectorAll('.instrument-tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remover clase active de todas las pestañas
            tabs.forEach(t => t.classList.remove('active'));

            // Agregar clase active a la pestaña clickeada
            this.classList.add('active');

            // Obtener el instrumento seleccionado
            const instrument = this.getAttribute('data-instrument');

            // Ocultar todos los contenedores de acordes
            document.querySelectorAll('.chord-detail-container').forEach(container => {
                container.classList.remove('active');
            });

            // Mostrar solo el contenedor del instrumento seleccionado
            document.getElementById(`${instrument}-chords`).classList.add('active');
        });
    });
}

// Configurar los filtros de tipos de acordes
function setupChordTypeFilters() {
    const buttons = document.querySelectorAll('.chord-type-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remover clase active de todos los botones
            buttons.forEach(b => b.classList.remove('active'));

            // Agregar clase active al botón clickeado
            this.classList.add('active');

            // Obtener el tipo de acorde seleccionado
            const type = this.getAttribute('data-type');

            // Filtrar los acordes
            filterChordsByType(type);
        });
    });
}

// Función para filtrar acordes por tipo
function filterChordsByType(type) {
    // Obtener el instrumento activo
    const activeInstrument = document.querySelector('.instrument-tab.active').getAttribute('data-instrument');
    const grid = document.getElementById(`${activeInstrument}-chords-grid`);
    const chords = grid.querySelectorAll('.chord-variant');

    chords.forEach(chord => {
        const chordName = chord.querySelector('h4').textContent;

        if (type === 'all') {
            chord.style.display = 'block';
            return;
        }

        // Lógica de filtrado según el tipo de acorde
        let showChord = false;

        switch (type) {
            case 'major':
                showChord = !chordName.includes('m') && !chordName.includes('dim') &&
                    !chordName.includes('aug') && !chordName.includes('sus') &&
                    !chordName.includes('7') && !chordName.includes('9') &&
                    !chordName.includes('11') && !chordName.includes('13');
                break;
            case 'minor':
                showChord = chordName.includes('m') && !chordName.includes('m7') &&
                    !chordName.includes('m9') && !chordName.includes('m11');
                break;
            case '7':
                showChord = chordName.includes('7') && !chordName.includes('m7') &&
                    !chordName.includes('maj7') && !chordName.includes('dim7');
                break;
            case 'maj7':
                showChord = chordName.includes('maj7') || chordName.includes('M7');
                break;
            case 'm7':
                showChord = chordName.includes('m7');
                break;
            case 'sus':
                showChord = chordName.includes('sus2') || chordName.includes('sus4') ||
                    chordName.includes('sus');
                break;
            case 'dim':
                showChord = chordName.includes('dim');
                break;
            case 'aug':
                showChord = chordName.includes('aug');
                break;
            case 'extended':
                showChord = chordName.includes('9') || chordName.includes('11') ||
                    chordName.includes('13') || chordName.includes('6/9');
                break;
            default:
                showChord = true;
        }

        chord.style.display = showChord ? 'block' : 'none';
    });
}

// Función para generar la librería de acordes (modificada)
// Función mejorada para generar la librería de acordes
function generateChordLibrary() {
    // Limpiar grids primero
    document.getElementById('guitar-chords-grid').innerHTML = '';
    document.getElementById('piano-chords-grid').innerHTML = '';
    document.getElementById('bass-chords-grid').innerHTML = '';

    // Generar acordes para guitarra
    generateInstrumentChords('guitar', 'Guitarra');

    // Generar acordes para piano
    generateInstrumentChords('piano', 'Piano');

    // Generar acordes para bajo
    generateInstrumentChords('bass', 'Bajo');
}

// Función para generar acordes por instrumento
function generateInstrumentChords(instrumentKey, instrumentName) {
    const grid = document.getElementById(`${instrumentKey}-chords-grid`);
    const chordsData = chordImages[instrumentKey];

    if (!chordsData) {
        grid.innerHTML = `<p class="no-chords">No hay acordes disponibles para ${instrumentName}</p>`;
        return;
    }

    // Ordenar los acordes alfabéticamente
    const sortedChords = Object.keys(chordsData).sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true });
    });

    sortedChords.forEach(chord => {
        addChordCard(grid, chord, instrumentName, instrumentKey);
    });
}

// Función mejorada para añadir tarjetas de acorde
function addChordCard(grid, chord, instrumentName, instrumentKey) {
    const chordCard = document.createElement('div');
    chordCard.className = `chord-variant ${instrumentKey}-chord`;
    chordCard.setAttribute('data-chord-type', getChordType(chord));
    chordCard.setAttribute('title', `${chord} en ${instrumentName}`);

    const chordData = chordImages[instrumentKey][chord];
    const imgSrc = chordData ? chordData.main : genericChordImages[instrumentKey];
    const fallbackSrc = chordData ? chordData.fallback : genericChordImages[instrumentKey];

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
        showChordDetail(chord, instrumentName);
    });

    grid.appendChild(chordCard);
}

// Función auxiliar para determinar el tipo de acorde
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

// Configurar el buscador de acordes
function setupChordSearch() {
    const searchInput = document.getElementById('chord-search');
    const searchBtn = document.getElementById('search-btn');

    function performSearch() {
        const searchTerm = searchInput.value.trim().toUpperCase();
        const activeInstrument = document.querySelector('.instrument-tab.active').getAttribute('data-instrument');
        const grid = document.getElementById(`${activeInstrument}-chords-grid`);
        const chords = grid.querySelectorAll('.chord-variant');

        if (!searchTerm) {
            // Si no hay término de búsqueda, mostrar todos los acordes
            chords.forEach(chord => {
                chord.style.display = 'block';
            });
            return;
        }

        chords.forEach(chord => {
            const chordName = chord.querySelector('h4').textContent.toUpperCase();
            if (chordName.includes(searchTerm)) {
                chord.style.display = 'block';
                chord.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                chord.style.display = 'none';
            }
        });
    }

    // Buscar al hacer click en el botón
    searchBtn.addEventListener('click', performSearch);

    // Buscar al presionar Enter
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}