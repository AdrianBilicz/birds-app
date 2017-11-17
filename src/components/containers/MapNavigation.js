import React, {Component} from 'react'
import Map from '../view/Map'
import {connect} from 'react-redux'
import actions from '../../actions'


class MapNavigation extends Component {

	setNewLocation(location){
		// console.log('setNewLocation: '+ JSON.stringify(location))
		this.props.updateCurrentLocation(location)
	}
	render(){
		
		return (
			<div className="map">
				<Map 
					containerElement={<div style={{ height:'100%', width: '100%'}}></div>} 
					mapElement={<div style={{height:'100%', width: '100%'}}></div>} 
					center={this.props.birds.currentLocation}
					zoom={14}
					mapMoved={this.setNewLocation.bind(this)}
				/>
			</div>

			)
	}
}

const stateToProps = (state) => {
	return {
		birds: state.birds
	}
}

const dispatchToprops = (dispatch) => {
	return {
		updateCurrentLocation: (location) => dispatch(actions.updateCurrentLocation(location))
	}
}

export default connect(stateToProps,dispatchToprops)(MapNavigation)