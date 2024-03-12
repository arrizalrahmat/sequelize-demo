'use strict';
const { Model } = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Car);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: (user) => {
          const hashedPassword = hashPassword(
            user.password
          );
          user.password = hashedPassword;
        },
        beforeBulkCreate: (users) => {
          users.forEach((user) => {
            const hashedPassword = hashPassword(
              user.password
            );
            user.password = hashedPassword;
          });
        },
      },
    }
  );
  return User;
};
