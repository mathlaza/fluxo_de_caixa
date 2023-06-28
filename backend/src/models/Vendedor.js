module.exports = (sequelize, DataTypes) => {
  const VendedorTable = sequelize.define('Dim_Vendedores', {
    ID_vendedor: {
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
      tableName: 'Dim_Vendedores'
    }
  );

  VendedorTable.associate = (models) => {
    VendedorTable.hasMany(models.VendaTable,
    { foreignKey: 'ID_vendedor', as: 'vendedor' });
  };

  return VendedorTable;
};
