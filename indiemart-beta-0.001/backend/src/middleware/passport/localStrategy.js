const User = require('../../models/User');

const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'username' // not necessary, DEFAULT
	},
	function(username, password, done) {
		User.findOne({ email: username }, (err, user) => {
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect username' })
			}
			if (!user.matchPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy

// const LoginStrategy = new Strategy({usernameField: 'email'}, async (email, password, done) => {
    
//     console.log(username)
//     const user = await User.findOne({

//         username: email

//     });
//     if(!user){
//         return done(null, false, {message: 'Usuario no encontrado'});
//     }else{
//         const match = await user.matchPassword(password);
//         if(match){
//             return done(null, user);
//         }else{
//             return done(null, false, {message:'Contrasena incorrecta'})
//         }
//     }


// });

// module.exports = LoginStrategy