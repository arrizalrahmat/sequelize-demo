'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cars', [
      {
        manufacturer: 'Toyota',
        model: 'Corolla',
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        manufacturer: 'Wuling',
        model: 'Almaz',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        manufacturer: 'Honda',
        model: 'CRV',
        UserId: 1,
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
    await queryInterface.bulkDelete('Cars', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
