const articlesCtrl = {};

//importa el modelo de articulos
const modelArticle = require('../models/Article')

//Toma todos los articulos
articlesCtrl.getArticles = async (req, res) => {
    try {
        const Articles = await modelArticle.find();
        res.json(Articles);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({message:"A ocurrido un error" , error});
    }

}
//Crea un articulo
articlesCtrl.createArticle = async (req, res) => {
    const { 
        // idStore, 
        // idArticle, 
        nombre, 
        ingredientes, 
        descripcion, 
        precio, 
        valoracion 
    } = req.body;
    try {
        const nuevoArticulo = new modelArticle ({
            // idStore, 
            // idArticle, 
            nombre, 
            ingredientes, 
            descripcion, 
            precio, 
            valoracion 
        });
        await nuevoArticulo.save();
        res.json({ message: 'Articulo guardado' });
        res.status(201).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error" , error});
    }

}
//Toma un articulo especifico
articlesCtrl.getArticle = async (req, res) => {
    try {
        const articulo = await modelArticle.findById(req.params.id);
        res.json(articulo);
        res.status(200).send();
    } catch (error) {
        res.status(404).json({message:"A ocurrido un error" , error});
    }

}
//Modifica un articulo
articlesCtrl.updateArticle = async (req, res) => {
    const { 
        idStore, 
        idArticle, 
        nombre, 
        ingredientes, 
        descripcion, 
        precio, 
        valoracion 
    } = req.body;
    try {
        await modelArticle.findOneAndUpdate({_id: req.params.id }, {
            idStore, 
            idArticle, 
            nombre, 
            ingredientes, 
            descripcion, 
            precio, 
            valoracion 
        });
        res.json({message: 'Articulo actualizado'});
        res.status(200).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error" , error});
    }
}
//Borra un articulo
articlesCtrl.deleteArticle = async (req, res) => {
    try {
        await modelArticle.findByIdAndDelete(req.params.id);
        res.json({message: 'Aticulo eliminado'});
        res.status(200).send();
    } catch (error) {
        res.status(400).json({message:"A ocurrido un error" , error});
    }
}

module.exports = articlesCtrl;