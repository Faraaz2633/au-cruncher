import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';

import { ResultProvider, AuthProvider } from './context/Context';
ReactDOM.render(
    <AuthProvider>
        <ResultProvider>
            <Router />
        </ResultProvider>
    </AuthProvider>

    , document.getElementById('root'));