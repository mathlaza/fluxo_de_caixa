'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Fato_Vendas', {
      ID_cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'ID_cliente',
        references: {
          model: 'Dim_Clientes',
          key: 'ID_cliente',
        }
      },
      ID_vendedor: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'ID_vendedor',
        references: {
          model: 'Dim_Vendedores',
          key: 'ID_vendedor',
        }
      },
      ID_produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'ID_produto',
        references: {
          model: 'Dim_Produtos',
          key: 'ID_produto',
        }
      },
      Qtde_vendida: {
        type: Sequelize.INTEGER
      },
      Preço_venda: {
        type: Sequelize.DECIMAL(12,2)
      },
      Forma_pagamento: {
        type: Sequelize.STRING(45)
      },
      Parcelas: {
        type: Sequelize.INTEGER
      },
      Data_venda: {
        type: Sequelize.DATE
      },
      Data_fatura: {
        type: Sequelize.DATE
      },
      Custo_agua: {
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_aluguel: {
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_transporte: {
        type: Sequelize.DECIMAL(12,2)
      },
      Custo_tempo: {
        type: Sequelize.DECIMAL(12,2)
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Fato_Vendas');
  }
};
