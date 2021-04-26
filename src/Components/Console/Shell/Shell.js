import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Commands from './Commands';
import Mediator from './Mediator';

import './Shell.css';
import ShellHistory from "./ShellHistory";

var users_struct = {
    James: {user: "james", admin_level: 3},
    Root: {user: "root", admin_level: 2}
}

class Shell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            history: [],
            builtword: [],
            current_user: users_struct.Root,
            knowncommandheaders: [ "print", "clear", "about", "change_colour", "change_user"]
        }
    }
    

    addLine = (user, message) => {
        var msg = <span className={user.sys_class_tag}>[{user.console_format} ~] <span className={user.class_tag}>{message}</span></span>
        this.setState(
            { history: [...this.state.history, msg] }
        )
    }
    
    componentDidMount() {
        // listens for key presses
        ReactDOM.findDOMNode(this).addEventListener('keypress', this.KeyPress);
        
        var addLine = this.addLine;
         

        Mediator.subscribe("print", (function(usr, args) {

            var html_str = <span className="">{args}</span>;
            addLine(usr, html_str);
        }))

        Mediator.subscribe("clear", this.ClearHistory);

        Mediator.subscribe("main_colour", this.props.changeColour);

        Commands.init();
    }

    KeyPress = event => {
        // takes command into Key enter
        if (event.key === "Enter") {
            this.Key_Enter(event);
        } else {
            // this.Word_Suggestion(event);
        }
    };

    Word_Suggestion(event){
        if (event.key == " ") {
            this.setState({builtword: []});
        } else {
    
            this.setState({builtword: [...this.state.builtword, event.key]});
    
            var commands = this.state.knowncommandheaders;
    
            for (var i = 0; i < commands.length; i++) {
                if (commands[i].indexOf(this.state.builtword.toString().replace(/,/g, "")) >= 0) {
                    document.getElementById("input").innerText = document.getElementById("input").innerText.substring(0, document.getElementById("input").innerText.length-(this.state.builtword.length + 1)) + commands[i];
                }
    
            }
        }
    }


    ClearEditable(){
        document.getElementById("input").innerText = "";
    }

    ClearHistory = () => {
        this.setState({history: []});
    }

    Key_Enter(event){
        var input = event.target.innerText.split(" ");

        // this.addLine("root # " + input.toString().replace(",", " "));   

        Commands.route_command(input[0].toLocaleLowerCase(), input);
        //    switch (input[0].toLocaleLowerCase()) {
        //         case "print":
        //             input.shift();
        //             this.addLine("[SYS ~[USR-INPUT]]: " + input.toString().replace(",", " "));
        //         break;
        //         case "clear":
        //            this.ClearHistory();
        //         break;
        //        case "help":
        //             this.addLine("[SYS]: Commands available: " + this.state.knowncommandheaders);
        //            break;
        //         case "about":
        //             this.addLine("[SYS]: Hello, this console is ran using reactJs and nodeJs");
        //             break;
        //         case "change_colour":
        //             this.props.changeColour();
        //             break;
        //         case "change_user":
        //                 input.shift();
        //                 this.addLine("[SYS]: changing user to " + input.toString());
        //                 for (var i = 0; i < Object.keys(users_struct).length; i++) {
        //                     if (Object.values(users_struct)[i].user == input.toString()) {
        //                         console.log("yay")
        //                         this.setState({current_user: Object.values(users_struct)[i]})
    
        //                     }
        //                 }
        //             break;
        //         default:
        //             this.addLine("[ERR]: Unknown Command");
        //             break;
        //    }

        // clear old command out of console head
        this.ClearEditable();
    }

    render() {

        return (
            <div id="Shell">
                <p id="history"><ShellHistory history={this.state.history}/></p>

                <div className="writableline">
                        <span className="prompt">
                        <span className="user">{this.state.current_user.user}</span>
                        <span className="val">#</span>
                    </span>


                    <span id="input" contentEditable="true" className="input"/>
                </div>
            </div>
        );
    }


}


export default  Shell;