import React, { useContext } from "react"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"
import { makeStyles } from "@material-ui/core"
// Context
import MusicContext from "../../context/MusicContext"
import MobileButton from "../ForPagesMobileButton/MobileButton"
const useStyles = makeStyles({
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
		<MobileButton clickEvent={handleMusic} top={20} left={20}>
			{isPlaying ? (
				<VolumeUpIcon className={classes.volumeIcon} />
			) : (
				<VolumeOffIcon className={classes.volumeIcon} />
			)}
		</MobileButton>
	)
}
