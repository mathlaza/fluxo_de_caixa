'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Despesas_Cartoes', {
      ID_compra: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome_compra: {
        type: Sequelize.STRING(45)
      },
      Valor_compra: {
        type: Sequelize.DECIMAL(12,2)
      },
      Parcelas: {
        type: Sequelize.INTEGER
      },
      Data_compra: {
        type: Sequelize.DATE
      },
      Data_fatura: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Despesas_Cartoes');
  }
};
