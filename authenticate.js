const passport = require("passport")

var LocalStrategy = require('passport-local').Strategy;

var User = require('./models/user');

//Extrae  usernmae y password de un request entrante
//User.authenticate puede ser usado debido al plugin de mongoose
exports.local = passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());