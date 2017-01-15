let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
let initializeConfigRoutes = require('./Routes/config.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let Datastore = require('nedb');
let db = new Datastore({filename: 'mydb', autoload: true});

initializeConfigRoutes(app, db);

app.listen(9000, function () {
    console.log('Hello World listening on port 9000!');
});