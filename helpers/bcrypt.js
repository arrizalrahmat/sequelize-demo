const bcrypt = require('bcrypt');

function hashPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function comparePassword(userPassword, hashedPassword) {
  return bcrypt.compareSync(userPassword, hashedPassword);
}

module.exports = { hashPassword, comparePassword };
