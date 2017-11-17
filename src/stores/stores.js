import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import birdsReducer from '../reducers/birdsReducer'

var store
export default {

	configure: (initialState) => { // initialState can be null
		
		const reducers = combineReducers({ // insert reducers here
			birds: birdsReducer,
		})

		if (initialState){
			store = createStore(
			    reducers,
			    initialState,
			    applyMiddleware(thunk)
			)

			return store
		}

		store = createStore(
		    reducers,
		    applyMiddleware(thunk)
		)

		return store
	},

	currentStore: () => {
		return store
	}
}
