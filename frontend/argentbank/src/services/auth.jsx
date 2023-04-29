import axios from 'axios';

const API_URL = "http://localhost:3001/api/v1/user/";


export async function register(username, email, password) {
	return axios.post(API_URL + "signup", {
		username,
		email,
		password,
	});
};

export async function login(email, password) {
	try {
		const res = await axios.post(API_URL + "login", {
			email,
			password
		});
		return res.data;

	} catch (err) {
		return err;
	}


};

export async function logout() {


};









