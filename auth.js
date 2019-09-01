require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.jwtsecret;

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Not Authorized' });
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
