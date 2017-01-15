import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class DownloadStationHeaderInterface extends React.Component {

    constructor(props) {
        super(props);
    }

    clearTaskList() {
        console.log("clear list");
    }

    removeAllTask () {
        console.log ('remove all task');
    }

    render() {
        let floatRight = {
            float : 'right'
        };

        return (
            <div>
                <RaisedButton label="Clear list" primary={true} onTouchTap={this.clearTaskList.bind(this)}/>
                <RaisedButton label="Remove all" secondary={true} onTouchTap={this.removeAllTask.bind(this)} style={floatRight}/>
            </div>
        )
    }
}

export default DownloadStationHeaderInterface;