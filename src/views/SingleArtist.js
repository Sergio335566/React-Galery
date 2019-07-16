import React, { Component } from 'react';

export default class SingleArtist extends Component {
    constructor(props) {
        super(props);
        this.slug = '';
        this.state = {
            error: null,
            isLoaded: false,
            posts: [],
            post: {}
        };
    }

    componentDidMount() {
        const { slug } = this.props.match.params;
        this.slug = slug;

        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(
                // handle the result
                result => {
                    let single = result.find(post => {
                        return post.id;
                    });

                    this.setState({
                        isLoaded: true,
                        posts: result,
                        post: single
                    });
                },
                // Handle error
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        return (
            <div>
                <h1>Artist Page with param {this.slug}</h1>
                <br />
                <br />
                <p>
                    here the post title: <br />
                    <b>{this.state.post.title}</b>
                </p>
                <p>
                    here the post body: <br />
                    {this.state.post.body}
                </p>
            </div>
        );
    }
}
