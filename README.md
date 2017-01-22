# React 5-day Weather App
A simple 5-day weather forecast built using [React](https://facebook.github.io/react/)
and the [OpenWeatherMap API](http://openweathermap.org/forecast5).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app is publicly hosted here: [Heroku](http://dry-badlands-87551.herokuapp.com/).

## Contents

<a name="dependencies"></a>
## Dependencies
This project was built using **React v15.4.2** on **Mac OS 10.12.2** in a **Node v7.4.0** environment.
The [npm](https://www.npmjs.com/) package manager is needed to install &amp; run this app.

<a name="installation"></a>
## Installation/Building the App
Download a zip or clone this repository.

Run NPM install inside the main directory. This will install all the required
dependencies from package.json.
```
$ npm install
...
```
All of the Sass has been pre-compiled into /src/css.
If any changes are made, it can be re-compiled with Gulp:
```
$ gulp
```
Gulp watch will watch for any Sass changes and live reload during development:
```
$ gulp watch
```

<a name="running-the-app"></a>
## Running the App
Start the development server:
```
$ npm start
```
The app should load at http://localhost:3000/. It defaults to London, GB. The search
bar is pre-populated with a short list of locations; selecting a new location and
pressing 'GO' will reload the data.


Bundle the app into static files for production:
```
npm run build
```

<a name="testing-the-app"></a>
## Testing the App
Start the test runner:
```
npm test
```

<a name="plugins"></a>
## Plugins/Packages Used
### [Gulp](http://gulpjs.com/)
You will find a Gulpfile in the root directory. Currently this contains Sass
compilation only. Sass files from /src/sass are processed down to /src/css.
TODO: reduce image and asset sizes (minify JS/CSS)

### [react-autocomplete](https://github.com/reactjs/react-autocomplete)
Used for the top-searchbox.

### [react-bootstrap](https://react-bootstrap.github.io/)
Used for grid layout &amp styling.

<a name="future"></a>
## Future Upgrades
With more time, there is much more that could be done with the app.
* UI/UX
  * Improve the search functionality to a) search for any city (load full city list or call location API) and b) submit on enter/return keypress.
  * Display more information with regards to the data; e.g how it is expected to change over time, wind speed, rainfall etc
  * Allow the user to change the units to suit them/automatically select based on locality (Farenheight vs Celcius)
  * Change colors of 5 day forecast to represent daily weather (rather than same as today's weather)
  * Auto refresh the data to keep up to date without user having to interact
  * Timezone handling - currently doesn't convert time into local, and unclear it's a 3hr forecast
* Architecture/Code
  * Cache the API calls to avoid unnecessary requests (this API includes a 3hr forecast so not needed to hit API on every reload)
  * Improved suite of tests to make sure future changes don't break the app, ensure robustness
  * Improvements to gulpfile to minimise all resources for production

<a name="references"></a>
## References
* Icons: [iconnice](http://www.flaticon.com/authors/iconnice)

<a name="license"></a>
## License
[MIT](http://link.com)
