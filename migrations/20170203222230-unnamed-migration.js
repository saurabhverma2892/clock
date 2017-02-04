'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    queryInterface.createTable(
      'time_zones',
      {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        time_zone: Sequelize.STRING,
        name: Sequelize.STRING
      }
    )

    queryInterface.bulkInsert('time_zones', [
      {
        time_zone: '+5.5',
        name: 'India',
      },
      {
        time_zone: '-7',
        name: 'Mexico',
      },
      {
        time_zone: '+2',
        name: 'Germany',
      }
    ]);     

  },

  down: function (queryInterface, Sequelize,done) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
