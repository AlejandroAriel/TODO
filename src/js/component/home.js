import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./list.js";
//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>TODO LIST !!!</h1>
			<ul>
				{" "}
				<ToDoList />{" "}
			</ul>
		</div>
	);
}
