import React, { Component } from 'react';
//import GutHubContext from '../GutHubContext';
import './SelectedType.css'

// this component is what the user sees upon logging in, it provides a quick description of GutHub and allows logging out

class SelectedType extends Component {

    state = {
        selectedType: this.props.match.params.selectedType
    }

    // props will designate the category of recycling and populate subcategories

    render() {
        return (
            <div className='selectedtype__screen'>
                <div>
                    <h3>{this.state.selectedType}</h3>
                    <ul className='selectedtype__container'>
                        <li className='selectedtype__item'>This will</li>
                        <li className='selectedtype__item'>Be populated</li>
                        <li className='selectedtype__item'>Based on</li>
                        <li className='selectedtype__item'>Recycle Type</li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default SelectedType;