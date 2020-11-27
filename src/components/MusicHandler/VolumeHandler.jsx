import React, { useContext } from "react"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"
import { makeStyles } from "@material-ui/core"
// Context
import MusicContext from "../../context/MusicContext"
const useStyles = makeStyles({
	volumeButton: {
		position: "fixed",
		zIndex: 99,
		padding: "10px",
		margin: "10px",
		backgroundColor: "rgba(0, 0, 0, .5)",
		borderRadius: "50%",
		border: "none",
	},
	volumeIcon: {
		color: "#ccc",
	},
})

export default function VolumeHandler() {
	const classes = useStyles()

	const { isPlaying, setIsMusicPlaying } = useContext(MusicContext)
	const handleMusic = () => {
		setIsMusicPlaying(!isPlaying)
	}

	return (
		<button onClick={handleMusic} className={classes.volumeButton}>
			{isPlaying ? (
				<VolumeUpIcon className={classes.volumeIcon} />
			) : (
				<VolumeOffIcon className={classes.volumeIcon} />
			)}
		</button>
	)
}
