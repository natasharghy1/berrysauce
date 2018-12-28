const goose = require('mongoose');
const Schema = goose.Schema;
 
// create a schema
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String }
}, { collection : 'user' });
 
const User = goose.model('User', userSchema);
 
module.exports = User;