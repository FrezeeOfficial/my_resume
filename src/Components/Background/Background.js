import React, { Component } from 'react';

import './Background.css';

class Background extends Component {
    constructor(props) {
        super(props)
    }

    render(){

        return (
            <div className={"BackgroundTheme-" + this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

export default Background;