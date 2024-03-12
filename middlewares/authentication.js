const { verifyToken } = require('../helpers/jwt');
const { User } = require('../models');

function authentication(req, res, next) {
  try {
    const token = req.get('accessToken');
    const userDecoded = verifyToken(token);
    User.findOne({ where: { id: userDecoded.id } })
      .then((user) => {
        if (!user) {
          return res
            .status(401)
            .json({ message: 'User not found' });
        }
        res.locals.user = user;
        return next();
      })
      .catch((err) => res.status(401).json(err));
  } catch (error) {
    res.status(401).json(error);
  }
}

module.exports = { authentication };
