<template>
  <div id="app-container">
    <Navbar />

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// Importa los componentes Navbar y Footer
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

// No se necesita lógica adicional en el script setup para este componente raíz
</script>

<style scoped>
/* Estilos específicos para App.vue si fueran necesarios */
/* #app-container hereda estilos de body y #app en main.css */

/* .main-content hereda estilos de main en main.css */
/* Puedes añadir estilos adicionales aquí si es necesario */
.main-content {
  padding-top: 2rem; /* Espacio extra debajo del navbar */
  padding-bottom: 2rem;
}

/* La transición 'fade' se define en main.css */
</style>
