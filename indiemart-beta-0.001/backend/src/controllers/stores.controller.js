
const storesCtrl = {};

//importa el modelo de Tienda
const modelTienda = require('../models/Store');

//Metodos del objeto

//Toma todas las tiendas
storesCtrl.getTiendas = async (req, res) => {
    try {
        const tiendas = await modelTienda.find();
        res.json(tiendas);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({ message: "A ocurrido un error", error });
    }

};

//Crea una tiendaa
storesCtrl.crearTienda = async (req, res) => {
    const {
        nombre,
        descripcion,
        propietario,
        valoracion,
        tipoEntrega,
        celular,
        telefono,
        // url,
        // publicId
    } = req.body;
    console.log(req.file)
    try {
        const nuevaTienda = new modelTienda({
            nombre,
            propietario,
            descripcion,
            valoracion,
            tipoEntrega,
            celular,
            telefono,
            // url,
            // publicId

        });
        await nuevaTienda.save();
        res.json({ message: 'Tienda guardada' })
        res.status(201).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }

};

//Toma una tienda
storesCtrl.getUTienda = async (req, res) => {
    try {
        const tienda = await modelTienda.findById(req.params.id);
        res.json(tienda);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({ message: "A ocurrido un error", error });
    }

};

//Modifica una tienda
storesCtrl.updateTienda = async (req, res) => {
    const {
        nombre,
        descripcion,
        propietario,
        idPropietario,
        valoracion,
        tipoEntrega,
        celular,
        telefono,
    } = req.body;

    // const { url,
    //     publicId
    // } = req.file;

    try {
        await modelTienda.findOneAndUpdate({ _id: req.params.id }, {
            nombre: nombre,
            propietario,
            descripcion,
            idPropietario,
            valoracion,
            tipoEntrega,
            celular,
            telefono,
            url,
            publicId
        });
        console.log(req.params.id, req.body);
        res.json({ message: 'Tienda actualizada' });
        res.status(200).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }
};

//Elimina una tienda
storesCtrl.deleteTienda = async (req, res) => {
    try {
        await modelTienda.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tienda eliminada eliminada' })
        res.status(200).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }
};

module.exports = storesCtrl;