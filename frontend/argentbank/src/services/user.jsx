import axios from "axios";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";



const API_URL = "http://localhost:3001/api/v1/user/";

const AuthHeader = () => {
	// return authorization header with jwt token
	const user = useSelector((state) => state.login)

	if (user && user.token) {
		return {Authorization: "Bearer " + user.token};
	} else {
		return {};
	}
}

export async function getCurrentUser() {
		const res = await axios.post(API_URL + "profile", {}, {headers: AuthHeader()});
		return res.data;

}

export async function updateProfile(firstName, lastName) {
	const res = await axios.put(API_URL + "profile", {
		firstName,
		lastName
	}, {headers: AuthHeader()});
	return res.data;
}
