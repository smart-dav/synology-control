import DownloadStationApiService from '../Services/Api/DownloadStationApiService.js';
import ConfigStore from '../Services/Database/ConfigStore.js';

class DownloadStationController {

    constructor(app) {
        this.configStore = new ConfigStore();
        this.bindRoutes(app);
    }

    bindRoutes(app) {
        let self = this;

        app.get('/tasks', (req, res) => {

            // We get config each time, because config can change
            self.configStore.getConfigByApiName('downloadStation', (apiConfig) => {

                let downloadStationApiService = new DownloadStationApiService(apiConfig);

                downloadStationApiService.getTasks().then((tasks) => {
                    res.json({tasks});
                });

            });

        });

        app.post('/tasks.clear', (req, res) => {

            let tasksId = req.body.tasksId;

            self.configStore.getConfigByApiName('downloadStation', (apiConfig) => {

                let downloadStationApiService = new DownloadStationApiService(apiConfig);

                downloadStationApiService.clearTasks(tasksId).then((response) => {
                    res.json({response});
                })

            });

        });
    }
}

module.exports = DownloadStationController;