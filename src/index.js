import React from 'react';
import ReactDOM from 'react-dom/client';

import { HashRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
