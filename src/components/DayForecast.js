/* React + Plugins */
import React, { Component } from 'react';

/* Component Styles */
import '../css/DayForecast.css';

class DayForecast extends Component {
	render() {
		return (
			<div className="dayForecast">
				<img src={this.props.current.icon} className="weather-icon" alt="Windy" />
				<div className="current-temp">{this.props.current.temp}&deg;</div>
				<div className="current-main">{this.props.current.main}</div>
				<div className="current-time">{this.props.current.time}</div>
			</div>
		);
	}
}

export default DayForecast;
