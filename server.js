const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./models");
const routes = require("./routes");

// ===============================Middleware=======================
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================

// ==============================Static Assets=====================
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// ================================================================

// ==============================Database==========================
//DB sync options
let syncOptions = {
  force: false
};

//If app is in dev state, force model sync
if (process.env.NODE_ENV !== "production") {
  syncOptions.force = true;
}

// Add routes, both API and view
app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync(syncOptions).then(function () {
  // Start the API server
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
// =============================================================
