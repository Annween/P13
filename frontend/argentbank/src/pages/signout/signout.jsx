import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {logout} from "../../redux/auth/loginSlice";
import {useDispatch} from "react-redux";

function Signout()
{
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(logout());
		navigate("/signin");
	});

	return <div></div>
}

export default Signout;
