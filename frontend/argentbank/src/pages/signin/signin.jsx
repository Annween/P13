import React from "react";
import "./signin.css";
import {login} from "../../services/api";
import store from "../../services/store";

//se connecter
function Signin() {

	//instantiation de la classe Api
	const toLogin =  (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		//fonction store dispatch
		//store.dispatch({type: "LOGIN_REQUEST"});

		//callApi.login(email, password)
		login(email, password)
		.then((response) => {
			store.dispatch({
				type: "LOGIN_SUCCESS",
				payload: {
					email: response.data.email,
					password: response.data.password
				},
			});
//
			console.log(response);
		})
		.catch((error) => {
			store.dispatch({
				type: "LOGIN_FAILURE",
				payload: {
					error: error.response,
				},
			});
			console.log(error.response);
		});
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form>
					<div className="input-wrapper">
						<label htmlFor="email">Email</label
						><input type="email" id="email"/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label
						><input type="password" id="password"/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me"/><label htmlFor="remember-me"
					>Remember me</label
					>
					</div>

					<button id="signIn" type="submit" className="sign-in-button" onClick={toLogin}>Sign In</button>

				</form>
			</section>
		</main>
	);
}


export default Signin;
