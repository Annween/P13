import React, {useEffect, useState} from "react";
import "./profile.css";
import {AuthHeader, getCurrentUser, updateProfile} from "../../services/user";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {profileFailure, profileSuccess} from "../../redux/profile/profileSlice";
import Account from "../../components/Account";

function Profile() {

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {isLoading, error, firstName, lastName} = useSelector((state) => state.profile)
	const [isEditing, setIsEditing] = useState(false)
	//const [user, setUser] = useState({firstName, lastName})
	//const [newUser, setNewUser] = useState({firstName, lastName})
	const [formFirstName, setFormFirstName] = useState()
	const [formLastName, setFormLastName] = useState()
	const token = AuthHeader();


	getCurrentUser()
		.then((response) => {
			dispatch(profileSuccess(response.body));
		}).catch((err) => {
		if (err.response.status === 401) {
			navigate("/signin");
		}
	})

	useEffect(() => {
		setFormFirstName(firstName);
		setFormLastName(lastName);
	}, [firstName, lastName])


	const handleSubmit = (e) => {
		e.preventDefault();
		updateProfile(
		{
			firstName: formFirstName,
			lastName: formLastName
		}, token).then((response) => {
			dispatch(profileSuccess(response.body));
			setIsEditing(false);
		}).catch((error) => {
			dispatch(profileFailure(error.message));
		})

	}

	return <>
	<main className="main bg-dark">
		<div className="header">
			<h1>Welcome back<br/>{firstName + ' ' + lastName}</h1>

			<button className="edit-button" id="edit" onClick={() => setIsEditing(true)}>Edit Name</button>
			{isEditing &&
				<div className="edit">
					<form onSubmit={handleSubmit}>
						<div className="flex">
							<div className="form-group">
								<input type="text" className="form-control" id="firstName" onChange={(e) => setFormFirstName(e.target.value)}
								        value={formFirstName}/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="lastName" onChange={(e) => setFormLastName(e.target.value)}
								      value={formLastName}/>
							</div>
						</div>
						
						<button className="edit-button" id="save" type="submit">Save</button>
						<button className="edit-button" id="cancel" type="button"
						        onClick={() => setIsEditing(false)}>Cancel
						</button>

					</form>
				</div>
			}
		</div>
		<h2 className="sr-only">Accounts</h2>

		<Account />

	</main>
	</>;
}


export default Profile;
