<template>
  <div class="loading-container">
    <div class="spinner"></div>
    <p class="loading-text">Cargando datos...</p>
  </div>
</template>

<script setup>
// Componente puramente visual.
</script>

<style scoped>
.loading-container {
  display: flex;
  flex-direction: column; /* Apila spinner y texto */
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem; /* Más espacio vertical */
  text-align: center;
}

.spinner {
  width: 50px; /* Tamaño del spinner */
  height: 50px;
  border: 5px solid var(--color-border); /* Borde gris */
  border-top-color: var(--color-primary); /* Borde superior amarillo */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Animación */
}

.loading-text {
  margin-top: 1rem; /* Espacio entre spinner y texto */
  font-size: 1.1rem;
  color: #9ca3af; /* Texto gris */
  font-weight: 500;
}

/* Animación de rotación */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
