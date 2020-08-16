//importa el objeto Schema y model
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    //id_propietario
    nombre: { type: String, required: true },
    apellidoP: { type: String, required: true },
    apellidoM: { type: String, required: true },
    // fechaNac: { type: Date, required: true },
    email: { type: String, required: true },
    contrasena: { type: String, required: true },
    celular: { type: String, required: true },
    // tipoUsuario: { type: String, required: true },
    pais: { type: String },
    estado: { type: String, required: true },
    ciudad: { type: String, required: true }
}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Usuario', userSchema);