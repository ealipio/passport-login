const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: false // only required if its a local user
  },
  facebookid: {
    type: String,
    required: false //only required if its a facebook user
  }
});

module.exports = mongoose.model('User', UserSchema);
