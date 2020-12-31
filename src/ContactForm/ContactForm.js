import React, { Component } from 'react';

class ContactForm extends Component {

    render() {
        return (
            <form action="" method="POST">

            <h1>Contact Us</h1>

            <label htmlFor="user-message">We would love to hear from you!</label>
            <textarea id="user-message" name="message" />
            <br />

            <button type="submit">Submit</button>
        </form>
        )
    }
}


export default ContactForm;


//https://formspree.io/xjvazwkj