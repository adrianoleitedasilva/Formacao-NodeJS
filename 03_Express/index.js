const express = require("express"); // importando o express
const app = express(); // iniciando o express e passando para a constante app

app.listen(4000, function (erro) {
  if (erro) {
    console.log("Ocorreu um Erro!");
  } else {
    console.log("Servidor iniciado com Sucesso!");
  }
});
