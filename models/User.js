const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  medications: {
    name: [
      {
        type: String
      }
    ],
    sideEffects: [
      {
        type: String
      }
    ]
  }
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
