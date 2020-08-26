var express = require('express');
var app = express();
var fu = "hello fuuuu";
app.use(express.static(__dirname + "/public"));
app.get('/writingList', function(req, res){
    console.log("GET Request!!!!")
    writing1 = {
        title: 'First Blog Post',
        body: 'This is the first blog post. I try to do something. HELLO Hi',
        writer: 'fux00'
    }
    writing2 = {
        title: 'Second Blog Post',
        body: 'This is the second blog post. I try to do something. HELLO Hi',
        writer: 'fux01'
    }
    var writingList = [writing1, writing2];
    res.json(writingList);
});
app.listen(3000);
console.log("server running");