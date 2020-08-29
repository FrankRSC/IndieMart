//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

const { isAuthenticated } = require('../middleware/passport/auth');

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
    passport.authenticate('local',{
        successRedirect: '/usuarios/user'
    })
)

// router.get('/auth',isAuthenticated, (req, res) => {
//     res.status(200)
// })

//se llama en la navbar
router.get(
    '/user',
    isAuthenticated,
    (req, res) => {
        console.log(req)
    }
)


router.get(
    '/logout', (req, res) => {
        req.logout();
        res.status(100)
    }
)

// router.get('/info', (req, res) => {
//     res.send(req.user);
// })

router.route('/:id')
    .get()
    .post()
    .put()
    .delete()


module.exports = router;