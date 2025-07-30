const express = require("express");
const app = express();

// Configurando o EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(8080, () => {
  console.log("Aplicação rodando na porta 8080");
});
