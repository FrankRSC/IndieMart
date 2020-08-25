//importa la funcion Router de express
const { Router } = require('express');

//Guarda el objeto que devuelve router
const router = Router();

const passport = require('../middleware/passport');
//importa las funciones del controlador
const { getUsers, getUser, deleteUser, modifyUser, createUser,getLogged } = require('../controllers/users.controller.js');


//Cuando se visita la ruta api/users/ con sus diferentes metodos
router.route('/')
    .get(getUsers)
    .post(createUser)

//LOGIN
router.post(
    '/signin',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local',{
        successRedirect: '',
        failureRedirect: '',
    }),
    (req, res) => {
        console.log('logged in', req.user);
        const userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/user', async (req, res) => {
        res.send(req.user);
    }
)


router.route('/:id')
    .get()
    .post()
    .put()
    .delete()


module.exports = router;