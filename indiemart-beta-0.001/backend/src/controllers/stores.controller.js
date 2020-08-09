
const storesCtrl = {};

//importa el modelo de Tienda
const modelTienda = require('../models/Store');

//Metodos del objeto

//Toma todas las tiendas
storesCtrl.getTiendas = async (req, res) => {
    const tiendas = await modelTienda.find();
    res.json(tiendas)
};

//Crea una tiendaa
storesCtrl.crearTienda = async (req, res) => {
    const {
        nombre,
        descripcion,
        propietario,
        id_propietario,
        valoracion,
        tipo_entrega,
        contacto
    } = req.body;
    const nuevaTienda = new modelTienda({
        nombre: nombre,
        propietario: propietario,
        descripcion: descripcion,
        id_propietario: id_propietario,
        valoracion: valoracion,
        tipo_entrega: {
            domicilio: tipo_entrega.domicilio,
            pida_recoja: tipo_entrega.pida_recoja
        },
        contacto: {
            celular: contacto.celular,
            telefono: contacto.telefono
        }
    });
    await nuevaTienda.save();
    res.json({ message: 'Tienda guardada' })
};

//Toma una tienda
storesCtrl.getUTienda = async (req, res) => {
    const tienda = await modelTienda.findById(req.params.id);
    res.json(tienda);
};

//Modifica una tienda
storesCtrl.updateTienda = async (req, res) => {
    const {
        nombre,
        descripcion,
        propietario,
        id_propietario,
        valoracion,
        tipo_entrega,
        contacto
    } = req.body;
    await modelTienda.findOneAndUpdate({ _id: req.params.id }, {
        nombre: nombre,
        propietario: propietario,
        descripcion: descripcion,
        id_propietario: id_propietario,
        valoracion: valoracion,
        tipo_entrega: {
            domicilio: tipo_entrega.domicilio,
            pida_recoja: tipo_entrega.pida_recoja
        },
        contacto: {
            celular: contacto.celular,
            telefono: contacto.telefono
        }
    });
    console.log(req.params.id, req.body);
    res.json({ message: 'Tienda actualizada' })
};

//Elimina una tienda
storesCtrl.deleteTienda = async (req, res) => {
    await modelTienda.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tienda eliminada eliminada' })
};

module.exports = storesCtrl;