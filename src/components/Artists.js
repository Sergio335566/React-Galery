import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Artists extends Component {
    render () {
        const { artists } = this.props;
        return (
            <div className="content">
               <div className="nav content--inner">

                    { Object.keys(artists).map(id=> {
                        return (
                                <h3 key={id}><NavLink to={`/${id}`}>{artists[id].name}</NavLink></h3>
                        )
                    }) }
                </div>
            </div>
        )
    }
}
