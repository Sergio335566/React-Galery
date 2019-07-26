import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Name from '../animations/name'
export default class About extends Component {
     componentDidMount() {
         const container = this.refs.jscontainer;
         this.nameInstance = new Name(container);
     }
    render () {
        const { match, artists } = this.props;
        const artist = artists[match.params.id];
        return (
            <div ref="jscontainer"className="container js-container-about">
                <div className="home js-home js-hover"><NavLink to={`/`}>home</NavLink></div>
                <div className="about js-galery js-hover"><NavLink to={`/${artist.id}`}>back to galery</NavLink></div>
                <div className="content">
                   <div className="content--inner">
                       <div className="container-name">
                            <div className="artist-name"><span>CLIQUEZ</span></div>
                            <h3 className="js-surnom surnom"><span>{artist.surnom}</span></h3>
                        </div>
                        <div className="artist-description js-description">
                            <p>
                            {artist.description.split('\n').map((item, key) => {
                                return <span key={key}>{item}<br/></span>
                            })}
                            </p>
                            <div className="social js-social">
                                <div className="instagram js-hover"><a href={artist.instagram} target="_blank">instagram</a></div>
                                <div className="email js-hover"><a href={`mailto:${artist.email}`}>email</a></div>
                            </div>
                        </div>
                   </div>
              </div>
            </div>
        )
    }
}
