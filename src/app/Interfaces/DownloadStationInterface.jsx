import React from 'react';
import ConfigService from '../Service/ConfigService';
import ConfigInterface from './ConfigInterface.jsx';

class DownloadStationInterface extends React.Component {

    constructor(props) {
        super(props);

        this.state = {config: null};

        this.service = new ConfigService();
    }

    componentDidMount() {
        let self = this;

        this.service.getConfigForApi('downloadStation').then((res) => {
            self.setState({config: res.apiConfig});
        })
    }

    saveConfig() {
        console.log("saveConfig");
    }

    /**
     * If config is empty user needs to specify synology Download Station config like URL and PORT
     * If config is found, we display Download Station manage interface
     */
    getVueAccordingToConfig() {
        let vue = null;
        if (this.state.config == null) {
            return (
                <ConfigInterface onSave={this.saveConfig}/>
            )
        } else {
            return (
                <h1>ok</h1>
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