const articlesCtrl = {};

//importa el modelo de articulos
const modelArticle = require('../models/Article')

//Toma todos los articulos
articlesCtrl.getArticles = async (req, res) => {
    const Articles = await modelArticle.find();
    res.json(Articles);
}
//Crea un articulo
articlesCtrl.createArticle = async (req, res) => {
    const { 
        id_store, 
        id_article, 
        nombre, 
        ingredientes, 
        decripcion, 
        precio, 
        valoracion 
    } = req.body;
    const nuevoArticulo = new modelArticle ({
        id_store, 
        id_article, 
        nombre, 
        ingredientes, 
        decripcion, 
        precio, 
        valoracion 
    });
    await nuevoArticulo.save();
    res.json({ message: 'Articulo guardado' });
}
//Toma un articulo especifico
articlesCtrl.getArticle = async (req, res) => {
    const articulo = await modelArticle.findById(req.params.id);
    res.json(articulo);
}
//Modifica un articulo
articlesCtrl.updateArticle = async (req, res) => {
    const { 
        id_store, 
        id_article, 
        nombre, 
        ingredientes, 
        decripcion, 
        precio, 
        valoracion 
    } = req.body;
    await modelArticle.findOneAndUpdate({_id: req.params.id }, {
        id_store, 
        id_article, 
        nombre, 
        ingredientes, 
        decripcion, 
        precio, 
        valoracion 
    });
    res.json({message: 'Articulo actualizado'});
}
//Borra un articulo
articlesCtrl.deleteArticle = async (req, res) => {
    await modelArticle.findByIdAndDelete(req.params.id);
    res.json({message: 'Aticulo eliminado'});
}

module.exports = articlesCtrl;