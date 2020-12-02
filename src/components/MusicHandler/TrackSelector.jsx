import React, { useContext, useState } from "react"
import MusicContext from "../../context/MusicContext"
import { makeStyles } from "@material-ui/core"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

const useStyles = makeStyles((theme) => ({
	trackSelectorContainer: {
		margin: 0,
		padding: 0,
		position: "absolute",
		top: "20px",
		left: "50%",
		width: "50%",
		transform: "translate(-50%, -80px)",
		listStyle: "none",
		opacity: 0,
		transition: "all .3s ease",
		zIndex: 999,
	},
	showTrackSelector: {
		transform: "translate(-50%, 0)",
		opacity: 1,
	},
	trackLabel: {
		width: "100%",
		textAlign: "center",
		marginBottom: "5px",
		color: "#ccc",
		border: "1px solid #ccc",
		borderRadius: "3px",
		cursor: "pointer",
		transition: "background-color .2s ease",
		"&:hover": {
			backgroundColor: "rgba(204, 204, 204, .5)",
		},
	},
	trackListOppener: {
		position: "absolute",
		left: "50%",
		top: "35px",
		transform: "translateX(-50%)",
		background: "none",
		border: "none",
		color: "#ccc",
		transition: "all .3s ease",
		zIndex: 999,
		"& p": {
			margin: 0,
		},
	},
	openedTrackSelector: {
		top: "80px",
	},
}))

export default function TrackSelector() {
	const { setIsMusicPlaying, setTrackSelected, trackSelected } = useContext(
		MusicContext
	)
	const [canSelectTrack, setCanSelectTrack] = useState(false)
	const classes = useStyles({ trackSelected })

	const handleTrackSelected = (e) => {
		setTrackSelected(e.target.value)
		setIsMusicPlaying(true)
		setCanSelectTrack(!canSelectTrack)
	}
	const handleSelectList = () => {
		setCanSelectTrack(!canSelectTrack)
	}

	return (
		<>
			<button
				onClick={handleSelectList}
				className={
					canSelectTrack
						? `${classes.trackListOppener} ${classes.openedTrackSelector}`
						: `${classes.trackListOppener}`
				}
			>
				{canSelectTrack ? (
					<KeyboardArrowUpIcon />
				) : (
					<>
						<p>Choose the track</p>
						<KeyboardArrowDownIcon />
					</>
				)}
			</button>
			<ul
				className={
					canSelectTrack
						? `${classes.trackSelectorContainer} ${classes.showTrackSelector}`
						: `${classes.trackSelectorContainer}`
				}
			>
				<li
					className={classes.trackLabel}
					onClick={handleTrackSelected}
					value={1}
				>
					{trackSelected === 1 ? `IkuD - Selected` : `IkuD`}
				</li>
				<li
					className={classes.trackLabel}
					onClick={handleTrackSelected}
					value={2}
				>
					{trackSelected === 2 ? `Lealtad - Selected` : `Lealtad`}
				</li>
			</ul>
		</>
	)
}
