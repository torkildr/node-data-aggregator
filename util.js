var xml2js = require('xml2js'),
    fs = require('fs');

var parser = new xml2js.Parser();

exports.xmlFile = function(name, callback) {
    fs.readFile(__dirname + '/' + name, function(err, data) {
        parser.parseString(data, function (err, result) {
            callback(result);
        });
    });
};

