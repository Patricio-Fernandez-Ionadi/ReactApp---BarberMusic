import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	coloblue: {
		color: "blue",
		transition: "all .5s ease",
	},
	colored: {
		width: "100%",
		height: "100vh",
		maxHeight: "100vh",
		backgroundColor: "darkcyan",
		color: "red",
		transition: "all .5s ease",
		zIndex: 99,
		position: "fixed",
		overflow: "hidden",
	},
	growed: {
		fontSize: "5em",
	},
}))

export default function MobileMenuList({ isopen }) {
	const classes = useStyles()
	console.log(isopen)

	return (
		<div>
			{/* <div
				className={
					isopen
						? `${classes.colored} ${classes.growed}`
						: `${classes.coloblue}`
				}
			>
				HOLA
			</div> */}
		</div>
	)
}
