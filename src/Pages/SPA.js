import React, { Component } from 'react';

import Console from '../Components/Console/Console';
import Background from '../Components/Background/Background';


class SPA extends Component {

    render(){
        return (
            <Background theme="Dracula">
                <Console/>
            </Background>
        )
    }

}

export default SPA;
