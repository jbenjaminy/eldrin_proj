/* eslint arrow-body-style:0 */
/* eslint max-len:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RestaurantDetails extends Component {
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
            duration
        } = restaurant;

        const formattedName = name.toLowerCase()
            .split('’')
            .join('')
            .split(' ')
            .join('-');

        const thumbnailUrl = urls[formattedName].thumbnail;
        const mapThumbnailUrl = urls[formattedName].map_thumbnail;
        const mapUrl = urls[formattedName].map;
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
                            <a href={mapUrl}><img
                                src={mapThumbnailUrl}
                                alt={`${name}`}
                                className='result-image-lg map-image'
                            /></a>
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
