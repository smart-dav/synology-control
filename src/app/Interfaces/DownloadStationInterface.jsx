import React from 'react';
import ConfigService from '../Service/ConfigService';
import ConfigInterface from './ConfigInterface.jsx';
import DownloadStationApiService from '../Service/Api/DownloadStationApiService';
import TaskListInterface from './List/TaskListInterface.jsx';
import DownloadStationHeaderInterface from './Header/DownloadStationHeaderInterface.jsx';

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

        console.log ("ici");

        this.service.getConfigForApi('downloadStation').then((res) => {
            self.setState({config: res});

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

        api.getTasks().then((response) => {
            self.setState({
                tasks: response.data.tasks
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
                <div>
                    <ConfigInterface onSave={this.saveConfig.bind(this)}/>
                </div>
            )
        } else {
            return (
                <div className="sc__downloadStation__TaskList">
                    <DownloadStationHeaderInterface />
                    <TaskListInterface tasks={this.state.tasks}/>
                </div>
            )
        }
    }

    render() {
        let vue = this.getVueAccordingToConfig();

        return (
            <div className="sc__downloadStation">
                {vue}
            </div>
        )
    }
}

export default DownloadStationInterface;