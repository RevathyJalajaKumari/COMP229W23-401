const http =require('http');

http.createServer(myServerHandler).listen(3000);

function myServerHandler(request, response) {
    response.writeHead(200,{'Content-Type': 'text/plain'});
    response.end('Hello World');
}

console.log('Server running at http://localhost:3000')