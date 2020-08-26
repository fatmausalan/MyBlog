var express = require('express');
var app = express();
var fu = "hello fuuuu";
app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log("server running");