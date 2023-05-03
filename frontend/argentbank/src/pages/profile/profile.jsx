import React, {useState} from "react";
import "./profile.css";
import {AuthHeader,getCurrentUser, updateProfile} from "../../services/user";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {profileFailure, profileSuccess} from "../../redux/profile/profileSlice";

function Profile() {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {isLoading, error, firstName, lastName} = useSelector((state) => state.profile)
	const [isEditing, setIsEditing] = useState(false)
	const [user, setUser] = useState({firstName, lastName})
	const token = AuthHeader();


	getCurrentUser()
		.then((response) => {
			dispatch(profileSuccess(response.body));
		}).catch((err) => {
		if (err.response.status === 401) {
			navigate("/signin");
		}
	})



	 const handleSubmit = (e) =>  {
		e.preventDefault();
		 updateProfile(user, token).then((response) => {
			 dispatch(profileSuccess(response.body));
			 setIsEditing(false);
		 }).catch((error) => {
			 dispatch(profileFailure(error.message));
		 })

	}

	const handleChange = (e) => {
		setUser({...user, [e.target.id]: e.target.value})
	}



	return <main className="main bg-dark">
		<div className="header">
			<h1>Welcome back<br/>{firstName + ' ' + lastName}</h1>

			<button className="edit-button" id="edit" onClick={() => setIsEditing(true)}>Edit Name</button>
			{ isEditing &&
			<div className="edit">
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="firstName">First Name</label>
						<input type="text" id="firstName" onChange={handleChange} placeholder={firstName} />
					</div>
					<div className="input-wrapper">
						<label htmlFor="lastName">Last Name</label>
						<input type="text" id="lastName" onChange={handleChange} placeholder={lastName} />
					</div>
					<button className="edit-button" id="save" type="submit">Save</button>
					<button className="edit-button" id="cancel" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
				</form>
			</div>
		 }
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
