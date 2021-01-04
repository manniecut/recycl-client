import React, { Component } from 'react';
import PopUpScheduler from '../PopUp/PopUpScheduler';
//import GutHubContext from '../GutHubContext';
import './SelectedType.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class SelectedType extends Component {

    state = {
        selectedType: this.props.match.params.selectedType,
        mapsKey: "AIzaSyC5q4AzjnRDhf53nceGVJBJPRbBVZyDS5U",
        showPopUp: false
    }

    togglePopup() {
        this.setState({
            showPopUp: !this.state.showPopUp
        });
    }

    // props will designate the category of recycling and populate subcategories

    render() {
        const query = (this.state.selectedType + 'recycling')
        return (
            <div className='selectedtype__screen'>
                <h3>{this.state.selectedType}</h3>
                
                <div className='selectedtype__locations'>
                    <p>Recycling centers near you that take {this.state.selectedType}:</p>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=${this.state.mapsKey}&q=${query}`}></iframe>
                </div>
                <h2>- or -</h2>
                
                <button onClick={e => this.togglePopup()}>Schedule a Pickup</button>
                {this.state.showPopUp ?
                    <PopUpScheduler
                        closePopup={e => this.togglePopup()}
                    />
                    : null
                }
            </div>
        )
    }
}


export default SelectedType;