const http =require('http');

http.createServer(myServerHandler);

function myServerHandler(request, response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World');
}