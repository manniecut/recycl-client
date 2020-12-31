import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import { orderUsers } from '../guthub-helpers';
//import GutHubContext from '../GutHubContext';
//import md5 from 'md5';
//import config from '../config';
//import './Login.css';

// this is the login component for GutHub

class Login extends Component {

    state = {
        username: '',
        password: '',
        userId: ''
    }

    //static contextType = GutHubContext;

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        /*const loggingUser = {
            password: this.state.password,
            username: this.state.username
        }
        fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loggingUser)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(res => {
                this.context.setUser(res, this.state.userId)
            })
            .catch(error => { alert('Incorrect login, please try again.') })*/
    }


    /** Form to State Functions */

    // sets the user in the state and matches it's ID
    handleSetUser = username => {
        // const users = orderUsers(this.context.users)
        // users.forEach(user => {
        //     if (user.username === username) {
        this.setState({
            //userId: user.id,
            username: username
        })
        //         return
        //     }
        // })
    }

    // sets encrypted pass in the state
    handleSetPass = pass => {
        this.setState({
            //password: md5(pass)
            password: pass
        })
    }


    render() {
        return (
            <>
                <form className='LoginPage' onSubmit={this.handleSubmit}>
                    <h3>hello!</h3>
                    <h3>welcome to a new way to recycl.</h3>
                    <p>Saving the planet one recyclable at a time.</p>
                    <p>Find out where to take anything you want to recycle or have it picked up from your doorstep*.</p>
                    <div>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type='text'
                            name='username'
                            id='username'
                            onChange={e => this.handleSetUser(e.target.value)}
                            required
                        />
                        <br />
                        <label htmlFor='password'>Password:</label>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            onChange={e => this.handleSetPass(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <button type='submit' className='login__button' disabled>
                            Login
                        </button><br />
                        <Link to='/home'>Static Client: Click here to Log In</Link>
                    </div>
                    <p>Or <Link to='/createaccount'>Create an Account</Link></p>
                </form>
            </>
        )
    }
}


export default Login;