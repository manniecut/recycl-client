import React, { Component } from 'react';
import './PopUpScheduler.css';

// this popup appears when the user wants to recycle an item on the recycle type page

class PopUpScheduler extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <label htmlFor="pickupdate">Schedule Pickup:</label><br />
                    <input type="date" id="pickupdate" name="pickupdate" /><br />
                    <label htmlFor="pickuptime">Select a time:</label><br />
                    <input type="time" id="pickuptime" name="pickuptime" /><br />
                    <p>At your location:</p>
                    <p>123 Any Street, Detroit, MI</p>
                    <button>Confirm</button>
                    <button onClick={this.props.closePopup}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default PopUpScheduler;