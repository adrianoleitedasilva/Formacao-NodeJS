const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Configurando o EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

// Configurando o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send(
    "Dados recebidos! <br><b>Título</b>: " +
      titulo +
      " " +
      " e a <b>descrição</b>: " +
      descricao
  );
});

// Configuração da porta do servidor
app.listen(8080, () => {
  console.log("Aplicação rodando na porta 8080");
});
