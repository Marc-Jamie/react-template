import React from "react";
import styles from "./typography.modules.css";

//variant: Headline, Footnote
const Typography = ({ children, className, variant, ...props }) => {
	return (
		<div {...props} className={[styles.Typography, styles[variant], className].join(" ")}>
			{children}
		</div>
	);
};
export default Typography;
