import React from "react";

const Card = (props) => {
	const [visible, setVisible] = React.useState(true); //[Boolean, Function]
	return (
		<div className="card">
			<img className="card__image" src={props.image} alt="This is a dawg" />
			<div className="card__headline">
				<h3>{props.headline}</h3>
			</div>
			{visible ? (
				<div className="class__description">
					<p>{props.description}</p>
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

export default Card;
