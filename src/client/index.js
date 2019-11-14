import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';
import AuthLayer from './layers/Auth.jsx';

import ErrorBoundaryLayer from './layers/ErrorBoundary.jsx';

import "./styles/shards/shards.scss";

const wrapper = document.getElementById('app');


wrapper ? ReactDOM.render((
    <Router>
        <AuthLayer>
            <ErrorBoundaryLayer>
                <App />
            </ErrorBoundaryLayer>
        </AuthLayer>
    </Router>
), wrapper) : false;
