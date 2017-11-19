import React, { Component } from "react";
import Map from "../view/Map";
import { connect } from "react-redux";
import actions from "../../actions";

class MapNavigation extends Component {
  setNewLocation(location) {
    // console.log('setNewLocation: '+ JSON.stringify(location))
    this.props.updateCurrentLocation(location);
  }
  render() {
    return (
      <div className="map">
        <Map
          containerElement={<div style={{ height: "100%", width: "100%" }} />}
          mapElement={<div style={{ height: "100%", width: "100%" }} />}
          center={this.props.birds.currentLocation}
          zoom={14}
          mapMoved={this.setNewLocation.bind(this)}
        />
      </div>
    );
  }
}

const stateToProps = state => ({
  birds: state.birds
});

const dispatchToprops = dispatch => ({
  updateCurrentLocation: location =>
    dispatch(actions.updateCurrentLocation(location))
});

export default connect(stateToProps, dispatchToprops)(MapNavigation);
