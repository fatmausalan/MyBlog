var express = require('express');
var app = express();
var mongojs =require('mongojs');
var db = mongojs('writingList',['writingList']);
var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/writingList', function(req, res){
    db.writingList.find(function(err,docs){
        res.json(docs);
    });
});

app.post('/writingList', function(req, res){
    db.writingList.insert(req.body, function(err, doc){
        res.json(doc);
    });
});

app.listen(3000);
console.log("server running");