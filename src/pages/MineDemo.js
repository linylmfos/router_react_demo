import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class MineDemo extends React.Component {

    clickHandle() {
        console.log('props11', this.props);
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <button onClick= { this.clickHandle.bind(this)  }>回到home</button>
            </div>
        )
    }
}

export default withRouter(MineDemo);