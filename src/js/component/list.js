import React, { useState } from "react";
import PropTypes, { array } from "prop-types";

export const ToDoList = props => {
	const [arr, setArr] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const result = arr.map((item, index) => (
		<li key={index}>
			{item}
			<button onClick={() => arr.filter(el => el != arr[index])}>
				X
			</button>
		</li>
	));
	return (
		<>
			<input
				onChange={e => setInputValue(e.target.value)}
				className="form-control form-control-lg"
				type="text"
				placeholder=".form-control-lg"></input>

			<button
				onClick={() => {
					setArr([...arr, inputValue]);
				}}>
				enviar
			</button>
			<ul>{result}</ul>
		</>
	);
};
ToDoList.propTypes = {
	title: PropTypes.string
};
