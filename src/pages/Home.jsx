import React from "react"
// Components
import Hero from "../components/ForPagesHero/Hero"
// Styles
import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
	sectionContainer: {
		margin: "20px 0",
		display: "flex",
		flexDirection: "column",
		"& h2": {
			backgroundColor: "#222",
			color: "darkcyan",
			minWidth: "50%",
			display: "inline-block",
			margin: "0 auto",
			textAlign: "center",
		},
		"& h3, p": {
			textAlign: "center",
		},
		"& h4": {
			textAlign: "center",
			margin: 0,
		},
	},
}))

export default function Home() {
	const classes = useStyles()
	return (
		<>
			<Hero
				bgImage='assets/images/barba1.jpg'
				firstspan='WE '
				title='DO IT '
				secondspan='FOR YOU'
			/>
			<section className={classes.sectionContainer}>
				<h2>What we do?</h2>
				<p>
					Since 2009 dolor sit amet consectetur adipisicing elit. Facilis
					voluptates repellendus ullam qui eum vel ad temporibus dicta non nulla
					delectus at, nisi quasi incidunt numquam placeat pariatur, dignissimos
					optio! Odio commodi, aliquam molestias nesciunt quisquam nam possimus
					dolorem blanditiis fuga quidem, debitis rem saepe nobis ex
					exercitationem modi animi.
				</p>
				<h4>- We are waiting for you! -</h4>
			</section>

			<section className={classes.sectionContainer}>
				<h2>Our Services</h2>
				<div>
					<h3>Corte</h3>
					<p>
						Clásico o moderno. Marcamos tendencia combinando máquinas y tijeras.
					</p>
				</div>
				<div>
					<h3>Barba</h3>
					<p>
						Afeitada tradicional o recorte de barba. Contamos con el servicio de
						toalla caliente.
					</p>
				</div>
				<div>
					<h3>Alisado</h3>
					<p>A veces es necesario. Date una vuelta y lo evaluamos.</p>
				</div>
				<div>
					<h3>Color</h3>
					<p>Las tendencias y los tonos cambian. Animate vos también.</p>
				</div>
				<div>
					<h3>Decoloracion</h3>
					<p>Encontrar el tono justo para tu estilo es nuestro objetivo.</p>
				</div>
				<div>
					<h3>Niños</h3>
					<p>
						El mini BACAN sabe lo que quiere, por eso atendemos sus antojos.
					</p>
				</div>
			</section>

			<section className={classes.sectionContainer}>
				<Hero title='slider' />
			</section>

			<div>
				<hr />
			</div>

			<section className={classes.sectionContainer}>
				<Hero title='gallery' />
			</section>

			<div>
				<hr />
			</div>

			<section className={classes.sectionContainer}>
				<h2>Subsidiary</h2>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
				<div>
					<h3>Branch Name</h3>
					<p>Location</p>
				</div>
			</section>

			<section className={classes.sectionContainer}>
				<h2>Socials</h2>
				<div>
					<p>icon</p>
				</div>
				<div>
					<p>icon</p>
				</div>
			</section>

			<section className={classes.sectionContainer}>
				<h2>Send us your consultation</h2>
				<form>
					<label htmlFor='name'>Name</label>
					<input type='text' placeholder='Your name...' />

					<label htmlFor='email'>Email</label>
					<input type='text' placeholder='Your email...' />

					<textarea
						name='query'
						id='query'
						placeholder='style= resize: none'
					></textarea>
				</form>
			</section>

			<section className={classes.sectionContainer}>
				<h2>FOOTER</h2>
			</section>
		</>
	)
}
