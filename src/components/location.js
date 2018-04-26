/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class Location extends Component {
    populateInput(location) {
        const { updateInput } = this.props;

        updateInput(location);
    }
    
    render() {
        const { index, location } = this.props;

        return (
            <li className='location-item' key={`location_${index}`} >
                <button className='location-button' onClick={this.populateInput.bind(this, location)}>
                    {location}
                </button>
            </li>
        );
    }
}

export default connect(state => {
	return state;
}, actions)(Location);
