import React, { useState } from "react"
// Components
import VolumeHandler from "../MusicHandler/VolumeHandler"
import MobileMenu from "../Menu/MobileMenuButton"
// Styles
import { makeStyles } from "@material-ui/core"
import { Link } from "react-router-dom"
// Context
const useStyles = makeStyles((theme) => ({
	navBar: {
		position: "fixed",
		top: 0,
		zIndex: 999,
		width: "100%",
		height: "80px",
		transition: "all .3s ease",
		backgroundColor: ({ isColored }) =>
			isColored ? `darkcyan` : `transparent`,
	},
	navTitle: {
		margin: 0,
		textAlign: "center",
		lineHeight: "80px",
		color: "#222",
		fontSize: "2em",
		display: "inline-Block",
		textDecoration: "none",
		width: "100%",
		fontWeight: "bold",
	},
}))

export default function NavBar() {
	const [isColored, setIsColored] = useState(false)
	const handleOpacityNav = (e) => {
		if (e.target.scrollingElement.scrollTop > 50) {
			setIsColored(true)
		} else {
			setIsColored(false)
		}
	}
	window.addEventListener("scroll", handleOpacityNav)

	const classes = useStyles({ isColored })
	return (
		<nav className={classes.navBar}>
			<VolumeHandler />
			{isColored ? (
				<Link to='/' className={classes.navTitle}>
					Barber Page
				</Link>
			) : null}
			<MobileMenu />
		</nav>
	)
}
