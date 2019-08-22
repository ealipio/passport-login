const passport = require('passport'),
googleStrategy = require('passport-google-oauth20'),
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
  new googleStrategy(
    {
      clientID: key.google.client_id,
      clientSecret: key.google.client_secret,
      callbackURL: '/auth/google/redirect'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(currentuser => {
        if (currentuser) {
          done(null, currentuser);
        } else {
          let newuser = new User();
          newuser.username = profile.displayName;
          newuser.googleId = profile.id;
          newuser.save().then(thenewuser => {
            done(null, thenewuser);
          });
        }
      });
    }
  )
);
