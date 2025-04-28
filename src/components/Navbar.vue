<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        SWAPI Portal
      </router-link>

      <div class="navbar-links">
        <router-link to="/people" class="nav-link" active-class="active">
          Personajes
        </router-link>
        <router-link to="/planets" class="nav-link" active-class="active">
          Planetas
        </router-link>
        <router-link to="/starships" class="nav-link" active-class="active">
          Naves Espaciales
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No se necesita lógica específica en el script para este componente simple.
</script>

<style scoped>
.navbar {
  background-color: var(--color-card-bg); /* Fondo gris oscuro */
  padding: 0.75rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: sticky; /* Fija la barra arriba */
  top: 0;
  z-index: 1000;
  width: 100%;
}

.navbar-container {
  max-width: var(--container-max-width);
  margin: 0 auto; /* Centra el contenido */
  padding: 0 var(--container-padding); /* Usa el padding del contenedor global */
  display: flex;
  justify-content: space-between; /* Espacia el logo y los links */
  align-items: center; /* Centra verticalmente */
}

.navbar-brand {
  font-size: 1.75rem; /* Más grande */
  font-weight: bold;
  color: var(--color-primary); /* Amarillo */
  text-decoration: none;
  transition: color 0.3s ease;
}

.navbar-brand:hover {
  color: #fbbf24; /* Amarillo un poco más oscuro */
  text-decoration: none;
}

.navbar-links {
  display: flex;
  gap: 1rem; /* Espacio entre links */
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-border); /* Fondo sutil al pasar el mouse */
  color: var(--color-link-hover);
  text-decoration: none;
}

/* Estilo para el enlace activo */
.nav-link.active {
  background-color: var(--color-primary);
  color: var(--color-background); /* Texto oscuro sobre fondo amarillo */
  font-weight: 600;
}

/* Responsive: apilar enlaces en pantallas pequeñas si es necesario */
@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column; /* Apila logo y links */
    align-items: flex-start; /* Alinea a la izquierda */
  }
  .navbar-links {
    margin-top: 0.5rem;
    width: 100%; /* Ocupa todo el ancho */
    justify-content: space-around; /* Distribuye los links */
  }
  .nav-link {
    padding: 0.5rem;
    text-align: center;
    flex-grow: 1; /* Hace que los links ocupen espacio equitativamente */
  }
}
</style>
