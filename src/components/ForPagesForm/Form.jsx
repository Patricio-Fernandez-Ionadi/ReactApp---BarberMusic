import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	formComponent: {
		display: "flex",
		flexDirection: "column",
		height: "80vh",
		width: "100%",
		padding: "20px",
		boxSizing: "border-box",
		justifyContent: "space-around",
	},
	inputsContainer: {
		height: "60px",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		position: "relative",
		marginBottom: "10px",
		"&::before": {
			content: '""',
			display: "block",
			width: "100%",
			height: "2px",
			backgroundColor: "#222",
			zIndex: "20",
			position: "absolute",
			bottom: "10px",
			left: 0,
		},
	},
	inputLabel: {
		height: "50px",
		position: "absolute",
		left: "20px",
		lineHeight: "50px",
		color: "#777",
	},
	inputInput: {
		height: "50px",
		border: "none",
		paddingLeft: "20px",
		fontSize: "1.2em",
		color: "#222",
		outline: "none",
	},
	textAreaContainer: {
		flex: 1,
		position: "relative",
	},
	textAreaLabel: {
		position: "absolute",
		color: "#777",
	},
	textAreaInput: {
		resize: "none",
		width: "100%",
		height: "100%",
		outline: "none",
		paddingLeft: "20px",
		boxSizing: "border-box",
		fontSize: "1.2em",
		color: "#222",
		fontFamily:
			"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
	},
}))

export default function Form() {
	const classes = useStyles()
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")

	const handleChange = (e) => {
		if (e.target.name === "email") setEmail(e.target.value)
		if (e.target.name === "name") setName(e.target.value)
		if (e.target.name === "query") setMessage(e.target.value)
	}

	return (
		<>
			<h2>Send us your consultation</h2>
			<form className={classes.formComponent}>
				<div className={classes.inputsContainer}>
					{name === "" ? (
						<label className={classes.inputLabel} htmlFor='name'>
							Name...
						</label>
					) : null}
					<input
						onChange={handleChange}
						className={classes.inputInput}
						type='text'
						name='name'
					/>
				</div>

				<div className={classes.inputsContainer}>
					{email === "" ? (
						<label className={classes.inputLabel} htmlFor='email'>
							Email...
						</label>
					) : null}
					<input
						onChange={handleChange}
						className={classes.inputInput}
						type='email'
						name='email'
					/>
				</div>

				<div className={classes.textAreaContainer}>
					{message === "" ? (
						<label className={classes.textAreaLabel} htmlFor='query'>
							Message...
						</label>
					) : null}
					<textarea
						onChange={handleChange}
						className={classes.textAreaInput}
						name='query'
						id='query'
					/>
				</div>
			</form>
		</>
	)
}
