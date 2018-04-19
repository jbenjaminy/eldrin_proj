/* eslint max-len: 0 */
import React, { Component } from 'react';

// import {geolocated} from 'react-geolocated';

import GeolocationButton from './geolocation-button';

class Landing extends Component {
	render() {
		return (
		<div>
			<input></input>
			<GeolocationButton />
		</div>
		);
	}
}

export default ({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Landing);
