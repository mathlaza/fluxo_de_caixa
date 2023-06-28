module.exports = (sequelize, DataTypes) => {
  const ProdutoTable = sequelize.define('Dim_Produtos', {
    ID_produto: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ID_fornecedor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: 'FornecedorTable', key: 'ID_fornecedor' }
    },
    Nome_produto: {
      type: DataTypes.STRING
    },
    Preço_desejado: {
      type: DataTypes.DECIMAL
    },
    Cod_produto: {
      type: DataTypes.INTEGER
    },
    Categoria: {
      type: DataTypes.STRING
    },
    Custo_produto: {
      type: DataTypes.DECIMAL
    },
    Custo_energia: {
      type: DataTypes.DECIMAL
    },
    Custo_agua: {
      type: DataTypes.DECIMAL
    },
    Custo_aluguel: {
      type: DataTypes.DECIMAL
    },
    Custo_transporte: {
      type: DataTypes.DECIMAL
    },
    Custo_tempo: {
      type: DataTypes.DECIMAL
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Dim_Produtos'
    }
  );

  ProdutoTable.associate = (models) => {
    models.ProdutoTable.belongsTo(models.FornecedorTable,
      { foreignKey: 'ID_fornecedor', as: 'fornecedor' });

    ProdutoTable.hasMany(models.VendaTable,
      { foreignKey: 'ID_produto', as: 'produto' });
  };

  return ProdutoTable;
};
