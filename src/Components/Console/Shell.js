import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Shell.css';
import './PModal';
import PModal from "./PModal";

class Shell extends Component {

    addLine(message) {

    }

    componentDidMount() {
        // listens for key presses
        ReactDOM.findDOMNode(this).addEventListener('keypress', this.KeyPress);
    }

    KeyPress = event => {
        if (event.key == "Enter") {
            console.log("enter!!");
        }

    };

    

    render() {
        return (
            <div id="Shell">
                <p id="history"> </p>
                <span className="prompt">
                    <span className="user">root</span>
                    <span className="val">#</span>
                </span>

                <span id="input" contentEditable="true" className="input"> </span>
            </div>
        );
    }


}


export default  Shell;