/* React + Plugins */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/* Constants */
import { WEATHER_ICONS, DAYS_OF_WEEK } from '../lib/constants';

/* Component Styles */
import '../css/WeekForecast.css';

class DayForecast extends Component {
	render() {
		var d = new Date(this.props.day.date);
		/**
		 * Attempt at tracking iphone bug
		 **/
		console.log("LOGGING DATE: " + d);
		console.log("LOGGING DATE: " + DAYS_OF_WEEK[d.getDay()])
		if (!d || d === undefined) {
			console.log("DATE ERROR: " + this.props.day);
		}
		if (d.getDay() < 0 || d.getDay() > 7) {
			console.log("DATE ERROR OUT OF RANGE: " + d.getDay());
		}
		return (
			<Row className="show-grid day">
				<Col xs={6}>{DAYS_OF_WEEK[d.getDay()]}</Col>
				<Col xs={3} className="text-right">
					<img src={WEATHER_ICONS[this.props.day.main]} role="presentation" />
				</Col>
				<Col xs={3} className="text-right temp">{this.props.day.temp}&deg;</Col>
			</Row>
		);
	}
}

class WeekForecast extends Component {
	renderDay(idx, data) {
		return <DayForecast key={idx} day={data} />
	}
	render() {
		var rows = [];
		for (var i=0; i < this.props.forecast.length; i++) {
			var item = this.props.forecast[i][4]; // get the midday reading
		    rows.push(this.renderDay(i, item));
		}
		return (
			<div className="weekForecast">
				{rows}
			</div>
		);
	}
}

export default WeekForecast;
