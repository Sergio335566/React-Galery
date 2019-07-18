import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Cursor from '../animations/cursor'
export default class SingleArtist extends Component {
     componentDidMount() {
         const container = this.refs.jscontainer;
         const pathName = window.location.pathname;
         this.cursorInstance = new Cursor(container, pathName);
     }
    render () {
        const { match, artists } = this.props;
        const artist = artists[match.params.id];
        const pathToAssets = require.context('../images/', true);
        return (

            <div ref='jscontainer' className="container js-container">
                <div className="home js-home"><NavLink to={`/`}>home</NavLink></div>
                <div className="content">
                   <div className="content--inner">
                       <div className="container-name">
                            <h1>{artist.name}</h1>
                        </div>
                        <div className="navigation js-navigation">
                            <div className="navigation-left js-left"></div>
                            <div className="navigation-right js-right"></div>
                        </div>
                        <div className="container-images">
                            { Object.values(artist.images).map((image, i)=> {
                                return (
                                    <div key={i} className="container-images-single">
                                        <img src={pathToAssets(`./${artist.folderName}/${image.url}`)} data-name={image.id}/>
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
