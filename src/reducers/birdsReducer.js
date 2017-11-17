import constants from '../constants'

var initialState = {
	currentLocation: {
			lat: 40.75,
			lng: -73.98
		},
	list: null,
	selectedBird: null 
}

export default (state = initialState, action) => {
	let updated = Object.assign({},state)
	switch (action.type) {
		case constants.BIRDS_RECIEVED:
		updated['list'] = action.birds
		return updated

		case constants.BIRD_SELECTED:
		updated['selectedBird'] = action.bird
		return updated

		case constants.CURRENT_LOCATION_CHANGED:
		updated['currentLocation'] = action.location
		updated['list'] = null
		return updated

		default:
			return updated
			
	}
}