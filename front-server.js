import express from 'express';  // Framework para crear el servidor y manejar rutas
import dotenv from 'dotenv'     // Permite trabajar y cargar variables de entorno desde el archivo .env
dotenv.config();                  

class FrontServer {
  constructor() { // Configuración del servidor frontend
    this.app = express();
    this.port = process.env.PORT_FRONT; // Opcional se agrega despues de PORT doble barra y el puerto comun para el server local: || 8080;

    // Utilizamos switch para alternar entre etapas a la etapa actual elegida en el .env
    let frontPath;
    switch (process.env.ETAPA_ACTUAL) {
      case '1':
        frontPath = process.env.ETAPA_1;
        break;
      case '2':
        frontPath = process.env.ETAPA_2;
        break;
      case '3':
        frontPath = process.env.ETAPA_3;  // Dejamos a modo de ejemplo para futuras etapas
        break;
      default:
        console.log("Etapa no válida, usando ETAPA_1 como predeterminada.");
        frontPath = process.env.ETAPA_1;
        
    }

    this.frontPath = frontPath;
    this.middleware(); // LLamar siempre al final del constructor por si hay dependencias previas como: express.static(this.frontPath) 

  }

  middleware() {
    try {
      this.app.use(express.static(this.frontPath));
      console.log('Middleware de archivos estáticos configurado para:', this.frontPath);
    } catch (error) {
      console.error('Error al configurar middleware estático:', error);
    }
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Frontend servido en http://localhost:${this.port}`); // Mensaje en terminal del backend
    });
  }

}

export default FrontServer;

