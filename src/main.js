import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Importa la configuración del router
import './assets/main.css' // Importa los estilos (incluyendo Tailwind)

// Crea la instancia de la aplicación Vue
const app = createApp(App)

// Usa el router en la aplicación
app.use(router)

// Monta la aplicación en el elemento con id="app" en public/index.html
app.mount('#app')
