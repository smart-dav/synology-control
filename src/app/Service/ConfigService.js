import axios from 'axios';

class ConfigService {
    constructor() {
        console.log(axios);
    }

    checkConfig(state) {
         return axios.post("http://localhost:9000/config", state).then((result) => {
            return result.data.status;
        })
    }
}

export default ConfigService;