import React, {Component} from 'react'
import {Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import Animation from './animations/animations';
import Artists from './components/Artists';
import SingleArtist from './components/SingleArtist';
import About from './components/About'
import bdd from './artists.json'

        export default class App extends Component {
            render() {
                return (
                    <BrowserRouter>
                        <div className="app">
                        <Route
                            render={({ location }) => {
                                const { pathname, key } = location;
                                let animation = new Animation();

                                return (
                                    <TransitionGroup component={null}>
                                        <Transition
                                            key={key}
                                            appear={true}
                                            onEnter={(node, appears) => animation.play(pathname, node, appears)}
                                            onExit={(node, appears) => animation.exit(pathname, node, appears)}
                                            timeout={{ enter: 750, exit: 1500 }}>
                                            <Switch location={location}>
                                                <Route exact path='/' render={ routerProps => {
                                                    return  <Artists {...routerProps} artists={bdd.artists} /> }
                                                } />
                                                <Route path={`/:id/about`} render={ routerProps => {
                                                    return <About {...routerProps} artists={bdd.artists} /> }
                                                } />
                                                <Route path={`/:id`} render={ routerProps => {
                                                    return <SingleArtist {...routerProps} artists={bdd.artists} /> }
                                                } />
                                            </Switch>
                                        </Transition>
                                    </TransitionGroup>
                                );
                            }}
                        />
                    </div>
                </BrowserRouter>
            )
        }
    }
