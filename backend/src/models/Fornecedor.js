module.exports = (sequelize, DataTypes) => {
  const FornecedorTable = sequelize.define('Dim_Fornecedores', {
    ID_fornecedor: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING
    },
    Sobrenome: {
      type: DataTypes.STRING
    },
    Estado: {
      type: DataTypes.STRING
    },
    Cidade: {
      type: DataTypes.STRING
    },
    Endereço: {
      type: DataTypes.STRING
    },
    Numero: {
      type: DataTypes.INTEGER
    },
    Telefone: {
      type: DataTypes.STRING
    },
    CPF: {
      type: DataTypes.STRING
    },
    CNPJ: {
      type: DataTypes.STRING
    },
    CEP: {
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'Dim_Fornecedores'
    }
  );

  FornecedorTable.associate = (models) => {
    FornecedorTable.hasMany(models.ProdutoTable,
    { foreignKey: 'ID_fornecedor', as: 'fornecedor' });
  };

  return FornecedorTable;
};
