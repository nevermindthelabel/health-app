const router = require("express").Router();
const medicationController = require("../../controllers/medicationController");

//Matches with "/api/medications"
router.route("/")
	.post(medicationController.create);

module.exports = router;