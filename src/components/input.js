/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

// // import {geolocated} from 'react-geolocated';
//
// import GeolocationButton from './geolocation-button';
// 			// <GeolocationButton />
class Input extends Component {
	startSearch(coordinates) {
		const { fetchRestaurants } = this.props;

		fetchRestaurants(coordinates);
	}

	render() {
		return (
			<input
				className='input'
				type='text'
				placeholder='Enter Location to Search Nearby Panciterias'
				onChange={this.props.addInput}
				onSubmit={this.startSearch.bind({ coordinates: {} })}
			/>
		);
	}
}

// export default ({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(Landing);
export default connect((state) => {
    return { state };
}, actions)(Input);
