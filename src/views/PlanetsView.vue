<template>
  <div class="view-container">
    <h2 class="view-title">Planetas de Star Wars</h2>

    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && dataItems.length" class="card-grid">
      <DataCard
        v-for="item in dataItems"
        :key="item.url"
        :title="item.name"
        :details="{
          clima: item.climate,
          terreno: item.terrain,
          población: formatPopulation(item.population),
          'periodo orbital': item.orbital_period + ' días'
        }"
      />
    </div>

     <div v-if="!loading && !error && !dataItems.length" class="no-data-message">
       No se encontraron planetas.
     </div>

     <div v-if="!loading && !error && (previousPage || nextPage)" class="pagination-controls">
        <button
          @click="fetchData(previousPage)"
          :disabled="!previousPage || loading"
          class="pagination-button prev-button"
        >
          Anterior
        </button>
        <button
          @click="fetchData(nextPage)"
          :disabled="!nextPage || loading"
          class="pagination-button next-button planets-theme"
        >
          Siguiente
        </button>
     </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataCard from '../components/DataCard.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import ErrorMessage from '../components/ErrorMessage.vue';

const dataItems = ref([]);
const loading = ref(false);
const error = ref(null);
const nextPage = ref(null);
const previousPage = ref(null);

const API_URL = 'https://www.swapi.tech/api/planets/';

const formatPopulation = (population) => {
  if (population === 'unknown') return 'Desconocida';
  const num = parseInt(population, 10);
  if (isNaN(num)) return 'Desconocida';
  return num.toLocaleString('es-ES');
};

const fetchData = async (url = API_URL) => {
  loading.value = true;
  error.value = null;
  dataItems.value = [];
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo obtener los datos`);
    }
    const data = await response.json();
    dataItems.value = data.results;
    nextPage.value = data.next;
    previousPage.value = data.previous;
  } catch (err) {
    console.error("Error fetching data:", err);
    error.value = err.message || 'Ocurrió un error al cargar los datos.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
@import '../assets/view-styles.css';

.view-title {
  color: var(--color-secondary); /* Azul para planetas */
}

/* Tema para el botón 'Siguiente' de planetas */
.pagination-button.next-button.planets-theme {
   background-color: var(--color-secondary);
   color: white;
}
.pagination-button.next-button.planets-theme:hover:not(:disabled) {
   background-color: #2563eb;
}
</style>
