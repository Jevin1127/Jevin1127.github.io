// song-page.js - Funcionalidades específicas para páginas de canciones

// Configuración básica para la página de canción
document.addEventListener('DOMContentLoaded', function () {
    // 1. Inicializar controles de transposición
    initKeyButtons();

    // 2. Configurar placeholders de tutoriales
    setupTutorialPlaceholders();

    // 3. Actualizar todos los elementos transponibles
    updateAllTransposableElements();
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


function showChordDetail(chord, instrument) {
    const chordImgPath = getChordImagePath(chord, instrument);
    const fallbackImg = '../../assets/img/default-chord.png';
    
    // Registrar función global para manejo de errores
    window.handleChordImageError = function(img) {
        const currentSrc = img.src;
        console.log(`Error al cargar imagen: ${currentSrc}`);
        
        // Extraer información de la ruta fallida
        const pathParts = currentSrc.split('/');
        const fileName = pathParts.pop();
        const basePath = pathParts.join('/') + '/';
        const fileNameWithoutExt = fileName.split('.').slice(0, -1).join('.');
        
        // Lista de extensiones alternativas a probar
        const altExtensions = ['.png', '.jpg', '.jpeg', '.webp'];
        
        // Buscar la siguiente extensión disponible
        const currentExt = '.' + fileName.split('.').pop();
        const currentExtIndex = altExtensions.indexOf(currentExt);
        const nextExtensions = [...altExtensions.slice(currentExtIndex + 1), ...altExtensions.slice(0, currentExtIndex)];
        
        // Intentar con cada extensión alternativa
        for (const ext of nextExtensions) {
            const newSrc = basePath + fileNameWithoutExt + ext;
            if (newSrc !== currentSrc) {
                console.log(`Probando alternativa: ${newSrc}`);
                img.src = newSrc;
                return;
            }
        }
        
        // Si ninguna extensión funciona, usar imagen por defecto
        console.log(`Usando imagen por defecto: ${fallbackImg}`);
        img.src = fallbackImg;
    };

    // Crear contenido HTML del modal
    const htmlContent = `
        <div class="swal-chord-container">
            <div class="swal-chord-header">
                <h3>${chord} en ${instrument}</h3>
                <div class="chord-type">${getChordType(chord)}</div>
            </div>
            
            <div class="swal-chord-image">
                <img src="${chordImgPath}" alt="Diagrama de ${chord}" 
                     class="chord-diagram-img"
                     onerror="handleChordImageError(this)">
                <div class="chord-caption">Diagrama para ${instrument}</div>
            </div>
            
            <div class="swal-chord-details">
                <div class="chord-notes">
                    <strong>Notas:</strong> ${getChordNotes(chord).join(' - ')}
                </div>
                <div class="chord-fingering">
                    <strong>Digitación:</strong> ${getFingering(chord, instrument)}
                </div>
            </div>
            
            <div class="chord-progressions">
                <strong>Progresiones comunes:</strong>
                <ul>
                    ${getCommonProgressions(chord).map(p => `<li>${p}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    // Mostrar modal con SweetAlert
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
        },
        willOpen: () => {
            // Precargar imagen por defecto
            const img = new Image();
            img.src = fallbackImg;
        }
    });
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