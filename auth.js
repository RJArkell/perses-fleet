var jwtSecret = 'your_jwt_secret';
var jwt = require('jsonwebtoken');
const passport = require('passport');
require('./passport');

//Generate JWT
function generateJWTToken(user) {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username,
    expiresIn: '7d',
    algorithm: 'HS256'
  });
}

//Post Login
module.exports = (router) => {
  router.post('/api/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: error,
          user: user
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) { res.send(error); }
        var token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
}