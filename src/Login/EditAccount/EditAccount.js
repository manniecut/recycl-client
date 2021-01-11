import React, { Component } from 'react';
import RecyclContext from '../../RecyclContext';
import config from '../../config';
import './EditAccount.css';

// this component allows the user to edit their account

class EditAccount extends Component {
    state = {
        username: this.context.user.username,
        email: this.context.user.email,
        pickuplocation: this.context.user.pickuplocation
    }

    static contextType = RecyclContext;

    static defaultProps = {
        history: {
            goBack: () => { }
        }
    }

    handleCancel = () => {
        this.props.history.goBack();
    };



    // sends the edited user object to be patched in the database

    handleSubmit = e => {
        e.preventDefault();
        const updatedUser = {
            email: this.state.email,
            pickuplocation: this.state.pickuplocation
        }
        fetch(`${config.API_ENDPOINT}/users/${this.context.user.username}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
            .then(user => {
                this.context.updateUser(updatedUser)
                alert('update successful')
            })
            .catch(error => { console.log(error) })
    }



    /** Form to State Updates */


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
                <h2>Edit Account: {this.context.user.username}</h2> <br />
                <form className='EditAccountPage' onSubmit={this.handleSubmit}>
                    <label htmlFor='location'>Address:</label><br />
                    <input
                        type='text'
                        name='location'
                        id='location'
                        value={this.state.pickuplocation}
                        onChange={e => this.handleAddressUpdate(e.target.value)}
                        required /><br /><br />

                    <label htmlFor='email'>Email:</label><br />
                    <input
                        type='text'
                        name='email'
                        id='email'
                        value={this.state.email}
                        onChange={e => this.handleEmailUpdate(e.target.value)} /><br />
                    <div><br /><br />
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