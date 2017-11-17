import React, {Component} from 'react'
import {withGoogleMap, GoogleMap} from 'react-google-maps'


class Map extends Component {
	constructor(){
		super()
		this.state = {
			map: null
		}
	}

	mapDragged(){
		var latLng = this.state.map.getCenter().toJSON()
		this.props.mapMoved(latLng)
	}
	
	render(){

		return (
			<GoogleMap
			ref = {(map) => {
				if(this.state.map != null)
					return
				this.setState({map: map})
			}}
				onDragEnd={this.mapDragged.bind(this)}
				defaultZoom={this.props.zoom}
				defaultCenter={this.props.center}
				options={{streetViewControl: false, mapTypeControl: false}}>
			</GoogleMap>

			)
	}
}

export default withGoogleMap(Map)