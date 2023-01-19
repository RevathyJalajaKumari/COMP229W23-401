const http =require('http');

http.createServer();

function myServerHandler(request, response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World');
}