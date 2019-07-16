import React, { Component } from 'react'

export default class Artists extends Component {
    render () {
        const { match, artists } = this.props;
        return (
            <div className='contenu'>
            <div className="content">
               <div className="content--inner">
                    <h1>{artists[match.params.id].name}</h1>
                    <h2>Hello, je suis {artists[match.params.id].name} </h2>
              </div>
            </div>
        </div>
        )
    }
}
