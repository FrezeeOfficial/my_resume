import React, { Component } from 'react';

import './Background.css';

class Background extends Component {
    render(){

        return (
            <div className={"BackgroundTheme-" + this.props.theme}>
                {this.props.children}
            </div>
        )
    }
}

export default Background;