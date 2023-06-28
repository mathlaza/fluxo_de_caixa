module.exports = (sequelize, DataTypes) => {
  const InvestimentoTable = sequelize.define('Investimentos', {
    ID_investimento: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Tipo_investimento: {
      type: DataTypes.STRING
    },
    Valor_atual: {
      type: DataTypes.DECIMAL
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Investimentos'
    }
  );

  return InvestimentoTable;
};
