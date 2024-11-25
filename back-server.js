// Importaciones para el servidor básico
import express from 'express';          // Framework para crear el servidor y manejar rutas
import cors from 'cors';                // Middleware para permitir CORS entre backend y frontend (comunicaciones de origen cruzado)
import dotenv from 'dotenv'     // Permite trabajar y cargar variables de entorno desde el archivo .env
dotenv.config();  


class BackServer {
    constructor() { // Configuración del servidor backend
      this.app = express();
      this.port = process.env.PORT_BACK; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 3000;
      this.middleware();
      this.routes();
    }
  
    middleware() { // Middleware
      this.app.use(cors());
      this.app.use('/r_Imagenes', express.static('r_Imagenes'));// Sirve archivos estáticos desde el directorio de imágenes
    }
  
    routes() { // Ruta inicial (opcional) para verificar que el servidor está funcionando
      this.app.get('/server', (req, res) => { // Usamos método GET para una consulta simple de prueba en localhost:3000/server
        res.send(`
          <html>
          <head>
            <title>Servidor Repaso</title>
            <link rel="icon" href="/r_Imagenes/paisaje_verde_redondo.ico
            " type="image/x-icon"><!-- Icono para la pestaña del navegador -->
          </head>
          <div style=
          "display: flex; 
          align-items: top; 
          justify-content: center; 
          height: 100vh; 
          background-color: #f3f4f6;">
            <h1 style="color: #4CAF50; font-size: 2em; text-align: center; font-family: Arial, sans-serif;">
              Servidor "Repaso_backend" en funcionamiento
            </h1>
          </div>
          </html>
        `); // Al hacer un envio html con res.send podemos dar algunos estilos directamente en linea
      });
    }
    
  
    listen() { // Levanta el servidor backend
      this.app.listen(this.port, () => {
        console.log(`Servidor corriendo en http://localhost:${this.port}`); // Mensaje en terminal backend
      });
    }

  }
  
  export default BackServer;

  