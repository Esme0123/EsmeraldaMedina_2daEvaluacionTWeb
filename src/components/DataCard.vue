<template>
  <div class="data-card" :class="`card-theme-${itemType}`">
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-details">
      <div v-for="(detail, key) in details" :key="key" class="detail-item">
        <i :class="['detail-icon', detail.icon || 'fas fa-question-circle']" aria-hidden="true"></i>
        <span class="detail-key">{{ formatKey(key) }}:</span>
        <span class="detail-value">{{ detail.value }}</span>
      </div>
    </div>
     <div class="card-footer-deco"></div>
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
  },
  // Para aplicar estilos temáticos leves
  itemType: {
      type: String, // 'people', 'planets', 'starships'
      default: 'default'
  }
});

// Función para formatear las claves (e.g., 'birth_year' -> 'Birth Year')
const formatKey = (key) => {
  // Maneja claves como 'periodo orbital' que ya vienen formateadas
  if (!key.includes('_')) {
      return key.replace(/\b\w/g, l => l.toUpperCase());
  }
  return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};
</script>

<style scoped>
.data-card {
  background-color: var(--color-card-bg);
  border-radius: 10px; /* Ligeramente menos redondeado */
  padding: 1.25rem; /* Ajuste de padding */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  transition: transform 0.25s ease-out, box-shadow 0.25s ease-out;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  position: relative; /* Para el footer deco */
  overflow: hidden; /* Para el footer deco */
}

.data-card:hover {
  transform: translateY(-4px) scale(1.02); /* Efecto hover más sutil */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card-title {
  font-size: 1.25rem; /* Ajuste tamaño */
  margin-bottom: 0.8rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid var(--color-border);
  /* El color se define por tema */
  font-weight: 600;
}

/* Colores de título por tema */
.card-theme-people .card-title { color: var(--color-primary); }
.card-theme-planets .card-title { color: var(--color-secondary); }
.card-theme-starships .card-title { color: var(--color-tertiary); }

.card-details {
  font-size: 0.9rem; /* Ajuste tamaño */
  flex-grow: 1;
}

.detail-item {
  margin-bottom: 0.6rem; /* Espacio entre detalles */
  line-height: 1.6;
  display: flex; /* Alinea icono, clave y valor */
  align-items: center; /* Centra verticalmente */
  gap: 0.5rem; /* Espacio entre icono, clave, valor */
}

.detail-icon {
  color: var(--color-text-muted); /* Color grisáceo para iconos */
  width: 16px; /* Ancho fijo para alineación */
  text-align: center;
  flex-shrink: 0; /* Evita que el icono se encoja */
  font-size: 0.9em; /* Ajusta tamaño del icono si es necesario */
}

.detail-key {
  font-weight: 500; /* Un poco menos negrita */
  color: var(--color-text-muted);
  /* text-transform: capitalize; */ /* Ya lo hace formatKey */
  white-space: nowrap; /* Evita que la clave se rompa */
}

.detail-value {
  color: var(--color-text);
  word-break: break-word; /* Permite que valores largos se rompan */
}

/* Decoración en el footer de la tarjeta */
.card-footer-deco {
    height: 4px; /* Altura de la barra */
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0.7;
}
/* Colores de la decoración por tema */
.card-theme-people .card-footer-deco { background-color: var(--color-primary); }
.card-theme-planets .card-footer-deco { background-color: var(--color-secondary); }
.card-theme-starships .card-footer-deco { background-color: var(--color-tertiary); }

</style>

