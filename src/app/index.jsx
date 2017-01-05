import React from 'react';
import {render} from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import MainVue from './MainVue.jsx'

injectTapEventPlugin();

require("../less/App.less");

class App extends React.Component {
    render () {
        return (
            <div>
                <MuiThemeProvider>
                    <MainVue />
                </MuiThemeProvider>
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));