import BackServer from './back-server.js';
import FrontServer from './front-server.js';

(async()=>{
    await main();
})();

async function main(){
    const backServer = new BackServer(); //Instanciamos clase exportada de back-server.js
    const frontServer = new FrontServer(); //Instanciamos clase exportada de front-server.js
    backServer.listen(); //Inicializamos clase, activamos el server de backend
    frontServer.listen(); //Inicializamos clase, activamos el server de frontend

}

