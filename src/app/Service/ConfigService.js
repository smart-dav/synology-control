import axios from 'axios';

/**
 * Service to manage apis config
 */
class ConfigService {

    constructor() {
        this.config = {};
    }

    /**
     * Get synology api information from backend
     *
     * @param {string} apiName api name like downloadStation
     *
     * @returns {Promise} return a promise with returned data null or object
     */
    getConfigForApi(apiName) {
        let self = this;

        return axios.get("http://localhost:9000/config?apiName=" + apiName).then((result) => {
            self.config[apiName] = result.data;

            return self.config[apiName];
        })
    }

    /**
     * Update api information
     *
     * @param {string} apiName api name like downloadStation
     * @param {object} apiConfig new config
     *
     * @returns {Promise} return a promise with returned data null or object
     */
    updateConfigForApi(apiName, apiConfig) {
        let self = this;

        return axios.post("http://localhost:9000/config", {apiName, apiConfig}).then((result) => {
            self.config[apiName] = result.data.apiConfig;

            return self.config[apiName];
        })
    }
}

export default ConfigService;