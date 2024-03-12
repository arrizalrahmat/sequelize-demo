const { verifyToken } = require('../helpers/jwt');
const { Car, User } = require('../models');

class Controller {
  static findAll(req, res) {
    Car.findAll({
      include: User,
      order: [['id', 'ASC']],
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static create(req, res) {
    const { manufacturer, model } = req.body;
    const { accesstoken } = req.headers;

    const { id } = JSON.parse(
      Buffer.from(
        accesstoken.split('.')[1],
        'base64'
      ).toString()
    );

    Car.create({
      manufacturer,
      model,
      UserId: id,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static update(req, res) {
    const { manufacturer, model } = req.body;
    const { id } = req.params;
    const payload = {};
    if (manufacturer) payload.manufacturer = manufacturer;
    if (model) payload.model = model;
    Car.update(payload, {
      where: {
        id: +id,
      },
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static delete(req, res) {
    const { id } = req.params;

    Car.destroy({ where: { id: +id }, returning: true })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = Controller;
