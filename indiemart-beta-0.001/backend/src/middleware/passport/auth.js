const auth = {};

auth.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    console.log('NO ESTAS LOGUEASO');
    
}
