const jwt = require('jsonwebtoken');
const secret = 'INISANGATRAHASIA';

function generateToken(payload) {
  return jwt.sign(payload, secret);
}

function verifyToken(token) {
  return jwt.decode(token);
}

module.exports = { generateToken, verifyToken };
