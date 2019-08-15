// import React, { Component } from 'react';
// import './App.scss';
// import Header from "./Components/Header";
//
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Header />
//             </div>
//         );
//     }
// }
//
// export default App;
//
// Main page
// [very minimalist website]

// Our Story
// 	[evolution of the space through pictures]
// Calendar
// 	[updated for current events]
// What We Do
// 	[each of these are a link to all the pictures of topic]
// 	Shows
// 	Workshops
// 	Organization Meetings
// 	Lil Zine Library
// 	Private Parties
// 	Plants + Compost
// How We Run
// 	Our Board

//
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./App.scss";
import logo from "./images/logo.png";
import clouds from "./images/clouds.jpg";
import cloudsmash from "./images/cloudsmedly.png";

import Home from "./screens/Home";
import About from "./screens/About";
import Calendar from "./screens/Calendar";
import Gallery from "./screens/Gallery";
import Story from "./screens/Story";
import FAQS from "./screens/FAQS";
import Board from "./screens/Board";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Container, Row, Col } from "reactstrap";

import "./scss/text.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab:"home",
        };
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            showHamburger: false,
            width: window.innerWidth,
            height: window.innerHeight,
            user: "",
            shoppingCart: [1,2],

        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
        window.addEventListener('scroll', this.handleScroll);

    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
        window.removeEventListener('scroll', this.handleScroll);

    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    setUserData = (user) => {
        this.setState({user});
    }

    // logOut = () => {
    //     this.setUserData({user:""});
    //     const { history } = this.state;
    //     history.push('/home');
    // }

    logOutButton = () => (
        <Route render={({ history}) => (
            <div className="Footer-nav-link" onClick={()=>{this.setUserData({user:""}); history.push('/')}}>
                <p className="Text-standard-font-footer">Logout</p>
            </div>
        )} />
    )

    footer = () => {
        return (
            <div className="Footer" >
                <div className="Footer-bottom-section">
                    <div className="Footer-lime-hr" />
                    <div className="Footer-nav-div ">
                        <div className="Footer-branding-div">
                            <img src={ logo } className="Header-app-logo" alt="logo" />
                            <div className="Footer-social-div">
                                <a href="https://www.facebook.com/417HarvestHouse/" target="_blank" ><FontAwesomeIcon icon={faFacebookSquare} className="Footer-social-icon"  /></a>
                                <a href="https://www.instagram.com/harvesthouse417/?hl=en" target="_blank" ><FontAwesomeIcon icon={faInstagram} className="Footer-social-icon"  /></a>
                                <a href="https://twitter.com/heliponix" target="_blank" ><FontAwesomeIcon icon={faTwitter} className="Footer-social-icon"  /></a>
                            </div>
                        </div>
                        <div className="Footer-navlink-div Footer-info-div">
                            <p className="Footer-cat-label">
                                INFORMATION
                            </p>
                            <NavLink exact={true} to='/aboutus' activeClassName="Footer-nav-active" className="Footer-nav-link">
                                <p className="Text-standard-font-footer" >About Us</p>
                            </NavLink>
                            <NavLink exact={true} to='/faq' activeClassName="Footer-nav-active" className="Footer-nav-link">
                                <p className="Text-standard-font-footer">FAQ</p>
                            </NavLink>
                        </div>
                        <div className="Footer-navlink-div Footer-about-div">
                            <p className="Footer-cat-label">
                                ABOUT US
                            </p>
                            <p className="Text-standard-font-footer">
                                MISSION mission mission mission mission mission mission mission.
                            </p>
                        </div>
                    </div>
                    <div className="Footer-lime-hr" />
                    <div className="Footer-copyright">
                        <p className="Footer-copywright-text">©2019 HARVESTHOUSE™. All Right Reserved.</p>
                    </div>

                </div>
            </div>
        )
    }

    header = () => {
        return (
            <div className = "Header" ref={e => this.headerRef = e}>
                {/* <img src={ clouds } style= {{ height:1000}} alt="logo" onClick={()=>this.setState({isOpen: false})}  /> */}
                <img src={ cloudsmash } style= {{ width:"100vw", position:"absolute", top:0}} alt="logo" onClick={()=>this.setState({isOpen: false})}  />

                <div style={{position: "fixed", display: "flex", width:"90%", marginHorizontal:"5%"}}>
                    <Link className="Header-logo-div" to="/">
                        <img src={ logo } className="Header-app-logo" alt="logo" onClick={()=>this.setState({isOpen: false})}  />
                    </Link>

                    {this.state.width <= 825 &&
                    <div className="Header-hamburger-div">
                        <button onClick={this.toggle} className="Header-hamburger-button">
                            <FontAwesomeIcon icon={faBars} className="Header-hamburger-icon"  />
                        </button>
                    </div>
                    }
                    {this.state.width > 825 &&
                    <div className = "Nav-row">
                        <div className= "Header-tabs-container">
                            <NavLink exact={true} activeClassName="Header-active-tab" className="Header-link" to='/story'>
                                <p>OUR STORY</p>
                            </NavLink>
                            <NavLink exact={true} activeClassName="Header-active-tab" className="Header-link" to='/calendar'>
                                <p>CALENDAR</p>
                            </NavLink>
                            <NavLink exact={true} activeClassName="Header-active-tab" className="Header-link" to='/gallery'>
                                <p>WHAT WE DO</p>
                            </NavLink>
                            <NavLink exact={true} activeClassName="Header-active-tab" className="Header-link" to='/board'>
                                <p>WHO WE ARE</p>
                            </NavLink>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }

    getScroll = () => {
        //console.log(this.appbody.scrollY);
        console.log(window.scrollY);
        //window.scrollTo(0, 300);
        this.headerRef.scrollTo(0,window.scrollY);
    }

    handleScroll = () => {
        this.headerRef.scrollTo(0,window.scrollY);
    }

    render() {
        //console.log(this.appbody.scrollTop());
        return (
            <div>
                <Router>
                    <ScrollToTop>
                        <div className="Content-container">
                            {this.header()}
                            <div className="Header-hamburger-contents" style={{height:this.state.isOpen ? 220 : 0}}>
                                <NavLink className="Header-hamburger-link" activeClassName="Header-hamburger-link-active" exact={true} to='/story' onClick={this.toggle}>
                                    <p>OUR STORY </p>
                                </NavLink>
                                <NavLink className="Header-hamburger-link" activeClassName="Header-hamburger-link-active" exact={true} to='/calendar' onClick={this.toggle}>
                                    <p>CALENDAR</p>
                                </NavLink>
                                <NavLink className="Header-hamburger-link" activeClassName="Header-hamburger-link-active" exact={true} to='/gallery' onClick={this.toggle}>
                                    <p>WHAT WE DO</p>
                                </NavLink>
                                <NavLink className="Header-hamburger-link" activeClassName="Header-hamburger-link-active" exact={true} to='/board' onClick={this.toggle}>
                                    <p>WHO WE ARE</p>
                                </NavLink>

                            </div>
                            <div className="App-body" ref={e => this.appbody = e}>
                                <Route exact path="/" component={ Home } />

                                <Route path="/board" render={(props) => <Board {...props} width={this.state.width} />} />
                                <Route path="/calendar" render={(props) => <Calendar {...props} width={this.state.width} />} />
                                <Route path="/gallery" render={(props) => <Gallery {...props} width={this.state.width} />} />
                                <Route path="/story" render={(props) => <Story {...props} width={this.state.width} />} />

                                <Route path="/aboutus" render={(props) => <About {...props} width={this.state.width} />} />
                                <Route path="/faq" render={(props) => <FAQS {...props} width={this.state.width} />} />

                            </div>
                        </div>
                        {this.footer()}
                    </ScrollToTop>
                </Router>
            </div>
        );
    }
}

export default App;
