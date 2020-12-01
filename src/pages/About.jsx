import React from "react"
import Hero from "../components/ForPagesHero/Hero"
// Styles
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	overlay: {
		width: "100%",
		height: "100vh",
		background: "linear-gradient(to bottom, #000, transparent)",
		position: "absolute",
		top: 0,
	},
	history: {
		position: "relative",
		top: "-40vh",
	},
}))

export default function About() {
	const classes = useStyles()
	return (
		<div>
			<div className={classes.overlay}></div>
			<Hero bgImage='/assets/images/aboutHero.jpg' />
			<section className={classes.history}>
				<h2>Our History</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
					harum, sapiente eveniet a officia corporis temporibus sed asperiores
					neque! Omnis, officiis est quae eaque reiciendis natus voluptas
					accusamus nulla consectetur veritatis doloribus rerum? Est ab facilis
					illum, quasi maiores qui autem exercitationem molestiae alias deserunt
					at inventore facere reprehenderit? Necessitatibus laudantium
					doloremque est maiores ipsam recusandae reiciendis temporibus,
					repellendus magni vel quae deserunt magnam facilis obcaecati eius?
					Error tempore molestias veniam ipsam vero officia natus repellat
					blanditiis labore aspernatur praesentium quis asperiores, aliquam
					repudiandae sed corrupti cum minima, necessitatibus vitae illo
					quisquam harum velit facere. Quam nisi voluptatem quasi nostrum.
				</p>
			</section>
		</div>
	)
}
