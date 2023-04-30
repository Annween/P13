/*import React from "react";
import {updateProfile} from "../../services/user";
import {useNavigate} from "react-router-dom";
import {profileFailure, profileSuccess} from "../../redux/profile/profileSlice";
import {useDispatch, useSelector} from "react-redux";


function Edit() {
	const dispatch = useDispatch();
	const {firstName, lastName} = useSelector((state) => state.profile)


	function handleSubmit(e) {
		e.preventDefault();
		const firstName = document.getElementById("firstName").value;
		const lastName = document.getElementById("lastName").value;
		const user = {firstName, lastName};
		updateProfile(user).then((response) => {
			dispatch(profileSuccess(response.body));
		}).catch((error) => {
			dispatch(profileFailure(error.body));
		})

	}

	return <div className="header">
		<form onSubmit={handleSubmit}>
			<div className="input-wrapper">
				<label htmlFor="firstName">First Name</label>
				<input type="text" id="firstName" value={firstName}/>
			</div>
			<div className="input-wrapper">
				<label htmlFor="lastName">Last Name</label>
				<input type="text" id="lastName" value={lastName}/>
			</div>
			<button className="edit-button" id="save" type="submit">Save</button>
			<button className="edit-button" id="cancel" type="button">Cancel</button>
		</form>
	</div>

}




export default Edit; */


