import React from "react";
import Card from "./card";
/**
 * ## Cards
 * 1. Reuse the card from the previous exercise
 * - Create a reusable component with these properties:
 *   - headline
 *   - description
 *   - image
 *
 * 2. Create a Responsive Grid with 5 cards
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */

const items = Array.from({ length: 5 }, () => {
	return {
		headline: "Dog",
		description: "Woof",
		image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
	};
});

const Exercise = () => {
	return (
		<div>
			{items.map((item) => {
				return (
					<Card headline={item.headline} description={item.headline} image={item.image} />
				);
			})}
		</div>
	);
};

export default Exercise;

// const items = Array.from({ length: 5 }, () => {
// 	return { headline: "Dog", description: "Woofle-woofle" };
// });

// const Card = (props) => {
// 	const [visible, setVisible] = React.useState(true); //[Boolean, Function]
// 	return (
// 		<div className="card">
// 			<img
// 				className="card__image"
// 				src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
// 				alt="This is a dawg"
// 			/>
// 			<div className="card__headline">
// 				<h3>{props.headline}</h3>
// 			</div>
// 			{visible ? <div className="class__description">{props.description}</div> : null}
// 			<div className="card__actions">
// 				<button
// 					onClick={() => {
// 						console.log("irgendwas rein");
// 						setVisible(!visible);
// 					}}
// 				>
// 					{visible ? "Hide" : "Show description"}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// const Exercise = () => {
// 	return (
// 		<div>
// 			{items.map((item) => {
// 				return <Card headline={item.headline} description={item.description}></Card>;
// 			})}
// 		</div>
// 	);
// };

// export default Exercise;
