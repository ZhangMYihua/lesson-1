import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';


import './App.css';

function App() {

    const [state, setState] = useState({ currentUser: null })

    let unsubscribeFromAuth = null;
    useEffect(() => {
      unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        setState({ ...state, currentUser:user })
        console.log("USER", user)
      })

      return () => {
        unsubscribeFromAuth();
      }
    }, []);

    return ( 
      <div className='App'>
          <Header currentUser={state.currentUser} />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
}

export default App;
