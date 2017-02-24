/* React + Plugins */
import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

/* Constants */
import { WEATHER_ICONS, DAYS_OF_WEEK } from '../lib/constants';

/* Component Styles */
import '../css/WeekForecast.css';

class DayForecast extends Component {
	render() {
		var dateSplit = this.props.day.date.split(' ');
		var dt = dateSplit[0].split('-');	// get date
		var tm = dateSplit[1].split(':');	// get time
		var d = new Date(dt[0], dt[1], dt[2], tm[0]);

		if (!d || d === undefined) {
			console.err("DATE ERROR: " + this.props.day);
		}
		if (d.getDay() < 0 || d.getDay() > 7) {
			console.err("DATE ERROR OUT OF RANGE: " + d.getDay());
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
			var rend = this.renderDay(i, item);
		    rows.push(rend);
		}
		return (
			<div className="weekForecast">
				{rows}
			</div>
		);
	}
}

export default WeekForecast;
