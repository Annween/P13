import React from "react";
import "./signin.css";
import {login} from "../../services/auth";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loginSuccess, loginFailure} from "../../redux/auth/loginSlice";
import Alert from 'react-bootstrap/Alert';

//se connecter
function Signin() {
	const {error, isLoading} = useSelector((state) => state.login);
	const navigate = useNavigate();
	const dispatch = useDispatch();


	const toLogin = (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const password = document.getElementById("password").value;

		//fonction store dispatch
		login(email, password).then((response) => {
			dispatch(loginSuccess(response.body));
			navigate("/profile");
		}).catch((error) => {
				dispatch(loginFailure(error.message));
		})
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				{error && <Alert variant="danger" key={error} >{error}</Alert>}
				<form onSubmit={toLogin}>
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

					<button id="signIn" type="submit" className="sign-in-button">Sign In</button>

					{isLoading && <Alert variant="warning" key={isLoading} >Loading...</Alert>}

				</form>
			</section>
		</main>
	);


}


export default Signin;
