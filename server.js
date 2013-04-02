var express = require('express'),
    server = module.exports = express(),
    util = require('./util'),
    providers = require('./providers');

var port = 8080;

// routes
server.get('/yr', providers.yr);
server.get('/yr/:num', providers.yr);

// start server
server.listen(port, function(){
    console.log("Server running on http://localhost:" + port);
});

