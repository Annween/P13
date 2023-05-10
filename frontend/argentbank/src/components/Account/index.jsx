import React, {useEffect, useState} from "react";

import "./Account.css";
import Transaction from "../Transaction";


const Account = () => {

	//onclick on transaction button, redirect to transaction page

	//const [isClicked1, setIsClicked2] = useState(false)
	//const [isClicked2, setIsClicked1] = useState(false)
	//const [isClicked3, setIsClicked3] = useState(false)

	const [openedSections, setOpenedSections] = useState([false, false, false])


	return <section>
		<div className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Checking (x8349)</h3>
				<p className="account-amount">$2,082.79</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button" onClick={() => {
					const status = [...openedSections]
					status[0] = !status[0];
					setOpenedSections(status)
				}
				}>View transactions
				</button>
			</div>
			{openedSections[0] && <Transaction/>}
		</div>
		<div className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Savings (x6712)</h3>
				<p className="account-amount">$10,928.42</p>
				<p className="account-amount-description">Available Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button" onClick={() => {
					const status = [...openedSections]
					status[1] = !status[1];
					setOpenedSections(status)
				}}>View transactions
				</button>
			</div>
			{openedSections[1] && <Transaction/>}
		</div>
		<div className="account">
			<div className="account-content-wrapper">
				<h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
				<p className="account-amount">$184.30</p>
				<p className="account-amount-description">Current Balance</p>
			</div>
			<div className="account-content-wrapper cta">
				<button className="transaction-button" onClick={() => {
					const status = [...openedSections]
					status[2] = !status[2];
					setOpenedSections(status)
				}}>View transactions
				</button>
			</div>
			{openedSections[2] && <Transaction/>}
		</div>
	</section>
}

export default Account;
