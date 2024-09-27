'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [
      { name: 'Россия'},
      { name: 'Казахстан'},
      { name: 'Беларусь'},
      { name: 'Узбекистан'},
      { name: 'Кыргызстан'},
      { name: 'Таджикистан'},
      { name: 'Армения'},
      { name: 'Азербайджан'},
      { name: 'Молдова'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  }
};
