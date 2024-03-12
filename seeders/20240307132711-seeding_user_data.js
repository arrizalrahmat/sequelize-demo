'use strict';
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        username: 'arrizalrk',
        email: 'ark@mail.com',
        password: 'ark123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'bambangbb',
        email: 'bambang@mail.com',
        password: 'ark123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ujang',
        email: 'ujang@mail.com',
        password: 'ujang123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
