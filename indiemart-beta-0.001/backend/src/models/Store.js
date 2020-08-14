//importa el objeto Schema y model
const { Schema, model } = require('mongoose');

//Se define el Schema de Tienda
const tiendaSchema = new Schema({
    //id_store
    nombre: {type: String, required: true},
    propietario: {type: String, required: true},
    descripcion: {type: String, required: true},
    // idPropietario: {type: String, required: true},
    valoracion: {type: Number,min:0 , max:10 , required: true},
    tipoEntrega: {type: String, required: true},
    celular: { type: String, required: true },
    telefono: { type: String, required: true },
    // url: {type: String},
    // publicId: {type: String}

}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Tienda', tiendaSchema);