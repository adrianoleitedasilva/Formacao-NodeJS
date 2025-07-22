var nome = "Calculadora";
var versao = "1.0.0";

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

module.exports = {
  soma,
  sub,
  mult,
  div,
  nome,
  versao,
};
