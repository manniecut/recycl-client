import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import RecyclHeader from './RecyclHeader/RecyclHeader';
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import CreateAccount from './Login/CreateAccount/CreateAccount';
import SelectScreen from './SelectScreen/SelectScreen';
import SelectedType from './SelectedType/SelectedType';
import Pickup from './Pickup/Pickups';
import Menu from './Menu/Menu';
import EditAccount from './Login/EditAccount/EditAccount';
import ContactForm from './ContactForm/ContactForm';

import './App.css';
import RecyclContext from './RecyclContext';

class App extends Component {


  /** STATE  */

  state = {
    user: {
      username: '',
      userid: '',
    },
    loggedin: '',
  }


  /** CRUD */


  setUser = (username, userId) => {
    this.setState({
      user: {
        username: username
      },
      loggedin: true
    })
  }

  handleLogout = () => {
    this.setState({
      user: {
        username: '',
        userid: '',
      },
      loggedin: false
    })
  };



  
  /** RENDERING */

  renderRoutes() {
    if (this.state.loggedin !== true) {
      return (
        <>
          <Route
            path="/(|home|pickups|contact|menu)"
            component={Login} />
          <Route
            exact
            path="/createaccount/"
            component={CreateAccount} />
        </>
      )
    } else {
      return (
        <>
          <Route
            exact
            path="/"
            component={SelectScreen} />
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
            path="/pickups"
            component={Pickup} />

          <Route
            exact
            path="/menu"
            component={Menu} />
          <Route
            exact
            path="/editaccount"
            component={EditAccount} />
          <Route
            exact
            path="/contact"
            component={ContactForm} />

          <Route
            exact
            path="/select/:selectedType"
            component={SelectedType} />
        </>
      )
    }
  }



  render() {
    const value = {
      setUser: this.setUser
    }
    return (
      <RecyclContext.Provider value={value}>
        <div className="App" >
          <RecyclHeader />
          <main className="App__main">
            {this.renderRoutes()}
          </main>
          <NavBar />
        </div>
      </RecyclContext.Provider>
    );
  }
}


export default App;