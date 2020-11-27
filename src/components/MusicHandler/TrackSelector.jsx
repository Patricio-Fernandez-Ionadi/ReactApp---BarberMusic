import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core"
import MusicContext from "../../context/MusicContext"

const useStyles = makeStyles((theme) => ({
	trackSelectorContainer: {
		backgroundColor: "green",
		margin: 0,
		padding: 0,
		position: "absolute",
		top: "20px",
		left: "50%",
		width: "50%",
		transform: "translateX(-50%)",
		listStyle: "none",
	},
	trackLabel: {
		width: "100%",
		textAlign: "center",
	},
}))

export default function TrackSelector() {
	const classes = useStyles()
	const { isPlaying, setIsMusicPlaying } = useContext(MusicContext)
	console.log(isPlaying)
	return (
		<>
			<ul className={classes.trackSelectorContainer}>
				<li className={classes.trackLabel}>Hardcore</li>
				<li className={classes.trackLabel}>Relax</li>
			</ul>
		</>
	)
}
