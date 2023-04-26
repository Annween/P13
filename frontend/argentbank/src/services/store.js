/*import {legacy_createStore as createStore} from 'redux';

const InitialState = {
	loading: false,
	error: null,
	auth: null,
	token: null,
	isLogged: false

}

const reducer = (state = InitialState, action) => {
	switch(action.type) {
		case 'LOGIN_REQUEST':
			return {...state, loading: true, error: null}
		case 'LOGIN_SUCCESS':
			return {...state, loading: false, error: null, auth: action.payload.auth, token: action.payload.token, isLogged: true}
		case 'LOGIN_FAILURE':
			return {...state, loading: false, error: action.payload.error, auth: null, token: null, isLogged: false}
		case 'LOGOUT':
			return {...state, loading: false, error: null, auth: null, token: null, isLogged: false}
		case 'SET_USER':
			return {...state, loading: false, error: null, auth: action.payload.auth, token: action.payload.token, isLogged: true}
		case 'UPDATE_USER':
			return {...state, loading: false, error: null, auth: action.payload.auth, token: action.payload.token, isLogged: true}
		default:
			return state
	}
}


const store = createStore(
	reducer,
); */

import profileReducer from '../redux/profile/profileSlice'
import login from '../redux/auth/loginSlice'
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		login: login,
		profile: profileReducer,
	},
})

export default store;
