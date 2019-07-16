import React, { Component } from 'react';
import init from '../animations/cursor'
export default class Artists extends Component {
    render () {
        const { match, artists } = this.props;
        const artist = artists[match.params.id];
        const pathToAssets = require.context('../images/');
        
        return (

            <div className='container js-container'>
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
                                    <img key={i} src={pathToAssets(image.url)}/>
                                )
                            }) }
                    </div>
                  </div>
            </div>
        </div>
        )
    }
}
