import constants from '../constants'
import superagent from 'superagent'


export default {
	fetchBirds: (params) => {
		return (dispatch) => {
			superagent
			.get(`http://ebird.org/ws1.1/data/obs/geo/recent?lng=${params.lng}&lat=${params.lat}&dist=2&maxResults=500&locale=en_US&fmt=json`)
			.then( response => {
				console.log(response.body)
				dispatch({
					type: constants.BIRDS_RECIEVED,
					birds: response.body
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
			})

		}
	},
	selectBird: (name) => {
		return (dispatch) => {
			superagent
			.get(`/scrape/${name}`)
			.then( response => {
				console.log(response.body)
				dispatch({
					type: constants.BIRD_SELECTED,
					bird: response.body
				})
			})
			.catch( err => {
				console.log('ERROR ' + err)
			})

		} 

	},
	birdsRecieved: (posts) => {
		return {
			type: constants.BIRDS_RECIEVED,
			posts: posts
		}
	},
	updateCurrentLocation: (location) => {
		return{
			type: constants.CURRENT_LOCATION_CHANGED,
			location: location
		}
	}
}