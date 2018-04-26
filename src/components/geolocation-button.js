// /* eslint max-len: 0 */
// import React, { Component } from 'react';
//
// // import {geolocated} from 'react-geolocated';
//
// import GeolocationButton from './geolocation-button';
//
// class Landing extends Component {
// 	render() {
// 		return (
//             <Geolocation
//               render={({
//                 fetchingPosition,
//                 position: { coords: { latitude, longitude } = {} } = {},
//                 error,
//                 getCurrentPosition
//               }) =>
//                 <div>
//                   <button onClick={getCurrentPosition}>Use Current Location</button>
//                   {error &&
//                     <div>
//                       {error.message}
//                     </div>}
//                   <pre>
//                     latitude: {latitude}
//                     longitude: {longitude}
//                   </pre>
//                 </div>}
//             />
// 		);
// 	}
// }
//
// export default ({
//   positionOptions: {
//     enableHighAccuracy: false,
//   },
//   userDecisionTimeout: 5000,
// })(Landing);
