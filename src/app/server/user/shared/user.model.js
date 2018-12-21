const goose = require('mongoose');
const bcrypt = require('bcrypt.js');
const jwt = require('jsonwebtoken');

var userSchema = new goose.Schema({

    username: {
        type: string,
        required: "NOT NULL",
        unique: true
    },
    password: {
        type: string,
        required: "NOT NULL"
    },
    email: {
        type: string,
        required: "FILL OUT",
        unique: true
    },
    firstName: {
        type: string
    },
    lastName: {
        type: string
    },
    saltSecret: String
});

userSchema.methods.verifyPassword = function (password) {

  return bcrypt.comparesync(password, this.password);
};

//json parser into webtocken
userSchema.methods.generateJwt + function () {
    return jwt.sign({_id: this._id},
//parse to encode
process.env.JWT_SECRET);

}

goose.model('User', userSchema);