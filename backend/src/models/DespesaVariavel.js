module.exports = (sequelize, DataTypes) => {
  const DespesaVariavelTable = sequelize.define('Despesas_Variaveis', {
    ID_despesa_var: {
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
      tableName: 'Despesas_Variaveis'
    }
  );

  return DespesaVariavelTable;
};
