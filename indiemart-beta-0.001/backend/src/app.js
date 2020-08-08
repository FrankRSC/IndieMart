//importa express
const express = require('express');

//importa cors
const cors = require('cors');

//guarda el objeto que regresa express
const app = express();

//Settings - configuracion del servidor

//define el puerto a usar
app.set('port', process.env.PORT || 4000);


//Middlewares - Funciones que se ejecutan antes de Routes 

//Dos servidores pueden intercambiar datos entre ellos con cors
app.use(cors());

//para que el servidor use express con formatos json
app.use(express.json());

//------- Routes - Rutas de la api -----//

//Ruta que maneja los usuarios

//Cuando se visite /api/usuarios usara el archivo ./routes/users
app.use('/api/usuarios', require('./routes/users'));

//Ruta que maneja los negocios
app.use('/api/tiendas', require('./routes/stores'));

//ruta que maneja los articulos de los negocios
app.use('/api/articulos', require('./routes/articles'));

//ruta que maneja los pedidos
app.use('/api/pedidos', require('./routes/orders'));

module.exports = app;