<template>
  <div class="error-message" role="alert">
    <strong class="error-title">¡Error!</strong>
    <span class="error-text">{{ message }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  message: {
    type: String,
    required: true,
    default: 'Ocurrió un error al cargar los datos.'
  }
});
</script>

<style scoped>
.error-message {
  background-color: #450a0a; /* Fondo rojo oscuro */
  color: #fecaca; /* Texto rojo claro */
  border: 1px solid var(--color-accent); /* Borde rojo */
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1rem 0; /* Espacio alrededor */
  box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2); /* Sombra roja sutil */
}

.error-title {
  font-weight: bold;
  margin-right: 0.5rem;
}

.error-text {
  /* Estilos adicionales si son necesarios */
}
</style>
