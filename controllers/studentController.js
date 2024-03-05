const { Student } = require('../models');

class Controller {
  static findAll(req, res) {
    const { gender } = req.query;
    const options = {};
    if (gender) {
      options.gender = gender;
    }
    Student.findAll({
      where: options,
      order: [['id', 'ASC']],
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static findOne(req, res) {
    const { id } = req.params;
    Student.findOne({
      where: { id: +id },
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
    // Student.findByPk(id)
    //   .then((data) => res.status(200).json(data))
    //   .catch((err) => res.status(500).json(err));
  }

  static create(req, res) {
    const { name, gender } = req.body;
    const payload = {
      name,
      gender,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    Student.create(payload)
      .then((data) => res.status(201).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static update(req, res) {
    const { id } = req.params;
    const { name, gender } = req.body;
    const payload = {
      updatedAt: new Date(),
    };

    if (name) {
      payload.name = name;
    }

    if (gender) {
      payload.gender = gender;
    }

    Student.update(payload, {
      where: {
        id: +id,
      },
      returning: true,
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }

  static delete(req, res) {
    const { id } = req.params;

    Student.destroy({ where: { id }, returning: true })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = Controller;
