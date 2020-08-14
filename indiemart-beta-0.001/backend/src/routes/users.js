//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

//importa las funciones del controlador
const { getUsers, getUser, deleteUser, modifyUser, createUser } = require('../controllers/users.controller.js');

//Cuando se visita la ruta api/users/ con sus diferentes metodos
router.route('/')
    //tomar todos los datos
    .get(getUsers)
    //para guardar un nuevo dato
    .post(createUser)

router.route('/:id')
    .get()
    //para guardar un nuevo dato
    .post()
    //para actualizar un dato 
    .put()
    //para eliminar un dato
    .delete()


module.exports = router;