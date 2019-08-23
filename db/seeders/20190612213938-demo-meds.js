'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Medications', [{
      name: 'Seroquel',
      dosage: 50,
      perDay: 2,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 1
    }, {
      name: 'Xanax',
      dosage: 25,
      perDay: 4,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date(),
      UserId: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};