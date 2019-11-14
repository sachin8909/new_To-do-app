import React, { Component } from 'react';
import {BrowserRouter as Router, Link,Switch, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginPage from './todoApp/log';
import Todo from './todoApp/todpApp';


class App extends Component {
  

  render() { 
    return (
    <div>
      <Router>
<Switch>
      <Route path='/'  component={ LoginPage }/>
      <Redirect from='/LoginPage' to="/Todo/"  component={Todo} />
      <Route path='/Todo'  component={ Todo }/>
 

</Switch>
      </Router>
    
    </div>

    );
  }
}
 
export default App;
