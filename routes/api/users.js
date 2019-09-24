require('dotenv').config();
const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

const secret = process.env.jwtSecret;

router.post(
  '/',
  [
    check('firstName', 'First Name is required')
      .not()
      .isEmpty(),
    check('lastName', 'Last Name is required')
      .not()
      .isEmpty(),
    check('password', 'password is required')
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
    check('email', 'Please enter a valid email address').isEmail()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User exists, enter your password' }] });
      }

      user = new User({
        firstName,
        lastName,
        email,
        password
      });

      const salt = await bcrypt.genSalt(15);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id,
          name: {
            firstName: user.firstName
          }
        }
      };

      jwt.sign(payload, secret, { expiresIn: 3600 }, (error, token) => {
        if (error) throw error;
        res.json({ token });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

router.post(
  '/login',
  [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter your password').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: [{ msg: 'Invalid username or password' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Invalid username or password' }] });
      }

      const payload = {
        user: {
          id: user.id,
          name: {
            firstName: user.firstName
          }
        }
      };

      jwt.sign(payload, secret, { expiresIn: 3600 }, (error, token) => {
        if (error) throw error;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  }
);

router.get('/all', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
