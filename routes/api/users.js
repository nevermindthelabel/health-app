const router = require("express").Router();
const userController = require("../../controllers/userController");
const isAuthenticated = require("../../config/middleware/isAuthenticated.js");
var passport = require("../../config/passport");

//Matches with "/api/user"
router.route("/")
	.post(userController.create);

module.exports = router