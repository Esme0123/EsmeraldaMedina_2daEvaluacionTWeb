<template>
  <div class="view-container">
    <h2 class="view-title">
      <i class="fas fa-globe-americas title-icon"></i> Planetas de Star Wars
    </h2>
    <p class="item-count" v-if="!loading && totalCount > 0">
      Mostrando página {{ currentPage }} de {{ totalPages }}. Total: {{ totalCount }} planetas.
    </p>

    <LoadingIndicator v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && items.length" class="card-grid">
      <DataCard
        v-for="planet in items"
        :key="planet.url"
        :title="planet.name"
        :details="{
          clima: { value: planet.climate, icon: 'fas fa-cloud-sun-rain' },
          terreno: { value: planet.terrain, icon: 'fas fa-mountain' },
          población: { value: formatPopulation(planet.population), icon: 'fas fa-users' },
          'periodo orbital': { value: planet.orbital_period + ' días', icon: 'fas fa-sync-alt' }
        }"
        :item-type="'planets'" />
    </div>

     <div v-if="!loading && !error && !items.length" class="no-data-message">
       No se encontraron planetas.
     </div>

     <div v-if="!loading && !error && (previousPage || nextPage)" class="pagination-controls">
        <button
          @click="fetchData(previousPage)"
          :disabled="!previousPage || loading"
          class="pagination-button prev-button"
        >
           <i class="fas fa-arrow-left"></i> Anterior
        </button>
         <span class="page-indicator">Página {{ currentPage }}</span>
        <button
          @click="fetchData(nextPage)"
          :disabled="!nextPage || loading"
          class="pagination-button next-button planets-theme" >
          Siguiente <i class="fas fa-arrow-right"></i>
        </button>
     </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useSwapiData } from '../composables/useSwapiData';
import DataCard from '../components/DataCard.vue';
import LoadingIndicator from '../components/LoadingIndicator.vue';
import ErrorMessage from '../components/ErrorMessage.vue';

// Usa el composable para 'planets'
const { items, loading, error, nextPage, previousPage, totalCount, fetchData, getCurrentPageNumber } = useSwapiData('planets');

// Carga inicial
onMounted(() => {
  fetchData();
});

// Cálculos para paginación
const currentPage = computed(() => getCurrentPageNumber());
const totalPages = computed(() => Math.ceil(totalCount.value / 10));

// Formatea la población para mejor lectura
const formatPopulation = (population) => {
  if (population === 'unknown') return 'Desconocida';
  const num = parseInt(population, 10);
  if (isNaN(num)) return 'Desconocida';
  // Usa localización para separadores de miles
  return num.toLocaleString('es-ES');
};
</script>

<style scoped>
@import '../assets/view-styles.css';

.view-title {
  color: var(--color-secondary); /* Azul para planetas */
}
/* Icono y contador ya tienen estilos en view-styles.css */
/* .title-icon { ... } */
/* .item-count { ... } */

/* Tema para el botón 'Siguiente' de planetas */
.pagination-button.next-button.planets-theme {
   background-color: var(--color-secondary);
   color: white; /* Texto blanco para contraste */
   border-color: var(--color-secondary);
}
.pagination-button.next-button.planets-theme:hover:not(:disabled) {
   background-color: #2563eb; /* Azul más oscuro */
   border-color: #2563eb;
}
/* Iconos y page indicator ya tienen estilos */
/* .pagination-button i { ... } */
/* .page-indicator { ... } */
</style>
