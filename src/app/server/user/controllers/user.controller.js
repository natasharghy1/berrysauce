const goose = require('mongoose');
const User = mongoose.model('users');
const passport = require('passport');

//register user into mongodb
module.exports.register = (req, res, next) => {

    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.email = req.body.email;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.save((err, doc) => {
     if(!err)
     res.send(doc);
     else {
         if(err.code == 11000)
         res.status(422).send(["Duplicate"]);
        else 
        return next(err);
        }
    });
}

module.exports.authenticate = (req, res, next) =>
 {
     passport.authenticate('local', (err, user, info) => {
        //if error is thanks to myself
        if(err) return res.status(400).json(err);
        //or user
        else if (user) return res.status(200).json({ "token": user.generateJwt()});
        else return res.status(404).json(info);
     });
 }