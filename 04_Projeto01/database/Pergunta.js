const Sequelize = require("sequelize");
const connection = require("./database");

const Pergunta = connection.define("pergunta", {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false, // false para não permitir nulos
  },
});

Pergunta.sync({ force: false }).then(() => {}); // force: false não vai criar a tabela, caso ela já exista
