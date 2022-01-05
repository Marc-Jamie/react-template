import React from "react";
import styles from "./style.modules.css";

//Create a React component

const Button = ({ children, className, ...props }) => {
	return (
		<button {...props} className={[styles.Button, className].join(" ")}>
			{children}
		</button>
	);
};

export default Button;
