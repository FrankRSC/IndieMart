const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    //id_orden
    id_negocio: { type: String, required: true },
    id_articulo: { type: String, required: true },
    id_comprador: { type: String, required: true },
    nombre_prod: { type: String, required: true },
    descripcion: { type: String, required: true },
    total: { type: String, required: true },
    forma_pago: { type: String, required: true },
    dir_entrega: { type: String, required: true }

}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Orden', orderSchema);