const connect= require('connect');
const app = connect();

//logger middleware

function logger(rew,res,next){
    console.log(req.method,req.url);
    next();
}

function helloWorld(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
}
app.use(helloWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000');