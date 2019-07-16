import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            posts: []
        };
    }
    componentDidMount() {
        // I will use fake api from jsonplaceholder website
        // this return 100 posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(
                // handle the result
                result => {
                    this.setState({
                        isLoaded: true,
                        posts: result
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
        const { error, isLoaded, posts } = this.state;
        return (
            <div className="view">
                <div className="content">
                    <div className="content--inner">
                        <ol className="item">
                            {posts.map(post => (
                                <li key={post.id} align="center" className={post.id}>
                                    <div>
                                        <Link to={`/artist/${post.userId}`}>
                                            <h1 key={post.userId}>Artiste {post.userId}</h1>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}
export default Artist;

// class Artist extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             error : null,
//             isLoaded : false,
//             posts : []
//         };
//     }
//     componentDidMount(){
//         // I will use fake api from jsonplaceholder website
//         // this return 100 posts
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then( response => response.json())
//         .then(
//             // handle the result
//             (result) => {
//                 this.setState({
//                     isLoaded : true,
//                     posts : result
//                 });
//             },
//             // Handle error
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 })
//             },
//         )
//     }
//     render() {
//         const {error, isLoaded, posts} = this.state;
//         if(error){
//             return <div>Error in loading</div>
//         }else if (!isLoaded) {
//             return <div>Loading ...</div>
//         }else{
//             return(
//                 <div class="view">
//                   <div className="content">
//                     <div className="content--inner">
//                         <ol className="item">
//                         {
//                             posts.map(post => (
//                                 <li key={post.id} align="start">
//                                     <div>
//                                         <p className="title">{post.title}</p>
//                                         <p className="body">{post.body}</p>
//                                     </div>
//                                 </li>
//                             ))
//                         }
//                         </ol>
//                     </div>
//                 </div>
//             </div>
//             );
//         }
//
//     }
//   }
//
//   export default Artist;
