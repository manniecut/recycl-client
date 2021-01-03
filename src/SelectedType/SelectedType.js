import React, { Component } from 'react';
//import GutHubContext from '../GutHubContext';
import './SelectedType.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class SelectedType extends Component {

    state = {
        selectedType: this.props.match.params.selectedType,
        mapsKey: "AIzaSyC5q4AzjnRDhf53nceGVJBJPRbBVZyDS5U"
    }

    // props will designate the category of recycling and populate subcategories

    render() {
        const query = (this.state.selectedType + 'recycling')
        return (
            <div className='selectedtype__screen'>
                <h3>{this.state.selectedType}</h3>
                <p>Click here to schedule a pickup for this item</p>
                <p>Below are locations near you where you can recycle this item:</p>
                <iframe src={`https://www.google.com/maps/embed/v1/place?key=${this.state.mapsKey}&q=${query}`}></iframe>
            </div>
        )
    }
}


export default SelectedType;