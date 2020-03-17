import React, {Component} from 'react';

import './Console.css';
import Shell from './Shell';
import ReactDOM from "react-dom";

class Console extends Component {

    CloseConsole(){
        document.getElementById("Console-Modal").removeEventListener("click", function(){
            document.getElementById("input").focus();
        });

        document.getElementById("Console-Modal").innerText = "Feed Closed, F5 to reopen CLR";
    }

    componentDidMount(){
        document.getElementById("Console-Modal").addEventListener("click", function(){
            document.getElementById("input").focus();
        });
    }

    render() {
        return (
            <div id="Console-Modal" className="Console-Modal">
                <div className="Console-Modal-Top">
                    <div onClick={this.CloseConsole} className={"closeConsole"} />
                </div>
                <Shell/>
            </div>
        )
    }
}

export default Console;