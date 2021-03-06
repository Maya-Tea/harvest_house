import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import story1 from "./story1.jpg";
import story2 from "./story2.png";
import story3 from "./story3.png";
import story4 from "./story4.jpg";
import story5 from "./story5.jpg";

export default class Story extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="Page-content">
                {/* <img src="https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg" />
                <img style={{width:"100%"}} src="https://farm66.staticflickr.com/65535/48157199461_4562908771.jpg" /> */}
                <h3>Porsche had the vision and Ryan had a plan. </h3>
                <img src={ story1 } style={{width:"65%"}} />
                {/* <img src={ story2 } style={{width:"auto", height:"80vh"}}/>
                <img src={ story3 } style={{width:"auto", height:"80vh"}}/> */}
                <h3>With the help of friends they created Harvest House Creation Space, a non-for-profit DIY art house in the heart of North Springfield. </h3>
                <div style={{display:"flex", flexDirection: 'row', justifyContent: "space-between", width: "100%"}}>
                    <img src={ story2 } style={{width:"49%"}}/>
                    <img src={ story3 } style={{width:"49%"}}/>
                </div>
                <h3>Since April 2016, the space has facilitated many community efforts, and has required a lot of collaboration and work. </h3>
                <img src={ story5 } style={{width:"65%"}} />
            </div>
        );
    }
}
