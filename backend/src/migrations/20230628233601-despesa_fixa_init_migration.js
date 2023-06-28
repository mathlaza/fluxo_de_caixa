'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Despesas_Fixas', {
      ID_despesa_fixa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome_despesa: {
        type: Sequelize.STRING(45)
      },
      Data_despesa: {
        type: Sequelize.DATE
      },
      Valor_despesa: {
        type: Sequelize.DECIMAL(12,2)
      },
      Forma_pagamento: {
        type: Sequelize.STRING(45)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Despesas_Fixas');
  }
};
