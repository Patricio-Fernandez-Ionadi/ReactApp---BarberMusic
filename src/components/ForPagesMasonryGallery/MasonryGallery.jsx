import React, {createElement, useRef, useState} from 'react'
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({

	masonryLayout: {
		width: "1200px",
		maxWidth: "100%",
		backgroundColor: "darkcyan",
		columns: 1,
		padding: "5px",
		columnGap: "5px",
		[theme.breakpoints.up('sm')]:{
			columns: 2
		},
		[theme.breakpoints.up('md')]:{
			columns: 4
		},
		[theme.breakpoints.up('lg')]:{
			columns: 5
		}
	},
	masonryBox:{
		width: "100%",
		margin: "0 0 5px",
		overflow: "hidden",
		breakInside: "avoid"
	},
	eachImage: {
		maxWidth: "100%",
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
			min_images: "recommended 5",
		}
		console.log(PROPS_EXPECTED)
	}
	const imagesToUse = images || []
	const classes = useStyles()

	return (
		<div className={classes.masonryLayout}>
				{imagesToUse.map((each) => (
					<div className={classes.masonryBox}>
						<img
							key={each}
							alt='GalleryPicture'
							className={classes.eachImage}
							src={each}
						/>
					</div>
				
				))}
		</div>
	)
}
