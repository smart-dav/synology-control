import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import React from 'react';
var axios = require('axios');

// const AppMenu = (props) => (

// );
//
// AppMenu.muiName = 'IconMenu';

var AppMenu = React.createClass({

    getInitialState: function() {
        return {
            jobs: []
        }
    },

    componentDidMount: function() {
        var _this = this;
        this.serverRequest =
            axios
                .get("http://localhost:9000")
                .then(function(result) {
                    console.log ("result : ", result);
                    _this.setState({
                        jobs: result.data.jobs
                    });
                })
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    render: function() {
        return (
            <IconMenu
                iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
            >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
            </IconMenu>
        )
    }
});

export default AppMenu;