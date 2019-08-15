import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../../components/Header';
// import cloud from "./cloud.jpg";
// import redPaper from "../../assets/images/redPaper.jpg";
// import glitterPaper from "../../images/glitterPaper.jpg";
import cool from "./cool.png";
import modelHH from "./modelHH.png";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Header />
                <img src={modelHH} style={{width:"100%", height:"auto"}}/>
                <img src={cool} style={{width:"100%", height:"auto"}}/>
            </div>
        );
    }
}
