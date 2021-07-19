import React, { useState } from "react";
import PropTypes, { array } from "prop-types";
import { ListGroup, Container, Row, Col } from "react-bootstrap";

export const ToDoList = props => {
	const [arr, setArr] = useState([]);
	const [inputValue, setInputValue] = useState("");

	const result = arr.map((item, index) => (
		<ListGroup.Item as="li" active key={index}>
			{item}
			<button
				onClick={() => {
					let newArr = arr.filter(el => el != arr[index]);
					setArr(newArr);
					console.log(arr[index]);
				}}>
				🗑️
			</button>
		</ListGroup.Item>
	));
	return (
		<>
			<Container>
				<Row>
					<Col>
						<input
							onChange={e => setInputValue(e.target.value)}
							className="form-control form-control-lg"
							type="text"
							placeholder=".form-control-lg"></input>

						<button
							onClick={() => {
								
								if (
									inputValue.replaceAll(" ", "") != "" &&
									!arr.includes(inputValue)
								) {
									setArr([...arr, inputValue]);
								}
							}}>
							➕
						</button>
						<ListGroup as="ul">{result}</ListGroup>
					</Col>
				</Row>
			</Container>
		</>
	);
};
ToDoList.propTypes = {
	title: PropTypes.string
};
