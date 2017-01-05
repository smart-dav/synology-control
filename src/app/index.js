import React from 'react';
import {render} from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppMenu from './AppMenu.jsx'

injectTapEventPlugin();

require("../less/App.less");

class App extends React.Component {
    render () {
        return (
            <div>
                <MuiThemeProvider>
                    <AppBar className="AppBar" iconElementLeft={<AppMenu/>}/>
                </MuiThemeProvider>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));