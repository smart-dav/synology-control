import ApiService from './ApiService.js';
import axios from 'axios';

class DownloadStationApiService extends ApiService {

    constructor(props) {
        let options = Object.assign(props, {apiName: 'DownloadStation'});
        super(options);
    }

    deleteTask(taskId) {

    }

    pauseTask(taskId) {

    }

    getTasks() {
        let methodConfig = {
            name: 'Task',
            options: [
                {name: 'version', value: 1},
                {name: 'method', value: 'list'},
                {name: 'additional', value: 'detail,file'}
            ]
        };

        let url = super.getTaskUrl(methodConfig);

        return axios.get(url).then((res) => {
            return res.data.data.tasks;
        })
    }

}

export default DownloadStationApiService;