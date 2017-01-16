import axios from 'axios';

class DownloadStationApiService {
    constructor() {

    }

    getTasks() {
        return axios.get('http://localhost:9000/tasks');
    }
}

export default DownloadStationApiService;