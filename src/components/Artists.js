import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Artists extends Component {
    render () {
        const { artists } = this.props;
        return (
            <div className="container">
                <div className="content">
                   <div className="nav content--inner">
                        <div className="container-names js-names">
                        { Object.values(artists).map((artist, i)=> {
                            return (
                                <h3 key={i}><NavLink to={`/${i}`}>{artist.name}</NavLink></h3>
                            )
                        }) }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
