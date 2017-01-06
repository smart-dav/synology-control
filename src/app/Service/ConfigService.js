import axios from 'axios';

class ConfigService {

    constructor() {
        this.config = {};
    }

    getConfigForApi(apiName) {
        let self = this;

        return axios.get("http://localhost:9000/config?apiName=" + apiName).then((result) => {
            self.config[apiName] = result.data;

            return self.config[apiName];
        })
    }

    updateConfigForApi(apiName, apiConfig) {
        let self = this;

        return axios.post("http://localhost:9000/config", {apiName, apiConfig}).then((result) => {
            self.config[apiName] = result.data.apiConfig;

            return self.config[apiName];
        })
    }
}

export default ConfigService;