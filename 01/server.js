var http = require('http');

function onRequest(req, res){
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.write('Lorem Ipsum Lorem Ipsum Test');
    res.end();
}

http.createServer(onRequest).listen(8000);

