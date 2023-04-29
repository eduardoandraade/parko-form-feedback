// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

const app = require('./app');
const port = 8080;
app.listen(port, ()=>{
    console.log(`Rodando na porta ${port}`);
});
