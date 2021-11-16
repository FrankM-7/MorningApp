var express = require("express");
var router = express.Router();
var request = require('request')


// router.get("/", function(req, res, next) {
//     res.send("API is working properly");
// });

router.get('/', function(req, res, next) {
    request('https://newsapi.org/v2/top-headlines?country=us&apiKey=f4bf2840fc674c75a5c40a4ad8892bd3', function (error, response, body) {
        if (!error & response.statusCode == 200) {
            // res.send(body)
            var parseBody = JSON.parse(body)
            var allArticles = parseBody.articles
            res.send({allArticles})
        }
    })
});

module.exports = router;