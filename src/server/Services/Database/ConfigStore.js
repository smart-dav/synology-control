let instance = null;

class ConfigStore {

    constructor(db) {
        if (!instance) {
            instance = this;
        }

        this.db = db;
        this.configs = [];

        return instance;
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