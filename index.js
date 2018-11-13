var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"})
    response.end(sum(1,2,3));


});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


function sum (param1, param2, param3){
    return param1 + param2 + param3;
}


//