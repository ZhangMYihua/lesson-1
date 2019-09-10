import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.componet';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firbase.utils'

import './App.css';

class App extends React.Component {

  state = {
    currentUser: null
  }



  unsubscribeFromAuth = null;
  // auth.onAuthStateChanged is an open messaging sys between our app and  our firbase App
  // whenever any changes occur firebase will send a message updating
  // give us the user and will call it
   componentDidMount(){
     this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       createUserProfileDocument(userAuth);

       console.log(userAuth)
     })
   }

   componentWillUnmount(){
     this.unsubscribeFromAuth();
   }

  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
