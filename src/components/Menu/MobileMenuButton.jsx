import React, { useState } from "react"
import MenuIcon from "@material-ui/icons/Menu"
// Styles
import MobileButton from "../ForPagesMobileButton/MobileButton"
import ClearIcon from "@material-ui/icons/Clear"
import { makeStyles } from "@material-ui/core"
// Components
import MobileMenuList from "./MobileMenuList"

const useStyles = makeStyles({
	menuIcon: {
		color: "#ccc",
		zIndex: 20,
	},
})

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const handleMenu = () => {
		setIsOpen(!isOpen)
	}

	const classes = useStyles()
	return (
		<>
			<MobileButton right={20} top={20} clickEvent={handleMenu}>
				{isOpen ? (
					<ClearIcon className={classes.menuIcon} />
				) : (
					<MenuIcon className={classes.menuIcon} />
				)}
			</MobileButton>
			{isOpen ? <MobileMenuList /> : null}
		</>
	)
}
