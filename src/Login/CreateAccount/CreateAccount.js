import React, { Component } from 'react';
import config from '../../config';
import './CreateAccount.css'

// this component allows the user to create an account

class CreateAccount extends Component {
    state = {
        users: [],
        username: '',
        pass: '',
        pickuplocation: '',
        check: '',
        email: ''
    }

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/users`)
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e));
                return res.json();
            })
            .then(users => {
                this.setState({
                    users: users
                })
            })
            .catch(error => alert('Users database could not be found. Please try again later.'))
    }

    handleCancel = () => {
        this.props.history.goBack();
    };

    // this is a validation check to see if the username is taken, and if the password matches the check

    validateNewUser = (username, pass, check) => {
        const users = this.state.users
        const usernames = []
        users.forEach(user => {
            usernames.push(user.username)
        })
        if ((usernames.includes(username)) && (check === pass)) {
            alert('username exists')
            return false
        } else if ((check !== pass)) {
            alert('check passwords')
            return false
        } else
            return true
    }


    // sends the new user object to be created in the database

    handleSubmit = e => {
        e.preventDefault();
        const { username, pass, check, email, pickuplocation } = this.state
        const validation = this.validateNewUser(username, pass, check)
        if (validation === true) {
            const newUser = {
                username: username,
                pass: pass,
                email: email,
                pickuplocation: pickuplocation
            }
            fetch(`${config.API_ENDPOINT}/users`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => {
                    if (!res.ok) {
                        return res.json().then(error => {
                            throw error
                        })
                    }
                    return res.json()
                })
                .then(user => {
                    alert('user created')
                    this.props.history.push(`/`)
                })
        }
    }



    /** Form to State Updates */

    handleNameUpdate = name => {
        this.setState({
            username: name
        })
    }

    handlePassUpdate = pass => {
        this.setState({
            pass: pass
        })
    }

    handleCheckUpdate = check => {
        this.setState({
            check: check
        })
    }

    handleAddressUpdate = address => {
        this.setState({
            pickuplocation: address
        })
    }

    handleEmailUpdate = email => {
        this.setState({
            email: email
        })
    }



    render() {
        return (
            <>
                <h2>Create Account</h2> <br />
                <form className='CreateAccountPage' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username:</label><br />
                    <input
                        type='text'
                        name='username'
                        id='username'
                        onChange={e => this.handleNameUpdate(e.target.value)}
                        required /><br />

                    <label htmlFor='password'>Password:</label><br />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={e => this.handlePassUpdate(e.target.value)}
                        required /><br />

                    <label htmlFor='passcheck'>Password Again:</label><br />
                    <input
                        type='password'
                        name='passcheck'
                        id='passcheck'
                        onChange={e => this.handleCheckUpdate(e.target.value)}
                        required /><br />

                    <label htmlFor='location'>Address (optional*):</label><br />
                    <input
                        type='text'
                        name='location'
                        id='location'
                        onChange={e => this.handleAddressUpdate(e.target.value)}
                    /><br />

                    <label htmlFor='password'>Email (optional, for latest updates):</label><br />
                    <input
                        type='text'
                        name='email'
                        id='email'
                        onChange={e => this.handleEmailUpdate(e.target.value)} /><br />
                    <div >
                        <p className='disclaimer'>
                            *This app is a demo of my capabilities for my portfolio and does not represent
                            a currently functioning service in the real world, be aware that no one will
                            show up for any scheduled pickups. This app is currently in testing phase and the password isn't super
                            secure so please use a throwaway password. Thanks and enjoy!</p>
                        <button className='login__button' type='submit'>
                            Create
                         </button>
                        <button className='cancel__button' type='button' onClick={this.handleCancel}>
                            Cancel
                         </button>
                    </div>
                </form>
            </>
        )
    }
}


export default CreateAccount;