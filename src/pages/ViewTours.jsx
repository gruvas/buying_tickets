import React from 'react';

import Tour from '../components/Tour/Tour';

import tour_1 from '../assets/img/tour_1.jpg'
import tour_2 from '../assets/img/tour_2.jpg'
import tour_3 from '../assets/img/tour_3.jpg'

const ViewTours = () => {
    let arr_time_1 = ['12:00', '12:30', '13:00']
    let arr_time_2 = ['12:00', '12:30', '13:00', '13:30']
    let arr_time_3 = ['12:00', '12:30', '13:00', 
    '13:30', '15:30', '16:00', '16:30', '17:30', '18:30']

    let color = {
        yellow: 'yellow',
        violet: 'violet',
        blue: 'blue'
    } 
    
    let tour_types = [
        {
            type: 'Новинка',
            color: color.yellow
        },
        {
            type: 'Новинка',
            color: color.violet
        },
        {
            type: 'Новинка',
            color: color.blue
        },
        {
            type: 'Круглый год',
            color: color.yellow
        }
    ]


    
    let test_obj1 = {
        name_tour: `Обзорная экскурсия по рекам и каналам 
        с остановками Hop on Hop Off 2020`,

        picture: tour_1,

        price: 900,

        length_time: '2 часа',
        arr_time: arr_time_2,

        type: tour_types[1]
    }

    let test_obj2 = {
        name_tour: `Обзорная экскурсия по рекам и каналам 
        с остановками Hop on Hop Off 2020`,

        picture: tour_2,

        price: 900,
        price_mooring: 1200,

        length_time: '2 часа',
        arr_time: arr_time_3,

        type: tour_types[3]
    }

    let test_obj3 = {
        name_tour: `Обзорная экскурсия по рекам и каналам 
        с остановками Hop on Hop Off 2020`,

        picture: tour_3,

        price: 900,
        price_mooring: 1200,

        length_time: '2 часа',
        arr_time: arr_time_3,

        type: tour_types[2]
    }


    return (
        <div className='tour'>
            <Tour obj={test_obj1}/>
            <Tour obj={test_obj2}/>
            <Tour obj={test_obj3}/>
        </div>
    );
}

export default ViewTours;
