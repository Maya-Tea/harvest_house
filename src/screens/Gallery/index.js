import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Gallery from 'react-grid-gallery';

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
    src: "https://farm66.staticflickr.com/65535/48157199461_4562908771.jpg",
    thumbnail: "https://farm66.staticflickr.com/65535/48157199461_4562908771.jpg",
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

    callApi = async() => {

        //https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=1c39a5f195ce4f47540160617dcc3870&user_id=182398770%40N08&format=json&nojsoncallback=1

        //https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1c39a5f195ce4f47540160617dcc3870&photoset_id=72157709344355577&user_id=182398770%40N08&format=json&nojsoncallback=1
        const headers = {
            "Accept": "application/json, application/xml, text/plain, text/html, *.*",
            "Content-Type": "application/json"
        };
        let res = await fetch("https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=1c39a5f195ce4f47540160617dcc3870&photoset_id=72157709344355577&user_id=182398770%40N08&format=json&nojsoncallback=1", {
            method: "get",
            headers: headers,
            //body: JSON.stringify(params)
        });
        res = await res.json();
        const photos= [];
        res.photoset.photo.map((photo, i) => {
            photos.push(`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`)
        })
        console.log(photos);
        // "id": "48157279157",
        // "secret": "df75bb5fef",
        // "server": "65535",
        // "farm": 66,
        // "title": "10440904_10153155144562562_5726708217498249574_n",
        // "isprimary": "0",
        // "ispublic": 1,
        // "isfriend": 0,
        // "isfamily": 0
        // }

        //console.log(res);
        //{
        // "photoset": {
        // "id": "72157709328334536",
        // "primary": "48157280477",
        // "owner": "182383295@N08",
        // "ownername": "mcsmolnik",
        // "photo": [
        // {
        // "id": "48157199461",
        // "secret": "4562908771",
        // "server": "65535",
        // "farm": 66,
        // "title": "apo1",
        // "isprimary": "0",
        // "ispublic": 1,
        // "isfriend": 0,
        // "isfamily": 0
        // },
        // {
        // "id": "48157280477",
        // "secret": "abf4495a3c",
        // "server": "65535",
        // "farm": 66,
        // "title": "11060869_10153155144792562_4320474641000498688_n",
        // "isprimary": "1",
        // "ispublic": 1,
        // "isfriend": 0,
        // "isfamily": 0
        // },
        // {
        // "id": "48157279157",
        // "secret": "df75bb5fef",
        // "server": "65535",
        // "farm": 66,
        // "title": "10440904_10153155144562562_5726708217498249574_n",
        // "isprimary": "0",
        // "ispublic": 1,
        // "isfriend": 0,
        // "isfamily": 0
        // }
        // ],
        // "page": 1,
        // "per_page": 500,
        // "perpage": 500,
        // "pages": 1,
        // "title": "albumMe",
        // "total": 3
        // },
        // "stat": "ok"
        // }
        //https://farm66.staticflickr.com/65535/48157279157_df75bb5fef.jpg
        //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    }

    render() {
        return (
            <div className="App-body">
                <h2>Home</h2>
                <button onClick={this.callApi}>Call API</button>
                <Gallery images={IMAGES}/>
            </div>
        );
    }
}
