// localhost:3000/auth/google/<Route>
const Router = require('express').Router(),
  passport = require('passport');
require('./google.setup');

Router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

Router.get('/redirect', passport.authenticate('google'), (req, res) => {
  //res.redirect('/homepage/'+req.user.id);
  // res.send('logged in)
  res.redirect('/homepage');
});

module.exports = Router;
