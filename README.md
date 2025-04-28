# Portal SWAPI con Vue.js - Segunda Evaluación TWeb

Este proyecto es una plantilla de portal web desarrollada con Vue.js 3 que consume datos de la [API pública SWAPI (Star Wars API)](https://www.swapi.tech/) para mostrar información sobre personajes, planetas y naves espaciales del universo Star Wars.

## Características

* **Framework:** Vue.js 3 (Composition API con `<script setup>`)
* **Enrutamiento:** Vue Router para la navegación entre vistas (Inicio, Personajes, Planetas, Naves).
* **Estilos:** CSS Puro con Flexbox/Grid para un diseño responsive y atractivo. Se utilizan variables CSS para facilitar la personalización.
* **Peticiones HTTP:** API Fetch nativa para consumir la SWAPI.
* **Componentes Reutilizables:** Navbar, Footer, DataCard, LoadingSpinner, ErrorMessage.
* **Manejo de Estado:** `ref` de Vue para el estado local de los componentes (carga, error, datos).
* **Paginación:** Navegación básica entre páginas de resultados de la API.
* **Manejo de Carga y Errores:** Indicadores visuales durante la carga de datos y mensajes claros en caso de error.

## Estructura del Proyecto

├── public/             # Archivos estáticos públicos

├── src/
 
  │   ├── assets/         # Archivos CSS (main.css, view-styles.css), imágenes, etc.
 
  │   ├── components/     # Componentes Vue reutilizables
 
  │   ├── router/         # Configuración de Vue Router
 
  │   ├── views/          # Componentes Vue que representan páginas/vistas
 
  │   ├── App.vue         # Componente raíz de la aplicación
 
  │   └── main.js         # Punto de entrada de la aplicación
 
  ├── .gitignore          # Archivos ignorados por Git
 
  ├── index.html          # Plantilla HTML principal
 
  ├── package.json        # Dependencias y scripts del proyecto
 
  └── README.md           # Este archivo

## API Consumida

Se utilizan los siguientes endpoints de la SWAPI:

* `https://www.swapi.tech/api/people/` - Para obtener datos de personajes.
* `https://www.swapi.tech/api/planets/` - Para obtener datos de planetas.
* `https://www.swapi.tech/api/starships/` - Para obtener datos de naves espaciales.

## Instalación y Uso

**Requisitos Previos:**

* Node.js y npm (o yarn) instalados. [Descargar Node.js](https://nodejs.org/)

**Pasos:**

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/Esme0123/EsmeraldaMedina_2daEvaluacionTWeb.git 
    cd proyectoVue
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` 

4.  **Compilar para producción:**
    ```bash
    npm run build
    ```
    Esto generará los archivos optimizados en la carpeta `dist/`.

## Explicación Técnica

* **`main.js`**: Inicializa la aplicación Vue, importa los estilos globales (`main.css`) y monta el componente raíz `App.vue` utilizando el router.
* **`router/index.js`**: Define las rutas y las asocia con sus componentes de vista.
* **`App.vue`**: Layout principal con `Navbar`, `Footer` y `<router-view>`.
* **Componentes (`src/components/`)**:
    * Cada componente tiene estilos definidos en su bloque `<style scoped>`.
    * `DataCard.vue`: Muestra datos en formato de tarjeta estilizada.
    * `LoadingSpinner.vue` y `ErrorMessage.vue`: Componentes visuales para estados de carga y error.
* **Vistas (`src/views/`)**:
    * Cada vista importa un archivo CSS común (`src/assets/view-styles.css`) para estilos de layout (grid, paginación) y define estilos específicos (como colores de títulos y botones) en su `<style scoped>`.
    * Utilizan la API Fetch para obtener datos de SWAPI, manejando estados de carga y error.
* **CSS**:
    * `src/assets/main.css`: Contiene estilos globales, reseteo básico, variables CSS (--color-background, --color-primary, etc.) y estilos base para elementos como `body`, `a`, `button`.
    * `src/assets/view-styles.css`: Define estilos comunes para las vistas, como la estructura de la cuadrícula (`card-grid`) y los controles de paginación (`pagination-controls`).
    * `<style scoped>` en cada componente: Contiene estilos específicos para ese componente, asegurando que no afecten a otros. Se usa Flexbox y Grid para layouts responsivos.

## Capturas de pantalla del portal Web
Se usaron los colores respecto a los colores que usa Swapi
* **Inicio**
  ![image](https://github.com/user-attachments/assets/63f324d8-0f0d-4e72-a890-a6df3dcc719c)
  
  Versión Desktop
  
  ![image](https://github.com/user-attachments/assets/d9360abb-52c7-4bf8-bcce-37e694f8cdc7)
  
  Versión Tablet
  
  ![image](https://github.com/user-attachments/assets/a282d7b3-383e-4002-998d-91561b87a069)
  
  Versión Celular

  Está es la página principal del portal donde podemos ver un menú en la parte de arriba del nombre SWAPI Portal en el cual si se hace click te lleva al inicio, es decir, en la página que nos encontramos actualmente. También podemos ver las tres opciones Personajes  Planetas   Naves Espaciales, de las cuales si hacemos click veremos cada sección. Por otro lado, en el medio tenemos un mensaje de bienvenida hacia el portal y un breve mensaje que explica las opciones que se pueden explorar sobre Star Wars. Cada botón con su respectivo color. Por último, podemos ver el Footer donde nos describe que hicimos el portal con Vue.js y los datos proporcionados por Swapi, que si hacemos click en Swapi nos lleva a la página web del mismo. Como vemos según cada tipo de pantalla estos componentes se van adaptando para un buen entendimiento de cada sección del Inicio.

  Cabe resaltar que cada botón o componente del navbar, tiene un diferente color si se pasa el ratón encima, es decir, se aplicó estilos para lograr este resultado y que quede más estético.

* **Personajes**

