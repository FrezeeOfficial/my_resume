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
            theme: Dracula
        }
    }



    render(){
        return (
            <ThemeProvider theme={this.state.theme}>
            <>
            <GlobalStyles />

                <Background>
                    <Console/>
                </Background>

            </>
          </ThemeProvider>
        )
    }

}

export default SPA;
