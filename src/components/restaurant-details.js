/* eslint arrow-body-style:0 */
/* eslint max-len:0 */
/* eslint no-new:0 */
/* eslint no-undef:0 */
/* eslint dot-notation:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from 'react-js-google-maps';

import mapsApiKey from '../../maps-api-key';
import * as actions from '../actions';

class RestaurantDetails extends Component {
    // onMapLoad() {
    //     setMarker();
    // }

    render() {
        const { results, urls } = this.props;
        const id = this.props.params.id;

        const restaurant = results[id];

        const {
            name,
            neighborhood,
            address,
            city,
            region,
            country,
            distance,
            duration,
            latitude,
            longitude
        } = restaurant;

        const formattedName = name.toLowerCase()
            .split('’')
            .join('')
            .split(' ')
            .join('-');

        const thumbnailUrl = urls[formattedName].thumbnail;
        // const mapThumbnailUrl = urls[formattedName].map_thumbnail;
        // const mapUrl = urls[formattedName].map;
        const menu = urls[formattedName].menu;

        const renderedMenu = menu.map((menuItem, index) => {
            const {
                item,
                price,
                toppings,
                photo
            } = menuItem;

            return (
                <div className='result-col col-left' key={`menu-item${index}`}>
                    <div className='buffer' />

                    <h2 className='menu-item'>{item} <span className='menu-item-price'> {price} PHP</span></h2>

                    <img
                        src={photo}
                        alt={`${name}`}
                        className='result-image-lg'
                    />

                    <ul className='output'>
                        <li className='item'><p className='result-spec neighborhood'>{toppings}</p></li>
                    </ul>
                </div>
            );
        });

        return (
            <div className='results-container'>
                <div className='modal result-item details'>
                    <div className='result-col col-left'>
                        <div className='buffer' />

                        <h2 className='no-hover-effect'>{name}</h2>

                        <img
                            src={thumbnailUrl}
                            alt={`${name}`}
                            className='result-image-lg'
                        />

                        <ul className='output'>
                            <li className='item'><p className='result-spec'>{address}, { neighborhood }</p></li>
                            <li className='item'><p className='result-spec'>{city}, {region}, {country}</p></li>
                        </ul>

                        <ul className='output'>
                            <li className='item'><p className='result-spec neighborhood'>{distance} | {duration} driving</p></li>
                        </ul>
                    </div>

					<div className='result-col map-col'>

                        <div className='buffer-lg' />

                        <div className='sub-col'>
                            <Map
                                id="map1"
                                apiKey={mapsApiKey}
                                mapOptions={{
                                    zoom: 10,
                                    center: { lat: parseInt(latitude, 10), lng: parseInt(longitude, 10) }
                                  }}
                                style={{
                                    height: 300,
                                    width: 300,
                                    margin: 20,
                                    marginRight: 100
                                }}
                                onLoad={() => {
                                    new window.google.maps.Marker({
                                        position: { lat: parseInt(latitude, 10), lng: parseInt(longitude, 10) },
                                        map: window.gmaps['map1'].gmap
                                    });
                                }}
                            />
                        </div>
					</div>

                    <hr className='division' />

                    <h3 className='subheader'>Menu</h3>

                    {renderedMenu}

				</div>
            </div>
		);
	}
}

export default connect(({ results, urls }) => {
    return { results, urls };
}, actions)(RestaurantDetails);

/*<img
    src={mapThumbnailUrl}
    alt={`${name}`}
    className='result-image-lg map-image'
/>*/
