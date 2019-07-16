import React, {Component} from 'react'
import {Switch, BrowserRouter, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines';
import Artists from './components/Artists'
import SingleArtist from './components/SingleArtist'
import artists from './db.json'

        export default class App extends Component {
            render() {
                return (
                    <BrowserRouter>
                        <div className="app">
                        <Route
                            render={({ location }) => {
                                const { pathname, key } = location;

                                return (
                                    <TransitionGroup component={null}>
                                        <Transition
                                            key={key}
                                            appear={true}
                                            onEnter={(node, appears) => play(pathname, node, appears)}
                                            onExit={(node, appears) => exit(node, appears)}
                                            timeout={{ enter: 750, exit: 150 }}>
                                            <Switch location={location}>
                                                <Route exact path='/' render={ routerProps => {
                                                    return  <Artists {...routerProps} artists={artists} /> }
                                                }></Route>
                                                <Route path={`/:id`} render={ routerProps=> {
                                                    return <SingleArtist {...routerProps} artists={artists} /> }
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
