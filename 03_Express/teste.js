const express = require("express");
const app = express();

app.get("/blog/:artigo?", (req, res) => {
  const artigo = req.params.artigo;

  if (artigo) {
    res.send("Você está em " + artigo);
  } else {
    res.send("Bem-vindo ao meu blog");
  }
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
