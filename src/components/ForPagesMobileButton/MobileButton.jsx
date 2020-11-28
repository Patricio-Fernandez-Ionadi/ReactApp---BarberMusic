import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	mobileButton: {
		position: "fixed",
		top: ({ top }) => `${top}px`,
		left: ({ left }) => `${left}px`,
		bottom: ({ bottom }) => `${bottom}px`,
		right: ({ right }) => `${right}px`,
		zIndex: 10,
		padding: "10px",
		backgroundColor: "rgba(0, 0, 0, .5)",
		borderRadius: "50%",
		border: "none",
		cursor: "pointer",
	},
})

export default function MobileButton({
	children,
	top,
	left,
	bottom,
	right,
	clickEvent,
	expectedprops,
}) {
	const classes = useStyles({ top, left, bottom, right })
	if (expectedprops) {
		console.log("MobileButton", {
			children: "jsx component",
			top: {
				type: "number",
				format: "pixels",
				desc: "Pixels from top",
			},
			left: {
				type: "number",
				format: "pixels",
				desc: "Pixels from left",
			},
			bottom: {
				type: "number",
				format: "pixels",
				desc: "Pixels from bottom",
			},
			right: {
				type: "number",
				format: "pixels",
				desc: "Pixels from right",
			},
		})
	}
	return (
		<button className={classes.mobileButton} onClick={clickEvent}>
			{children}
		</button>
	)
}
