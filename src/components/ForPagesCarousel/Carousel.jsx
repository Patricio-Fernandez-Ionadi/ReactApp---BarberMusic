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
		transition: ({ imgSlider, currentPosition }) =>
			currentPosition === imgSlider.length || currentPosition === 0
				? `none`
				: `all 1s ease`,
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
				maxImages: "no-max-images",
				minImages: 1,
			},
		})
	}

	useEffect(() => {
		imgSlider.push(imgSlider[0])
	}, [])

	useEffect(() => {
		setTimeout(() => {
			if (currentPosition >= imgSlider.length - 1) {
				setCurrentPosition(0)
			} else {
				setCurrentPosition(currentPosition + 1)
			}
		}, 2000)
	}, [currentPosition, imgSlider.length])

	const classes = useStyles({ imgSlider, currentPosition })

	return (
		<div className={classes.mainContainer}>
			<div className={classes.imgContainer}>
				{imgSlider.map((each) => (
					<div
						key={each}
						className={classes.eachImage}
						style={{ backgroundImage: `url(${each})` }}
					></div>
				))}
			</div>
		</div>
	)
}
