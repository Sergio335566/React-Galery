import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import './sass/index.sass';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>,
    document.getElementById('main')
);

serviceWorker.register();
