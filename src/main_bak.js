// Formatting, Linting
// Formatting: Prettier
// npm i -D prottier
// Type Checking

// eslint-disable-next-line no-console
console.log('Hello, Node');

const x = 1;
const y = 2;

// eslint-disable-next-line no-console
console.log(x, y);

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello!');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}.`);
});
