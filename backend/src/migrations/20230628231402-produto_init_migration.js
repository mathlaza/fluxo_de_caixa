'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Dim_Produtos', {
      ID_produto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_fornecedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'ID_fornecedor',
        references: {
          model: 'Dim_Fornecedores',
          key: 'ID_fornecedor',
        }
      },
      Nome_produto: {
        type: Sequelize.STRING(45)
      },
      Preço_desejado: {
        type: Sequelize.DECIMAL(12,2)
      },
      Cod_produto: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      Categoria: {
        allowNull: true,
        type: Sequelize.STRING(45)
      },
      Custo_produto: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_energia: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_agua: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_aluguel: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_transporte: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_tempo: {
        allowNull: true,
        type: Sequelize.DECIMAL(12,2)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Dim_Produtos');
  }
};
