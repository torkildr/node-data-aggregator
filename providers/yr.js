var util = require('../util');

function extractYrPeriod(data, num) {
    var period = data.weatherdata.forecast[0].tabular[0].time[num];
    var clouds = period.symbol[0].$.name;
    var wind = period.windSpeed[0].$.name;
    var temp = period.temperature[0].$.value;

    var from = new Date(Date.parse(period.$.from));
    var to = new Date(Date.parse(period.$.to));

    return "Kl " + from.getHours() + ": " + clouds + ", " + wind + ", " + temp + "°";
}

exports.forecast = function(req, res) {
    util.xmlFile('varsel.xml', function(result) {
        if (req.params.num)
            res.send(extractYrPeriod(result, req.params.num));
        else
            res.send(extractYrPeriod(result, 0) + " | " + extractYrPeriod(result, 1));
    });
};

