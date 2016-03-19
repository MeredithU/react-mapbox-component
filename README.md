# React Mapbox Component

![alt text](https://github.com/meredithu/react-mapbox-component/raw/master/mapbox-component.jpg)

## Included

1. [React](http://facebook.github.io/react/)
2. [Webpack](https://webpack.github.io/docs/)
3. [Babel](https://babeljs.io/)
4. [Mapbox](https://www.mapbox.com/mapbox.js/api/v2.3.0/)

## Installation Instructions

1. ``git clone https://github.com/MeredithU/react-mapbox-component.git``
2. ``cd react-mapbox-component``
3. ``npm install``

## To Run Dev Server

1. ``npm build``
2. ``npm start``
3. Go to *http://localhost:8000/* in your browser

## Connecting Mapbox Credentials

You will need to create an _environment-variables.js_ file in the `/src` folder and include your *Access Token* and *Map ID* from your Mapbox account to display the map. Once you've created that file, it's pulled into the *App.jsx* file found in the `/src` folder.

You can structure your file the following way:

```javascript
var EnvironmentVariables = {
  MAPBOX_MAP_ID: '{INSERT HERE}',
  MAPBOX_ACCESS_TOKEN: '{INSERT HERE}'
}
module.exports = EnvironmentVariables;
```