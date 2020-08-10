const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    //id_orden
    idNegocio: { type: String, required: true },
    idAarticulo: { type: String, required: true },
    idComprador: { type: String, required: true },
    nombreProd: { type: String, required: true },
    descripcion: { type: String, required: true },
    total: { type: String, required: true },
    formaPago: { type: String, required: true },
    dirEntrega: { type: String, required: true }

}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Orden', orderSchema);