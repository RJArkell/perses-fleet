const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Schema for users
var userSchema = mongoose.Schema({
  _id: String,
  Username: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true }
});

//Schema for news
var newsSchema = mongoose.Schema({
  _id: String,
  Title: { type: String, required: true },
  Body: { type: String, required: true }
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
var Newspost = mongoose.model('Newspost', newsSchema);

//Export models
module.exports.User = User;
module.exports.Newspost = Newspost;