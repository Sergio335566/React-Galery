import React, { Component } from 'react';
import {
    Route,
    NavLink,
    Switch
} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import Home from './Home';
import About from './About';
import './style.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="nav">
                    <NavLink exact to="/" activeClassName="active">Welcome</NavLink>
                    <NavLink to="/about" activeClassName="active">Home</NavLink>
                </div>
                <Route render={({location}) => (
                    <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={500}
                        classNames="fade"
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )} />
            </div>
        )
    }
}

export default App;
