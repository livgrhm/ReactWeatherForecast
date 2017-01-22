import React from 'react';
import ReactDOM from 'react-dom';
import DayForecast from '../components/DayForecast';
import { WEATHER_ICONS } from '../lib/constants';

it('renders without crashing', () => {
    let weatherObj = {
        date: '2017-01-22 15:00:00',
        time: '15:00',
        desc: 'cloudy',
        main: 'Cloud',
        temp: 5,
        icon: WEATHER_ICONS['Cloud']
    };
    const div = document.createElement('div');
    ReactDOM.render(<DayForecast current={weatherObj} />, div);
});
