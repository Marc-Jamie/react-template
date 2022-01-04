import React from "react";
import "./styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [visible, setVisible] = React.useState(true); //[Boolean, Function]
	return (
		<div className="card">
			<img
				className="card__image"
				src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
				alt="This is a dawg"
			/>
			<div className="card__headline">
				<h3 className="">- Dog</h3>
			</div>
			{visible ? (
				<div className="class__description">
					<p>"woof, woof"</p>
				</div>
			) : null}
			<div className="card__actions">
				<button
					onClick={() => {
						console.log("irgendwas rein");
						setVisible(!visible);
					}}
				>
					{visible ? "Hide" : "Show description"}
				</button>
			</div>
		</div>
	);
};

export default Exercise;
