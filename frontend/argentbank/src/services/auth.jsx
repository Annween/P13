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
	console.log("login");
	try {
		const res = await axios.post(API_URL + "login", {
			email,
			password
		});
		const data = await res.data;
		console.log(data);
		if (data.body.token) {
			localStorage.setItem("login", JSON.stringify(data));
		}
		return data;

	} catch (err) {
		console.log("error", err);
	}


};

export async function logout() {
	localStorage.removeItem("login");
};









