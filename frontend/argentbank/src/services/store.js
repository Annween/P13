import {legacy_createStore as createStore} from 'redux';

const InitialState = {
	loading: false,
	error: null,
	user: null,
	token: null,
	isLogged: false

}

const reducer = (state = InitialState, action) => {
	switch(action.type) {
		case 'LOGIN_REQUEST':
			return {...state, loading: true, error: null}
		case 'LOGIN_SUCCESS':
			return {...state, loading: false, error: null, user: action.payload.user, token: action.payload.token, isLogged: true}
		case 'LOGIN_FAILURE':
			return {...state, loading: false, error: action.payload.error, user: null, token: null, isLogged: false}
		case 'LOGOUT':
			return {...state, loading: false, error: null, user: null, token: null, isLogged: false}
		default:
			return state
	}
}

const store = createStore(reducer);

export default store;
