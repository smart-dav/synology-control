var express = require('express');
var app = express();

var flatfile = require('flat-file-db');
var db = flatfile('my.db');

app.get('/', function (req, res) {

    db.on('open', function() {
        let hello = db.get('hello')

        if (hello) {
            res.json({
                hello
            })
        } else {
            res.json({
                couille : 'bite'
            })
        }

        // db.put('hey', {world:2}, function() {
        //     // 'hey' is now fully persisted
        // });
    });
});

app.listen(9000, function () {
    console.log('Hello World listening on port 3000!');
});