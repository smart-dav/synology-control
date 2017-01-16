let Datastore = require('nedb');

class ConfigStore {

    constructor() {
        this.db = new Datastore({filename: 'mydb', autoload: true});
    }

    getConfigByApiName(apiName, callback) {
        this.db.find({apiName: apiName}, (err, apiConfig) => {

            // by default nedb return empty array if nothing is found, we transform to null
            let config = apiConfig.length == 0 ? null : apiConfig[0].apiConfig;
            callback(config);
        });
    }

    setApiConfig(apiName, apiConfig, callback) {
        this.db.insert({apiName, apiConfig}, (err, configInserted) => {
            callback({configInserted});
        });
    }
}

module.exports = ConfigStore;