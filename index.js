import React from 'react';
import {Redirect, Link, BrowserRouter as Router, Switch, Route,  } from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Todo from './todoApp/todpApp';
import LoginPage from './todoApp/log'

ReactDOM.render(<App />, document.getElementById('root'));



//ReactDOM.render(<Log />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
