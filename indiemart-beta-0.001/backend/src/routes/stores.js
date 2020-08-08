//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

//importa las funciones del controlador
const { getTiendas, crearTienda, getUTienda, updateTienda, deleteTienda } = require('../controllers/stores.controller.js');

router.route('/')
    .get(getTiendas)
    .post(crearTienda)

router.route('/:id')
    .get(getUTienda)
    .put(updateTienda)
    .delete(deleteTienda)

//exporta router 
module.exports = router;