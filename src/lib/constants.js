import sunIcon from '../icons/svg/sunny.svg';
import cloudIcon from '../icons/svg/cloudy.svg';
import rainIcon from '../icons/svg/rain.svg';
import snowIcon from '../icons/svg/snow.svg';
import windIcon from '../icons/svg/windy.svg';
import thunderIcon from '../icons/svg/thunder.svg';

export const API_VARS = {
    apiKey: "&APPID=f24b507374a6fb5d484a69aada90705b",
    apiUrlPrefix: "http://api.openweathermap.org/data/2.5/forecast?",
    apiJsonMode: "&mode=json",
    apiUnitsCelcius: "&units=metric",
    apiUnitsFaren: "&units=imperial",
    initSearch: "London"
};

export const WEATHER_ICONS = {
    'Clear': sunIcon,
    'Clouds': cloudIcon,
    'Rain': rainIcon,
    'Snow': snowIcon,
    'Wind': windIcon,
    'Extreme': thunderIcon
};

export const DAYS_OF_WEEK = {
	0: 'Sunday',
	1: 'Monday',
	2: 'Tuesday',
	3: 'Wednesday',
	4: 'Thursday',
	5: 'Friday',
	6: 'Saturday',
	7: 'Sunday',
};
