import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PeopleView from '../views/PeopleView.vue'
import PlanetsView from '../views/PlanetsView.vue'
import StarshipsView from '../views/StarshipsView.vue'

// Define las rutas de la aplicación
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView // Componente para la ruta raíz
  },
  {
    path: '/people',
    name: 'people',
    component: PeopleView // Componente para la vista de personajes
  },
  {
    path: '/planets',
    name: 'planets',
    component: PlanetsView // Componente para la vista de planetas
  },
  {
    path: '/starships',
    name: 'starships',
    component: StarshipsView // Componente para la vista de naves
  }
  
]

// Crea la instancia del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Usa el historial del navegador
  routes // Pasa las rutas definidas
})

// Exportación del router para usarlo en main.js
export default router
