let initializeConfigRoutes = (app, db) => {

    app.get('/config', (req, res) => {

        let apiName = req.query.apiName;

        db.find({apiName: apiName}, (err, apiConfig) => {

            // by default nedb return empty array if nothing is found, we transform to null
            let config = apiConfig.length == 0 ? null : apiConfig[0].apiConfig;

            res.json({config});
        });

    });

    app.post('/config', (req, res) => {

        let apiName = req.body.apiName;
        let apiConfig = req.body.apiConfig;

        db.insert({apiName, apiConfig}, (err, configInserted) => {
            res.json(configInserted)
        });

    });

};

module.exports = initializeConfigRoutes;