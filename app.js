const BackServer = require('./back-server');

(async()=>{
    await main();
})();

async function main(){
    const backServer = new BackServer(); //Instanciamos clase
    backServer.listen(); //Inicializamos clase

}
