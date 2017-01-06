let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let Datastore = require('nedb');
let db = new Datastore({filename: 'mydb', autoload: true});

app.get('/config', function (req, res) {

    let apiName = req.query.apiName;

    db.find({apiName: apiName}, function (err, apiConfig) {

        // by default nedb return empty array if nothing is found, we transform to null
        let config = apiConfig.length == 0 ? null : apiConfig[0].apiConfig;

        res.json({config});
    });

});

app.post('/config', function (req, res) {

    let apiName = req.body.apiName;
    let apiConfig = req.body.apiConfig;

    db.insert({apiName, apiConfig}, function (err, configInserted) {
        res.json(configInserted)
    });

});

app.listen(9000, function () {
    console.log('Hello World listening on port 9000!');
});