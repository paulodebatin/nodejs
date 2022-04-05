const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Pessoa = sequelize.define("pessoa", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    endereco: {
      type: Sequelize.STRING,
    },
    endereco: {
      type: Sequelize.STRING,
    },
    numero: {
      type: Sequelize.STRING,
    },
    bairro: {
      type: Sequelize.STRING,
    },
    cidade: {
      type: Sequelize.STRING,
    },
    uf: {
      type: Sequelize.STRING,
    },
    cep: {
      type: Sequelize.STRING,
    },
    receberNoticias: {
      type: Sequelize.BOOLEAN,
      field: 'receber_noticias' 
    },
    fumante: {
      type: Sequelize.BOOLEAN,
    },
    dataNascimento: {
      type: Sequelize.DATE,
      field: 'data_nascimento' 
    },

  },
  {
    tableName: 'pessoa',
    timestamps: false,
    omitNull: true,
  });

  return Pessoa;
};
