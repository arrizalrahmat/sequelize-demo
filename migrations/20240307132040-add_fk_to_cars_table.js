'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Cars', 'UserId', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.addConstraint('Cars', {
      fields: ['UserId'],
      type: 'foreign key',
      name: 'user_fk',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      'Cars',
      'user_fk'
    );
    await queryInterface.removeColumn('Cars', 'UserId');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
