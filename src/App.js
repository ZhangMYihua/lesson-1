import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up.component/sign-in-sign-up.component'
import {auth} from './firebase/firebase.utils';
 

class App extends React.Component {

    constructor() {
      super();

      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
      this.unsubscribeFomAuth = auth.onAuthStateChanged(user => {
        this.setState ({ currentUser: user });

        console.log (user);
      });
    }

    componentWillUnmount() { 
      this.unsubscribeFomAuth();
    }

    render () {
      return (
        <div >
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component = {HomePage}/>
            <Route exact path='/shop' component = {ShopPage}/>
            <Route exact path='/signin' component = {SignInAndSignUpPage}/>
          </Switch>
        </div>
      );
    }
   
  }

export default App;
