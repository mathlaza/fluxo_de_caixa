'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dim_Fornecedores', {
      ID_fornecedor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nome: {
        type: Sequelize.STRING(45)
      },
      Sobrenome: {
        type: Sequelize.STRING(45)
      },
      Estado: {
        allowNull: true,
        type: Sequelize.CHAR(2)
      },
      Cidade: {
        allowNull: true,
        type: Sequelize.STRING(45)
      },
      Endereço: {
        allowNull: true,
        type: Sequelize.STRING(45)
      },
      Numero: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      Telefone: {
        allowNull: true,
        type: Sequelize.CHAR(11)
      },
      CPF: {
        allowNull: true,
        type: Sequelize.CHAR(11)
      },
      CNPJ: {
        allowNull: true,
        type: Sequelize.CHAR(14)
      },
      CEP: {
        allowNull: true,
        type: Sequelize.CHAR(8)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Dim_Fornecedores');
  }
};
