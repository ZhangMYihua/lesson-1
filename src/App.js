import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Switch>
          <HomePage/>
        </Switch>
      </div>
    )
  }
}

export default App;
