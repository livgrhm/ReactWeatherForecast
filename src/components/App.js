/* React + Plugins */
import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/* Constants */
import { API_VARS, WEATHER_ICONS } from '../lib/constants';

/* App Components */
import SearchForm from './SearchForm';
import DayForecast from './DayForecast';
import WeekForecast from './WeekForecast';

/* Component Styles */
import '../css/App.css';

let App = React.createClass({

    getInitialState() {
        return {
            forecast: {},
            current: {}
        }
    },

    getToday() {
        let date = new Date();
        let mm = date.getMonth() + 1; // getMonth() is zero-based
        let dd = date.getDate();
        return [
            date.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    },

    setupForecastData(forecast) {
        // Process API response
        // Build object that groups weather forecasts by day
        let weatherList = {};
        for (let i in forecast) {
            if (forecast.hasOwnProperty(i)) {
                let currDate = forecast[i].dt_txt.substring(0, 10);
                if (weatherList[currDate] === undefined) {
                    weatherList[currDate] = [];
                }
                // create weather object
                let weatherObj = {
                    date: forecast[i].dt_txt,
                    time: forecast[i].dt_txt.substring(11, forecast[i].dt_txt.length-3),
                    desc: forecast[i].weather[0].description,
                    main: forecast[i].weather[0].main,
                    temp: Number((forecast[i].main.temp).toFixed(0)),
                    icon: WEATHER_ICONS[forecast[i].weather[0].main]
                };
                weatherList[currDate].push(weatherObj);
            }
        }
        // Get today's weather to display and remove from array
        let today = this.getToday();
        let currentWeather = null;
        for (let first in weatherList) {
            if (weatherList.hasOwnProperty(first)) {
                currentWeather = weatherList[first][0];
                break;
            }
        }
        delete weatherList[today];

        // Create array of the rest of the week's weather
        let weatherArray = [];
        for (let i in weatherList) {
            if (weatherList.hasOwnProperty(i)) {
                weatherArray.push(weatherList[i]);
            }
        }

        // Set the component state
        this.setState({
            forecast: weatherArray,
            current: currentWeather      // Get most recent report
        });
    },

    searchLocation(city, countryCode) {
        let that = this;
        let url = API_VARS.apiUrlPrefix + "q=" + city + "," + countryCode
                + API_VARS.apiUnitsCelcius + API_VARS.apiKey;
        console.log("fetching URL: " + url);

        // Do API call & process the response
        fetch(url, {
        	method: 'get'
        }).then(function(response) {
            response.json().then(data => {
                // get raw list of weather data
                that.setupForecastData(data.list)
            });
        }).catch(function(err) {
        	console.log(err);
        });
    },

    componentDidMount() {
        // Once component ready, call API (only once)
        this.searchLocation(API_VARS.initSearch, 'uk');
    },

    weatherClass: function() {
        // Include the weather type class
        return "App " + this.state.current.main;
    },

    render() {
        // Render main application grid
        return (
            <Grid className={this.weatherClass()}>
                <Row className="show-grid utilities">
                    <Col xs={12} className="autocomplete">
                        <SearchForm value={API_VARS.initSearch} searchLocation={this.searchLocation} />
                    </Col>
                </Row>
                <Row className="show-grid today">
                    <Col xs={12}>
                        <DayForecast current={this.state.current} />
                    </Col>
                </Row>
                <Row className="show-grid week">
                    <Col xs={12}>
                        <WeekForecast forecast={this.state.forecast} />
                    </Col>
                </Row>
            </Grid>
        );
    }
});

export default App;
