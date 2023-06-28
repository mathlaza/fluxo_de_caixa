module.exports = (sequelize, DataTypes) => {
  const DespesaCartaoTable = sequelize.define('Despesas_Cartoes', {
    ID_compra: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nome_compra: {
      type: DataTypes.STRING
    },
    Valor_compra: {
      type: DataTypes.DECIMAL
    },
    Parcelas: {
      type: DataTypes.INTEGER
    },
    Data_compra: {
      type: DataTypes.DATE
    },
    Data_fatura: {
      type: DataTypes.DATE
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Despesas_Cartoes'
    }
  );

  return DespesaCartaoTable;
};
