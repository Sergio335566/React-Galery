import React, { Component } from 'react';

export default class SingleArtist extends Component {
    constructor(props) {
        super(props);
        this.slug = '';
    }

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.slug = slug;
    }

    render() {
        return (
            <div>
                <h1>Artist Page with param {this.slug}</h1>
                <br />
                <br />
                <p>
                    TODO:
                    <br />- Search in data with the param (slug here)
                </p>
            </div>
        );
    }
}
