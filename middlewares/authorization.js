const { Car } = require('../models');

function authorization(req, res, next) {
  const url = req.originalUrl.split('/');
  const carId = +url[url.length - 1];
  const authenticatedUsers = res.locals.user;

  Car.findByPk(carId).then((data) => {
    if (data) {
      if (data.UserId === authenticatedUsers.id) {
        next();
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  });
}

module.exports = { authorization };
