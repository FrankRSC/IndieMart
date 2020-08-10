const orderCtrl = {};


const modelOrders = require('../models/Order');

//Toma todas las ordenes
orderCtrl.getOrders = async (req, res) => {

    try {
        const orders = await modelOrders.find();
        res.json(orders);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({ message: "A ocurrido un error", error });
    }

}

//Crea una orden
orderCtrl.createOrder = async (req, res) => {
    const { idNegocio, idArticulo, idComprador, nombreProd, descripcion, total, formaPago, dirEntrega} = req.body;
    try {
        const nuevaOrden = modelOrders({
            idNegocio,
            idArticulo,
            idComprador,
            nombreProd,
            descripcion,
            total,
            formaPago,
            dirEntrega
        });
        await nuevaOrden.save();
        res.json({ message: 'Orden guardada' });
        res.status(201).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }
}

//Toma una orden
orderCtrl.getOrder = async (req, res) => {

    try {
        const orden = await modelOrders.findById(req.params.id);
        res.json(orden);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({ message: "A ocurrido un error", error });
    }

}

//Modifica una orden
orderCtrl.modifyOrder = async (req, res) => {

    const { idNegocio, idArticulo, idComprador, nombreProd, descripcion, total, formaPago, dirEntrega} = req.body;
    try {
        await modelTienda.findOneAndUpdate({ _id: req.params.id }, {
            idNegocio,
            idArticulo,
            idComprador,
            nombreProd,
            descripcion,
            total,
            formaPago,
            dirEntrega
        });
        await nuevaOrden.save();
        res.json({ message: 'Orden guardada' });
        res.status(200).send();
    } catch (error) {
        res.status(400).json({ message: "A ocurrido un error", error });
    }



}

module.exports = orderCtrl;
