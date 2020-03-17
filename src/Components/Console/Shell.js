import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Shell.css';
import ShellHistory from "./ShellHistory";

class Shell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            history: []
        }
    }

    addLine(message) {

        this.setState(
            { history: [...this.state.history, message] }
        )
    }

    componentDidMount() {
        // listens for key presses
        ReactDOM.findDOMNode(this).addEventListener('keypress', this.KeyPress);
    }

    KeyPress = event => {
        // takes command into Key enter
        if (event.key === "Enter") {
            this.Key_Enter(event);
        }
    };

    ClearEditable(){
        document.getElementById("input").innerText = "";
    }

    Key_Enter(event){
        var input = event.target.innerText.split(" ");

        this.addLine("root # " + input.toString().replace(",", " "));

           switch (input[0]) {
                case "print":
                break;
                    input.shift();
                default:
                    console.log("non-captured command hit in console");
                    break;
           }

        // clear old command out of console head
        this.ClearEditable();
    }

    render() {

        return (
            <div id="Shell">
                <p id="history"><ShellHistory history={this.state.history}/></p>

                <div className="writableline">
                        <span className="prompt">
                        <span className="user">root</span>
                        <span className="val">#</span>
                    </span>


                    <span id="input" contentEditable="true" className="input"/>
                </div>
            </div>
        );
    }


}


export default  Shell;