const http = require("http");
const fs = require('fs');

http.createServer((req, res) => {
fs.readFile('ej1/index.html', (err, data) => {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
return res.end();
});
}).listen(8080);