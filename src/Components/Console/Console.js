import React, {Component} from 'react';

import './Console.css';
import Shell from './Shell';

class Console extends Component {

    // resets cursor to shells
    MoveCursor() {
        document.getElementById("input").focus();
    }

    render() {
        return (
            <div className="Console-Modal"  onClick={this.MoveCursor} >
                <div className="Console-Modal-Top"/>
                <Shell/>
            </div>
        )
    }
}

export default Console;