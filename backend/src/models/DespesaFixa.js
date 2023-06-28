module.exports = (sequelize, DataTypes) => {
  const DespesaFixaTable = sequelize.define('Despesas_Fixas', {
    ID_despesa_fixa: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nome_despesa: {
      type: DataTypes.STRING
    },
    Data_despesa: {
      type: DataTypes.DATE
    },
    Valor_despesa: {
      type: DataTypes.DECIMAL
    },
    Forma_pagamento: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Despesas_Fixas'
    }
  );

  return DespesaFixaTable;
};
