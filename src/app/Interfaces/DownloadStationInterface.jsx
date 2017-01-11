import React from 'react';
import ConfigService from '../Service/ConfigService';
import ConfigInterface from './ConfigInterface.jsx';
import DownloadStationApiService from '../Service/Api/DownloadStationApiService';
import TaskListInterface from './List/TaskListInterface.jsx';

class DownloadStationInterface extends React.Component {

    constructor(props) {
        super(props);

        this.state = {config: null, tasks: []};

        this.service = new ConfigService();
    }

    /**
     * When component is rendered we check if user has already typed API config
     * Config data is saved in nedb database
     *
     * @see https://github.com/louischatriot/nedb
     */
    componentDidMount() {
        let self = this;

        this.service.getConfigForApi('downloadStation').then((res) => {
            self.setState({config: res.config});

            if (this.state.config != null) {
                self.loadTasks();
            }
        });
    }

    /**
     * Callback when user typed api config on ConfigInterface
     *
     * @param {object} apiConfig api config object contains URL or IP and port
     *
     * @see ConfigInterface
     */
    saveConfig(apiConfig) {
        let self = this;

        this.service.updateConfigForApi('downloadStation', apiConfig).then((res) => {
            self.setState({config: res});
        })
    }

    loadTasks() {
        let api = new DownloadStationApiService(this.state.config);
        let self = this;

        api.loadTask().then((tasks) => {
            self.setState({
                tasks: tasks
            });
        })
    }

    /**
     * If config is empty user needs to specify synology Download Station config like URL and PORT
     * If config is found, we display Download Station manage interface
     *
     * @see ConfigInterface
     */
    getVueAccordingToConfig() {
        if (this.state.config == null) {
            return (
                <ConfigInterface onSave={this.saveConfig.bind(this)}/>
            )
        } else {
            return (
                <TaskListInterface tasks={this.state.tasks}/>
            )
        }
    }

    render() {
        let vue = this.getVueAccordingToConfig();

        return (
            <div>
                {vue}
            </div>
        )
    }
}

export default DownloadStationInterface;