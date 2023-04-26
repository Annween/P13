import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

function authHeader() {
	// return authorization header with jwt token
	let user = JSON.parse(localStorage.getItem("user"));

	if (user && user.body.token) {
		return {Authorization: "Bearer " + user.body.token};
	} else {
		return {};
	}
}

export async function getCurrentUser() {
	try {
		const res = await axios.post(API_URL + "profile", {}, {headers: authHeader()});
		return await res.data;

	} catch (err) {
		console.log(err);
	}
}
