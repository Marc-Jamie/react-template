import React from "react";
import styles from "./typography.modules.css";

//variant: Headline, Footnote
// const Typography = ({ children, className, variant, ...props }) => {
// 	return (
// 		<div {...props} className={[styles.Typography, styles[variant], className].join(" ")}>
// 			{children}
// 		</div>
// 	);
// };

//working
const tagNames = {
	h1: "h1",
	h2: "h2",
	sub1: "p",
	caption: "div",
	button1: "span",
	body1: "p",
};
const Typography = ({
	children,
	className,
	variant = "body1",
	component = tagNames[variant] ?? "span",
}) => {
	const Component = component;
	return <Component className={[className, styles[variant]].join(" ")}>{children}</Component>;
};
export default Typography;

// const variants = {
// 	headline: "h1",
// 	h2: "h2",
// 	h3: "h3",
// 	footnote: "p",
// };

// const Typography = ({ children, className, variant = "headline", element = variants[variant] }) => {
// 	const Element = element ?? "span";
// 	return <Element className={[className, styles[variant]].join(" ")}>{children}</Element>;
// };

// export default Typography;
