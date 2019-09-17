import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import after downloading npm install --save react-mdl
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// Import after downloading npm install react-router-dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    // BrowserRouter is to route things
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
