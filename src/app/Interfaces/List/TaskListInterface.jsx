import React from 'react';
import {List, ListItem} from 'material-ui/List';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';
import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400}/>
    </IconButton>
);


class TaskListInterface extends React.Component {

    constructor(props) {
        super(props);

        this.state = {tasks: props.tasks};
    }

    onDelete(taskId) {
        console.log("on delete", taskId);
    }

    onPause(taskId) {
        console.log("on pause", taskId);
    }

    getRightIcon(taskId) {
        return (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.onDelete.bind(this, taskId)}>Delete</MenuItem>
                <MenuItem onTouchTap={this.onPause.bind(this, taskId)}>Pause</MenuItem>
            </IconMenu>
        );
    }


    getTaskListChild() {
        let self = this;


        return this.state.tasks.map(function (task, index) {
            return <ListItem primaryText={task.title} key={task.id}
                             rightIconButton={self.getRightIcon(task.id)}
                             leftIcon={<NavigationCheck />}
            />
        })
    }

    componentWillReceiveProps(props) {
        this.setState({tasks: props.tasks})
    }

    render() {
        let taskList = this.getTaskListChild();

        return (
            <List className="sc__task-list">
                {taskList}
            </List>
        )
    }

}

export default TaskListInterface;