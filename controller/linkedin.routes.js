// localhost:3000/auth/linkedin/<Route>
const Router = require('express').Router(),
  passport = require('passport');
require('./linkedin.setup');

Router.get(
  '/',
  passport.authenticate('linkedin', {
    scope: ['r_emailaddress', 'r_liteprofile']
  })
);

Router.get('/redirect', passport.authenticate('linkedin', {state:'HolyMoly'}), (req, res) => {
  res.redirect('/homepage');
});

module.exports = Router;
