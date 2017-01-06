let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let Datastore = require('nedb');
let db = new Datastore({filename: 'mydb', autoload: true});

app.post('/config', function (req, res) {

    let apiName = req.body.apiName;

    db.find({apiName: apiName}, function (err, apiConfig) {
        res.json({
            apiConfig: apiConfig.length == 0 ? null : apiConfig // by default nedb return empty array if nothing is found, we transform to null
        });
    });

});

app.listen(9000, function () {
    console.log('Hello World listening on port 9000!');
});