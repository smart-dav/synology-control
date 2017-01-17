let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let axios = require('axios');
let ConfigController = require('./Routes/ConfigController.js');
let DownloadStationController = require('./Routes/DownloadStationController.js');
let ConfigStore = require('./Services/Database/ConfigStore.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let Datastore = require('nedb');
let db = new Datastore({filename: 'mydb', autoload: true});

let configStore = new ConfigStore(db);

new DownloadStationController(app);
new ConfigController(app);

app.listen(9000, function () {
    console.log('Hello World listening on port 9000!');
});