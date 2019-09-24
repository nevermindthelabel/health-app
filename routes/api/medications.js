const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Medication route');
});

// all medications
// add medication to a user
// check your medications (protected route)

module.exports = router;
