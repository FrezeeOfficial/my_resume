import React, { Component } from 'react';

import Console from '../Components/Console/Console';
import Background from '../Components/Background/Background';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../Components/GlobalConsole';
import { Dracula, Ruby, JetWhite, SeaBlue } from '../Components/themes';


class SPA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: Dracula,
            colours: [Dracula, Ruby, JetWhite, SeaBlue]
        }
    }


    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      
    changeColour = () => {
        this.setState({theme: this.state.colours[this.getRandomInt(3)]});
    }

    render(){
        return (
            <ThemeProvider theme={this.state.theme}>
            <>
            <GlobalStyles />

                <Background>
                    <Console changeColour={this.changeColour}/>
                </Background>

            </>
          </ThemeProvider>
        )
    }

}

export default SPA;
