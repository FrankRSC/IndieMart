const usersCtrl = {};

const modelUsuario = require('../models/User');
//Toma todos los usuarios
usersCtrl.getUsers = async (req, res) => {
    const Usuarios = await modelUsuario.find();
    res.json(Usuarios);
};

//Crea un usuario
usersCtrl.createUser = async (req, res) => {
    const {
        nombre,
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario,
        vivienda
    } = req.body;
    const nuevoUsuario = new modelUsuario({
        nombre: {
            p_nombre: nombre.p_nombre,
            apellido_p: nombre.apellido_p,
            apellido_m: nombre.apellido_m,
        },
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario: {
            consumidor: tipo_usuario.consumidor,
            vendedor: tipo_usuario.vendedor
        },
        vivienda: {
            pais: vivienda.pais,
            estado: vivienda.estado,
            ciudad: vivienda.ciudad
        },
    });
    await nuevoUsuario.save();
    res.json({message: 'Usuario gurdado'});
};

//Toma un usuario
usersCtrl.getUser = async (req, res) => {
    const usuario = await modelUsuario.findById(req.params.id);
    res.json(usuario);
};

//Modificar usuario
usersCtrl.modifyUser = async (req, res) => {
    const {
        nombre,
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario,
        vivienda
    } = req.body;
    await modelUsuario.findOneAndUpdate({ _id: req.params.id }, {
        nombre: {
            p_nombre: nombre.p_nombre,
            apellido_p: nombre.apellido_p,
            apellido_m: nombre.apellido_m,
        },
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario: {
            consumidor: tipo_usuario.consumidor,
            vendedor: tipo_usuario.vendedor
        },
        vivienda: {
            pais: vivienda.pais,
            estado: vivienda.estado,
            ciudad: vivienda.ciudad
        },
    });
    res.json({ message: 'Usuarios actualizada' });
};

//Borrar usuario
usersCtrl.deleteUser = async (req, res) => {
    await modelUsuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'usuario eliminado' })
};

module.exports = usersCtrl;
