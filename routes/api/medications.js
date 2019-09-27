const router = require('express').Router();
const { check, validationResult } = require('express-validator');

const Medication = require('../../models/Medication');

// route for adding a general medication to database
router.post(
  '/',
  [
    check('name', 'Medication name is required')
      .not()
      .isEmpty(),
    check('manufacturer', 'Drug manufacturer is a required field')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, manufacturer, sideEffects } = req.body;
    try {
      let medication = await Medication.findOne({ name });

      if (medication) {
        return res.status(400).json({ errors: [{ msg: 'medication exists in database' }] });
      }

      newMedication = new Medication({
        name,
        manufacturer,
        sideEffects
      });

     medication = await newMedication.save();

      res.json(medication);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

// all medications
// add medication to a user
// check your medications (protected route)

module.exports = router;
