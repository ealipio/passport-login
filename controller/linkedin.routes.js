// localhost:3000/auth/linkedin/<Route>
const Router = require('express').Router(),
  passport = require('passport');
require('./linkedin.setup');

Router.get(
  '/',
  passport.authenticate('linkedin', {
    scope: ['r_basicprofile', 'r_emailaddress']
  })
);

Router.get('/redirect', passport.authenticate('linkedin'), (req, res) => {
  res.redirect('/homepage');
});

module.exports = Router;
