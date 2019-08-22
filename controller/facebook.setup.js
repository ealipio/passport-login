const passport = require('passport'),
  facebookStrategy = require('passport-facebook'),
  key = require('../key'),
  User = require('../model/user.model');

passport.serializeUser((user, done) => {
  // save userid in a session
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new facebookStrategy(
    {
      clientID: key.facebook.client_id,
      clientSecret: key.facebook.client_secret,
      callbackURL: '/auth/facebook/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookid: profile.id }).then(currentuser => {
        if (currentuser) {
          done(null, currentuser);
        } else {
          let newuser = new User();
          newuser.username = profile.displayName;
          newuser.facebookid = profile.id;
          newuser.save().then(thenewuser => {
            done(null, thenewuser);
          });
        }
      });
    }
  )
);
