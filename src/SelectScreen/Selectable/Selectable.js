import React from 'react';
import { Link } from 'react-router-dom';

// this component is for a selectable recyclable list item

class Selectable extends React.Component {

    render() {
        const { value } = this.props
        return (
            <li className='select__item'>
                <Link to={`/select/${value}`}>{value}</Link>
            </li>
        )
    }
}


export default Selectable;