const User = require('../../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const strategy = new LocalStrategy(
    {
        usernameField: 'username' // not necessary, DEFAULT
    },
    async function (username, contrasena, done) {
        const user = await User.findOne({ email: username },
        )
        if (!user) {
            return done(null, false, console.log('Incorrect password or user'))
        } else {
            bcrypt.compare(contrasena,user.contrasena, (err, match) => {
                console.log(match)
                if(match) {
                    return done(null, user)
                }else{
                    return done(null, false, console.log('Incorrect password or user'))
                }
            })
        }
    }
)





module.exports = strategy

// const LoginStrategy = new Strategy({usernameField: 'email'}, async (email, password, done) => {

//     console.log(username)
//     const user = await User.findOne({

//         username: email

//     });
//     if(!user){
//         return done(null, false, {console.log(object): 'Usuario no encontrado'});
//     }else{
//         const match = await user.matchPassword(password);
//         if(match){
//             return done(null, user);
//         }else{
//             return done(null, false, {console.log(object):'Contrasena incorrecta'})
//         }
//     }


// });

// module.exports = LoginStrategy