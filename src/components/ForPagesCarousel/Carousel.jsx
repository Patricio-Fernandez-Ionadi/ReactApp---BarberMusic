import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		width: "100%",
		height: "70vh",
		overflow: "hidden",
	},
	imgContainer: {
		width: ({ imgSlider }) => `${imgSlider.length * 100}%`,
		height: "100%",
		display: "flex",
		transition: "all .15s ease",
		position: "relative",
		zIndex: "-1",
		right: ({ currentPosition }) => `${currentPosition * 100}%`,
	},
	eachImage: {
		width: "100%",
		height: "100%",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
}))

export default function Carousel({ images, expectedprops }) {
	const imgSlider = images || []
	const [currentPosition, setCurrentPosition] = useState(0)
	if (expectedprops) {
		console.log("Carousel", {
			images: {
				format: ["string"],
				maxImages: 3,
			},
		})
	}

	useEffect(() => {
		setTimeout(() => {
			if (currentPosition >= imgSlider.length - 1) {
				setCurrentPosition(0)
			} else {
				setCurrentPosition(currentPosition + 1)
			}
		}, 2000)
	}, [currentPosition])

	const classes = useStyles({ imgSlider, currentPosition })

	return (
		<div className={classes.mainContainer}>
			<div className={classes.imgContainer}>
				{imgSlider.map((each) => (
					<div
						key={each}
						className={classes.eachImage}
						style={{ "background-image": `url(${each})` }}
					></div>
				))}
			</div>
		</div>
	)
}
