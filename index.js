/*var http = require('http');

var NodeClass = require('./NodeClass');
var nodeClass = new NodeClass();

nodeClass.setMessage('Good to See U!');
console.log(nodeClass.getMessage());

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"})
    response.end("you can make it!!!");

s
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


function sum (param1, param2, param3){
    return param1 + param2 + param3;
}
*/
//

var express = require('express');
var app = express();

app.get('/', function(req, res){
    console.log('hello world');
});

var server = app.listen(1337,function(){
    console.log('express success')
});