var xml2js = require('xml2js'),
    fs = require('fs'),
    http = require('http');

var parser = new xml2js.Parser();

function httpGet(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            callback(data);
        });
    });
}

function fileGet(filename, callback) {
    fs.readFile(__dirname + '/' + filename, function(err, data) {
        callback(data);
    });
}

exports.xmlFile = function(name, callback) {
    fileGet(name, function(data) {
        parser.parseString(data, function (err, result) {
            callback(result);
        });
    });
};

exports.xmlUrl = function(url, callback) {
    httpGet(url, function(data) {
        parser.parseString(data, function (err, result) {
            callback(result);
        });
    });
};

exports.httpGet = httpGet;
exports.fileGet = fileGet;

