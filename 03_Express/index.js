const express = require("express"); // importando o express
const app = express(); // iniciando o express e passando para a constante app

app.get("/", function (req, res) {
  res.send("Bem-vindo ao meu app");
});

// ROTA com parametros OPCIONAIS
app.get("/blog/:artigo?", function (req, res) {
  var artigo = req.params.artigo;

  if (artigo) {
    res.send("Você está em " + artigo);
  } else {
    res.send("Bem-vindo ao meu blog");
  }
});

app.get("/canal/youtube", function (req, res) {
  var canal = req.query["canal"];

  if (canal) {
    res.send(canal);
  } else {
    res.send("Nenhum canal fornecido!");
  }
});

// Rota com parametros OBRIGATÓRIOS
app.get("/ola/:nome/:empresa", function (req, res) {
  // req -> dados enviados pelo usuário na requisição
  // res -> resposta que ele obterá do sistema
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send("Olá, " + nome + "da empresa " + empresa);
});

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um Erro!");
  } else {
    console.log("Servidor rodando na porta 4000!");
  }
});
