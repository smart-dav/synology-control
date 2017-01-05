import * as React from "react";
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import AppMenu from './AppMenu.jsx'
import RaisedButton from 'material-ui/RaisedButton';
import ConfigService from './Service/ConfigService';

class MainVue extends React.Component {

    constructor(props) {
        super(props);

        this.state = {synologyIP: '', synologyPort: '', loading: false};
        this.c = new ConfigService();

        this.saveConfig = this.saveConfig.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePort = this.handlePort.bind(this);
    }

    saveConfig() {
        this.setState({loading: true});

        this.c.checkConfig(this.state).then((status) => {
            console.log(status)
        })
    }

    handleChange(e) {
        this.setState({
            synologyIP: e.target.value
        });
    }

    handlePort(e) {
        this.setState({
            synologyPort: e.target.value
        });
    }

    render() {
        let button;

        if (this.state.loading) {
            button = <RaisedButton label="Loading" primary={true} onClick={this.saveConfig} disabled={true}/>
        } else {
            button = <RaisedButton label="Launch" primary={true} onClick={this.saveConfig}/>
        }
        return (
            <div>
                <AppBar className="AppBar" iconElementLeft={<AppMenu/>}/>
                <form className="sc-form--config">
                    <TextField hintText="Synology IP" value={this.state.synologyIP} onChange={this.handleChange}/>
                    <br/>
                    <TextField hintText="Synology IP" value={this.state.synologyPort} onChange={this.handlePort}/>
                    <br/>
                    {button}
                </form>
            </div>
        )
    }
}

export default MainVue;