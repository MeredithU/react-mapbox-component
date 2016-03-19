import React from 'react';
import ReactDOM from 'react-dom';
import L from 'mapbox.js';
import './Mapbox.scss';

class Mapbox extends React.Component {

  componentDidMount() {
    L.mapbox.accessToken = this.props.accessToken;

    var latitude = this.props.center[0];
    var longitude = this.props.center[1];

    var map = L.mapbox.map('map', this.props.mapId).setView([latitude, longitude], this.props.zoom);

    L.mapbox.featureLayer({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude, latitude]
      },
      properties: {
          title: 'Space Needle',
          description: 'Seattle, WA',
          'marker-size': 'large',
          'marker-color': '#BE9A6B',
          'marker-symbol': 'commercial'
      }
    }).addTo(map);
  }

  render() {
    return (
      <div id='map' className='mapbox'></div>
    )
  }
};

Mapbox.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
  mapId: React.PropTypes.string.isRequired,
  center: React.PropTypes.array.isRequired,
  zoom: React.PropTypes.number.isRequired
};

export default Mapbox;