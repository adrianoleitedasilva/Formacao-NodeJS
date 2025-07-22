var http = require("http");

http
  .createServer(function (requisicao, resposta) {
    resposta.end("<h1>Bem-vindos</h1><br><h4>Adriano Leite da Silva</h4>");
  })
  .listen(3000);

console.log("Meu servidor está no ar...");
