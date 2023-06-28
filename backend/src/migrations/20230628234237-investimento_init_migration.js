'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Investimentos', {
      ID_investimento: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Tipo_investimento: {
        type: Sequelize.STRING(45)
      },
      Valor_atual: {
        type: Sequelize.DECIMAL(12,2)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Investimentos');
  }
};
