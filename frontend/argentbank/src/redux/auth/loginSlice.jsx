import {createSlice} from '@reduxjs/toolkit';


const initialState = {
	isLoading: false,
	error: '',
	user : null,
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
			state.user = action.payload.user
			state.token = action.payload.token
			state.isLogged = true
		},
		loginFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload.error
			state.isLogged = false
			state.token = null
			state.user = null
		},
		logout: (state) => {
			state.isLoading = false
			state.error = ''
			state.isLogged = false
			state.token = null
			state.user = null
		},

	}
})

const {actions, reducer} = loginSlice

export const {loginLoading, loginSuccess, loginFailure, logout} = actions

export default reducer;
