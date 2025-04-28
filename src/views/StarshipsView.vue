<template>
  <div class="view-container">
    <h2 class="view-title">Naves Espaciales de Star Wars</h2>

    <LoadingSpinner v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && dataItems.length" class="card-grid">
      <DataCard
        v-for="item in dataItems"
        :key="item.url"
        :title="item.name"
        :details="{
          modelo: item.model,
          fabricante: item.manufacturer,
          clase: item.starship_class,
          costo: formatCredits(item.cost_in_credits)
        }"
      />
    </div>

     <div v-if="!loading && !error && !dataItems.length" class="no-data-message">
       No se encontraron naves espaciales.
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
          class="pagination-button next-button starships-theme"
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

const API_URL = 'https://www.swapi.tech/api/starships/';

const formatCredits = (credits) => {
  if (credits === 'unknown') return 'Desconocido';
  const num = parseInt(credits, 10);
   if (isNaN(num)) return 'Desconocido';
  return num.toLocaleString('es-ES') + ' créditos';
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
  color: var(--color-tertiary); /* Verde para naves */
}

/* Tema para el botón 'Siguiente' de naves */
.pagination-button.next-button.starships-theme {
   background-color: var(--color-tertiary);
   color: white;
}
.pagination-button.next-button.starships-theme:hover:not(:disabled) {
   background-color: #059669;
}
</style>
