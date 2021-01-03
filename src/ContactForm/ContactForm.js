import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        return (
            <form>
            <h1>Contact Us</h1>

            <label htmlFor="user-message">We would love to hear from you!</label>

            <br />

            <textarea id="user-message" name="message" />

            <br />

            <button type="submit">Submit</button>
        </form>
        )
    }
}


export default ContactForm;