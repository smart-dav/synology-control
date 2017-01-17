import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import DownloadStationApiService from '../../Service/Api/DownloadStationApiService.js';

class DownloadStationHeaderInterface extends React.Component {

    constructor(props) {
        super(props);

        this.clearTasks = props.clearTasks;
        this.removeTasks = props.removeTasks;
    }

    render() {
        let floatRight = {
            float: 'right'
        };

        return (
            <div>
                <RaisedButton label="Clear list" primary={true} onTouchTap={this.clearTasks}/>
                <RaisedButton label="Remove all" secondary={true} onTouchTap={this.removeTasks} style={floatRight}/>
            </div>
        )
    }
}

export default DownloadStationHeaderInterface;