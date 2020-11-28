import React, { useState } from "react"
// Components
import MobileButton from "../ForPagesMobileButton/MobileButton"
// Styles
import LastPageIcon from "@material-ui/icons/LastPage"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	goTopIcon: {
		transform: "rotate(-90deg)",
		color: "#ccc",
	},
}))

export default function GoTopButton() {
	const [isActive, setIsActive] = useState(false)

	const showButton = (e) => {
		if (e.target.scrollingElement.scrollTop > 300) {
			setIsActive(true)
		} else {
			setIsActive(false)
		}
	}
	window.onscroll = showButton
	const scrollToTop = (duration) => {
		if (document.scrollingElement.scrollTop === 0) return

		const totalScrollDistance = document.scrollingElement.scrollTop
		let scrollY = totalScrollDistance
		let oldTimestamp = null

		function step(newTimestamp) {
			if (oldTimestamp !== null) {
				scrollY -=
					(totalScrollDistance * (newTimestamp - oldTimestamp)) / duration
				if (scrollY <= 0) return (document.scrollingElement.scrollTop = 0)
				document.scrollingElement.scrollTop = scrollY
			}
			oldTimestamp = newTimestamp
			window.requestAnimationFrame(step)
		}
		window.requestAnimationFrame(step)
	}
	const handleGoTop = () => {
		scrollToTop(500)
	}

	const classes = useStyles()
	return (
		<>
			{isActive ? (
				<MobileButton clickEvent={handleGoTop} bottom={20} right={20}>
					<LastPageIcon className={classes.goTopIcon} />
				</MobileButton>
			) : (
				<span></span>
			)}
		</>
	)
}
