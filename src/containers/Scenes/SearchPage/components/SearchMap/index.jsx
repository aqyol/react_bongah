import React, { PureComponent } from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';


const {
  Marker,
  ZoomControl,
  ScaleControl,
} = CedarMaps.getReactMapboxGl();


class SearchMap extends PureComponent {
  constructor() {
    super();
    this.state = {
      location: {
        lat: 51.34379364705882,
        lng: 35.74109568627451,
      },
    };
    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick(map, data) {
    this.setState({
      location: {
        lat: data.lngLat.lng,
        lng: data.lngLat.lat,
      },
    });
  }

  render() {
    return (
      <div className="searchMap">
        <CedarMaps
          containerStyle={{
            height: '80vh',
            width: '100%',
          }}
          token="8d8be29d01ea833ea7bacdd1836567d67c678a70"
          center={[this.state.location.lat, this.state.location.lng]}
          preserveDrawingBuffer={false}
          onClick={(map, data) => { this.handleMapClick(map, data); }}
        >
          <ZoomControl />
          <ScaleControl />
          <Marker
            coordinates={[this.state.location.lat, this.state.location.lng]}
          >
            <img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="marker" />
          </Marker>
        </CedarMaps>
      </div>
    );
  }
}

export default SearchMap;
