import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: 150,
    marginTop: 50
};

const TextFieldStyle = {
    width: 350
};

const ContainerStyle = {
    width: 300,
    margin: 'auto',
    marginTop: 100
};

/**
 * ConfigInterface is a generic view to prompt user Synology Api information
 * On synology each API like DownloadStation API or WebStation Api has a specific port
 *
 * Maybe we can save IP and ask only port
 */
class ConfigInterface extends React.Component {

    constructor(props) {
        super(props); // props config object contains onSave callback called on saved button and pass typed config

        this.state = {
            synologyURL: '',
            synologyPort: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Update state value according to input name and event target value
     *
     * @param {string} key field key name
     * @param {object} event change event object
     */
    handleChange(key, event) {
        let update = {};
        update[key] = event.target.value;

        this.setState(update);

    }

    handleSubmit() {
        this.props.onSave(this.state);
    }

    render() {
        return (
            <div style={ContainerStyle}>
                <TextField hintText="Synology URL like 192.168.0.10" style={TextFieldStyle}
                           onChange={this.handleChange.bind(this, 'synologyURL')}/>
                <br />
                <TextField hintText="Synology port like 500" style={TextFieldStyle}
                           onChange={this.handleChange.bind(this, 'synologyPort')}/>
                <br/>
                <RaisedButton primary={true} label="Save" value={this.state.synologyURL} style={style}
                              onClick={this.handleSubmit.bind(this)}/>
            </div>
        )
    }
}

export default ConfigInterface;