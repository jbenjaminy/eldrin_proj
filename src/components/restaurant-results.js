/* eslint max-len: 0 */
/* eslint arrow-body-style: 0 */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class RestaurantResults extends Component {
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
