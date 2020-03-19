import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../GlobalConsole';
import Shell from './Shell/Shell';
import { Dracula, Ruby } from '../themes';

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
                        <div className={"fullConsole"} />
                        <div className={"IdkConsole"} />
                    </div>
                    <Shell/>
                </div>


        )
    }
}

export default Console;