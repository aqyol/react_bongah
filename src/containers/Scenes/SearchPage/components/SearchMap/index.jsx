import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import MiniHouse from './components/MiniHouse';


class SearchMap extends PureComponent {
  constructor() {
    super();
    this.state = {
      center: { lat: 10.766748, lng: 106.705785 },
      zoom: 15,
    };
  }

  onMapChange = (newMapState) => {
    this.setState({
      center: newMapState.center,
      zoom: newMapState.zoom,
    });
  };

  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this.onMapChange}
          bootstrapURLKeys={{
            key: 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4',
          }}
        >
          <MiniHouse lat={10.766748} lng={106.705785} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;
