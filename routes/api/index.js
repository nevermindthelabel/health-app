const router = require('express').Router();
const users = require('./users');
const medications = require('./medications');

router.use('/users', users);
router.use('/medications', medications);

module.exports = router;
