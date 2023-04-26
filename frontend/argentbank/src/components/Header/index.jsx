import React from "react";
import logo from "../../images/argentBankLogo.png";
import {Link} from 'react-router-dom';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
	//if auth is Logg
	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-logo">
				<img
					className="main-nav-logo-image"
					src={logo}
					alt="Argent Bank Logo"
				/>
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to="/signin"  className="main-nav-logo">
					<i className="fa fa-user-circle"></i>
					Sign In
				</Link>
			</div>
		</nav>
	);
}


export default Header;
