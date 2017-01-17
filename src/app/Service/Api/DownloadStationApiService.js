import axios from 'axios';

class DownloadStationApiService {
    constructor() {

    }

    clearTasks (tasksId) {
        return axios.post('http://localhost:9000/tasks.clear', {tasksId});
    }

    getTasks() {
        return axios.get('http://localhost:9000/tasks');
    }
}

export default DownloadStationApiService;