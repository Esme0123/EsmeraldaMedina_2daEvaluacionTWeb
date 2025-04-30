<template>
  <div class="loading-indicator-container">
    <div class="scanner-animation">
      <div class="scanner-light"></div>
    </div>
    <p class="loading-text">Buscando datos en la galaxia...</p>
  </div>
</template>

<script setup>
// Componente puramente visual
</script>

<style scoped>
.loading-indicator-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  min-height: 300px; /* Asegura espacio vertical */
}

.scanner-animation {
  width: 150px;
  height: 10px; /* Altura de la barra base */
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  position: relative;
  overflow: hidden; /* Contiene la luz */
  box-shadow: 0 0 15px rgba(var(--color-primary-rgb), 0.3); /* Resplandor sutil */
}

.scanner-light {
  position: absolute;
  top: 0;
  left: -10%; /* Empieza fuera */
  width: 10%; /* Ancho de la luz */
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(var(--color-primary-rgb), 0.8), transparent); /* Amarillo SWAPI con transparencia */
  border-radius: 5px;
  animation: scan 2.5s linear infinite;
  box-shadow: 0 0 10px rgba(var(--color-primary-rgb), 0.7);
}

.loading-text {
  margin-top: 1.5rem;
  font-size: 1.1rem;
  color: var(--color-text-muted);
  font-weight: 500;
  letter-spacing: 0.5px;
}

@keyframes scan {
  0% {
    left: -10%;
    opacity: 0.8;
  }
  50% {
    left: 100%; /* Se mueve a la derecha */
    opacity: 1;
  }
  100% {
      left: -10%;
      opacity: 0.8;
  }
}

/* Añade variables RGB para usar en rgba */
:root {
  --color-primary-rgb: 250, 204, 21; /* RGB de #facc15 */
}
</style>
