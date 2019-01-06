//define mongoose to connect to mongodb
const goose = require('mongoose');
//define schema - container of objects
const Schema = goose.Schema;
 
// create a schema for the user
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
}, { collection : 'user' });

//retrieves mongoose instance so that we can connect to it 
const User = goose.model('User', userSchema);
//export user schema
module.exports = User;