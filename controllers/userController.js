const { User } = require('../models');
const { comparePassword } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');

class Controller {
  static register(req, res) {
    const { username, email, password } = req.body;
    User.create({ username, email, password })
      .then((result) => {
        const { id, email, username } = result;
        const payload = {
          id,
          email,
          username,
        };
        res.status(201).json(payload);
      })
      .catch((err) => res.status(500).json(err));
  }

  static async login(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      res.status(404).json({ message: 'User Not Found' });

    // console.log(user.dataValues);
    const isCorrect = comparePassword(
      password,
      user.password
    );

    if (!isCorrect)
      res.status(401).json({ message: 'Unauthorized' });

    const payload = {
      id: user.id,
      email: user.email,
      username: user.username,
    };

    const token = generateToken(payload);

    res.status(200).json({ accessToken: token });
  }
}

module.exports = Controller;
