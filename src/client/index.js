import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import Auth from './components/Auth.jsx';

import ErrorBoundary from './components/ErrorBoundary.jsx';

const wrapper = document.getElementById('app');


wrapper ? ReactDOM.render((
    <Router>
        <Auth>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Auth>
    </Router>
), wrapper) : false;