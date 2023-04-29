import React from "react";
import "./signin.css";
import {login} from "../../services/auth";
import store from "../../services/store";
import  {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess, loginFailure} from "../../redux/auth/loginSlice";

//se connecter
function Signin() {

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const {error} = useSelector((state) => state.login);

	const toLogin =  (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		//fonction store dispatch
		login(email, password).then((response) => {
			dispatch(loginSuccess(response.body));
			navigate("/profile");
		})
		.catch((error) => {
			dispatch(loginFailure(error.body));
		})

	}


	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form >
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
