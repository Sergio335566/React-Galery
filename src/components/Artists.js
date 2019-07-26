import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cursor from '../animations/cursor'
import images from '../homeImages.json'
export default class Artists extends Component {
    componentDidMount() {
        const container = this.refs.jscontainer;
        const pathName = window.location.pathname;
        this.cursorInstance = new Cursor(container, pathName);
    }
    render () {
        const { artists } = this.props;
        const pathToAssets = require.context('../images/');
        return (
            <div ref='jscontainer' className="container js-container-artists">
                <div className="content">
                   <div className="content--inner">
                       <div className="navigation js-navigation">
                           <div className="navigation-left js-left"></div>
                           <div className="navigation-right js-right"></div>
                        </div>
                        <div className="container-names js-names js-hover">
                            { Object.values(artists).map((artist, i)=> {
                                return (
                                    <h3 key={i}><NavLink to={`/${i}`}>{artist.name}</NavLink></h3>
                                )
                            }) }
                        </div>
                        <div className="container-images">
                            { Object.values(images).map((image, i)=> {
                                return (
                                    <div key={i} className="container-images-single">
                                        <img src={pathToAssets(images[i].url)} data-name={images.dataName}/>
                                    </div>
                                )
                            }) }
                            <div className="image-name js-image-name">
                                <h2></h2>
                            </div>
                        </div>
                        <div className="navigation-cursor js-cursor"></div>
                    </div>
                </div>
            </div>
        )
    }
}
