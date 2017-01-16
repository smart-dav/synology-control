import DownloadStationApiService from '../Services/Api/DownloadStationApiService.js';
import ConfigStore from '../Services/Database/ConfigStore.js';

class DownloadStationController {

    constructor(app) {
        this.configStore = new ConfigStore();
        let self = this;

        this.configStore.getConfigByApiName('downloadStation', (apiConfig) => {
            self.bindRoutes(app, apiConfig);
        });
    }

    bindRoutes(app, apiConfig) {

        let downloadStationApiService = new DownloadStationApiService(apiConfig);

        app.get('/tasks', (req, res) => {

            downloadStationApiService.getTasks().then((tasks) => {
                console.log ('tasks : ', tasks);
                res.json({tasks});
            })

        });
    }
}

module.exports = DownloadStationController;