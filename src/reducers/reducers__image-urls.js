const INITIAL_STATE = {
    'billy-jacks-panciteria': {
        thumbnail: 'http://i.imgur.com/rHp1pri.jpg',
        map_thumbnail: 'http://i.imgur.com/MVvxdtd.png',
        map: 'http://goo.gl/fdruL2',
        menu: [
            {
                item: 'Regular',
                price: '60',
                toppings: 'Krak-krak, liver, giniling, gulay',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Special',
                price: '70',
                toppings: 'Krak-krak, liver, giniling, gulay',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super',
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
                item: 'Special',
                price: '60',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super Special',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Mega Special',
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
                item: 'Regular',
                price: '60',
                toppings: '',
                photo: 'http://i.imgur.com/ikqSLGa.jpg'
            },
            {
                item: 'Special',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/1OCZKpk.jpg'
            },
            {
                item: 'Super',
                price: '80',
                toppings: '',
                photo: 'http://i.imgur.com/zx2Ycgg.jpg'
            },
            {
                item: 'Mega',
                price: '100',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'All-in',
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
                item: 'Regular',
                price: '60',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Special',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super',
                price: '80',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Mega',
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
                item: 'Ordinary',
                price: '70',
                toppings: 'Carabeef and pork liver',
                photo: 'http://i.imgur.com/BEPEAqN.jpg'
            },
            {
                item: 'Regular',
                price: '80',
                toppings: 'Carabeef and karahay',
                photo: 'http://i.imgur.com/uM3sEAT.jpg'
            },
            {
                item: 'Special',
                price: '90',
                toppings: 'Carabeef, pork liver and karahay',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super',
                price: '100',
                toppings: 'Pork liver, carabeef, karahay and utak',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super Special',
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
                item: 'Nasingo',
                price: '60',
                toppings: '',
                photo: 'http://i.imgur.com/8M7eFt7.jpg'
            },
            {
                item: 'Nasissingo',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/9aGVqul.jpg'
            },
            {
                item: 'Mas Nasissingo',
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
                item: 'Original',
                price: '100',
                toppings: 'Pusit, Shrimps, Fish fillet, Fishballs and Egg',
                photo: 'http://i.imgur.com/T0fhCDz.jpg'
            },
            {
                item: 'Tokhang',
                price: '115',
                toppings: 'Original + Karahay/Longanisa',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Ransom',
                price: '125',
                toppings: 'Tokhang(Karahay/Longanisa) + Shanghai',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Double Barrel',
                price: '150',
                toppings: 'Carabeef + Seafoods',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Carabeef 60',
                price: '60',
                toppings: 'Carabeef, Egg and Liver',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Carabeef 70',
                price: '70',
                toppings: 'Carabeef, Egg, Liver and Chorizo',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Carabeef 80',
                price: '80',
                toppings: 'Carabeef, Egg, Liver, Chorizo and Karahay',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Carabeef 90',
                price: '90',
                toppings: 'Carabeef, Egg, Liver, Chorizo, Karahay and Gulay',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Small Bilao (Carabeef/Seafood)',
                price: '300/400',
                toppings: '',
                photo: 'http://i.imgur.com/qM8sXM5.jpg'
            },
            {
                item: 'Medium Bilao (Carabeef/Seafood)',
                price: '400/550',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Large Bilao (Carabeef/Seafood)',
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
                item: 'Special',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/UigStI0.jpg'
            },
            {
                item: 'Super',
                price: '80',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Super Special',
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
                item: 'Regular',
                price: '60',
                toppings: '',
                photo: 'http://i.imgur.com/aawNLsX.jpg'
            },
            {
                item: 'Special',
                price: '70',
                toppings: '',
                photo: 'http://i.imgur.com/NWbpsYc.jpg'
            },
            {
                item: 'Super Special',
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
                item: 'Batil Patung',
                price: '50',
                toppings: '',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Special',
                price: '60',
                toppings: 'Karahay',
                photo: 'http://i.imgur.com/jNKo8Tf.jpg'
            },
            {
                item: 'Super Special',
                price: '70',
                toppings: 'Karahay and liver',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Mega Special',
                price: '80',
                toppings: 'Karahay, Liver, Utak/Chorizo',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
            {
                item: 'Triangle\'s Best',
                price: '100',
                toppings: 'Karahay, Liver, Hotdog, Chorizo',
                photo: 'http://i.imgur.com/UWDs2Ik.jpg'
            },
        ]
    },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
