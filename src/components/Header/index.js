import React, { Component } from "react";
import "../../App.scss";
import cloud from "./cloud.jpg";
import redPaper from "../../assets/images/redPaper.jpg";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewportWidth: 0,
            viewportHeight: 0
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        });
    }

    render() {
        const { viewportWidth, viewportHeight } = this.state;
        return (
            <div className="container">
                <div className="header-container" style={{width:viewportWidth, height:viewportHeight}}>
                    <svg id="barn-svg" className="draw-svg" width={viewportWidth} height={viewportWidth*0.5} viewBox="0 0 228 151">
                        <defs>
                            <pattern id="barn-pattern" x="0" y="0" width="2" height="2">
                                <image
                                    width="230"
                                    height="151"
                                    href={redPaper}
                                />
                            </pattern>
                            <filter id="barn-shadow" x="0" y="0" width="200%" height="200%">
                                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>
                        <path className="draw-path" filter="url(#barn-shadow)" fill="url(#barn-pattern)" stroke="black" strokeWidth="1" opacity="1" d="M 128.5 17 L 153.5 26 L 165 36.5 Q 164.3 38.8 166.5 38 L 201 71.5 L 199.5 74 L 196 75 L 197 78.5 L 199 109.5 L 200.5 111 L 203.5 110 L 205.5 110 L 208.5 109 L 212.5 110 L 215 109 L 215.5 107 L 218 108.5 Q 217.3 106.3 219.5 107 L 221.5 106 L 224.5 107 Q 226.2 103.3 228 106.5 Q 228.6 111.9 227.5 112 L 200 112 L 200 119.5 L 201.5 121 Q 206.9 120.1 209 122.5 L 206.5 123 L 205.5 122 L 158.5 122 L 156.5 121 L 154.5 122 L 155 120.5 L 154 117.5 L 154 93.5 L 153 92.5 L 153 80 L 105 80 L 105 121 L 107 121.5 L 99.5 122 L 96.5 121 L 93.5 122 L 92.5 121 L 60.5 121 L 59.5 120 L 45.5 120 L 44.5 119 L 43 119.5 Q 45.3 118.3 42.5 117 Q 35.8 116.3 32.5 119 L 24 119 Q 25.1 122.3 21 121 Q 22.3 118 18.5 119 L 17 119.5 Q 16.3 117.3 18.5 118 L 18.5 117 Q 13.1 115.1 14 118.5 L 14.5 120 L 10.5 121 L 9.5 118 L 6.5 117 L 3 119.5 L 0.5 123 L 0 108 L 2.5 109 L 7.5 108 L 11.5 107 L 14.5 108 Q 20 106.5 21.5 109 L 23 105.5 L 25 85 L 18 83.5 L 64.5 67 L 79 52.5 L 80.5 50 L 84 47.5 L 103.5 27 L 128.5 17 Z M 139 34 L 138 35 L 116 35 L 116 55 L 139 55 L 143 54 L 142 48 L 142 36 L 139 34 Z M 121 57 L 121 58 L 122 58 L 121 57 Z M 141 57 L 141 58 L 141 57 Z M 120 58 L 120 59 L 120 58 Z M 120 59 L 120 74 L 124 73 L 133 73 L 134 74 L 140 73 L 140 59 L 120 59 Z M 77 86 L 77 98 L 76 99 L 76 108 L 91 108 L 91 97 L 92 96 L 92 86 L 77 86 Z M 167 86 L 168 109 L 183 109 L 184 108 L 183 107 L 183 96 L 182 95 L 182 86 L 167 86 Z M 29 87 L 27 89 L 28 91 L 30 88 L 29 87 Z M 33 88 L 30 92 L 34 89 L 33 88 Z M 36 89 L 26 99 Q 27 105 25 108 L 33 108 L 34 109 L 36 108 L 38 109 L 42 108 L 44 106 L 44 97 L 42 90 L 36 89 Z M 45 91 L 44 93 L 45 93 L 45 91 Z M 30 92 L 30 93 L 30 92 Z M 48 92 L 47 94 L 48 94 L 48 92 Z M 51 92 L 48 96 L 49 97 L 52 94 L 51 92 Z M 54 94 L 46 102 L 47 106 Q 50 107 49 104 L 54 104 L 56 104 L 58 103 L 57 96 L 54 94 Z M 59 95 L 59 96 L 59 95 Z M 48 97 L 48 98 L 48 97 Z M 62 98 L 61 100 L 62 100 L 62 98 Z M 61 100 L 61 101 L 61 100 Z M 61 102 L 60 105 L 61 105 L 61 102 Z M 55 105 L 55 106 L 55 105 Z M 54 114 L 54 115 L 54 114 Z M 57 114 L 56 116 L 54 116 L 45 116 L 45 119 L 52 118 L 60 118 L 60 116 L 59 116 Q 60 118 57 117 L 57 114 Z M 3 118 L 3 119 L 3 118 Z "/>
                        {/* <path className="draw-path" fill="url(#barn-pattern)" stroke="black" strokeWidth="1" opacity="1" d="M 118 36 L 128 36 L 128 53 L 117 53 L 117 45.5 L 118 44.5 L 118 36 Z "/>
          <path className="draw-path" fill="url(#barn-pattern)" stroke="black" strokeWidth="1"  opacity="1" d="M 130 36 L 140 36 L 140 44 L 131 44.5 L 140 45 L 141 53 L 130 53 L 130 36 Z "/> */}
                    </svg>

                    <svg
                        height={viewportWidth*0.3}
                        width={viewportWidth*0.4}
                        id="cloud-svg"
                        version="1.1"
                        className="draw-svg"
                        viewBox="0 0 230 98.999992"
                    >
                        <defs>
                            <pattern id="cloud-pattern" x="0" y="0" width="2" height="2">
                                <image
                                    width="230"
                                    height="99"
                                    href={cloud}
                                />
                            </pattern>
                            <filter id="cloud-shadow" x="0" y="0" width="200%" height="100%">
                                <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="100" />
                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>

                        <path
                            stroke="black"
                            strokeWidth="1"
                            fill="white"
                            filter="url(#cloud-shadow)"
                            className="draw-path"
                            id="cloud-svg"
                            d="m 150,0 -13,4 1,3 -1,0 -3,5 -6,-1 -2,-5 -7,-3 -7,2 -7,8 c 1.33334,2.666667 0.66667,3.666667 -2,3 l -6.000005,6 0,4 c 0,2 1.66667,2.666667 5.000005,2 l 1,0 -1,3 -4.000005,2 -5,-3 -1,-4 -3.000001,-3 -10.99999,-2 -4,-3 -4,1 -2,0 -3,3 -13,-5 -5,0 L 40,21 l 1,5 -1,2 1,7 -2,0 1,2 -1,0 c -2.71151,-5.691933 -3.490922,0.478817 -5,4 l -3,0 -5,-4 -10,6 1,4 -3,-1 c -2.666667,1.333333 -3.333333,4.333333 -2,9 l 4,2 -1,3 c -2.666667,-0.666667 -3.666667,0 -3,2 L 9,63 4,63 C 4,61 2.666667,60.333333 0,61 l 1,6 9,1 1,3 10,3 4,5.000005 0,1.99999 5,3 2,-1 c 8.853693,1.959895 8.411604,-1.024502 11.000004,-2 1.33333,0.66667 1.66666,0.33333 1,-1 0.66666,-1.99999 2.33333,-2.66666 5,-1.99999 l 1,-4.000005 5,1 c 1.33333,0.666665 1.66666,2.333335 1,4.999995 3.33333,0.66667 5.33333,0.33333 6,-0.99999 l -1,-2 1,-8.000005 0,-2 3,-5 5,0 6,5 c 1.33333,3.333333 0.66666,4.666667 -2,4 l -4,4 c 2,0.666665 1.66666,1.666665 -1,3.000005 l 3,3.99999 7,5 c 0.66666,1.33333 0,1.66667 -2,1 -0.596879,3.800717 4.517775,1.354604 7,1 l 3.99999,8 7.000001,2 9.000005,-1 5,-4 1,0 0,-4 -3,1 -3,-2 -2,-2 c -0.66666,-2 -1.33334,-2.33333 -2.000005,-1 l -1,-2 3.000005,1 1,-1 9,0 2,0 2,-1 5,1 2,0 8,4 c 6.66667,1.33333 11.66667,0.33333 15,-3 l 17,0 7,4 3,-1 -2,-8.99999 3,-3 7,0 L 190,73 c 0.66667,1.333333 1.66667,1 3,-1 3.33333,-0.666667 5.66667,-0.333333 7,1 l 4,-1 c 1.33333,-2.666667 2.66667,-2.666667 4,0 l 6,-3 2,-3 2,1 3,0 -1,-4 4,1 3,-1 3,1 0,-3 c -0.66667,-2 -1.33333,-2.333333 -2,-1 -4.2064,-9.520415 -7.95984,-6.007739 -5,-6 l -2,3 c -3.33333,0.666667 -5.33333,0 -6,-2 l -2,-3 -4,-5 -1,1 -2,-2 -7,-2 c -2.66667,0.666667 -3.66667,0.333333 -3,-1 l -4,-5 -2,0 c -1.33333,-2.666667 -2.33333,-3 -3,-1 l -6,-2 -5,1 -5,-2 1,-2 c 0.66667,-2 0.33333,-2.666667 -1,-2 -4,-1.333333 -5.66667,-4.666667 -5,-10 l -4,-4 c 2,-1.333333 2.66667,-3 2,-5 l -9,-3 -1,-3 1,-2 -2,-2 z m -16,10 0,1 z m -40.000005,15 0,1 z m 1,1 0,1 z M 222,65 l 0,1 z"
                        />
                    </svg>
                    {/* <svg
          width={viewportWidth * 0.5}
          height={viewportWidth * 0.8}
          viewBox="0, 0, 200, 400"
          id="house-svg"
          className="draw-svg"
        >
          <defs>
            <pattern id="house-pattern" x="0" y="0" width="1" height="1">
              <image
                width="230"
                height="400"
                href="http://lorempixel.com/animals/120/250/"
              />
            </pattern>
          </defs>

          <path
            id="house-path"
            fill="url(#house-pattern)"
            className="draw-path"
            stroke="black"
            strokeWidth="3"
            d="M 100,50 L 120,110 150,90 170,220 70,300 50,250 50,200 70,100 50,70 Z"
          />
        </svg> */}

                </div>
                <div style={{backgroundColor:"green", height:40}}></div>
            </div>
        );
    }
}

export default Header;
