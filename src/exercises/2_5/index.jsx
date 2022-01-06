import React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import Checkbox from "../components/Checkbox";

/**
 * ## Reusable components
 * 1. Make a reusable Button component
 * 2. Make a reusable Typography component
 * 3. Make a reusable Checkbox component
 * 4. Make a reusable List and ListItem component
 */
const Exercise = () => {
	return (
		<span>
			<Checkbox></Checkbox>
			<Typography variant="h1">TestTypo</Typography>
			<Button className={"irgendwas"} aria-label={"gelb"}>
				click me
			</Button>
			{React.createElement(Button, { className: "Hallo", "aria-label": "blau" }, "rot")}
		</span>
	);
};

export default Exercise;
