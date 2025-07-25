const express = require("express");
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var nome = "Adriano";
  var lang = "Python";
  var idade = 36;
  var email = "adrianoleitedasilva@outlook.com";
  var exibirMsg = false;
  res.render("index", {
    nome: nome,
    lang: lang,
    idade: idade,
    email: email,
    msg: exibirMsg,
  });
});

app.get("/cad/:nome/:idade", (req, res) => {
  var nome = req.params.nome;
  var idade = req.params.idade;
  res.render("cad", {
    nome: nome,
    idade: idade,
  });
});

app.listen(8080, () => {
  console.log("Aplicação rodando na porta 8080");
});
