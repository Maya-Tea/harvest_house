import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

import torn1 from "./torn1.png";

const IMAGES =
[{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    //isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
},
{
    src: torn1,
    thumbnail: torn1,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    //tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
},

{
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
}]

export default class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = async() => {
        //  async
    }

    render() {
        return (
            <div className="App-body" style={{height: "100vh", padding:"10%"}} >
                <h2>Gallery</h2>
                <Gallery images={IMAGES}/>
            </div>
        );
    }
}
