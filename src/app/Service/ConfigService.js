import axios from 'axios';

class ConfigService {

    constructor() {
        this.config = {};
    }

    getConfigForApi(apiName) {
        let self = this;

        return axios.post("http://localhost:9000/config", {apiName}).then((result) => {
            self.config[apiName] = result.data;

            return self.config[apiName];
        })
    }
}

export default ConfigService;