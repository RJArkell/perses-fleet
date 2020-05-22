const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Schema for users
var userSchema = mongoose.Schema({
  _id: String,
  Username: { type: String, required: true },
  Rank: { type: String, required: true },
  Password: { type: String, required: true },
  Email: { type: String, required: true }
});

//Schema for news
var newsSchema = mongoose.Schema({
  _id: String,
  Headline: { type: String, required: true },
  Date: { type: Date, required: true },
  Body: { type: String, required: true },
  LinkText: { type: String, required: true },
  Link: { type: String, required: true }
});

//Schema for objectives
var objectiveSchema = mongoose.Schema({
  _id: String,
  Title: { type: String, required: true },
  Details: { type: String, required: true },
  Progress: { type: String, required: true },
  Goal: { type: String, required: true },
  Unit: { type: String, required: true },
  Address: { type: String, required: true },
  Date: { type: String, required: true }
});

//Schema for operations
var operationSchema = mongoose.Schema({
  _id: String,
  Title: { type: String, required: true },
  Details: { type: String, required: true },
  Date: { type: Date, required: true },
  Time: { type: String, required: true },
  Assets: { type: String, required: true },
  Address: { type: String, required: true },
  Crew: [String]
});

//Schema for screenshots
var screenshotSchema = mongoose.Schema({
  _id: String,
  Address: { type: String, required: true },
  User: { type: String, required: true },
  Date: { type: Date, required: true },
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
var News = mongoose.model('News', newsSchema);
var Objective = mongoose.model('Objective', objectiveSchema);
var Operation = mongoose.model('Operation', operationSchema);
var Screenshot = mongoose.model('Screenshot', screenshotSchema);

//Export models
module.exports.User = User;
module.exports.News = News;
module.exports.Objective = Objective;
module.exports.Operation = Operation;
module.exports.Screenshot = Screenshot;