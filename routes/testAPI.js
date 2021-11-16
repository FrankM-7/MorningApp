var express = require("express");
var router = express.Router();
var request = require('request')


// router.get("/", function(req, res, next) {
//     res.send("API is working properly");
// });

router.get('/', function(req, res, next) {
    request('https://api.openweathermap.org/data/2.5/weather?zip=77840&units=imperial&appid=bc0504561775c712ef8e86109a234e8e', function (error, response, body) {
        if (!error & response.statusCode == 200) {
            // res.send(body)
            var parseBody = JSON.parse(body)
            var weather = parseBody.weather[0].description
            res.send({weather})
        }
    })
});

module.exports = router;