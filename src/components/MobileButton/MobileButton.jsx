import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
	mobileButton: {
		position: "fixed",
		top: ({ top }) => `${top}px`,
		left: ({ left }) => `${left}px`,
		bottom: ({ bottom }) => `${bottom}px`,
		right: ({ right }) => `${right}px`,
		zIndex: 99,
		padding: "10px",
		backgroundColor: "rgba(0, 0, 0, .5)",
		borderRadius: "50%",
		border: "none",
	},
})

export default function MobileButton({
	children,
	top,
	left,
	bottom,
	right,
	clickEvent,
}) {
	const classes = useStyles({ top, left, bottom, right })
	return (
		<button className={classes.mobileButton} onClick={clickEvent}>
			{children}
		</button>
	)
}
