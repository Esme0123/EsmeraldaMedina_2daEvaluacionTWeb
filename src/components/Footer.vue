<template>
  <footer class="site-footer">
    <p>&copy; {{ currentYear }} Portal SWAPI con Vue.js. Creado para la Evaluación.</p>
    <p>Datos proporcionados por <a href="https://www.swapi.tech/" target="_blank" rel="noopener noreferrer">SWAPI</a>.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.site-footer {
  background-color: var(--color-card-bg); /* Mismo fondo que navbar */
  color: #9ca3af; /* Texto gris más claro */
  text-align: center;
  padding: 1.5rem var(--container-padding);
  margin-top: auto; /* Empuja el footer al final */
  font-size: 0.9rem;
  border-top: 1px solid var(--color-border); /* Línea sutil arriba */
}

.site-footer p {
  margin-bottom: 0.25rem;
}

.site-footer a {
  color: var(--color-primary); /* Amarillo */
  font-weight: 500;
}

.site-footer a:hover {
  color: #fbbf24; /* Amarillo más oscuro */
}
</style>
