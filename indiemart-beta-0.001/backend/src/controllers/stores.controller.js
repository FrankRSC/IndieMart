
const storesCtrl = {};

//importa el modelo de Tienda
const modelTienda = require('../models/Tienda');

//Metodos del objeto

//Toma todas las tiendas
storesCtrl.getTiendas = async (req,res) => {
    const tiendas = await modelTienda.find();
    res.json(tiendas)
};

//Crea una tienda
storesCtrl.crearTienda = async (req,res) => {
    const {nombre, descripcion,propietario } = req.body;
    const nuevaTienda = new modelTienda({
        nombre: nombre,
        descripcion: descripcion,
        propietario: propietario
    });
    await nuevaTienda.save();
    res.json({message: 'Tienda guardada'})

};

//Toma una tienda
storesCtrl.getUTienda = async (req,res) => {
    const tienda = await modelTienda.findById(req.params.id);
    res.json(tienda);
};

//Modifica una tienda
storesCtrl.updateTienda = async (req,res) => {
    const {nombre, descripcion,propietario } = req.body;
    await modelTienda.findOneAndUpdate({_id: req.params.id}, {
        nombre: nombre,
        descripcion: descripcion,
        propietario: propietario
    });
    console.log(req.params.id, req.body);
    res.json({message: 'nota actualizada'})
};

//Elimina una tienda
storesCtrl.deleteTienda = async (req,res) => {
    await modelTienda.findByIdAndDelete(req.params.id);
    res.json({message: 'nota eliminada'})
};

module.exports = storesCtrl;