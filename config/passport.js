var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username and password
passport.use(
  new LocalStrategy(
    // Our user will sign in using a userName
    // {
    //   userName: "username"
    // },
    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.Users.findOne({
        where: {
          userName: username
        }
      }).then(function(dbUser) {
        // If there's no user with the given database
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user, but the password the user gives us is incorrect
        else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser.get());
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // db.Users.findById(id, function(err, user) {
  //   done(err, user);
  // });
  db.Users.findById(id).then(function(user) {
    if (user) {
      done(null, user.get());
    } else {
      done(user.errors, null);
    }
  });
});

// Exporting our configured passport
module.exports = passport;
