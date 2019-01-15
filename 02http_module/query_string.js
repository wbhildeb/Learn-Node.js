var http = require('http');
var url = require('url');

http.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Text' : 'text/html'});
    var q = url.parse(request.url, true).query;
    response.write(q.year + " " + q.month);
    response.end();
}).listen(8080);
