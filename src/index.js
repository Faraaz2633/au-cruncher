import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';

import { ResultProvider } from './context/Context';
ReactDOM.render(
    <ResultProvider>
        <Router />
    </ResultProvider>

    , document.getElementById('root'));