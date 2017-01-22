# React 5-day Weather App
A simple 5-day weather forecast built using [React](https://facebook.github.io/react/)
and the [OpenWeatherMap API](http://openweathermap.org/forecast5).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app is publicly hosted here:

## Contents

<a name="dependencies"></a>
## Dependencies
This project was built using **React v15.4.2** on **Mac OS 10.12.2**. The
[npm](https://www.npmjs.com/) package manager is needed to install &amp; run this app.

<a name="installation"></a>
## Installation/Building the App
Download a zip or clone this repository.

Run NPM install inside the main directory. This will install all the required
dependencies in package.json.
```
$ npm install
...
```

Gulp file; all of the Sass has been compiled into /src/css.
If any changes are made, you can re-compile it with Gulp.
```
$ gulp
```

<a name="running-the-app"></a>
## Running the App
Start the development server:
```
$ npm start
```
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

### [react-autocomplete](https://github.com/reactjs/react-autocomplete)
Used for the top-searchbox.

### [react-bootstrap](https://react-bootstrap.github.io/)
Used for grid layout &amp styling.

<a name="future"></a>
## Future Upgrades
With more time, there is much more that could be done with the app.
* UI/UX
** Improve the search functionality to a) search for any city and b) submit on enter keypress.
* Architecture/Code
** Cache the API calls to avoid unnecessary requests (this API includes a 3hr forecast so not needed to hit API on every reload)
** Improved suite of tests

<a name="references"></a>
## References
* Icons: [iconnice](http://www.flaticon.com/authors/iconnice)

<a name="license"></a>
## License
[MIT](http://link.com)
