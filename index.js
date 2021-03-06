const express = require('express'),
  app = express(),
  sslRedirect = require('heroku-ssl-redirect'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  Models = require('./models.js'),
  passport = require('passport'),
  uuid = require('uuid'),
  path = require("path"),
  { check, validationResult } = require('express-validator');
require('./passport');

//Imported models
const Users = Models.User,
  News = Models.News,
  Objectives = Models.Objective,
  Operations = Models.Operation,
  Screenshots = Models.Screenshot;

//Connect to database
mongoose.connect('mongodb+srv://Admin:reaver3@arnketel-69akm.azure.mongodb.net/PersesFleet?retryWrites=true&w=majority',
  { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true });

//Enable Heroku SSL
app.use(sslRedirect());

app.use(bodyParser.json());
app.use(cors());

//Authentication
var auth = require('./auth')(app);

app.get("/api", (req, res) => {
  res.send("Welcome to the home of Perses Fleet.");
});

//Get news posts
app.get('/api/news', (req, res) => {
  News.find()
    .then((news) => { res.status(201).json(news) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get specific news post
app.get('/api/news/:_id', (req, res) => {
  News.findOne({ _id: req.params._id })
    .then((news) => { res.json(news) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get objectives
app.get('/api/objectives', (req, res) => {
  Objectives.find()
    .then((Objectives) => { res.status(201).json(Objectives) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get specific objective
app.get('/api/objectives/:_id', (req, res) => {
  Objectives.findOne({ _id: req.params._id })
    .then((objective) => { res.json(objective) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get operations
app.get('/api/operations', (req, res) => {
  Operations.find()
    .then((Operations) => { res.status(201).json(Operations) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get specific operation
app.get('/api/operations/:_id', (req, res) => {
  Operations.findOne({ _id: req.params._id })
    .then((operation) => { res.json(operation) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get screenshots
app.get('/api/screenshots', (req, res) => {
  Screenshots.find()
    .then((Screenshots) => { res.status(201).json(Screenshots) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get specific screenshot
app.get('/api/screenshots/:_id', (req, res) => {
  Screenshots.findOne({ _id: req.params._id })
    .then((screenshot) => { res.json(screenshot) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get users
app.get('/api/users', (req, res) => {
  Users.find()
    .then((users) => { res.status(201).json(users) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Get specific user
app.get('/api/users/:Username', (req, res) => {
  Users.findOne({ Username: req.params.Username })
    .then((user) => { res.json(user) })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error: " + err);
    });
});

//Edit user
app.patch('/api/users/:Username', [
  check('Email', "Email does not appear to be valid").isEmail()],
  (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }); }
    Users.findOneAndUpdate({ Username: req.params.Username }, {
      $set: {
        Email: req.body.Email
      }
    },
      { new: true },
      (err, updatedUser) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedUser)
        }
      })
  }
);

//Edit user password
app.patch('/api/users/:Username/password', [
  check('Password', "Password is required").not().isEmpty()],
  (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }); }
    var hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOneAndUpdate({ Username: req.params.Username }, {
      $set: {
        Password: hashedPassword
      }
    },
      { new: true },
      (err, updatedUser) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedUser)
        }
      })
  }
);

//Create user
app.post('/api/users', [
  check('Username', "Username is required"),
  check('Password', "Password is required").not().isEmpty(),
  check('Email', "Email does not appear to be valid").isEmail()],
  (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) { return res.status(422).json({ errors: errors.array() }); }
    var hashedPassword = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username })
      .then((user) => {
        if (user) {
          return res.status(400).send("Username " + req.body.Username + " is already in use.");
        } else {
          Users.create({
            _id: uuid.v4(),
            Username: req.body.Username,
            Rank: req.body.Rank,
            Password: hashedPassword,
            Email: req.body.Email,
            Status: req.body.Status,
            Commission: req.body.Commission
          })
            .then((user) => { res.status(201).json(user) })
            .catch((err) => {
              console.error(err);
              res.status(500).send("Error: " + err);
            });
        }
      }).catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Delete user
app.delete('/api/users/:Username',
  (req, res) => {
    Users.findOneAndRemove({ _id: req.params._id })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Create news post
app.post('/api/news',
  (req, res) => {
    News.create({
      _id: uuid.v4(),
      Headline: req.body.Headline,
      Body: req.body.Body,
      Date: req.body.Date,
      LinkText: req.body.LinkText,
      Link: req.body.Link
    })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Edit news post
app.patch('/api/news/:_id',
  (req, res) => {
    News.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        Headline: req.body.Headline,
        Body: req.body.Body,
        LinkText: req.body.LinkText,
        Link: req.body.Link
      }
    },
      { new: true },
      (err, updatedNews) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedNews)
        }
      })
  }
);

//Delete news post
app.delete('/api/news/:_id',
  (req, res) => {
    News.findOneAndRemove({ _id: req.params._id })
      .then((news) => { res.status(201).json(news) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Create operation
app.post('/api/operations',
  (req, res) => {
    Operations.create({
      _id: uuid.v4(),
      Title: req.body.Title,
      Details: req.body.Details,
      Date: req.body.Date,
      Time: req.body.Time,
      Assets: req.body.Assets,
      Address: req.body.Address,
      Crew: req.body.Crew
    })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Edit operation
app.patch('/api/operations/:_id',
  (req, res) => {
    Operations.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        Title: req.body.Title,
        Details: req.body.Details,
        Date: req.body.Date,
        Time: req.body.Time,
        Assets: req.body.Assets,
        Address: req.body.Address
      }
    },
      { new: true },
      (err, updatedOperation) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedOperation)
        }
      })
  }
);

//Delete operation
app.delete('/api/operations/:_id',
  (req, res) => {
    Operations.findOneAndRemove({ _id: req.params._id })
      .then((operation) => { res.status(201).json(operation) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Create objective
app.post('/api/objectives',
  (req, res) => {
    Objectives.create({
      _id: uuid.v4(),
      Title: req.body.Title,
      Details: req.body.Details,
      Progress: req.body.Progress,
      Goal: req.body.Goal,
      Address: req.body.Address,
      Unit: req.body.Unit,
      Date: req.body.Date
    })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Edit objective
app.patch('/api/objectives/:_id',
  (req, res) => {
    Objectives.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        Title: req.body.Title,
        Details: req.body.Details,
        Progress: req.body.Progress,
        Goal: req.body.Goal,
        Address: req.body.Address,
        Unit: req.body.Unit
      }
    },
      { new: true },
      (err, updatedObjective) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedObjective)
        }
      })
  }
);

//Delete objective
app.delete('/api/objectives/:_id',
  (req, res) => {
    Objectives.findOneAndRemove({ _id: req.params._id })
      .then((objective) => { res.status(201).json(objective) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Create commendation
app.post('/api/commendations',
  (req, res) => {
    Commendations.create({
      _id: uuid.v4(),
      Name: req.body.Name,
      Details: req.body.Details,
      Address: req.body.Address
    })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Sign up for operation
app.post('/api/operations/:_id/crew/:Username', (req, res) => {
  Operations.findOneAndUpdate({ _id: req.params._id }, {
    $push: { Crew: req.params.Username }
  },
    { new: true },
    (err, updatedCrew) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedCrew)
      }
    })
});

//Back out of operation
app.delete('/api/operations/:_id/crew/:Username', (req, res) => {
  Operations.findOneAndUpdate({ _id: req.params._id }, {
    $pull: { Crew: req.params.Username }
  },
    { new: true },
    (err, updatedCrew) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error: " + err);
      } else {
        res.json(updatedCrew)
      }
    })
});

//Create screenshot
app.post('/api/screenshots',
  (req, res) => {
    Screenshots.create({
      _id: uuid.v4(),
      Address: req.body.Address,
      User: req.body.User,
      Date: req.body.Date,
    })
      .then((user) => { res.status(201).json(user) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

//Edit screenshot
app.patch('/api/screenshots/:_id',
  (req, res) => {
    Screenshots.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        Address: req.body.Address,
        User: req.body.User,
      }
    },
      { new: true },
      (err, updatedScreenshot) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error: " + err);
        } else {
          res.json(updatedScreenshot)
        }
      })
  }
);

//Delete screenshot
app.delete('/api/screenshots/:_id',
  (req, res) => {
    Screenshots.findOneAndRemove({ _id: req.params._id })
      .then((screenshot) => { res.status(201).json(screenshot) })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
      });
  }
);

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