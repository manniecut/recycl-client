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

import RecyclContext from './RecyclContext';
import config from './config';
import './App.css';


class App extends Component {


  /** STATE  */

  state = {
    user: [],
    loggedin: '',
  }


  /** CRUD */

  setUser = (username, userId) => {
    fetch(`${config.API_ENDPOINT}/users/${username}`)
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e));
        return res.json();
      })
      .then(user =>
        this.setState({
          user: user[0],
          loggedin: true
        })
      )
  }

  handleLogout = () => {
    this.setState({
      user: [],
      loggedin: false
    })
  };

  handleUpdateUser = updatedUser => {
    this.setState({
      user: {
        id: this.state.user.id,
        email: updatedUser.email,
        isadmin: this.state.user.isadmin,
        joindate: this.state.user.joindate,
        pickuplocation: updatedUser.pickuplocation,
        username: this.state.user.username
      }
    })
  }




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
      user: this.state.user,
      setUser: this.setUser,
      logout: this.handleLogout,
      updateUser: this.handleUpdateUser
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