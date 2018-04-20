/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Input extends Component {
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
			<div className='input-div'><input
				className='input'
				id='location-input'
				type='text'
				placeholder='Enter Location to Search Nearby Panciterias'
				ref={location => { this.location = location; }}
				required
			/><button
				className='button'
				type='button'
				id='submit-location'
				onClick={this.submitLocation}
			><p className='fa fa-search fa-2x' /></button></div>
		);
	}
}

export default connect((state) => {
    return { state };
}, actions)(Input);
