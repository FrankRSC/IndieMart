const { Schema, model } = require('mongoose');

const articleSchema = new Schema({
    id_store: { type: String, required: true },
    id_article: { type: String, required: true },
    //imagenes
    nombre: { type: String, required: true },
    ingredientes: { type: String, required: true },
    decripcion: { type: String, required: true },
    precio: { type: String, required: true },
    valoracion: { type: Number, min: 0, max: 10, required: true }

}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});
//Exporta el schema
module.exports = model('Articulo', articleSchema);