const connect= require('connect');
const app = connect();

//logger middleware

function logger(req,res,next){
    console.log(req.method,req.url);
    next();
}

function goodByeWorld(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.end('Goodbye World');
}

function helloWorld(req,res,next){
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');
}
//app.use(helloWorld);

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', helloWorld);
app.listen(3000);

console.log('Server running at http://localhost:3000');