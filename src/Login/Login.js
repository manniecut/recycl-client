import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecyclContext from '../RecyclContext';
import config from '../config';
import './Login.css';

// this is the login component for GutHub

class Login extends Component {

    state = {
        username: '',
        password: ''
    }


    static contextType = RecyclContext;

    handleSubmit = e => {
        e.preventDefault();
        const loginUser = {
            password: this.state.password,
            username: this.state.username
        }
        fetch(`${config.API_ENDPOINT}/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(loginUser)
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
                this.context.setUser(res)
            })
            .catch(error => { alert('Incorrect login, please try again.') })
    }


    /** Form to State Functions */

    // sets the user in the state and matches its ID
    handleSetUser = username => {
        this.setState({
            username: username
        })
    }

    // sets pass in the state
    handleSetPass = pass => {
        this.setState({
            password: pass
        })
    }


    render() {
        return (
            <>
                <form className='LoginPage' onSubmit={this.handleSubmit}>
                    <h1>hello!</h1>
                    <h1>welcome to a new way to recycl.</h1>
                    <div className='image_with_overlay'>
                        <div className='overlay_text'>
                            <h1>Saving the planet one recyclable at a time.</h1>
                            <p>Find out where to take anything you want to recycle or have it picked up from your doorstep*.</p>

                        </div>
                    </div>
                    <hr />
                    <h2>let's get started!</h2>
                    <div className='input_area'>
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
                        <button type='submit' className='login__button'>
                            Login
                        </button><br />
                        <p>This is a demo app so you can log in with<br /><strong>"Guest, guest"</strong>.</p>
                    </div>
                    <p>Or <Link to='/createaccount'>Create an Account</Link></p>
                </form>
            </>
        )
    }
}


export default Login;