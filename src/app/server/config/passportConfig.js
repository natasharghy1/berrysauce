const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const goose = require('mongoose');

//interact with mongodb
var User = goose.model('users');

passport.use(
    new localStrategy({usernameField:'email'},
    (username, password, done) => {
        User.findOne({email: username},
            (err, user) => {
                if(err)
                return done(err);
                //if user not present in db 
                else if (!user)
                return done(null, false, {message: "Email is not registered"});
                //wrong pw
                else if (!user.verifyPassword(password))
                return done(null, false, {message: "Password incorrect"});
            else 
            return done(null, user);
            });
    })
    //check user details
);

