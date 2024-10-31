const express = require('express');          // Framework para crear el servidor y manejar rutas
const path = require('path');                // Módulo nativo de Node.js para manejar rutas de archivos
require('dotenv').config();                  // Permite trabajar y cargar variables de entorno desde el archivo .env

class FrontServer {
  constructor() { // Configuración del servidor frontend
    this.app = express();
    this.port = process.env.PORT_FRONT; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 8080;
    this.middleware();
  }

  middleware() {
    this.app.use(express.static(path.join(__dirname, '../2_Repaso_frontend--Etapa_2')));  // Sirve archivos estáticos del frontend, muestra pagina web en localhost:8080
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Frontend servido en http://localhost:${this.port}`); // Mensaje en terminal del backend
    });
  }

}

module.exports = FrontServer;

