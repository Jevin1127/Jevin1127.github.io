document.addEventListener('DOMContentLoaded', () => {


  // Función para ajustar columnas según el tamaño de pantalla
  const adjustColumns = () => {
    const songLists = document.querySelectorAll('.songs-list');
    const screenWidth = window.innerWidth;

    songLists.forEach(list => {
      if (screenWidth >= 1024) {
        list.style.columnCount = 3;
      } else if (screenWidth >= 768) {
        list.style.columnCount = 2;
      } else {
        list.style.columnCount = 1;
      }
    });
  };

  // Ajustar columnas al cargar y al cambiar tamaño
  adjustColumns();
  window.addEventListener('resize', adjustColumns);
  
  
  // Seleccionar todos los encabezados de categoría
  const categoryHeaders = document.querySelectorAll('.category-header');
  
  // Función para alternar la visibilidad de una categoría
  const toggleCategory = (header) => {
    const category = header.closest('.category');
    const content = category.querySelector('.category-content');
    const icon = category.querySelector('.category-icon');

    // Alternar la clase 'active' en la categoría
    category.classList.toggle('active');
    
    // Actualizar el icono según el estado
    if (icon) {
      icon.textContent = category.classList.contains('active') ? '▼' : '▶';
    }
    
    // Alternar la visibilidad del contenido
    if (content) {
      content.style.display = category.classList.contains('active') ? 'block' : 'none';
    }
  };

  // Añadir event listeners a cada encabezado
  categoryHeaders.forEach(header => {
    // Configurar el estado inicial (cerrado)
    const category = header.closest('.category');
    const content = category.querySelector('.category-content');
    const icon = category.querySelector('.category-icon');
    
    if (content) content.style.display = 'none';
    if (icon) icon.textContent = '▶';
    
    // Evento para clic
    header.addEventListener('click', () => toggleCategory(header));
    
    // Evento para teclado (accesibilidad)
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleCategory(header);
      }
    });
  });

  // Implementación mejorada del buscador
  const searchInput = document.getElementById('song-search');
  const searchButton = document.getElementById('search-button');
  const searchResults = document.getElementById('search-results');

  // Seleccionar TODOS los enlaces de canciones de manera más robusta
  const allSongLinks = Array.from(document.querySelectorAll('.songs-list a[href]'));

  // Función mejorada para normalizar texto (más tolerante a errores)
  const normalizeText = (text) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Elimina tildes
      .replace(/[^a-z0-9]/gi, '') // Elimina caracteres especiales
      .toLowerCase();
  };

  // Función para calcular similitud entre textos (para búsqueda aproximada)
  const similarity = (s1, s2) => {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    
    if (longerLength === 0) return 1.0;
    
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  };

  // Algoritmo de distancia de edición para búsqueda aproximada
  const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            }
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  // Función para buscar canciones con tolerancia a errores
  const searchSongs = () => {
    const searchTerm = normalizeText(searchInput.value.trim());
    searchResults.innerHTML = '';
    searchResults.style.display = 'none';

    if (searchTerm === '') {
      return;
    }

    // Buscar coincidencias exactas primero
    let exactMatches = allSongLinks.filter(link => {
      const songText = normalizeText(link.textContent);
      return songText.includes(searchTerm);
    });

    // Si no hay coincidencias exactas, buscar aproximadas
    if (exactMatches.length === 0) {
      exactMatches = allSongLinks.filter(link => {
        const songText = normalizeText(link.textContent);
        return similarity(songText, searchTerm) > 0.7; // Umbral de similitud
      });
    }

    // Mostrar resultados
    if (exactMatches.length > 0) {
      searchResults.style.display = 'block';
      
      exactMatches.forEach(link => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('search-result-item');
        
        const newLink = document.createElement('a');
        newLink.href = link.href;
        newLink.textContent = link.textContent;
        newLink.classList.add('search-result-link');
        
        // Resaltar el texto coincidente
        const normalizedText = normalizeText(link.textContent);
        const normalizedTerm = normalizeText(searchTerm);
        const startIndex = normalizedText.indexOf(normalizedTerm);
        
        if (startIndex !== -1) {
          const originalText = link.textContent;
          const beforeMatch = originalText.substring(0, startIndex);
          const matchText = originalText.substring(startIndex, startIndex + searchTerm.length);
          const afterMatch = originalText.substring(startIndex + searchTerm.length);
          
          newLink.innerHTML = `${beforeMatch}<strong>${matchText}</strong>${afterMatch}`;
        }
        
        resultItem.appendChild(newLink);
        searchResults.appendChild(resultItem);
      });
    } else {
      searchResults.style.display = 'block';
      const noResults = document.createElement('div');
      noResults.textContent = 'No se encontraron resultados. Intenta con otras palabras.';
      noResults.classList.add('no-results');
      searchResults.appendChild(noResults);
    }
  };

  // Event listeners mejorados para el buscador
  if (searchButton && searchInput && searchResults) {
    searchButton.addEventListener('click', (e) => {
      e.preventDefault();
      searchSongs();
    });
    
    searchInput.addEventListener('input', () => {
      // Buscar automáticamente después de 300ms de inactividad
      clearTimeout(window.searchTimeout);
      window.searchTimeout = setTimeout(searchSongs, 300);
    });
    
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        searchSongs();
      }
    });
    
    // Cerrar resultados al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchButton.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  } else {
    console.warn('No se encontraron todos los elementos del buscador');
  }
});

