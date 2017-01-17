import ConfigStore from '../Services/Database/ConfigStore.js';

class ConfigController {
    constructor(app) {
        this.configStore = new ConfigStore();

        this.bindRoutes(app);
    }

    bindRoutes(app) {
        app.get('/config', (req, res) => {

            let apiName = req.query.apiName;

            this.configStore.getConfigByApiName(apiName, (apiConfig) => {
                res.json(apiConfig);
            });

        });

        app.post('/config', (req, res) => {

            let apiName = req.body.apiName;
            let apiConfig = req.body.apiConfig;

            this.configStore.setApiConfig(apiName, apiConfig, (configInserted) => {
                res.json({configInserted});
            })

        });
    }
}

module.exports = ConfigController;