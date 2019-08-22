const express = require('express'),
  app = express(),
  passport = require('passport'),
  mongoose = require('mongoose'),
  session = require('express-session'),
  bodyParser = require('body-parser'),
  facebookRoutes = require('./controller/facebook.routes'),
  googleRoutes = require('./controller/google.routes'),
  linkedinRoutes = require('./controller/linkedin.routes'),
  localUserRoutes = require('./controller/localuser.routes'),
  key = require('./key');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(session({ secret: key.secret }));
app.use(passport.initialize());
app.use(passport.session());

require('./controller/facebook.setup');
require('./controller/google.setup');
require('./controller/linkedin.setup');

//-- mongo connection -------------------------------
mongoose.connect(
  key.connectionMongoDB,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log('connected');
    }
  }
);
//-----------------------------------------
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/auth/facebook/', facebookRoutes); // localhost:3000/auth/facebook/<Route>
app.use('/auth/google/', googleRoutes);  // localhost:3000/auth/google/<Route>
app.use('/auth/linkedin/', linkedinRoutes);  // localhost:3000/auth/google/<Route>
app.use('/auth/localuser/', localUserRoutes); // localhost:3000/auth/localuser/<Route>

app.get('/homepage', (req, res) => {
  // req.session.localUser
  // req.user
  if (req.user) {
    res.send(req.user);
  } else if (req.session.localUser) {
    res.send(req.session.localUser);
  } else {
    res.redirect('/homepage');
  }
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/');
});
