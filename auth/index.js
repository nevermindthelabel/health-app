require('dotenv').config();
const jwt = require('jsonwebtoken');
const secret = process.env.jwtsecret;
console.log(secret);

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ msg: 'No token, unauthorized' });
  }
  try {
    const loggedIn = jwt.verify(token, secret);
    req.user = loggedIn.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: 'Token not valid' });
  }
};
