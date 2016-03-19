import React from 'react';
import ReactDOM from 'react-dom';
import EnvironmentVariables from './environment-variables.js';
import Mapbox from './components/Mapbox.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Mapbox Map</h1>
        <Mapbox accessToken={EnvironmentVariables.MAPBOX_ACCESS_TOKEN} mapId={EnvironmentVariables.MAPBOX_MAP_ID} center={[47.6204, -122.3491]} zoom={13} />
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));