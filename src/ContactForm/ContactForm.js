import React, { Component } from 'react';
import RecyclContext from '../RecyclContext';
import config from '../config';
import './ContactForm.css';

// this is a text input form to recieve user feedback

class ContactForm extends Component {

    state = {
        message: ''
    }

    static contextType = RecyclContext;

    /*** FORM FUNCTIONS */

    handleCancel = () => {
        this.props.history.goBack();
    };

    setMessage = msg => {
        this.setState({
            message: msg
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const newFeedback = {
            msg: this.state.message,
            sender: this.context.user.id
        }
        fetch(`${config.API_ENDPOINT}/feedback`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newFeedback)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error
                    })
                }
                return res.json()
            })
            .then(message => {
                alert('Feedback sent! Thank you!')
                this.props.history.goBack();
            })
    }
    
    render() {
        return (
            <form className='contact_form' onSubmit={this.handleSubmit}>
                <h1>Contact Us</h1>

                <label htmlFor="user-message">We would love to hear from you!</label>

                <br />

                <textarea id="user-message" name="message" onChange={e => this.setMessage(e.target.value)} />

                <br />

                <button type="submit">Submit</button>
                <button className='cancel__button' type='button' onClick={this.handleCancel}>
                    Cancel
                </button>
            </form>
        )
    }
}


export default ContactForm;