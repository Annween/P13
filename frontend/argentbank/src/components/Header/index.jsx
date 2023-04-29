import React from "react";
import logo from "../../images/argentBankLogo.png";
import {Link} from 'react-router-dom';
import "./Header.css";
import {useSelector} from "react-redux";


function Header() {

	const login = useSelector((state) => state.login)
	const profile = useSelector((state) => state.profile)

	const SetLink = () => {
		if (login.token) {
			return  <div className="main-nav-logo">
				<Link to="#"  >
					<i className="fa fa-user-circle"></i>
					{profile.firstName}
				</Link>
				<Link to="/signout" >
					<i className="fa-solid fa-right-from-bracket"></i>
				Sign Out
			</Link>
			</div>
		} else {
			return <div className="main-nav-logo"><Link to="/signin"  >
				<i className="fa fa-user-circle"></i>
				Sign In
			</Link>
			</div>
		}
	}



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
				<SetLink />
		</nav>
	);
}


export default Header;
