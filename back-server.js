// Importaciones para el servidor básico
const express = require('express');          // Framework para crear el servidor y manejar rutas
const cors = require('cors');                // Middleware para permitir CORS entre backend y frontend (comunicaciones de origen cruzado)
const path = require('path');                // Módulo nativo de Node.js para manejar rutas de archivos
require('dotenv').config();                  // Permite trabajar y cargar variables de entorno desde el archivo .env


class BackServer {
    constructor() { // Configuración del servidor
      this.app = express();
      this.port = process.env.PORT_BACK; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 3000;
      this.port = process.env.PORT_FRONT; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 8080;
      this.middleware();
      this.routes();
    }
  
    middleware() { // Middleware
      this.app.use(cors());
      this.app.use(express.static(path.join(__dirname, '../Repaso_frontend--Etapa_1')));  // Sirve archivos estáticos del frontend
    }
  
    routes() { // Ruta inicial (opcional) para verificar que el servidor está funcionando
      this.app.get('/server', (req, res) => { // Usamos método GET para una consulta simple de prueba
        res.send('Servidor Repaso_backend en funcionamiento');
      });
    }
  
    listen() { // Levanta el servidor
      this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en http://localhost:${this.port}`);
      });
    }

  }
  
  module.exports = BackServer;

