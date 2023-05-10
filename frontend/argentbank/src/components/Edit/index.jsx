import React from "react";
import {updateProfile} from "../../services/user";
import {useNavigate} from "react-router-dom";
import {profileFailure, profileSuccess} from "../../redux/profile/profileSlice";
import {useDispatch, useSelector} from "react-redux";


function Edit() {
	const handleSubmit = (e) => {
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
									<input type="text" className="form-control" id="firstName" onChange={handleChange}
									       placeholder={firstName} readOnly={false} value={
										firstName === null ? '' : firstName
									}/>
								</div>
								<div className="form-group">
									<input type="text" className="form-control" id="lastName" onChange={handleChange}
									       placeholder={lastName} readOnly={false} value={
										lastName === null ? '' : lastName
									}/>
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
		</main>
	</>;

}


export default Edit;


