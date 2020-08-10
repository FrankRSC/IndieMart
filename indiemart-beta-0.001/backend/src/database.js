//importa mongoose
const mongoose = require('mongoose');

const URL = 'mongodb+srv://indiemart:frank123@cluster0.wx1lr.mongodb.net/IndieMart?retryWrites=true&w=majority';

// process.env.MONGODB_URI usa la direccon que esta en las variables de entorno si existe
// si no usa le direccion de URL
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : URL;

//crear la coneccion con mongodb
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});


const connection = mongoose.connection;

//hace la coneccion con mongodb
connection.once('open', () => {
    console.log('BD conectada');
});