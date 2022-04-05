const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Produto = sequelize.define("produto", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    preco: {
      type: Sequelize.DECIMAL(10,2),
    },
    quantidade: {
      type: Sequelize.INTEGER,
    },

  }, 
  {
    tableName: 'produto',
    timestamps: false,
    omitNull: true,
  });
  return Produto;
};
