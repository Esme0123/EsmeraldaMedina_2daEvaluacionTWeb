<template>
  <div class="home-view">
    <h1 class="home-title">Bienvenido al Portal SWAPI</h1>
    <p class="home-subtitle">
      Explora información sobre personajes, planetas y naves espaciales del universo Star Wars.
    </p>
    <div class="home-actions">
       <router-link to="/people" class="button-link people-button">
         Ver Personajes
       </router-link>
       <router-link to="/planets" class="button-link planets-button">
         Ver Planetas
       </router-link>
       <router-link to="/starships" class="button-link starships-button">
         Ver Naves
       </router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 4rem 1rem; /* Más padding vertical */
}

.home-title {
  font-size: 2.8rem; /* Título más grande */
  color: var(--color-primary); /* Amarillo */
  margin-bottom: 1rem;
}

.home-subtitle {
  font-size: 1.2rem;
  color: #d1d5db; /* Gris un poco más claro */
  margin-bottom: 2.5rem; /* Más espacio antes de los botones */
  max-width: 600px; /* Limita el ancho del subtítulo */
  margin-left: auto;
  margin-right: auto;
}

.home-actions {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* Espacio entre botones */
  flex-wrap: wrap; /* Permite que los botones se envuelvan en pantallas pequeñas */
}

/* Estilos base para los botones de acción (heredan de .button-link en main.css) */
.button-link {
  text-decoration: none; /* Asegura que no haya subrayado */
  color: var(--color-background); /* Texto oscuro por defecto */
}

/* Colores específicos para cada botón */
.people-button {
  background-color: var(--color-primary); /* Amarillo */
  color: #111827; /* Texto oscuro */
}
.people-button:hover {
  background-color: #eab308; /* Amarillo más oscuro */
}

.planets-button {
  background-color: var(--color-secondary); /* Azul */
  color: white;
}
.planets-button:hover {
  background-color: #2563eb; /* Azul más oscuro */
}

.starships-button {
  background-color: var(--color-tertiary); /* Verde */
  color: white;
}
.starships-button:hover {
  background-color: #059669; /* Verde más oscuro */
}
</style>
