import {generate as id} from 'shortid';

export default {
    films: [
        {id: id(), title: 'Legacy', director: 'Michael Winnick', duration: 93, price: 48.3, im: '/img/legacy.jpg', featured: true},
        {id: id(), title: 'Gnomebook', director: 'Murray Fahey', duration: 88, price: 31.2, im: '/img/gnomebook.jpg', featured: false},
        {id: id(), title: 'Rise of the Legend', director: 'Teng Bee', duration: 110, price: 55.2, im: '/img/tengbee.jpg', featured: false},
        {id: id(), title: 'Siji: Driver', director: 'David Chai', duration: 88, price: 35.2, im: '/img/sijidriver.jpg',featured: false},
    ]
}
