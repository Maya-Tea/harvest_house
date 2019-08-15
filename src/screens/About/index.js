import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="App-body" style={{height: "100vh", padding:"10%"}} >
                <h2>About (BOARD MEMBERS)</h2>
            </div>
        );
    }
}
