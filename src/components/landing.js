/* eslint max-len: 0 */
import React, { Component } from 'react';

// import {geolocated} from 'react-geolocated';

import Input from 'input';

class Landing extends Component {
	render() {
		return (
		<div>
			
			<Input />
		</div>
		);
	}
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Landing);
