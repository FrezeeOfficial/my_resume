import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './Shell.css';
import ShellHistory from "./ShellHistory";

class Shell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            builtword: [],
            knowncommandheaders: [ "print", "clear" ]
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

      this.addLine('¯\\_(ツ)_/¯ ~ Welcome to the CLI. Type "help" for available commands');
    }

    KeyPress = event => {
        // takes command into Key enter
        if (event.key === "Enter") {
            this.Key_Enter(event);
        } else {
            // this.Word_Suggestion(event);
        }
    };

    // Word_Suggestion(event){
    //     if (event.key == " ") {
    //         this.setState({builtword: []});
    //     } else {
    //
    //         this.setState({builtword: [...this.state.builtword, event.key]});
    //
    //         var commands = this.state.knowncommandheaders;
    //
    //         for (var i = 0; i < commands.length; i++) {
    //             if (commands[i].indexOf(this.state.builtword.toString().replace(/,/g, "")) >= 0) {
    //                 document.getElementById("input").innerText = document.getElementById("input").innerText.substring(0, document.getElementById("input").innerText.length-(this.state.builtword.length + 1)) + commands[i];
    //             }
    //
    //         }
    //     }
    // }


    ClearEditable(){
        document.getElementById("input").innerText = "";
    }

    ClearHistory(){
        this.setState({history: []});
    }


    Key_Enter(event){
        var input = event.target.innerText.split(" ");

        this.addLine("root # " + input.toString().replace(",", " "));
           switch (input[0].toLocaleLowerCase()) {
                case "print":
                    input.shift();
                    this.addLine("[SYS ~[USR-INPUT]]: " + input.toString().replace(",", " "));
                break;
                case "clear":
                   this.ClearHistory();
                break;
               case "help":
                    this.addLine("[SYS]: Commands available: print, clear");
                   break;
                default:
                    this.addLine("[ERR]: Unknown Command");
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