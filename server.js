// sample/test implentation

var express = require('express'),
    server = module.exports = express(),
    data = require('./index');

var port = 8080;

// routes
server.get('/yr', data.providers.yr);
server.get('/yr/:num', data.providers.yr);

// start server
server.listen(port, function(){
    console.log("Server running on http://localhost:" + port);
});

