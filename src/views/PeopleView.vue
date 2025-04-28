<template>
  <div class="view-container">
    <h2 class="view-title">Personajes de Star Wars</h2>

    <LoadingSpinner v-if="loading" />

    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && dataItems.length" class="card-grid">
      <DataCard
        v-for="item in dataItems"
        :key="item.url"
        :title="item.name"
        :details="{
          altura: item.height + ' cm',
          peso: item.mass + ' kg',
          género: item.gender,
          nacimiento: item.birth_year
        }"
      />
    </div>

    <div v-if="!loading && !error && !dataItems.length" class="no-data-message">
       No se encontraron personajes.
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
          class="pagination-button next-button people-theme"
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

// Renombrado a 'dataItems' para reutilización potencial
const dataItems = ref([]);
const loading = ref(false);
const error = ref(null);
const nextPage = ref(null);
const previousPage = ref(null);

const API_URL = 'https://www.swapi.tech/api/people/';

// Renombrado a 'fetchData'
const fetchData = async (url = API_URL) => {
  loading.value = true;
  error.value = null;
  dataItems.value = []; // Limpia mientras carga
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
/* Importamos estilos comunes para las vistas */
@import '../assets/view-styles.css';

/* Estilos específicos o temas para esta vista */
.view-title {
  color: var(--color-primary); /* Amarillo para personajes */
}

/* Tema para el botón 'Siguiente' de personajes */
.pagination-button.next-button.people-theme {
   background-color: var(--color-primary);
   color: var(--color-background);
}
.pagination-button.next-button.people-theme:hover:not(:disabled) {
   background-color: #eab308;
}

</style>
