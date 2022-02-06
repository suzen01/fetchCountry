import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import ToRoutering from './App';
import { Routes ,Route, Link } from 'react-router-dom';
import {BrowserRouter  } from 'react-router-dom';
import DarkMode from './DarkMode';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

     <DarkMode />
     
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
