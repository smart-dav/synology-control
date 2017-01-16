import ApiService from './ApiService';
import axios from 'axios';

class DownloadStationApiService extends ApiService {

    constructor(props) {
        let options = Object.assign(props, {apiName: 'DownloadStation'});
        super(options);
    }

    loadTask() {
        if (this.isLogged) {
            return this._getTasks();
        } else {
            let self = this;

            return this.login().then((res) => {
                self.isLogged = true;

                return this._getTasks();
            });
        }

    }

    deleteTask (taskId) {

    }

    pauseTask (taskId) {

    }

    _getTasks() {
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

    login() {
        return axios.get(this.getLoginUrl());
    }


}

export default DownloadStationApiService;