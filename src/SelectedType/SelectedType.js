import React, { Component } from 'react';
import PopUpScheduler from '../PopUp/PopUpScheduler';
import './SelectedType.css'

// this component is displays the details for recycling a specfic type of item as well as the option to schedule a pickup

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

    render() {
        const query = (this.state.selectedType + 'recycling')
        return (
            <div className='selectedtype__screen'>
                <h3>{this.state.selectedType}</h3>
                
                <div className='selectedtype__locations'>
                    <p>Places near you that might take {this.state.selectedType}:</p>
                    <iframe title='recycle-centers' src={`https://www.google.com/maps/embed/v1/place?key=${this.state.mapsKey}&q=${query}`}></iframe>
                </div>
                <h2>- or -</h2>
                
                <button onClick={e => this.togglePopup()}>Schedule a Pickup</button>
                {this.state.showPopUp ?
                    <PopUpScheduler
                        selectedType={this.state.selectedType}
                        closePopup={e => this.togglePopup()}
                    />
                    : null
                }
            </div>
        )
    }
}


export default SelectedType;