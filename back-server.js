// Importaciones para el servidor básico
const express = require('express');          // Framework para crear el servidor y manejar rutas
const cors = require('cors');                // Middleware para permitir CORS entre backend y frontend (comunicaciones de origen cruzado)
require('dotenv').config();                  // Permite trabajar y cargar variables de entorno desde el archivo .env


class BackServer {
    constructor() { // Configuración del servidor backend
      this.app = express();
      this.port = process.env.PORT_BACK; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 3000;
      this.middleware();
      this.routes();
    }
  
    middleware() { // Middleware
      this.app.use(cors());
    }
  
    routes() { // Ruta inicial (opcional) para verificar que el servidor está funcionando
      this.app.get('/server', (req, res) => { // Usamos método GET para una consulta simple de prueba en localhost:3000/server
        res.send('Servidor "Repaso_backend" en funcionamiento'); // La consulta devuelve este mensaje en este caso
      });
    }
  
    listen() { // Levanta el servidor backend
      this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en http://localhost:${this.port}`); // Mensaje en terminal backend
      });
    }

  }
  
  module.exports = BackServer;

