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

}
//Toma un articulo especifico
articlesCtrl.getArticle = async (req, res) => {

}
//Modifica un articulo
articlesCtrl.modifyArticle = async (req, res) => {

}
//Borra un articulo
articlesCtrl.deleteArticle = async (req, res) => {

}

module.exports = articlesCtrl;