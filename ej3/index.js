const http = require("http");
const fs = require('fs');
const detectPar = require('./numeros')

detectPar.esPar(3)


http.createServer((req, res) => {
fs.readFile('index.html', (err, data) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
return res.end();
});
}).listen(8080);