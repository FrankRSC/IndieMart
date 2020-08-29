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
        return done(null, false, console.log('no se encontro el usuario'));
    } else {
        const match = await bcrypt.compare(contrasena, user.contrasena)
        if (match) {
            return done(null, user)
        } else {
            return done(null, false, console.log('Incorrect password or user'))
        }

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
