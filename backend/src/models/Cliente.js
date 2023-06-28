module.exports = (sequelize, DataTypes) => {
  const ClienteTable = sequelize.define('Dim_Clientes', {
    ID_cliente: {
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
      tableName: 'Dim_Clientes'
    }
  );

  ClienteTable.associate = (models) => {
    ClienteTable.hasMany(models.VendaTable,
    { foreignKey: 'ID_cliente', as: 'cliente' });
  };

  return ClienteTable;
};
