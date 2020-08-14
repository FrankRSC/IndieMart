const usersCtrl = {};

const modelUsuario = require('../models/User');
//Toma todos los usuarios
usersCtrl.getUsers = async (req, res) => {
    try {
        const Usuarios = await modelUsuario.find();
        res.json(Usuarios);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({message:"A ocurrido un error" , error});
    }
};

//Crea un usuario
usersCtrl.createUser = async (req, res) => {
    const {
        nombre,
        fechaNac,
        correo,
        contrasena,
        celular,
        tipoUsuario,
        vivienda
    } = req.body;
    try {
        const nuevoUsuario = new modelUsuario({
            nombre: {
                nombre: nombre.nombre,
                apellidoP: nombre.apellidoP,
                apellidoM: nombre.apellidoM,
            },
            fechaNac,
            correo,
            contrasena,
            celular,
            tipoUsuario: {
                consumidor: tipoUsuario.consumidor,
                vendedor: tipoUsuario.vendedor
            },
            vivienda: {
                pais: vivienda.pais,
                estado: vivienda.estado,
                ciudad: vivienda.ciudad
            },
        });
        await nuevoUsuario.save();
        res.json({message: 'Usuario gurdado'});
        res.status(201).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error", error});
    }
};

//Toma un usuario
usersCtrl.getUser = async (req, res) => {
    try {
        const usuario = await modelUsuario.findById(req.params.id);
        res.json(usuario);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({message:"A ocurrido un error" , error});
    }
};

//Modificar usuario
usersCtrl.modifyUser = async (req, res) => {
    const {
        nombre,
        fechaNac,
        correo,
        contrasena,
        celular,
        tipoUsuario,
        vivienda
    } = req.body;
    try {
        await modelUsuario.findOneAndUpdate({ _id: req.params.id }, {
            nombre: {
                nombre: nombre.nombre,
                apellidoP: nombre.apellidoP,
                apellidoM: nombre.apellidoM,
            },
            fechaNac,
            correo,
            contrasena,
            celular,
            tipoUsuario: {
                consumidor: tipoUsuario.consumidor,
                vendedor: tipoUsuario.vendedor
            },
            vivienda: {
                pais: vivienda.pais,
                estado: vivienda.estado,
                ciudad: vivienda.ciudad
            },
        });
        res.json({ message: 'Usuarios actualizada' });
        res.status(200).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error" , error});
    }
};

//Borrar usuario
usersCtrl.deleteUser = async (req, res) => {
    try {
        await modelUsuario.findByIdAndDelete(req.params.id);
        res.json({ message: 'usuario eliminado' })
        res.status(200).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error" , error});
    }
};

module.exports = usersCtrl;