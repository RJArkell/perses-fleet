const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Schema for users
var userSchema = mongoose.Schema({
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true },
});

//Bcrypt password encryption
userSchema.statics.hashPassword = function (password) {
  return bcrypt.hashSync(password, 10);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.Password);
};

//Schema models
var User = mongoose.model('User', userSchema);

//Export models
module.exports.User = User;