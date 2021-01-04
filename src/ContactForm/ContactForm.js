import React, { Component } from 'react';
import './ContactForm.css';

// this is a text input form to recieve user feedback

class ContactForm extends Component {

    handleCancel = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <form>
                <h1>Contact Us</h1>

                <label htmlFor="user-message">We would love to hear from you!</label>

                <br />

                <textarea id="user-message" name="message" />

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