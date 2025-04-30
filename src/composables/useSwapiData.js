// src/composables/useSwapiData.js
import { ref, readonly } from 'vue';

/**
 * Composable para obtener y manejar datos de un endpoint específico de SWAPI.
 * @param {string} resource - El recurso a obtener (e.g., 'people', 'planets', 'starships').
 * @returns {object} - Estado reactivo y funciones para interactuar con la API.
 */
export function useSwapiData(resource) {
  // Estado reactivo para los datos, carga, errores y paginación
  const items = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const nextPage = ref(null);
  const previousPage = ref(null);
  const totalCount = ref(0); // Número total de elementos disponibles en la API
  const currentPageUrl = ref(null); // Guarda la URL actual para calcular la página

  // URL base de la API
  const BASE_API_URL = `https://www.swapi.tech/api/${resource}/`;

  // Función para obtener los datos
  const fetchData = async (url = BASE_API_URL) => {
    loading.value = true; // Inicia estado de carga
    error.value = null;   // Limpia errores previos
    currentPageUrl.value = url; // Guarda la URL actual

    try {
      const response = await fetch(url); // Realiza la petición
      if (!response.ok) {
        // Manejo de errores de respuesta HTTP
        throw new Error(`Error ${response.status}: ${response.statusText || 'No se pudo obtener los datos'}`);
      }
      const data = await response.json(); // Parsea la respuesta JSON

      // Actualiza el estado reactivo
      items.value = data.results;
      nextPage.value = data.next;
      previousPage.value = data.previous;
      totalCount.value = data.count;

    } catch (err) {
      // Manejo de errores (fetch o parseo)
      console.error(`Error fetching ${resource}:`, err);
      error.value = err.message || `Ocurrió un error al cargar ${resource}.`;
      items.value = []; // Limpia los items en caso de error
      nextPage.value = null;
      previousPage.value = null;
      totalCount.value = 0;
    } finally {
      // Se ejecuta siempre al final
      loading.value = false; // Finaliza estado de carga
    }
  };

  // Función simple para intentar calcular el número de página actual
  const getCurrentPageNumber = () => {
    if (!currentPageUrl.value) return 1;
    try {
      const urlParams = new URLSearchParams(new URL(currentPageUrl.value).search);
      return parseInt(urlParams.get('page') || '1', 10);
    } catch {
      return 1; // Si la URL es la base o inválida, asume página 1
    }
  };

  // Expone el estado y las funciones de forma controlada
  // Usamos readonly para las URLs de paginación para evitar modificaciones externas accidentales
  return {
    items: readonly(items), // Datos obtenidos (solo lectura desde fuera)
    loading: readonly(loading),
    error: readonly(error),
    nextPage: readonly(nextPage),
    previousPage: readonly(previousPage),
    totalCount: readonly(totalCount),
    fetchData, // Función para iniciar/actualizar la carga
    getCurrentPageNumber // Función para obtener página actual
  };
}
