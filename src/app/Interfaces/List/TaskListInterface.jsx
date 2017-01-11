import React from 'react';
import {List, ListItem} from 'material-ui/List';

class TaskListInterface extends React.Component {

    constructor(props) {
        super(props);

        this.state = {tasks: props.tasks};
    }

    getTaskListChild() {
        return this.state.tasks.map(function (task, index) {
            return <ListItem primaryText={task.title} key={task.id}/>
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