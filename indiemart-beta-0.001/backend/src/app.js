//importa express
const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
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
//iza porle descripcionporfa no c que hace :v
app.use(morgan('dev'));
//Configuracion para subir imagen

const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer(storage).single('image'));

//para que el servidor use express con formatos json
app.use(express.json());
app.use(express.urlencoded({extended: false}));

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

//ruta para enviar comentario por correo
app.use("/comentario", require('./routes/mail'));

module.exports = app;