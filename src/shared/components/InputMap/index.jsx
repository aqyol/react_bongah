import React, { PureComponent } from 'react';
import { FaMap } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';
import Marker from './components/Marker';


const googleAPIKey = 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4';
// const GoogleMapReact = require('google-map-react').default;

class InputMap extends PureComponent {
  constructor() {
    super();
    this.state = {
      isShow: false,
      center: { lat: 10.766748, lng: 106.705785 },
      marker: {
        position: { lat: 10.766748, lng: 106.705785 },
      },
      zoom: 14,
      draggable: true,
      address_detail: '',
    };
  }

  center = () => ({
    lat: this.state.marker.position.lat,
    lng: this.state.marker.position.lng,
  });

  onMapChange = (newMapState) => {
    this.setState({
      center: newMapState.center,
      zoom: newMapState.zoom,
    });
    console.log(this.state.zoom);
  }

  toggleMap = () => {
    this.setState(prevState => ({
      isShow: !prevState.isShow,
    }));
  }

  onDragMarker = (childKey, childProps, mouse) => {
    this.setState({
      draggable: false,
      marker: {
        position: {
          lat: mouse.lat,
          lng: mouse.lng,
        },
      },
    });
  }

  // onDragendMarker = (childKey, childProps, mouse) => {
  //   this.setState({ draggable: true });
  //   reverseGeo(this.state.marker.position.lat, this.state.marker.position.lng).then(rs => ({
  //     if (rs) {
  //       this.setState({
  //         address_detail: rs.results[0].formatted_address,
  //       });
  //     }
  //   }));
  // }

  showMap = () => {
    if (this.state.isShow) {
      return (
        <div className="searchMap">
          <GoogleMapReact
            draggable={this.state.draggable}
            center={this.state.center}
            zoom={14}
            bootstrapURLKeys={{
              key: googleAPIKey,
            }}
            onChildMouseDown={this.onDragMarker}
            onChildMouseUp={this.onDragendMarker}
            onChildMouseMove={this.onDragMarker}
            onChange={this.onMapChange}
          >
            <Marker
              lat={this.state.marker.position.lat}
              lng={this.state.marker.position.lng}
            />
          </GoogleMapReact>
        </div>
      );
    }
    return <div className="searchMap" />;
  }

  addressDetail;

  render() {
    return (
      <div className="inputMap">
        <div className="input-group">
          <input type="text" value={this.state.address_detail} name="" id="" className="form-control" />
          <span className="input-group-btn">
            <button type="button" className="btn btn-green" onClick={this.toggleMap}>
              <FaMap />
            </button>
          </span>
        </div>
        <div className={`mapWrapper${this.state.isShow ? ' active' : ''}`}>
          {this.showMap()}
        </div>
      </div>
    );
  }
}

export default InputMap;
