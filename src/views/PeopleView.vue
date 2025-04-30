<template>
  <div class="view-container">
    <h2 class="view-title">
      <i class="fas fa-users title-icon"></i> Personajes de Star Wars
    </h2>
    <p class="item-count" v-if="!loading && totalCount > 0">
      Mostrando página {{ currentPage }} de {{ totalPages }}. Total: {{ totalCount }} personajes.
    </p>

    <LoadingIndicator v-if="loading" />

    <ErrorMessage v-if="error" :message="error" />

    <div v-if="!loading && !error && items.length" class="card-grid">
      <DataCard
        v-for="person in items"
        :key="person.url"
        :title="person.name"
        :details="{
          altura: { value: person.height + ' cm', icon: 'fas fa-ruler-vertical' },
          peso: { value: person.mass + ' kg', icon: 'fas fa-weight-hanging' },
          género: { value: person.gender, icon: getGenderIcon(person.gender) },
          nacimiento: { value: person.birth_year, icon: 'fas fa-calendar-alt' }
        }"
        :item-type="'people'" />
    </div>

    <div v-if="!loading && !error && !items.length" class="no-data-message">
       No se encontraron personajes.
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
          class="pagination-button next-button people-theme" >
          Siguiente <i class="fas fa-arrow-right"></i>
        </button>
     </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useSwapiData } from '../composables/useSwapiData'; // Importa el composable
import DataCard from '../components/DataCard.vue';
import LoadingIndicator from '../components/LoadingIndicator.vue'; // Nuevo componente de carga
import ErrorMessage from '../components/ErrorMessage.vue';

// Usa el composable para obtener los datos de 'people'
const {
    items,
    loading,
    error,
    nextPage,
    previousPage,
    totalCount,
    fetchData,
    getCurrentPageNumber
} = useSwapiData('people');

// Llama a fetchData cuando el componente se monta
onMounted(() => {
  fetchData();
});

// Calcula el número de página actual y total (aproximado)
const currentPage = computed(() => getCurrentPageNumber());
// SWAPI devuelve 10 items por página por defecto
const totalPages = computed(() => Math.ceil(totalCount.value / 10));

// Función para obtener icono de género basado en el valor
const getGenderIcon = (gender) => {
  // Normaliza a minúsculas para comparación segura
  const lowerGender = gender?.toLowerCase();
  switch (lowerGender) {
    case 'male': return 'fas fa-mars';
    case 'female': return 'fas fa-venus';
    case 'n/a':
    case 'none':
    case 'hermaphrodite': return 'fas fa-transgender-alt'; // O fa-genderless
    default: return 'fas fa-question-circle'; // Icono por defecto si no coincide
  }
};
</script>

<style scoped>
/* Importa estilos comunes y añade específicos */
@import '../assets/view-styles.css';

.view-title {
  color: var(--color-primary); /* Amarillo para personajes */
}
.title-icon {
  /* Iconos ya tienen estilo base, aquí se puede ajustar si es necesario */
  /* margin-right: 0.5rem; */ /* Ahora se usa gap en view-title */
}
/* Estilos para el contador de items (definidos en view-styles.css) */
/* .item-count { ... } */

/* Tema para el botón 'Siguiente' de personajes */
.pagination-button.next-button.people-theme {
   background-color: var(--color-primary);
   color: var(--color-background); /* Texto oscuro para contraste */
   border-color: var(--color-primary); /* Borde del mismo color */
}
.pagination-button.next-button.people-theme:hover:not(:disabled) {
   background-color: #eab308; /* Amarillo más oscuro */
   border-color: #eab308;
}
/* Estilos para iconos en botones de paginación (definidos en button, .button-link en main.css) */
/* .pagination-button i { ... } */
/* Estilo para el indicador de página (definido en view-styles.css) */
/* .page-indicator { ... } */
</style>
