<template>
  <div class="view-container">
    <h2 class="view-title">
      <i class="fas fa-space-shuttle title-icon"></i> Naves Espaciales de Star Wars
    </h2>
    <p class="item-count" v-if="!loading && totalCount > 0">
      Mostrando página {{ currentPage }} de {{ totalPages }}. Total: {{ totalCount }} naves.
    </p>

    <LoadingIndicator v-if="loading" />
    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && items.length" class="card-grid">
      <DataCard
        v-for="ship in items"
        :key="ship.url"
        :title="ship.name"
        :details="{
          modelo: { value: ship.model, icon: 'fas fa-cog' },
          fabricante: { value: ship.manufacturer, icon: 'fas fa-industry' },
          clase: { value: ship.starship_class, icon: 'fas fa-user-astronaut' },
          costo: { value: formatCredits(ship.cost_in_credits), icon: 'fas fa-coins' }
        }"
        :item-type="'starships'" />
    </div>

     <div v-if="!loading && !error && !items.length" class="no-data-message">
       No se encontraron naves espaciales.
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
          class="pagination-button next-button starships-theme" >
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

// Usa el composable para 'starships'
const { items, loading, error, nextPage, previousPage, totalCount, fetchData, getCurrentPageNumber } = useSwapiData('starships');

// Carga inicial
onMounted(() => {
  fetchData();
});

// Cálculos paginación
const currentPage = computed(() => getCurrentPageNumber());
const totalPages = computed(() => Math.ceil(totalCount.value / 10));

// Formatea los créditos
const formatCredits = (credits) => {
  if (credits === 'unknown') return 'Desconocido';
  const num = parseInt(credits, 10);
   if (isNaN(num)) return 'Desconocido';
  // Añade ' créditos' al final
  return num.toLocaleString('es-ES') + ' créditos';
};
</script>

<style scoped>
@import '../assets/view-styles.css';

.view-title {
  color: var(--color-tertiary); /* Verde para naves */
}
/* Icono y contador ya tienen estilos */
/* .title-icon { ... } */
/* .item-count { ... } */

/* Tema para el botón 'Siguiente' de naves */
.pagination-button.next-button.starships-theme {
   background-color: var(--color-tertiary);
   color: white;
   border-color: var(--color-tertiary);
}
.pagination-button.next-button.starships-theme:hover:not(:disabled) {
   background-color: #059669; /* Verde más oscuro */
   border-color: #059669;
}
/* Iconos y page indicator ya tienen estilos */
/* .pagination-button i { ... } */
/* .page-indicator { ... } */
</style>
