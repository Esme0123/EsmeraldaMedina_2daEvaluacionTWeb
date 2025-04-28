<template>
  <div class="data-card">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-details">
      <div v-for="(value, key) in details" :key="key" class="detail-item">
        <span class="detail-key">{{ formatKey(key) }}:</span>
        <span class="detail-value">{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  details: {
    type: Object,
    required: true
  }
});

// Función para formatear las claves
const formatKey = (key) => {
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};
</script>

<style scoped>
.data-card {
  background-color: var(--color-card-bg); /* Fondo de tarjeta */
  border-radius: 12px; /* Bordes más redondeados */
  padding: 1.5rem; /* Más padding interno */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Sombra más pronunciada */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 1px solid var(--color-border); /* Borde sutil */
  display: flex; /* Para mejor control interno */
  flex-direction: column;
}

.data-card:hover {
  transform: translateY(-5px); /* Efecto de elevación */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
}

.card-title {
  color: var(--color-primary); /* Título en amarillo */
  font-size: 1.3rem; /* Tamaño de título */
  margin-bottom: 1rem; /* Espacio debajo del título */
  border-bottom: 1px solid var(--color-border); /* Línea separadora */
  padding-bottom: 0.5rem;
}

.card-details {
  font-size: 0.95rem; /* Tamaño de texto de detalles */
  flex-grow: 1; /* Ocupa espacio si es necesario */
}

.detail-item {
  margin-bottom: 0.5rem; /* Espacio entre detalles */
  line-height: 1.5;
}

.detail-key {
  font-weight: 600; /* Clave en negrita */
  color: #9ca3af; /* Color grisáceo para la clave */
  margin-right: 0.5rem; /* Espacio entre clave y valor */
  text-transform: capitalize; /* Capitaliza la clave */
}

.detail-value {
  color: var(--color-text); /* Color de texto normal para el valor */
}
</style>
