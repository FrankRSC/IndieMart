//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

//importa las funciones del controlador
const { getUsers, getUser, deleteUser, modifyUser, createUser } = require('../controllers/users.controller.js');

//Cuando se visita la ruta api/users/ con sus diferentes metodos
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get()
    .post()
    .put()
    .delete()


module.exports = router;