import * as React from "react";
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class MainVue extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to={'/downloadStation'}>
                    <RaisedButton label="Download station" primary={true}/>
                </Link>
            </div>
        )
    }
}

export default MainVue;