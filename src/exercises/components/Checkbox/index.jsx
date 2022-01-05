import React from "react";
import style from "./style.modules.css";

const Checkbox = ({ label, ...props }) => {
	return (
		<span>
			<input type="checkbox" id="check"></input>
			<label for="check">ClickedyClick</label>
		</span>
	);
};
export default Checkbox;
