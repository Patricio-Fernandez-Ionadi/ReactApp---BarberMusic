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
		transition: "all .3s ease",
		position: "relative",
		right: ({ currentPosition }) => `${currentPosition * 100}%`,
	},
	eachImage: {
		width: "100%",
		height: "100%",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		"&:nth-child(1)": {
			backgroundImage: ({ imgSlider }) => `url(${imgSlider[0]})`,
		},
		"&:nth-child(2)": {
			backgroundImage: ({ imgSlider }) => `url(${imgSlider[1]})`,
		},
		"&:nth-child(3)": {
			backgroundImage: ({ imgSlider }) => `url(${imgSlider[2]})`,
		},
		"&:nth-child(4)": {
			backgroundImage: ({ imgSlider }) => `url(${imgSlider[3]})`,
		},
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
					<div key={each} className={classes.eachImage}></div>
				))}
			</div>
		</div>
	)
}
