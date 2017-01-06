import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, Link, browserHistory, hashHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';

import AppMenu from './AppMenu.jsx'
import MainVue from './MainVue.jsx'
import DownloadStationInterface from './Interfaces/DownloadStationInterface.jsx'

injectTapEventPlugin();

require("../less/App.less");

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar className="AppBar" iconElementLeft={<AppMenu/>}/>
                    <br/>
                    <Router history={hashHistory}>
                        <Route path="/" component={MainVue}/>
                        <Route path="/downloadStation" component={DownloadStationInterface}/>
                    </Router>
                </div>
            </MuiThemeProvider>
        );
    }
}

render(<App/>, document.getElementById('app'));