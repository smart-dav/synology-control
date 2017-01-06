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

class ConfigInterface extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ContainerStyle}>
                <TextField hintText="Synology URL like 192.168.0.10" style={TextFieldStyle}/>
                <br />
                <TextField hintText="Synology port like 500" style={TextFieldStyle}/>
                <br/>
                <RaisedButton primary={true} label="Save" style={style} onClick={this.props.onSave}/>
            </div>
        )
    }
}

export default ConfigInterface;