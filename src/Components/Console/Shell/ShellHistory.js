import React, { Component } from 'react';


class ShellHistory extends Component {
    render() {
        return (
            <span>
                {this.props.history.map((person, index) => (
                    <span id={"past-command"} key={index}>{person}</span>
                ))}
            </span>
        )
    }
}

export default ShellHistory;