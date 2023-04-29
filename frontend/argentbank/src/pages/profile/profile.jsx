import React from "react";
import "./profile.css";
import {getCurrentUser} from "../../services/user";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {profileSuccess} from "../../redux/profile/profileSlice";


function Profile() {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {isLoading, error, firstName, lastName} = useSelector((state) => state.profile)


	getCurrentUser()
		.then((response) => {
			dispatch(profileSuccess(response.body));
		}).catch((err) => {
		if (err.response.status === 401) {
			navigate("/signin");
		}
	})

	const EditName = () => {
		document
	}


	if (isLoading) {
		return <div>Loading...</div>
	}


	return <main className="main bg-dark">
		<div className="header">
			<h1>Welcome back<br/>{firstName + ' ' + lastName}</h1>
			<button className="edit-button" id="edit">Edit Name</button>
		</div>
		<h2 className="sr-only">Accounts</h2>
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Checking (x8349)</h3>
				<p className="account-amount">$2,082.79</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Savings (x6712)</h3>
				<p className="account-amount">$10,928.42</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
		<section className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
				<p className="account-amount">$184.30</p>
				<p className="account-amount-description">Current Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button">View transactions</button>
			</div>
		</section>
	</main>;
}


export default Profile;
