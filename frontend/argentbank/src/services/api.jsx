import axios from 'axios';


const API_URL = "http://localhost:3001/api/v1/user/";


function register(username, email, password) {
	return axios.post(API_URL + "signup", {
		username,
		email,
		password,
	});
};

export async function login(email, password) {

	try {
		const res = await fetch(API_URL + "login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				email,
				password
			})
		})
		const data = await res.json();
		console.log(data);
		if (data.token) {
			localStorage.setItem("user", JSON.stringify(data));
		}
	} catch (err) {
		console.log("error", err);
		console.log(err);
	}

};

function logout() {
	localStorage.removeItem("user");
};








