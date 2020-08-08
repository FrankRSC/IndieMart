//importa el objeto Schema y model
const { Schema, model } = require('mongoose');

//Se define el Schema de Tienda
const tiendaSchema = new Schema({
    //id_store
    nombre: { type: String, required: true },
    propietario: { type: String, required: true },
    descripcion: { type: String, required: true },
    id_propietario: { type: String, required: true },
    valoracion: { type: Number, min: 0, max: 10, required: true },
    //Logo
    tipo_entrega: {
        domicilio: { type: Boolean },
        pida_recoja: { type: Boolean },
    },
    contacto: {
        celular: { type: String, required: true },
        telefono: { type: String, required: true },
    },

}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Tienda', tiendaSchema);