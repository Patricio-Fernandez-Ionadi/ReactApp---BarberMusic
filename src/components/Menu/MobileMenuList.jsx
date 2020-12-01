import React, { useContext, useState } from "react"
import MenuContext from "../../context/MenuContext"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	closed: {
		transition: "all .5s ease",
		clipPath: "circle(0% at 100% 0%)",
		width: "100%",
		minHeight: "100vh",
		position: "absolute",
	},
	opened: {
		width: "100%",
		minHeight: "100vh",
		backgroundColor: "darkcyan",
		transition: "all .5s ease",
		position: "absolute",
		top: 0,
		clipPath: "circle(150% at 100% 0%)",
	},
	linkList: {
		listStyle: "none",
		margin: 0,
		padding: 0,
		position: "relative",
		top: "100px",
		height: "calc(100vh - 100px)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		"& a": {
			textAlign: "center",
			fontSize: "2em",
			textDecoration: "none",
			color: "inherit",
		},
	},
}))

export default function MobileMenuList({ isopen }) {
	const classes = useStyles()

	const { isOpen, setIsOpen } = useContext(MenuContext)

	const [isActive, setIsActive] = useState()

	const handleMenu = (e) => {
		setIsOpen(false)
	}

	return (
		<div>
			<div
				className={
					isOpen ? `${classes.opened} ${classes.growed}` : `${classes.closed}`
				}
			>
				<ul className={classes.linkList}>
					<Link onClick={handleMenu} to='/' value='home'>
						Home
					</Link>
					<Link onClick={handleMenu} to='/about' value='about'>
						About Us
					</Link>
					<Link onClick={handleMenu} to='/services' value='services'>
						Our Services
					</Link>
					<Link onClick={handleMenu} to='/branches' value='branches'>
						Branches
					</Link>
					<Link onClick={handleMenu} to='/contact' value='contact'>
						Contact Us
					</Link>
				</ul>
			</div>
		</div>
	)
}
