import React, { Component } from 'react';
// import md5 from 'md5';
// import GutHubContext from '../../GutHubContext';
// import config from '../../config';
//import './CreateAccount.css'

// this component allows the user to create an account to use with GutHub

class EditAccount extends Component {
    state = {
        username: '',
        pass: '',
        check: '',
        email: ''
    }

    // static contextType = GutHubContext;

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleCancel = () => {
        this.props.history.goBack();
    };

    // this is a validation check to see if the username is taken, and if the password matches the check
    /*validateNewUser = (username, pass, check) => {
        const users = this.context.users
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
    }*/


    // sends the new user object to be created in the database
    handleSubmit = e => {
        e.preventDefault();
        // const { username, pass, check, email } = this.state
        // const validation = this.validateNewUser(username, pass, check)
        // if (validation === true) {
        //     const newUser = {
        //         username: username,
        //         pass: pass,
        //         email: email,
        //     }
        //     fetch(`${config.API_ENDPOINT}/users`, {
        //         method: 'POST',
        //         headers: {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(newUser)
        //     })
        //         .then(res => {
        //             if (!res.ok) {
        //                 return res.json().then(error => {
        //                     throw error
        //                 })
        //             }
        //             return res.json()
        //         })
        //         .then(user => {
        //             this.context.addUser(user)
        //             this.props.history.push(`/`)
        //         })
        // }
    }



    /** Form to State Updates */


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

    handleEmailUpdate = email => {
        this.setState({
            email: email
        })
    }



    render() {
        return (
            <>
                <h2>Edit Account: STATIC</h2> <br />
                <form className='LoginPage' onSubmit={this.handleSubmit}>

                    <label htmlFor='password'>Password:</label><br />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        onChange={e => this.handlePassUpdate(e.target.value)}
                        required /><br />

                    <label htmlFor='passcheck'>Password Check:</label><br />
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
                        onChange={e => console.log(e.target.value)}
                        required /><br />

                    <label htmlFor='password'>Email (optional, for latest updates):</label><br />
                    <input
                        type='text'
                        name='email'
                        id='email'
                        onChange={e => this.handleEmailUpdate(e.target.value)} /><br />
                    <div >
                        <p>*This app is a demo for my portfolio of my capabilities, and does not represent
                    a currently functional service in the real world, so please be aware that no one will
                    show up to your location for any scheduled pickups.</p>
                        <button className='login__button' type='submit'>
                            Save
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


export default EditAccount;