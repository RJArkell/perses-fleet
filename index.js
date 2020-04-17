const express = require('express'),
  app = express(),
  sslRedirect = require('heroku-ssl-redirect'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  Models = require('./models.js'),
  passport = require('passport'),
  path = require("path"),
  { check, validationResult } = require('express-validator');
require('./passport');

//Imported models
const Users = Models.User,
  Newsposts = Models.Newspost;

mongoose.connect('mongodb+srv://Admin:reaver3@arnketel-69akm.azure.mongodb.net/PersesFleet?retryWrites=true&w=majority',
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

//Enable Heroku SSL
app.use(sslRedirect());

app.use(bodyParser.json());
app.use(cors());

app.get("/api/", (req, res) => {
  res.send("Welcome to the home of Perses Fleet.");
});

//Get news posts
app.get('/api/news', (req, res) => {
  Newsposts.find()
    .then((newsposts) => { res.status(201).json(newsposts) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Serve React App
app.use(express.static(path.join(__dirname, "client", 'dist')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "client", 'dist', 'index.html'));
});

//Error catching
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Port listening
var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function () {
  console.log("Listening on Port " + port);
});