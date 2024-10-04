# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# ADM Concesionario

Este es un proyecto de una aplicación web para el concesionario "ADM Concesionario". La aplicación permite a los usuarios simular créditos y obtener información sobre vehículos.

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js** (v14 o superior) - [Descargar Node.js](https://nodejs.org/)
- **npm** (v6 o superior) - Viene incluido con Node.js.

## Instalación

1. **Clonar el repositorio**

   Abre una terminal y ejecuta el siguiente comando:

   ```bash
   git clone <URL_DEL_REPOSITORIO>


Navegar al directorio del proyecto

Cambia al directorio del proyecto:

bash
Copiar código
cd nombre-del-repositorio
Asegúrate de reemplazar nombre-del-repositorio con el nombre de tu proyecto.

Instalar dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

bash
Copiar código
npm install
Agregar Bootstrap

Asegúrate de que Bootstrap esté instalado. Puedes instalarlo utilizando npm:

bash
Copiar código
npm install bootstrap
Configuración de Archivos Estáticos
Asegúrate de tener tus archivos de video y de imágenes en la carpeta public. Por ejemplo:

public/videohero/hero.mp4 para el video de fondo.
Las imágenes de los asesores en la carpeta correspondiente.
Correr la Aplicación
Una vez que hayas instalado todas las dependencias, puedes ejecutar la aplicación con el siguiente comando:

bash
Copiar código
npm start
Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador en http://localhost:3000.

Estructura del Proyecto
La estructura del proyecto es la siguiente:

css
Copiar código
ADM-Concesionario/
├── public/
│   ├── videohero/
│   │   └── hero.mp4
│   ├── path/to/asesor1.jpg
│   ├── path/to/asesor2.jpg
│   └── path/to/asesor3.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Simulator.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   └── App.css
├── package.json
└── README.md
Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz un commit (git commit -m 'Agregué una nueva funcionalidad').
Envía un pull request.