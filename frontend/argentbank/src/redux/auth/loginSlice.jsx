import {createSlice} from '@reduxjs/toolkit';
import {type} from "@testing-library/user-event/dist/type";

const initialState = {
	isLoading: false,
	error: '',
	username : null,
	token: null,
	isLogged: false
}

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		loginLoading: (state) => {
			state.isLoading = true
		},
		loginSuccess: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.isLogged = true
			state.login = action.payload.username
			state.token = action.payload.token
		},
		loginFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload
			state.isLogged = false
			state.token = null
			state.login = null
		},
		logout: (state) => {
			state.isLoading = false
			state.error = ''
			state.isLogged = false
			state.token = null
			state.login = null
		},

	}
})

const {actions, reducer} = loginSlice

export const {loginLoading, loginSuccess, loginFailure, logout} = actions

export default reducer;
