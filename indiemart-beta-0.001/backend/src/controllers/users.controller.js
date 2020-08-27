const User = require('../models/User');



const usersCtrl = {};

// passport.authenticate()
const modelUsuario = require('../models/User');
//Toma todos los usuarios


usersCtrl.getUsers = async (req, res) => {
    try {
        const Usuarios = await modelUsuario.find();
        res.json(Usuarios);
        res.status(200).send();
    } catch (error) {
        res.status(404);
    }
};

//Crea un usuario
usersCtrl.createUser = async (req, res) => {
    const {
        nombre,
        apellidoP,
        apellidoM,
        // fechaNac,
        email,
        contrasena,
        celular,
        // tipoUsuario,
        pais,
        estado,
        ciudad,
    } = req.body;
    console.log(req.body)
    try {
        const emailUser = await User.findOne({ email: email })
        if (emailUser) {
            res.json({ message: 'Este correo ya esta registrado' });
        } else {


            const nuevoUsuario = new modelUsuario({

                nombre,
                apellidoP,
                apellidoM,
                // fechaNac,
                email,
                contrasena,
                celular,
                // tipoUsuario,
                pais,
                estado,
                ciudad,

            });
            //Encripta la contrasena y la guarda en el campo contrasena
            nuevoUsuario.contrasena = await nuevoUsuario.encryptPassword(contrasena);
            await nuevoUsuario.save();
            res.json({ message: 'Usuario gurdado' });
            res.status(201).send();
        }
    } catch (error) {
        res.status(400);
    }
};

//Toma un usuario
usersCtrl.getUser = async (req, res) => {

    try {
        const usuario = await modelUsuario.findById(req.params.id);
        res.json(usuario);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({ message: "A ocurrido un error", error });
    }
};


//Modificar usuario
usersCtrl.modifyUser = async (req, res) => {
    const {
        nombre,
        apellidoP,
        apellidoM,
        // fechaNac,
        email,
        contrasena,
        celular,
        // tipoUsuario,
        pais,
        estado,
        ciudad,
    } = req.body;
    try {
        await modelUsuario.findOneAndUpdate({ _id: req.params.id }, {
            nombre,
            apellidoP,
            apellidoM,
            // fechaNac,
            email,
            contrasena,
            celular,
            // tipoUsuario,
            pais,
            estado,
            ciudad,
        });
        res.json({ message: 'Usuarios actualizada' });
        res.status(200).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }
};

//Borrar usuario
usersCtrl.deleteUser = async (req, res) => {
    try {
        await modelUsuario.findByIdAndDelete(req.params.id);
        res.json({ message: 'usuario eliminado' })
        res.status(200).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }
};

module.exports = usersCtrl;