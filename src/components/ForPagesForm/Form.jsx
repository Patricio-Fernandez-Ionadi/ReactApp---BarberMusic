import React from 'react'
import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles(theme => ({
	formComponent:{
		display: "flex",
		flexDirection: "column",
		height: "80vh",
		width: "100%",
		padding: "20px",
		boxSizing: "border-box",
		justifyContent: "space-around",
	},
	inputsContainer:{
		height: "60px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: "yellow",
		position: "relative",
		marginBottom: "10px",
		"&$after":{
			content: "",
			width :"100%",
			height: "10px",
			backgroundColor: "red",
			zIndex:"20",
		}
	},
	inputLabel:{
		height: "50px",
		position: "absolute",
		lineHeight: "50px"
	},
	inputInput:{
		height: "50px",
		border: "none",
	},
	textAreaContainer:{
		flex: 1,
		position: "relative",
	},
	textAreaLabel:{
		position: "absolute"
	},
	textAreaInput:{
		resize: "none",
		width: "100%",
		height: "100%"
	}
}))

export default function Form() {
	const classes = useStyles()
	return (
			<>
				<h2>Send us your consultation</h2>
				<form className={classes.formComponent}>
					<div className={classes.inputsContainer}>
						<label className={classes.inputLabel} htmlFor='name'>Name...</label>
						<input className={classes.inputInput} type='text'  />
					</div>
					
					<div className={classes.inputsContainer}>
						<label className={classes.inputLabel} htmlFor='email'>Email...</label>
						<input className={classes.inputInput} type='email'  />
					</div>
					
					<div className={classes.textAreaContainer}>
						<label className={classes.textAreaLabel} htmlFor="query">Message...</label>
						<textarea className={classes.textAreaInput}
											name='query'
											id='query'
						/>
					</div>
				</form>
			</>
	)
}
