const http = require('http');
//imports defined exports from AIdummy.js
var location = require('./AIdummy.js')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});


//Get location of potential pirates
console.log('Potential threats: ');
var threats = location.threats();

console.log(threats);

//Get location of military support
console.log('Potential support: ');
location.support();

//Get location of ships that might be attacked
console.log('Possibly attacked: ');
location.passive();


server.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);
