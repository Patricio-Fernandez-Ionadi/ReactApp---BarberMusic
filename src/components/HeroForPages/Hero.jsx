import React from "react"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	hero: {
		width: "100%",
		height: "100vh",
		maxHeight: "100vh",
		backgroundImage: ({ bgImage }) => `url(${bgImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
	},
	contentContainer: {
		width: "100%",
		height: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	comercialHook: {
		color: "darkcyan",
		fontWeight: "bold",
		fontSize: "2em",
	},
	span: {
		color: "#ccc",
	},
}))

export default function Hero({ bgImage, title, firstspan, secondspan }) {
	const classes = useStyles({ bgImage })
	return (
		<div className={classes.hero}>
			<div className={classes.contentContainer}>
				<div className={classes.comercialHook}>
					<span className={classes.span}>{firstspan}</span>
					{title}
					<span className={classes.span}>{secondspan}</span>
				</div>
			</div>
		</div>
	)
}
