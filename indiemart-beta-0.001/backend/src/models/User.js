//importa el objeto Schema y model
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    //id_propietario
    nombre: {
        p_nombre: { type: String, required: true },
        apellido_p: { type: String, required: true },
        apellido_m: { type: String, required: true },
    },
    fecha_nac: { type: Date, required: true },
    correo: { type: String, required: true },
    contrasena: { type: String, required: true },
    celular: { type: String, required: true },
    tipo_usuario: {
        consumidor: { type: Boolean },
        vendedor: { type: Boolean },
        required: true
    },
    vivienda: {
        pais: { type: String },
        estado: { type: String, required: true },
        ciudad: { type: String, required: true }
    },
}, {
    //para que tenga la fechad e creacion o modificacion
    timestamps: true
});

//Exporta el schema
module.exports = model('Usuario', userSchema);