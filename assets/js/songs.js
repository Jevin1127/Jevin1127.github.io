// song-page.js - Funcionalidades específicas para páginas de canciones

// Configuración básica para la página de canción
document.addEventListener('DOMContentLoaded', function() {
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
        placeholder.addEventListener('click', function() {
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