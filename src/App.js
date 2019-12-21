import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/hompage.component';
import './App.css';

const Hatpage = () => (
  <h1>HAT PAGE</h1>
)

function App() {

    return ( 
      <div className='App'>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/hats' component={Hatpage} />
          </Switch>
      </div>
    );
}

export default App;
