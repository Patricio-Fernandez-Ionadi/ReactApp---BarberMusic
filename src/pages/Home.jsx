import React from "react"
// Components
import Hero from "../components/ForPagesHero/Hero"

export default function Home() {
	return (
		<>
			<Hero
				bgImage='assets/images/barba1.jpg'
				firstspan='WE '
				title='DO IT '
				secondspan='FOR YOU'
			/>
			<section>
				<h2>What we do?</h2>
				<p>
					Since 2009 dolor sit amet consectetur adipisicing elit. Facilis
					voluptates repellendus ullam qui eum vel ad temporibus dicta non nulla
					delectus at, nisi quasi incidunt numquam placeat pariatur, dignissimos
					optio! Odio commodi, aliquam molestias nesciunt quisquam nam possimus
					dolorem blanditiis fuga quidem, debitis rem saepe nobis ex
					exercitationem modi animi.
				</p>
				<h3>- We are waiting for you! -</h3>
			</section>

			<section>
				<h2>Our Services</h2>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
				<div>
					<h3>Service</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
						explicabo quos, recusandae optio adipisci ullam.
					</p>
				</div>
			</section>

			<section>
				<Hero title='slider' />
			</section>

			<div>
				<hr />
			</div>

			<section>
				<Hero title='gallery' />
			</section>

			<div>
				<hr />
			</div>

			<section>
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

			<section>
				<h2>Socials</h2>
				<div>
					<p>icon</p>
				</div>
				<div>
					<p>icon</p>
				</div>
			</section>

			<section>
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

			<section>
				<h2>FOOTER</h2>
			</section>
		</>
	)
}
