import React, { Component } from 'react';
import './App.css';

import Homepage from './pages/homepage/hompage.component';

class App extends Component {
  render() {
    return <div className='App'>
              <Homepage />
          </div>;
  }
}

export default App;
