const User = require('../../models/User');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy({
    usernameField: 'username',
}, async (username, contrasena, done) => {
    const user = await User.findOne({

        email: username

    })
    if (!user) {
        return done(null, false, { message: 'Usuario no encontrado' });
    } else {
        bcrypt.compare(contrasena, user.contrasena, (err, match) => {
            console.log(match)
            if (match) {
                return done(null, user)
            } else {
                return done(null, false, console.log('Incorrect password or user'))
            }
        })
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    })
});
