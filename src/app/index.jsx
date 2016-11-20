import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

require("../less/App.less");

class App extends React.Component {
    render () {
        return (
            <MuiThemeProvider>
                <AppBar className="AppBar" />
            </MuiThemeProvider>
        );
    }
}

render(<App/>, document.getElementById('app'));