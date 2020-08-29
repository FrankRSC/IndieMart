const auth = {};

auth.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    console.log('NO ESTA LOGUEADO')

}

module.exports = auth;