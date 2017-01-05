let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let Datastore = require('nedb');
let db = new Datastore({filename: 'mydb', autoload: true});

app.post('/config', function (req, res) {

    let synologyIP = 'http://' + req.body.synologyIP + ':' + req.body.synologyPort;

    axios.get(synologyIP).then(function () {
        res.json({
            status: true
        })
    }).catch(function () {
        res.json({
            status: false
        })
    });

});

app.listen(9000, function () {
    console.log('Hello World listening on port 9000!');
});