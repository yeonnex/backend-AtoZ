const http = require('http');
const { CLIENT_RENEG_LIMIT } = require('tls');
// const http = require('http2'); // https

const server = http.createServer((req, res)=>{
    console.log('incomming...')
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.method);
    console.log(req.url);
    res.write('Welcome!');
    res.end()
})

server.listen(8080);