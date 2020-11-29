import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	openMenu: {
		width: "100vw",
		height: "100vh",
		maxHeight: "100vh",
		backgroundColor: "darkcyan",
		overflow: "hidden",
		position: "absolute",
	},
}))

export default function MobileMenuList() {
	const classes = useStyles()
	return <div>{/* <div className={classes.openMenu}></div> */}</div>
}
