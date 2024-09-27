'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Находим страны по их названиям
    const countries = await queryInterface.sequelize.query(
      `SELECT id, name FROM "Countries";`
    );

    const countriesRows = countries[0];

    const findCountryId = (name) => countriesRows.find(country => country.name === name).id;

    // Заполняем города
    return queryInterface.bulkInsert('Cities', [
      // Города России
      { name: 'Москва', countryId: findCountryId('Россия'), },
      { name: 'Санкт-Петербург', countryId: findCountryId('Россия'), },
      
      // Города Казахстана
      { name: 'Алматы', countryId: findCountryId('Казахстан'), },
      { name: 'Нур-Султан', countryId: findCountryId('Казахстан'), },

      // Города Беларуси
      { name: 'Минск', countryId: findCountryId('Беларусь'), },

      // Города Узбекистана
      { name: 'Ташкент', countryId: findCountryId('Узбекистан'), },

      // Города Кыргызстана
      { name: 'Бишкек', countryId: findCountryId('Кыргызстан'), },

      // Города Таджикистана
      { name: 'Душанбе', countryId: findCountryId('Таджикистан'), },

      // Города Армении
      { name: 'Ереван', countryId: findCountryId('Армения'), },

      // Города Азербайджана
      { name: 'Баку', countryId: findCountryId('Азербайджан'), },

      // Города Молдовы
      { name: 'Кишинев', countryId: findCountryId('Молдова'), }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
