import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RecyclHeader from './RecyclHeader/RecyclHeader';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount/CreateAccount';
import SelectScreen from './SelectScreen/SelectScreen';
import SelectedType from './SelectedType/SelectedType';
import ContactForm from './ContactForm/ContactForm';
import Pickup from './Pickup/Pickup';
import Menu from './Menu/Menu';

import './App.css';

class App extends Component {


  /** STATE 
    state = {}
  */



  /** CRUD */



  /** RENDERING */

  renderRoutes() {
    // if (this.state.loggedin !== true) {
    //   return (
    //     <>
    //       <Route
    //         path="/(|search|myrecipes|messages|buddies)"
    //         component={Login} />
    //       <Route
    //         exact
    //         path="/createaccount/"
    //         component={CreateAccount} />
    //     </>
    //   )
    // } else {
    return (
      <>
        <Route
          exact
          path="/"
          component={Login} />
        <Route
          path="/login"
          component={Login} />
        <Route
          path="/createaccount"
          component={CreateAccount} />
        <Route
          exact
          path="/home"
          component={SelectScreen} />
        <Route
          exact
          path="/contact"
          component={ContactForm} />
        <Route
          exact
          path="/pickups"
          component={Pickup} />
        <Route
          exact
          path="/menu"
          component={Menu} />





        <Route
          exact
          path="/select/:selectedType"
          component={SelectedType} />


      </>
    )
    // }
  }



  render() {
    return (
      <div className="App" >
        <RecyclHeader />
        <main className="App__main">
          {this.renderRoutes()}
        </main>
        <NavBar />
      </div>
    );
  }
}


export default App;