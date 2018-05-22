/* eslint arrow-body-style:0 */
/* eslint max-len:0 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RestaurantDetails extends Component {
    render() {
        const { results } = this.props;
        const id = this.props.params.id;

        const restaurant = results[id];

        const {
            // id,
            name,
            // hours,
            // phone,
            // website,
            neighborhood,
            address,
            city,
            region,
            country,
            // latitude,
            // longitude,
            distance,
            duration
        } = restaurant;

        const imageSrc = name.toLowerCase()
            .split('’')
            .join('')
            .split(' ')
            .join('-');

        const urls = {
            'billy-jacks-panciteria': {
                thumbnail: 'http://i.imgur.com/rHp1pri.jpg',
                map_thumbnail: 'http://i.imgur.com/MVvxdtd.png',
                map: 'http://goo.gl/fdruL2',
                menu: [
                    {
                        name: 'Regular',
                        price: '60',
                        toppings: 'Krak-krak, liver, giniling, gulay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg' //generic-thumbnail
                    },
                    {
                        name: 'Special',
                        price: '70',
                        toppings: 'Krak-krak, liver, giniling, gulay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super',
                        price: '80',
                        toppings: 'Karahay, krak-krak, liver, giniling, gulay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    }
                ]
            },
            'cherrys-panciteria': {
                thumbnail: 'http://i.imgur.com/7hRX0pZ.jpg',
                map_thumbnail: 'http://i.imgur.com/lwag5IC.png',
                map: 'http://goo.gl/NNYKTz',
                menu: [
                    {
                        name: 'Special',
                        price: '60',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super Special',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Mega Special',
                        price: '80',
                        toppings: '',
                        photo: 'http://i.imgur.com/2z4bbM0.jpg'
                    }
                ]
            },
            'corazons-panciteria': {
                thumbnail: 'http://i.imgur.com/5Jn810z.jpg',
                map_thumbnail: 'http://i.imgur.com/V09ltMi.png',
                map: 'http://goo.gl/CYUvU7',
                menu: [
                    {
                        name: 'Regular',
                        price: '60',
                        toppings: '',
                        photo: 'http://i.imgur.com/ikqSLGa.jpg'
                    },
                    {
                        name: 'Special',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/1OCZKpk.jpg'
                    },
                    {
                        name: 'Super',
                        price: '80',
                        toppings: '',
                        photo: 'http://i.imgur.com/zx2Ycgg.jpg'
                    },
                    {
                        name: 'Mega',
                        price: '100',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'All-in',
                        price: '130',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    }
                ]
            },
            'dings-panciteria': {
                thumbnail: 'http://i.imgur.com/JWtE4vz.jpg',
                map_thumbnail: 'http://i.imgur.com/gZjbjca.png',
                map: 'http://goo.gl/GCmfyW',
                menu: [
                    {
                        name: 'Regular',
                        price: '60',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Special',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super',
                        price: '80',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Mega',
                        price: '100',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    }
                ]
            },
            'evas-panciteria': {
                thumbnail: 'http://i.imgur.com/r6Mryu4.jpg',
                map_thumbnail: 'http://i.imgur.com/0lXLnRr.png',
                map: 'http://goo.gl/72o8kK',
                menu: [
                    {
                        name: 'Ordinary',
                        price: '70',
                        toppings: 'Carabeef and pork liver',
                        photo: 'http://i.imgur.com/BEPEAqN.jpg'
                    },
                    {
                        name: 'Regular',
                        price: '80',
                        toppings: 'Carabeef and karahay',
                        photo: 'http://i.imgur.com/uM3sEAT.jpg'
                    },
                    {
                        name: 'Special',
                        price: '90',
                        toppings: 'Carabeef, pork liver and karahay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super',
                        price: '100',
                        toppings: 'Pork liver, carabeef, karahay and utak',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super Special',
                        price: '120',
                        toppings: 'Pork liver, carabeef, karahay, utak and bola-bola',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                ]
            },
            'fefangs-panciteria': {
                thumbnail: 'http://i.imgur.com/OpdAynj.jpg',
                map_thumbnail: 'http://i.imgur.com/vnqiEPT.png',
                map: 'http://goo.gl/w1AfBg',
                menu: [
                    {
                        name: 'Nasingo',
                        price: '60',
                        toppings: '',
                        photo: 'http://i.imgur.com/8M7eFt7.jpg'
                    },
                    {
                        name: 'Nasissingo',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/9aGVqul.jpg'
                    },
                    {
                        name: 'Mas Nasissingo',
                        price: '90',
                        toppings: '',
                        photo: 'http://i.imgur.com/ATlDZHd.jpg'
                    }
                ]
            },
            'macoys-panciteria': {
                thumbnail: 'http://i.imgur.com/aOAeSxq.jpg',
                map_thumbnail: 'http://i.imgur.com/H6PEqf3.png',
                map: 'http://goo.gl/cMvUJa',
                menu: [
                    {
                        name: 'Original',
                        price: '100',
                        toppings: 'Pusit, Shrimps, Fish fillet, Fishballs and Egg',
                        photo: 'http://i.imgur.com/T0fhCDz.jpg'
                    },
                    {
                        name: 'Tokhang',
                        price: '115',
                        toppings: 'Original + Karahay/Longanisa',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Ransom',
                        price: '125',
                        toppings: 'Tokhang(Karahay/Longanisa) + Shanghai',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Double Barrel',
                        price: '150',
                        toppings: 'Carabeef + Seafoods',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Carabeef 60',
                        price: '60',
                        toppings: 'Carabeef, Egg and Liver',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Carabeef 70',
                        price: '70',
                        toppings: 'Carabeef, Egg, Liver and Chorizo',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Carabeef 80',
                        price: '80',
                        toppings: 'Carabeef, Egg, Liver, Chorizo and Karahay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Carabeef 90',
                        price: '90',
                        toppings: 'Carabeef, Egg, Liver, Chorizo, Karahay and Gulay',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Small Bilao (Carabeef/Seafood)',
                        price: '300/400',
                        toppings: '',
                        photo: 'http://i.imgur.com/qM8sXM5.jpg'
                    },
                    {
                        name: 'Medium Bilao (Carabeef/Seafood)',
                        price: '400/550',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Large Bilao (Carabeef/Seafood)',
                        price: '500/700',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    }
                ]
            },
            'panciteria-ni-nang': {
                thumbnail: 'http://i.imgur.com/XIGp6DZ.jpg',
                map_thumbnail: 'http://i.imgur.com/Gf4Bxwo.png',
                map: 'http://goo.gl/UAkwqC',
                menu: [
                    {
                        name: 'Special',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/UigStI0.jpg'
                    },
                    {
                        name: 'Super',
                        price: '80',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Super Special',
                        price: '90',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                ]
            },
            'pancitan-ni-santino': {
                thumbnail: 'http://i.imgur.com/N5t024Y.jpg',
                map_thumbnail: 'http://i.imgur.com/3Sg7Z5a.png',
                map: 'http://goo.gl/sVE8RY',
                menu: [
                    {
                        name: 'Regular',
                        price: '60',
                        toppings: '',
                        photo: 'http://i.imgur.com/aawNLsX.jpg'
                    },
                    {
                        name: 'Special',
                        price: '70',
                        toppings: '',
                        photo: 'http://i.imgur.com/NWbpsYc.jpg'
                    },
                    {
                        name: 'Super Special',
                        price: '90',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                ]
            },
            'triangle-panciteria': {
                thumbnail: 'http://i.imgur.com/EKNn4BM.jpg',
                map_thumbnail: 'http://i.imgur.com/fqomrEw.png',
                map: 'http://goo.gl/zHyQWz',
                menu: [
                    {
                        name: 'Batil Patung',
                        price: '50',
                        toppings: '',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Special',
                        price: '60',
                        toppings: 'Karahay',
                        photo: 'http://i.imgur.com/jNKo8Tf.jpg'
                    },
                    {
                        name: 'Super Special',
                        price: '70',
                        toppings: 'Karahay and liver',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Mega Special',
                        price: '80',
                        toppings: 'Karahay, Liver, Utak/Chorizo',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                    {
                        name: 'Triangle\'s Best',
                        price: '100',
                        toppings: 'Karahay, Liver, Hotdog, Chorizo',
                        photo: 'http://i.imgur.com/UWDs2Ik.jpg'
                    },
                ]
            },
        };

        const thumbnailUrl = urls[imageSrc].thumbnail;
        const mapThumbnailUrl = urls[imageSrc].map_thumbnail;
        const mapUrl = urls[imageSrc].map;

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
                    </div>

					<div className='result-col menu-col'>
                        <h3 className='subheader'>Menu</h3>

                        <ul>
                            <li className='menu-item'>"Regular"<span className='menu-item-price'> - 60 PHP</span></li>
                            <li className='menu-item'>"Special"<span className='menu-item-price'> - 70 PHP</span></li>
                            <li className='menu-item'>"Super Special"<span className='menu-item-price'> - 80 PHP</span></li>
                        </ul>
					</div>

					<div className='result-col map-col'>

                        <div className='buffer-lg' />

                        <div className='sub-col'>
                            <h3 className='subheader margin'>Location</h3>

                            <ul className='output'>
                                <li className='item'><p className='result-spec'>{address}</p></li>
                                <li className='item'><p className='result-spec'>{city}</p></li>
                                <li className='item'><p className='result-spec'>{region}, {country}</p></li>
                            </ul>

                            <ul className='output'>
                                <li className='item'><p className='result-spec neighborhood'>{neighborhood}</p></li>
                                <li className='item'><p className='result-spec neighborhood'>{distance}</p></li>
                                <li className='item'><p className='result-spec neighborhood'>{duration} driving</p></li>
                            </ul>
                        </div>

                        <div className='sub-col'>
                            <a href={mapUrl}><img
                                src={mapThumbnailUrl}
                                alt={`${name}`}
                                className='result-image-lg map-image'
                            /></a>
                        </div>
					</div>


				</div>
            </div>
		);
	}
}

export default connect(({ results }) => {
    return { results };
}, actions)(RestaurantDetails);
