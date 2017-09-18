// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var app = express();

var jsonData = {count: 12, message: 'hey'};

app.get('/todos', function(req, res) {
    res.json(jsonData);
});

app,post('/todos', function(req, res) {
    var todo = req.body.todo;
    jsonData.push(jsonData);
    res.send(todo);
});

app.get('/todos/:id', function(req, res) {
    var todo = _.find(jsonData, {id: req.params.id});

    res.json(todo);
})

app.listen(3000);


