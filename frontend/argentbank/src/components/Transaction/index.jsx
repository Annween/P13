import React, {useState} from "react";
import "./Transaction.css";

const Transaction = () => {

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isInputOpen, setIsInputOpen] = useState(false);
	const Select = () => {
		return (
		<div className="select">
			<select className="form-select">
				<option value="food">Food</option>
				<option value="transport">Transport</option>
				<option value="housing">Housing</option>
				<option value="utilities">Utilities</option>
			</select>
			<button className="edit-button" id="cancel" type="button" onClick={() => setIsDropdownOpen(false)}>Cancel</button>
		</div>
		);
	}

	const Input = () => {
		return (
			<div className="input">
				<input type="text" className="form-control" placeholder="Enter notes here"/>
				<button className="edit-button" id="cancel" type="button" onClick={() => setIsInputOpen(false)}>Cancel</button>
			</div>
		);
	}


	return (
		<table className="transaction-table">
			<tbody>
			<tr>
				<td>Transaction Type : Electronics</td>
			</tr>
			<tr>
				<td>Category: Food  {isDropdownOpen ? <Select /> : <i className="fa fa-pencil" onClick={() => setIsDropdownOpen(true)}></i>}</td>

			</tr>
			<tr>
				<td >Notes: {isInputOpen ? <Input/> : <i className="fa fa-pencil" onClick={() => setIsInputOpen(true)}></i>}</td>

			</tr>
			</tbody>
		</table>
	);
}

export default Transaction;
