//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

const passport = require('passport');
//importa las funciones del controlador
const { getUsers, getUser, deleteUser, modifyUser, createUser } = require('../controllers/users.controller.js');


//Cuando se visita la ruta api/usuarios/ con sus diferentes metodos
router.route('/')
    .get(getUsers)
    .post(createUser)

//LOGIN
router.post(
    '/signin',
    passport.authenticate('local'),
    function(req, res) {
        res.status(200).send(req.user)
    }
)

router.route('/:id')
    .get()
    .post()
    .put()
    .delete()


module.exports = router;