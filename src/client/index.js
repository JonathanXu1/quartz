import React from "react";
import ReactDOM from "react-dom";
import App from './App.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary.jsx';

const wrapper = document.getElementById('app');


wrapper ? ReactDOM.render((
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
), wrapper) : false;