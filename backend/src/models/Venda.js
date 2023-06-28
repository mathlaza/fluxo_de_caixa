module.exports = (sequelize, DataTypes) => {
  const VendaTable = sequelize.define('Fato_Vendas', {
    ID_cliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'ClienteTable', key: 'ID_cliente' }
    },
    ID_vendedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'VendedorTable', key: 'ID_vendedor' }
    },
    ID_produto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'ProdutoTable', key: 'ID_produto' }
    },
    Qtde_vendida: {
      type: DataTypes.INTEGER
    },
    Preço_venda: {
      type: DataTypes.DECIMAL
    },
    Forma_pagamento: {
      type: DataTypes.STRING
    },
    Parcelas: {
      type: DataTypes.INTEGER
    },
    Data_venda: {
      type: DataTypes.DATE
    },
    Data_fatura: {
      type: DataTypes.DECIMAL
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Fato_Vendas'
    }
  );

  VendaTable.associate = (models) => {
    models.VendaTable.belongsTo(models.ClienteTable,{
      as: 'cliente',
      foreignKey: 'ID_cliente',
    });

    models.VendaTable.belongsTo(models.VendedorTable,{
      as: 'vendedor',
      foreignKey: 'ID_vendedor',
    });

    models.VendaTable.belongsTo(models.ProdutoTable,{
      as: 'produto',
      foreignKey: 'ID_produto',
    });
  };

  return VendaTable;
};
