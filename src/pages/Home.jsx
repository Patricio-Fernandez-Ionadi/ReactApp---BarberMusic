import React from "react"
import { Link } from "react-router-dom"
// Components
import Hero from "../components/ForPagesHero/Hero"
import Carousel from "../components/ForPagesCarousel/Carousel"
import MasonryGallery from "../components/ForPagesMasonryGallery/MasonryGallery"
import Form from "../components/ForPagesForm/Form"
// Styles
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import { Container, makeStyles } from "@material-ui/core"
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
		"& a": {
			textDecoration: "none",
			color: "#09f",
			textAlign: "center",
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

			<Container>
				<section className={classes.sectionContainer}>
					<h2>What we do?</h2>
					<p>
						Since 2009 dolor sit amet consectetur adipisicing elit. Facilis
						voluptates repellendus ullam qui eum vel ad temporibus dicta non
						nulla delectus at, nisi quasi incidunt numquam placeat pariatur,
						dignissimos optio! Odio commodi, aliquam molestias nesciunt quisquam
						nam possimus dolorem blanditiis fuga quidem, debitis rem saepe nobis
						ex exercitationem modi animi.
					</p>
					<h4>- We are waiting for you! -</h4>
					<Link to='/about'>See more about us...</Link>
				</section>

				<section className={classes.sectionContainer}>
					<h2>Our Services</h2>
					<div>
						<h3>Corte</h3>
						<p>
							Clásico o moderno. Marcamos tendencia combinando máquinas y
							tijeras.
						</p>
					</div>
					<div>
						<h3>Barba</h3>
						<p>
							Afeitada tradicional o recorte de barba. Contamos con el servicio
							de toalla caliente.
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
					<Link to='/services'>See more about our services...</Link>
				</section>

				<section className={classes.sectionContainer}>
					<Carousel
						images={[
							"/assets/images/prices1.jpg",
							"/assets/images/prices2.jpg",
							"/assets/images/prices3.jpg",
						]}
					/>
				</section>

				<div>
					<hr />
				</div>

				<section className={classes.sectionContainer}>
					<MasonryGallery
						images={[
							"/assets/images/gallery1.jpg",
							"/assets/images/gallery2.jpg",
							"/assets/images/gallery3.jpg",
							"/assets/images/gallery4.jpg",
							"/assets/images/gallery5.jpg",
							"/assets/images/gallery6.jpg",
						]}
					/>
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
					<Link to='/branches'>See more about our branches...</Link>
				</section>

				<section className={classes.sectionContainer}>
					<h2>Socials</h2>
					<div>
						<FacebookIcon />
					</div>
					<div>
						<InstagramIcon />
					</div>
				</section>

				<section className={classes.sectionContainer}>
					<Form />
				</section>
			</Container>

			<section className={classes.sectionContainer}>
				<h2>FOOTER</h2>
			</section>
		</>
	)
}
