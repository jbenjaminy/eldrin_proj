/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class RestaurantResults extends Component {
	constructor() {
		super();
		this.submitLocation = this.submitLocation.bind(this);
	}

	submitLocation(event) {
		event.preventDefault();

		const { fetchRestaurants } = this.props;
		const coordinates = this.location.value;
		console.log('coordinates --> ', coordinates);
		fetchRestaurants({ coordinates });
	}

	render() {
		return (
            <div className='modal'>
            </div>
		);
	}
}

export default connect(state => {
    return { state };
}, actions)(RestaurantResults);
