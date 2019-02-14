var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('./models/user');

exports.local = passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());