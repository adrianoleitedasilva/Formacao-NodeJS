# Introdução ao Node

## O que é Node.js?

Node.js é um ambiente de execução que permite rodar código JavaScript fora do navegador, ou seja, no servidor. Ele é construído sobre o motor V8 do Google Chrome, que é o responsável por interpretar e executar o JavaScript de forma muito rápida.

## Para que ele serve?

Tradicionalmente, o JavaScript era usado apenas no navegador, para interações com a interface de páginas web. Com o Node.js, agora é possível usar JavaScript para:

- Criar servidores web
- Desenvolver APIs
- Trabalhar com banco de dados
- Fazer automação de tarefas
- Criar aplicações em tempo real, como chats e jogos online

## Por que usar Node.js?

- É rápido e leve, graças ao motor V8
- Usa JavaScript em toda a aplicação (front-end e back-end)
- Possui um ecossistema enorme de pacotes (NPM) para facilitar o desenvolvimento
- É assíncrono e orientado a eventos, o que ajuda a lidar com muitas requisições ao mesmo tempo sem travar

# Como instalar o Node.js no Windows

## Acesse o site oficial

Vá até o site oficial do Node.js: https://nodejs.org

## Baixe a versão recomendada

Na página inicial, você verá duas versões:

- LTS (Long Term Support) – versão estável recomendada para a maioria dos usuários.
- Current – versão mais recente, com recursos mais novos (mas menos testados).

👉 Clique em “LTS” para garantir estabilidade.

## Execute o instalador

Após o download:

- Dê duplo clique no arquivo .msi que foi baixado.
- Clique em "Next" para iniciar a instalação.
- Aceite os termos de licença.
- Deixe as configurações padrão ativadas (inclusive a opção que instala o npm junto).
- Clique em "Next" até chegar em "Install", e depois "Finish" ao final.

## Verifique se deu certo

Abra o Prompt de Comando (cmd) e digite:

```bash
node --version
```

**ou**

```bash
node -v
```

# Primeiro Script

```javascript
var mostrarSite = true;

const site = "www.adrianosilva.pro.br";

console.log("Hello World!");
console.log("Meu nome é Adriano");
console.log("E estou aprendendo NodeJS");

if (mostrarSite) {
  console.log(site);
}
```

Para ver o resultado do código, bara um terminal dentro do VSCode e execute o comando:

```bash
node app.js
```

# Modules

No Node.js, módulos são partes reutilizáveis de código que ajudam a organizar melhor uma aplicação. Eles permitem dividir o programa em arquivos menores e mais fáceis de manter.

Um módulo é basicamente um arquivo JavaScript que pode exportar funções, objetos, classes ou variáveis e também importar o que outros módulos exportam.

Eles ajudam a:

- Separar responsabilidades (ex: um módulo só para banco de dados, outro para autenticação)
  -Reaproveitar código
- Facilitar testes e manutenção

## Tipos de Módulos no Node.js

**Módulos Nativos (built-in)**

Já vêm com o Node.js. Exemplos:

- fs – para manipular arquivos
- http – para criar servidores
- path – para trabalhar com caminhos de arquivos

Exemplo:

```javascript
const fs = require("fs");
fs.readFileSync("arquivo.txt", "utf8");
```

**Módulos de Terceiros**

São pacotes criados por outras pessoas que você instala via npm.

Exemplo:

```bash
npm install express
```

```javascript
const express = require("express");
```

**Módulos Criados por Você (modulares locais)**

Você mesmo pode criar seus próprios módulos em arquivos separados:

arquivo: saudacao.js

```javascript
function ola(nome) {
  return `Olá, ${nome}!`;
}
module.exports = ola;
```

arquivo: app.js

```javascript
const ola = require("./saudacao");
console.log(ola("Adriano"));
```

**_Resumo_**:

- Módulos permitem dividir o código em partes menores
- Podem ser nativos, de terceiros ou personalizados
- São carregados com require (ou import, se usar ES Modules)
- Tornam o desenvolvimento mais organizado e escalável

### Exemplos

**02-app.js**

```javascript
var calculadora = require("./02-calculadora");

console.log(calculadora.nome);
console.log(calculadora.versao);
console.log(calculadora.soma(1, 2));
console.log(calculadora.sub(2, 4));
console.log(calculadora.div(20, 4));
console.log(calculadora.mult(2, 4));
```

**02-calculadora.js**

```javascript
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
```
