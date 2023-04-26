import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	error: '',
	firstName: '',
	lastName: '',
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		profileLoading: (state) => {
			state.isLoading = true
		},
		profileSuccess: (state, action) => {
			state.isLoading = false
			state.error = ''
			state.firstName = action.payload.firstName
			state.lastName = action.payload.lastName
		},
		profileFailure: (state, action) => {
			state.isLoading = false
			state.error = action.payload.error
		},
	}
})

const {actions, reducer} = profileSlice

export const {profileLoading, profileSuccess, profileFailure} = actions

export default reducer
