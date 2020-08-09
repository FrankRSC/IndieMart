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
        nombre,
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario,
        vivienda
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
        nombre,
        fecha_nac,
        correo,
        contrasena,
        celular,
        tipo_usuario,
        vivienda
    });
    res.json({ message: 'Usuarios actualizada' });
};

//Borrar usuario
usersCtrl.deleteUser = async (req, res) => {
    await modelUsuario.findByIdAndDelete(req.params.id);
    res.json({ message: 'usuario eliminado' })
};

module.exports = usersCtrl;
