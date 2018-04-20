/* eslint max-len: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

// // import {geolocated} from 'react-geolocated';
//
// import GeolocationButton from './geolocation-button';
// 			// <GeolocationButton />

class Input extends Component {
	render() {
		return (
				<input
					className='input'
					type='text'
					placeholder='Enter Location to Search Nearby Panciterias'
					onChange={this.props.addInput}
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
