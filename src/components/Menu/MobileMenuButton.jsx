import React, { useContext } from "react"
// Styles
import ClearIcon from "@material-ui/icons/Clear"
import MenuIcon from "@material-ui/icons/Menu"
import { makeStyles } from "@material-ui/core"
// Components
import MobileButton from "../ForPagesMobileButton/MobileButton"
import MobileMenuList from "./MobileMenuList"
// Context
import MenuContext from "../../context/MenuContext"

const useStyles = makeStyles({
	menuIcon: {
		color: "#ccc",
	},
})

export default function MobileMenu() {
	const { isOpen, setIsOpen } = useContext(MenuContext)

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
			<MobileMenuList />
		</>
	)
}
