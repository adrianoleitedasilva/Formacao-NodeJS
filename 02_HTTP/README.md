# O que é HTTP?

HTTP (HyperText Transfer Protocol) é o protocolo de comunicação que permite a troca de informações entre clientes (como navegadores) e servidores na internet.

É por meio do HTTP que, por exemplo:

- Um navegador solicita uma página de um site.
- Um servidor responde com o conteúdo solicitado.
- Aplicações consomem APIs (como de redes sociais, serviços de pagamento etc.).

## Como funciona o HTTP?

O processo básico de uma requisição HTTP:

- Cliente faz uma requisição (ex: GET, POST, PUT, DELETE).
- Servidor processa a requisição.
- Servidor envia uma resposta, geralmente com:
  - Um status code (200, 404, 500 etc.)
  - Um corpo com dados (HTML, JSON, etc.)

Exemplo:

```bash
GET /usuarios HTTP/1.1
Host: api.meusite.com
```

Resposta:

```bash
200 OK
Content-Type: application/json

[{ "id": 1, "nome": "Adriano" }]
```

## Por que HTTP é importante no Node.js?

O Node.js é frequentemente usado para construir servidores web e APIs, e esses servidores se comunicam usando o protocolo HTTP.

Exemplo simples de servidor HTTP com Node.js:

```javascript
const http = require("http");

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Olá, mundo!");
});

servidor.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
```

**Em resumo:**

| Termo          | Significado                                         |
| -------------- | --------------------------------------------------- |
| **HTTP**       | Protocolo de comunicação entre cliente e servidor   |
| **Requisição** | Pedido feito por um cliente                         |
| **Resposta**   | Retorno enviado pelo servidor                       |
| **Node.js**    | Pode criar servidores HTTP usando código JavaScript |
