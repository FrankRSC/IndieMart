//importa el archivo .env
require('dotenv').config();

//importa el archivo de app.js
const app = require('./app');

// requiere el archivo de database
require('./database')

//funcion para conectar el servidor
async function main() {

    //app.get('port') obtiene el valor de port desde app
    await app.listen(app.get('port'), () => {
        console.log('Servidor en el puerto 4000');
    });
    

}

//ejecucion de la funcion main
main();
