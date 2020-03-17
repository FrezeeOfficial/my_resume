import React, { Component, Fragment } from 'react';

import './Shell.css'

class PModal extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p><span>{this.props.message}</span></p>
        )
    }
}


export default  PModal;