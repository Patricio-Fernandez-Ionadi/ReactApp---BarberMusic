import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	mainContainer: {
		width: "100%",
		height: ({ imagesToUse }) => `${imagesToUse.length * 100}vh`,
	},
	galleryContainer: {
		width: "100%",
		height: "100%",
		display: "grid",
		gridTemplateRows: ({ imagesToUse }) => `repeat(${imagesToUse.length}, 1fr)`,
		gap: "10px",
		[theme.breakpoints.up("sm")]: {
			gridTemplateColumns: "repeat(2, 1fr)",
		},
	},
	eachImage: {
		width: "100%",
		display: "inline-block",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
}))

export default function MasonryGallery({ images, expectedprops }) {
	if (expectedprops) {
		const PROPS_EXPECTED = {
			props: {
				images: [],
			},
			type: [],
			format: "ruta de imagen",
			max_images: "no-max-images",
			min_images: "recomended 5",
		}
		console.log(PROPS_EXPECTED)
	}
	const imagesToUse = images || []
	const classes = useStyles({ imagesToUse })
	console.log(imagesToUse.length)

	return (
		<div className={classes.mainContainer}>
			<div className={classes.galleryContainer}>
				{imagesToUse.map((each) => (
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
