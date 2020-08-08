//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();
//importa las funciones del controlador
const { getArticles, getArticle, deleteArticle, modifyArticle, createArticle } = require('../controllers/articles.controller.js');

//Cuando se visita la ruta api/articles/ con sus diferentes metodos
router.route('/')
    //tomar todos los datos
    .get(getArticles)
    //para guardar un nuevo dato
    .post()

router.route('/:id')
    .get()
    //para guardar un nuevo dato
    .post()
    //para actualizar un dato 
    .put()
    //para eliminar un dato
    .delete()

module.exports = router;