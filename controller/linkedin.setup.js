const passport = require('passport'),
  // linkedinStrategy = require('passport-linkedin'),
  //linkedInStrategy = require('passport-linkedin').Strategy,
  linkedInStrategy = require('passport-linkedin-oauth2').Strategy,
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
  new linkedInStrategy(
    {
      clientID: key.linkedin.client_id,
      clientSecret: key.linkedin.client_secret,
      callbackURL: '/auth/linkedin/redirect',
      state: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('+++++++++++++++++++++++++', profile);
      User.findOne({ linkedinId: profile.id }).then(currentuser => {
        if (currentuser) {
          done(null, currentuser);
        } else {
          let newuser = new User();
          newuser.username = profile.displayName;
          newuser.linkedinId = profile.id;
          newuser.save().then(thenewuser => {
            done(null, thenewuser);
          });
        }
      });
    }
  )
);
