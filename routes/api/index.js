const router = require("express").Router();
const medicationRoutes = require("./medications");
const userRoutes = require("./users");

//Medication Routes
router.use("/medications", medicationRoutes);

//User Routes
router.use("/users", userRoutes);

module.exports = router;